
import React from 'react';
import { AppID, Rect } from '../types';
import { APPS } from '../constants';

interface HomeProps {
  onAppOpen: (id: AppID, rect: Rect) => void;
  onSwipeUp: () => void;
}

const Home: React.FC<HomeProps> = ({ onAppOpen, onSwipeUp }) => {
  const mainApps = APPS.slice(0, 4);
  const secondaryApps = APPS.slice(8, 12);
  const dockApps = [
    APPS.find(a => a.id === 'phone')!,
    APPS.find(a => a.id === 'messages')!,
    APPS.find(a => a.id === 'browser')!,
    APPS.find(a => a.id === 'camera')!
  ];

  const handleAppClick = (e: React.MouseEvent, id: AppID) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    onAppOpen(id, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
  };

  return (
    <div 
      className="h-full w-full flex flex-col justify-between py-12 px-6"
      onTouchStart={(e) => {
        const startY = e.touches[0].clientY;
        const handler = (ev: TouchEvent) => {
          if (startY - ev.touches[0].clientY > 80) {
            onSwipeUp();
            window.removeEventListener('touchmove', handler);
          }
        };
        window.addEventListener('touchmove', handler);
      }}
    >
      <div className="flex flex-col items-start mt-8 ml-4">
        <h1 className="text-[64px] font-light leading-none text-white tracking-tight">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </h1>
        <h2 className="text-[14px] font-medium text-white/90 mt-2">
            {new Date().toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
        </h2>
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-4 gap-y-10 mt-12 px-2">
          {[...mainApps, ...secondaryApps].map(app => (
            <div 
              key={app.id} 
              className="flex flex-col items-center gap-2 group cursor-pointer"
              onClick={(e) => handleAppClick(e, app.id)}
            >
              <div className={`${app.color} w-[60px] h-[60px] samsung-icon flex items-center justify-center transition-transform active:scale-90 shadow-xl`}>
                <svg className="w-8 h-8 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={app.icon} />
                </svg>
              </div>
              <span className="text-[11px] font-medium text-white/95 text-center leading-tight truncate w-full px-1">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-2 mb-10">
        <div 
          className="w-full bg-white/20 backdrop-blur-3xl rounded-full h-12 flex items-center px-5 gap-3 border border-white/10 shadow-lg active:scale-95 transition-transform"
          onClick={onSwipeUp}
        >
          <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          <span className="text-white/60 text-sm font-medium">Search apps and settings</span>
        </div>
      </div>

      <div className="h-[100px] w-full flex items-center justify-around px-4 mb-2">
        {dockApps.map(app => (
          <div 
            key={app.id} 
            className="flex flex-col items-center cursor-pointer active:scale-90 transition-transform"
            onClick={(e) => handleAppClick(e, app.id)}
          >
            <div className={`${app.color} w-[58px] h-[58px] samsung-icon flex items-center justify-center shadow-lg border border-white/10`}>
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d={app.icon} />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
