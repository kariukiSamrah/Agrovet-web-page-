import React from 'react';
import { WifiOff, Phone, Check, RefreshCw } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { BUSINESS_INFO } from '../data/business';

export const OfflineBanner: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-amber-900 text-amber-50 px-4 py-2.5 text-xs border-b border-amber-800 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-full bg-amber-800 text-amber-200">
            <WifiOff className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="font-bold">Offline Mode Active: </span>
            <span className="text-amber-100">
              You are disconnected from the internet, but all farm products, dosage guides, and store details are fully available offline.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-800 hover:bg-amber-700 text-white font-semibold rounded text-[11px] transition-colors"
          >
            <Phone className="w-3 h-3 text-amber-300" />
            <span>Cellular Call: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
