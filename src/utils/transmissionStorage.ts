export interface InquiryTransmissionRecord {
  id: string;
  timestamp: string;
  sender: {
    name: string;
    email: string;
  };
  intent: string;
  message: string;
  recipient: string;
  status: 'DISPATCHED' | 'ACKNOWLEDGED' | 'FALLBACK_MAILTO';
  acknowledgment: {
    ackId: string;
    timestamp: string;
    sentTo: string;
    status: 'CONFIRMED';
    acknowledgmentText: string;
  };
}

const STORAGE_KEY = 'ABHINANDAN_TRANSMISSION_LEDGER_V1';

export const getStoredTransmissions = (): InquiryTransmissionRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load transmissions from localStorage:', err);
    return [];
  }
};

export const saveTransmission = (record: InquiryTransmissionRecord): void => {
  try {
    const existing = getStoredTransmissions();
    const updated = [record, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated, null, 2));
  } catch (err) {
    console.error('Failed to save transmission to localStorage:', err);
  }
};

export const clearStoredTransmissions = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear transmissions:', err);
  }
};

export const downloadTransmissionsAsJson = (): void => {
  try {
    const data = getStoredTransmissions();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inquiry_transmissions_ledger_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to download transmissions JSON:', err);
  }
};

// Expose on window for easy developer & admin access anytime via console
if (typeof window !== 'undefined') {
  (window as any).getInquiriesJSON = getStoredTransmissions;
  (window as any).downloadInquiriesJSON = downloadTransmissionsAsJson;
  (window as any).clearInquiriesJSON = clearStoredTransmissions;
}
