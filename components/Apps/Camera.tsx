
import React, { useState } from 'react';

const CameraApp: React.FC = () => {
  const [mode, setMode] = useState('PHOTO');

  return (
    <div className="flex-1 bg-black flex flex-col h-full relative overflow-hidden">
      {/* Viewfinder Mockup */}
      <div className="flex-1 relative bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-80" />
        </div>
        
        {/* Viewfinder UI */}
        <div className="absolute top-4 left-4 right-4 flex justify-between text-white drop-shadow-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/><path d="M12 8v4l3 3"/></svg>
          <div className="flex gap-6 font-bold text-xs">
            <span>FULL</span>
            <span>9:16</span>
          </div>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        </div>
      </div>

      {/* Camera Controls */}
      <div className="h-48 bg-black flex flex-col items-center justify-between py-6 px-8">
        {/* Mode Selector */}
        <div className="flex gap-8 text-[11px] font-bold tracking-widest text-white/40 mb-2">
          {['PORTRAIT', 'PHOTO', 'VIDEO', 'MORE'].map(m => (
            <span 
              key={m} 
              className={`cursor-pointer transition-colors ${mode === m ? 'text-yellow-400' : ''}`}
              onClick={() => setMode(m)}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Shutter Section */}
        <div className="w-full flex items-center justify-between px-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/20 bg-neutral-800">
            <img src="https://picsum.photos/100/100" className="w-full h-full object-cover" alt="Last photo" />
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center active:scale-95 transition-transform">
               <div className="w-[66px] h-[66px] bg-white rounded-full" />
            </div>
          </div>

          <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 11a8.1 8.1 0 0 0-15.5-2m-.5-4v4h4m-4 5a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraApp;
