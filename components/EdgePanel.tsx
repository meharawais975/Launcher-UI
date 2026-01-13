
import React, { useState } from 'react';
import { AppID, Rect } from '../types';
import { APPS } from '../constants';

interface EdgePanelProps {
  onAppOpen: (id: AppID, rect: Rect) => void;
}

const EdgePanel: React.FC<EdgePanelProps> = ({ onAppOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const frequentApps = APPS.slice(0, 5);

  const handleAppClick = (e: React.MouseEvent, id: AppID) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    onAppOpen(id, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Edge Handle */}
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-l-full z-[100] cursor-pointer transition-all active:scale-x-150"
        onClick={() => setIsOpen(true)}
      />

      {/* Edge Panel Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[200] flex justify-end animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-24 h-full glass-dark-oneui border-l border-white/10 flex flex-col items-center py-20 gap-8 animate-slide-left shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest vertical-text rotate-180 mb-4">Apps</div>
            
            {frequentApps.map(app => (
              <div 
                key={app.id} 
                className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform"
                onClick={(e) => handleAppClick(e, app.id)}
              >
                <div className={`${app.color} w-12 h-12 samsung-icon flex items-center justify-center shadow-lg`}>
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d={app.icon} />
                  </svg>
                </div>
              </div>
            ))}

            <div className="mt-auto mb-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EdgePanel;
