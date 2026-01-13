
import React from 'react';

interface QuickSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onWallpaperChange: () => void;
}

const QuickSettings: React.FC<QuickSettingsProps> = ({ isOpen, onClose, onWallpaperChange }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute inset-0 z-[200] animate-fade-in flex flex-col p-6 pt-12 glass-dark-oneui"
      onClick={onClose}
    >
      <div className="w-full flex flex-col gap-6 mt-4" onClick={e => e.stopPropagation()}>
        {/* Top Toggles (Wi-Fi, Bluetooth) */}
        <div className="grid grid-cols-2 gap-4">
            <div className="glass-oneui rounded-[28px] p-5 flex items-center gap-4 h-24">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
                </div>
                <div>
                    <div className="text-white font-bold text-sm">Wi-Fi</div>
                    <div className="text-white/60 text-xs">On</div>
                </div>
            </div>
            <div className="glass-oneui rounded-[28px] p-5 flex items-center gap-4 h-24">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7l10 10-5 5V2l5 5L7 17"/></svg>
                </div>
                <div>
                    <div className="text-white font-bold text-sm">Bluetooth</div>
                    <div className="text-white/60 text-xs">Connected</div>
                </div>
            </div>
        </div>

        {/* Small Toggles Grid */}
        <div className="glass-oneui rounded-[32px] p-6 grid grid-cols-4 gap-y-6 gap-x-2">
            {[
                { name: 'Flashlight', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
                { name: 'Sound', icon: 'M11 5L6 9H2v6h4l5 4V5z' },
                { name: 'Rotate', icon: 'M23 4v6h-6M1 20v-6h6' },
                { name: 'Flight', icon: 'M22 16.24V14l-7-4V3.5a1.5 1.5 0 0 0-3 0V10l-7 4v2.24l7-2.24V19l-2 1.5V22l4-1 4 1v-1.5l-2-1.5v-5l7 2.24z' },
                { name: 'DND', icon: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12h8' },
                { name: 'Night', icon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' },
                { name: 'Hotspot', icon: 'M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0' },
                { name: 'NFC', icon: 'M4 4h16v16H4z' }
            ].map((toggle, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${i < 3 ? 'bg-white/20' : 'bg-white/10'}`}>
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={toggle.icon}/></svg>
                    </div>
                    <span className="text-[10px] text-white/70 font-medium">{toggle.name}</span>
                </div>
            ))}
        </div>

        {/* Brightness Slider */}
        <div className="glass-oneui rounded-[28px] p-5 flex items-center gap-4 h-20">
            <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/></svg>
            <div className="flex-1 h-2 bg-white/20 rounded-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-white rounded-full" />
            </div>
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/></svg>
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-4">
             <button onClick={onWallpaperChange} className="flex-1 glass-oneui py-4 rounded-[22px] text-sm font-bold text-white">Wallpaper</button>
             <button onClick={onClose} className="flex-1 glass-oneui py-4 rounded-[22px] text-sm font-bold text-white">Done</button>
        </div>
      </div>
    </div>
  );
};

export default QuickSettings;
