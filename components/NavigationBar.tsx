
import React from 'react';

interface NavigationBarProps {
  onHome: () => void;
  onBack?: () => void;
  onRecents: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onHome, onBack, onRecents }) => {
  return (
    <div className="w-full h-14 flex items-center justify-around z-[150] px-12 pb-2">
      <button className="nav-button" onClick={onRecents}>
        <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3h18v18H3z"/></svg>
      </button>
      <button className="nav-button" onClick={onHome}>
        <div className="w-12 h-1 bg-white/90 rounded-full" />
      </button>
      <button className="nav-button" onClick={onBack}>
        <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
    </div>
  );
};

export default NavigationBar;
