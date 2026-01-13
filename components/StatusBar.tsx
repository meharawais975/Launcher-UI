
import React from 'react';

interface StatusBarProps {
  time: string;
  battery: number;
  onPullDown: () => void;
  activeAppName?: string | null;
}

const StatusBar: React.FC<StatusBarProps> = ({ time, battery, onPullDown, activeAppName }) => {
  return (
    <div 
      className="w-full h-10 flex items-center justify-between px-6 z-50 text-[13px] font-medium"
      style={{ paddingTop: 'env(safe-area-inset-top, 4px)' }}
    >
      <div className="flex items-center gap-2">
        <span>{time.split(' ')[0]}</span>
      </div>

      {/* Dynamic Notification Pill */}
      <div 
        className="bg-black/80 px-4 py-1.5 rounded-full flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
        onClick={onPullDown}
      >
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        <span className="text-[10px] text-white/90 font-bold uppercase tracking-widest">
            {activeAppName || 'One UI 7'}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C7.3 3 3.1 4.9 0 8l12 13L24 8c-3.1-3.1-7.3-5-12-5z"/>
        </svg>
        <div className="flex items-center gap-0.5">
            <span className="text-[11px] font-bold">{battery}%</span>
            <div className="w-6 h-3 border border-white/40 rounded-[2px] p-[1px] ml-1">
                <div className="h-full bg-white rounded-[0.5px]" style={{ width: `${battery}%` }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
