
import React, { useState } from 'react';
import { AppID, Rect } from '../types';
import { APPS } from '../constants';

interface AppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAppOpen: (id: AppID, rect: Rect) => void;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ isOpen, onClose, onAppOpen }) => {
  const [search, setSearch] = useState('');

  const filteredApps = APPS.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

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

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-20 flex flex-col p-6 animate-fade-in glass-dark-oneui">
      {/* Header spacing for Status Bar */}
      <div className="h-10 w-full" />

      <div className="w-full mt-4 flex items-center bg-white/10 backdrop-blur-3xl rounded-[24px] px-6 py-4 border border-white/10 shadow-xl">
        <svg className="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input 
          autoFocus
          className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder-white/40 text-[16px] font-medium"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-4 gap-y-10 mt-12 overflow-y-auto pb-12 scrollbar-hide">
        {filteredApps.map(app => (
          <div 
            key={app.id} 
            className="flex flex-col items-center gap-2.5 cursor-pointer group"
            onClick={(e) => handleAppClick(e, app.id)}
          >
            <div className={`${app.color} w-16 h-16 samsung-icon flex items-center justify-center shadow-lg transition duration-200 active:scale-90 group-hover:scale-105`}>
              <svg className="w-8 h-8 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={app.icon} />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-white/95 tracking-tight text-center px-1 leading-tight">{app.name}</span>
          </div>
        ))}
      </div>
      
      {/* Indicator to swipe down */}
      <div className="mt-auto flex justify-center pb-12">
        <button onClick={onClose} className="text-white/30 text-[11px] font-bold tracking-[0.2em] uppercase">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AppDrawer;
