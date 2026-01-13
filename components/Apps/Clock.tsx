
import React, { useState } from 'react';

const ClockApp: React.FC = () => {
  const [tab, setTab] = useState('Alarm');

  return (
    <div className="flex-1 bg-white flex flex-col h-full relative">
      <div className="p-6 pb-2">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">Clock</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8">
         <div className="w-64 h-64 rounded-full border-[10px] border-neutral-50 flex items-center justify-center relative shadow-inner">
            <div className="w-1 h-24 bg-black rounded-full absolute top-12 origin-bottom rotate-[30deg]" />
            <div className="w-1 h-16 bg-neutral-400 rounded-full absolute top-20 origin-bottom -rotate-[45deg]" />
            <div className="w-3 h-3 bg-red-500 rounded-full z-10" />
            
            <span className="absolute top-6 font-bold text-neutral-300">12</span>
            <span className="absolute right-6 font-bold text-neutral-300">3</span>
            <span className="absolute bottom-6 font-bold text-neutral-300">6</span>
            <span className="absolute left-6 font-bold text-neutral-300">9</span>
         </div>
         
         <div className="mt-12 text-center">
            <h3 className="text-4xl font-light text-black tracking-tight">10:45 <span className="text-xl font-medium opacity-30">AM</span></h3>
            <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest mt-2">Local Time</p>
         </div>
      </div>

      <div className="h-16 border-t border-neutral-100 flex items-center justify-around bg-white/80 backdrop-blur-md absolute bottom-0 w-full px-8 text-neutral-400">
        {['Alarm', 'World Clock', 'Stopwatch', 'Timer'].map(t => (
          <button key={t} onClick={() => setTab(t)} className={`flex flex-col items-center gap-1 ${tab === t ? 'text-blue-600' : ''}`}>
             <span className="text-[10px] font-bold whitespace-nowrap">{t}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClockApp;
