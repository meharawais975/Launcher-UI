
import React, { useState } from 'react';

const BrowserApp: React.FC = () => {
  const [url, setUrl] = useState('samsung.com/galaxy');

  return (
    <div className="flex-1 bg-white flex flex-col h-full">
      {/* Search Bar */}
      <div className="p-4 bg-white/95 backdrop-blur-md sticky top-0 z-10 border-b border-neutral-100">
        <div className="flex items-center bg-neutral-100 rounded-full px-5 py-2.5 gap-3">
          <svg className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input 
            className="flex-1 bg-transparent border-none outline-none text-[14px] text-black font-medium"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <svg className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        </div>
      </div>

      {/* Content Mockup */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="w-full h-48 bg-blue-600 rounded-[24px] p-8 text-white flex flex-col justify-end">
          <h1 className="text-3xl font-extrabold tracking-tighter">Galaxy S25 Ultra</h1>
          <p className="text-sm opacity-80 mt-2 font-medium">Built with Galaxy AI</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-50 p-4 rounded-[20px] aspect-square flex flex-col justify-center items-center text-center gap-2">
             <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">✨</div>
             <span className="text-xs font-bold text-neutral-800">Galaxy AI</span>
          </div>
          <div className="bg-neutral-50 p-4 rounded-[20px] aspect-square flex flex-col justify-center items-center text-center gap-2">
             <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">📷</div>
             <span className="text-xs font-bold text-neutral-800">Pro Camera</span>
          </div>
        </div>

        <div className="space-y-4">
           <div className="h-4 bg-neutral-100 rounded-full w-3/4" />
           <div className="h-4 bg-neutral-100 rounded-full w-full" />
           <div className="h-4 bg-neutral-100 rounded-full w-5/6" />
        </div>
      </div>

      {/* Browser Navigation */}
      <div className="h-16 border-t border-neutral-100 flex items-center justify-around px-4 bg-white/95">
        <svg className="w-6 h-6 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <svg className="w-6 h-6 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
        <div className="w-6 h-6 border-2 border-neutral-400 rounded-lg flex items-center justify-center text-[10px] font-bold text-neutral-400">1</div>
      </div>
    </div>
  );
};

export default BrowserApp;
