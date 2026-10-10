import React, { useState } from 'react';
import { Download, Share, X, CheckCircle2, Smartphone, Monitor } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'header' | 'banner' | 'menu';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'header' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedNotice, setInstalledNotice] = useState(false);

  // If already running as an installed PWA in standalone mode, hide
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstalledNotice(true);
        setTimeout(() => setInstalledNotice(false), 4000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  if (!isInstallable && !isIOS) {
    return null;
  }

  return (
    <>
      {variant === 'header' && (
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors cursor-pointer"
          title="Install app for offline access on PC or mobile phone"
        >
          <Download className="w-3.5 h-3.5 text-emerald-800" />
          <span className="hidden sm:inline">Install Offline App</span>
          <span className="sm:hidden">Install</span>
        </button>
      )}

      {variant === 'menu' && (
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-md text-emerald-900 bg-emerald-50 hover:bg-emerald-100 font-semibold text-sm transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-emerald-700" />
          <span>Install App (Works Offline on Phone & PC)</span>
        </button>
      )}

      {variant === 'banner' && (
        <div className="bg-emerald-900 text-white px-4 py-2 text-xs flex items-center justify-between gap-3 border-b border-emerald-800">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Install Nyeri Farmers Agrovet on your home screen or PC for instant offline farm catalog access!</span>
          </div>
          <button
            onClick={handleInstallClick}
            className="px-3 py-1 bg-white text-emerald-950 font-bold rounded-md hover:bg-emerald-50 transition-colors shrink-0 text-xs cursor-pointer"
          >
            Install Now
          </button>
        </div>
      )}

      {/* iOS Safari instructions modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-stone-200 text-stone-900">
            <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
                  N
                </div>
                <h3 className="text-base font-bold text-stone-900">Install on iPhone / iPad</h3>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              Install Nyeri Farmers Agrovet directly to your home screen for quick offline access even with weak field network coverage:
            </p>

            <ol className="space-y-3 text-xs text-stone-800 bg-stone-50 p-3.5 rounded-xl border border-stone-200 mb-5">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0 text-[10px]">
                  1
                </span>
                <span>
                  Tap the <strong>Share</strong> button <Share className="w-3.5 h-3.5 inline mx-0.5 text-blue-600" /> at the bottom or top of Safari.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0 text-[10px]">
                  2
                </span>
                <span>
                  Scroll down and tap <strong>"Add to Home Screen"</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0 text-[10px]">
                  3
                </span>
                <span>
                  Tap <strong>Add</strong> in the top-right corner.
                </span>
              </li>
            </ol>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full rounded-lg bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-900 transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      )}

      {/* Installed Confirmation Toast */}
      {installedNotice && (
        <div className="fixed bottom-20 left-4 z-50 flex items-center gap-2 bg-emerald-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>App installed successfully! Ready for offline use.</span>
        </div>
      )}
    </>
  );
};
