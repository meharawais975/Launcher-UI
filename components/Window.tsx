
import React, { useState, useEffect, useMemo } from 'react';
import { AppID, Rect } from '../types';
import { APPS } from '../constants';
import AssistantApp from './Apps/Assistant';
import WeatherApp from './Apps/Weather';
import GalleryApp from './Apps/Gallery';
import CalculatorApp from './Apps/Calculator';
import SettingsApp from './Apps/Settings';
import CameraApp from './Apps/Camera';
import BrowserApp from './Apps/Browser';
import NotesApp from './Apps/Notes';
import PhoneApp from './Apps/Phone';
import MessagesApp from './Apps/Messages';
import ClockApp from './Apps/Clock';
import FilesApp from './Apps/Files';
import StoreApp from './Apps/Store';

interface WindowProps {
  appId: AppID;
  startRect: Rect | null;
  isClosing: boolean;
  onClose: () => void;
  onAnimationComplete: () => void;
}

const Window: React.FC<WindowProps> = ({ appId, startRect, isClosing, onClose, onAnimationComplete }) => {
  const app = APPS.find(a => a.id === appId);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isClosing) {
      setIsExpanded(false);
      const timer = setTimeout(onAnimationComplete, 600); 
      return () => clearTimeout(timer);
    }
  }, [isClosing, onAnimationComplete]);

  const style = useMemo(() => {
    if (!startRect) return { top: 0, left: 0, width: '100%', height: '100%', opacity: 1 };

    if (isExpanded) {
      return {
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        borderRadius: '0px',
        opacity: 1,
        transform: 'scale(1) translateY(0)',
        boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8)',
      };
    } else {
      return {
        top: startRect.top,
        left: startRect.left,
        width: startRect.width,
        height: startRect.height,
        borderRadius: '22.5%',
        opacity: isClosing ? 0 : 0.6,
        transform: isClosing ? 'scale(0.8) translateY(20px)' : 'scale(0.8) translateY(40px)',
        boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
      };
    }
  }, [isExpanded, startRect, isClosing]);

  const renderContent = () => {
    switch (appId) {
      case 'assistant': return <AssistantApp />;
      case 'weather': return <WeatherApp />;
      case 'gallery': return <GalleryApp />;
      case 'calculator': return <CalculatorApp />;
      case 'settings': return <SettingsApp />;
      case 'camera': return <CameraApp />;
      case 'browser': return <BrowserApp />;
      case 'notes': return <NotesApp />;
      case 'phone': return <PhoneApp />;
      case 'messages': return <MessagesApp />;
      case 'clock': return <ClockApp />;
      case 'files': return <FilesApp />;
      case 'playstore': return <StoreApp />;
      default: return (
        <div className="flex-1 flex flex-col items-center justify-center text-neutral-800 p-8 text-center bg-white h-full">
          <p className="text-2xl font-extrabold tracking-tight">Intelligence System</p>
          <p className="text-[14px] text-neutral-500 mt-3 font-medium opacity-80 leading-relaxed">Preparing your workspace with adaptive optimization...</p>
        </div>
      );
    }
  };

  return (
    <div 
      className="fixed z-50 flex flex-col glass-oneui overflow-hidden will-change-transform transition-all duration-[750ms] cubic-bezier(0.19, 1, 0.22, 1)"
      style={style}
    >
      <div 
        className={`h-16 flex items-end justify-between px-8 pb-3 transition-all duration-500 ${
          isExpanded && !isClosing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 12px)' }}
      >
        <div className="flex items-center gap-4">
            <div className={`w-9 h-9 samsung-icon ${app?.color} flex items-center justify-center shadow-lg border border-white/20`}>
                <svg className="w-5 h-5 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d={app?.icon} />
                </svg>
            </div>
            <span className="font-extrabold text-black/90 text-xl tracking-tighter">{app?.name}</span>
        </div>
        <button onClick={onClose} className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center active:scale-90 transition-transform">
          <svg className="w-5 h-5 text-black/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
      </div>

      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-700 delay-100 ${
        isExpanded && !isClosing 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}>
        <div className="flex-1 overflow-hidden">
          {renderContent()}
        </div>
      </div>

      <div className="h-10 w-full flex items-center justify-center flex-shrink-0 bg-transparent">
         <div className="w-1/3 h-1.5 bg-black/10 rounded-full" />
      </div>
    </div>
  );
};

export default Window;
