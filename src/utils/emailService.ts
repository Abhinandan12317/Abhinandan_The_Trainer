import emailjs from '@emailjs/browser';

export interface SendInquiryParams {
  name: string;
  email: string;
  intent: string;
  message: string;
  targetEmail: string;
  transmissionId: string;
  acknowledgmentId: string;
}

export interface SendInquiryResult {
  success: boolean;
  provider: 'emailjs' | 'formsubmit';
  autoReplySent: boolean;
  error?: string;
}

// Environment / config keys for EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';

export const isEmailJsConfigured = (): boolean => {
  return Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};

export const sendInquiry = async (params: SendInquiryParams): Promise<SendInquiryResult> => {
  const { name, email, intent, message, targetEmail, transmissionId, acknowledgmentId } = params;

  // 1. If EmailJS is configured, execute direct client-side transmission & auto-reply
  if (isEmailJsConfigured()) {
    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      const templateParams = {
        // Sender details
        from_name: name,
        name: name,
        user_name: name,
        from_email: email,
        email: email,
        user_email: email,
        reply_to: email,

        // Recipient details
        to_name: 'Abhinandan',
        to_email: targetEmail,

        // Transmission context
        title: intent,
        intent: intent,
        subject: `[Portfolio Inquiry] ${intent} — from ${name}`,
        message: message,
        notes: message,

        // IDs & Metadata
        transmission_id: transmissionId,
        acknowledgment_id: acknowledgmentId,
        date: currentDate,
        timestamp: new Date().toLocaleString(),
        website_link: 'https://abhinandan-r-k.vercel.app',
      };

      // 1. Primary Request Notification Email -> sent to Abhinandan (abhinandan4dev@gmail.com)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      let autoReplySent = false;

      // 2. Acknowledgment Auto-Reply Email -> sent to Submitter (email)
      // Only fires secondary dispatch if a dedicated auto-reply template is specified or distinct
      if (EMAILJS_AUTOREPLY_TEMPLATE_ID && EMAILJS_AUTOREPLY_TEMPLATE_ID !== EMAILJS_TEMPLATE_ID) {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
              ...templateParams,
              to_name: name,
              to_email: email, // Routes to requester
              reply_to: targetEmail,
            },
            EMAILJS_PUBLIC_KEY
          );
          autoReplySent = true;
        } catch (autoReplyErr) {
          console.warn('Auto-reply template dispatch failed (primary notification succeeded):', autoReplyErr);
        }
      } else {
        // If EmailJS has auto-reply configured in EmailJS dashboard settings
        autoReplySent = true;
      }

      return {
        success: true,
        provider: 'emailjs',
        autoReplySent,
      };
    } catch (err: any) {
      console.warn('EmailJS dispatch encountered error, falling back to FormSubmit gateway:', err);
    }
  }

  // 2. Fallback to FormSubmit AJAX endpoint
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        _replyto: email.trim(),
        _subject: `[Portfolio Inquiry] ${intent} — from ${name.trim()}`,
        intent: intent,
        message: message.trim(),
        transmission_id: transmissionId,
        acknowledgment_id: acknowledgmentId,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await response.json();

    if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
      return {
        success: true,
        provider: 'formsubmit',
        autoReplySent: false,
      };
    } else {
      return {
        success: false,
        provider: 'formsubmit',
        autoReplySent: false,
        error: data.message || 'Form submission failed',
      };
    }
  } catch (formSubmitErr: any) {
    return {
      success: false,
      provider: 'formsubmit',
      autoReplySent: false,
      error: formSubmitErr.message || 'Network error',
    };
  }
};
