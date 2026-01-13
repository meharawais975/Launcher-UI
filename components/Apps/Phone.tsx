
import React, { useState } from 'react';

const PhoneApp: React.FC = () => {
  const [number, setNumber] = useState('');
  const [tab, setTab] = useState<'keypad' | 'recents'>('keypad');

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  const recents = [
    { name: 'Mom', type: 'incoming', time: '10:45 AM' },
    { name: '+1 555-0199', type: 'outgoing', time: 'Yesterday' },
    { name: 'Galaxy Support', type: 'missed', time: 'Tuesday' }
  ];

  return (
    <div className="flex-1 bg-white flex flex-col h-full relative">
      <div className="p-6 pb-2">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">Phone</h2>
      </div>

      {tab === 'keypad' ? (
        <div className="flex-1 flex flex-col">
          <div className="h-24 flex items-center justify-center px-8">
            <span className="text-4xl font-light tracking-widest text-black transition-all">
              {number || ' '}
            </span>
          </div>

          <div className="flex-1 px-12 grid grid-cols-3 gap-y-4 gap-x-8 mt-4">
            {keys.map(key => (
              <button 
                key={key}
                onClick={() => setNumber(prev => prev + key)}
                className="aspect-square rounded-full bg-neutral-100 flex flex-col items-center justify-center active:bg-neutral-200 transition-colors"
              >
                <span className="text-2xl font-medium text-black">{key}</span>
                {key === '2' && <span className="text-[8px] font-bold text-neutral-400">ABC</span>}
                {key === '3' && <span className="text-[8px] font-bold text-neutral-400">DEF</span>}
              </button>
            ))}
          </div>

          <div className="h-32 flex items-center justify-center gap-12">
             <button onClick={() => setNumber('')} className="w-12 h-12 flex items-center justify-center text-neutral-300 active:text-neutral-500">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6"/></svg>
             </button>
             <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
             </button>
             <div className="w-12 h-12" />
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 space-y-2">
          {recents.map((call, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-neutral-50 active:bg-neutral-50 px-2 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${call.type === 'missed' ? 'bg-red-50 text-red-500' : 'bg-neutral-100 text-neutral-400'}`}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className={`font-bold ${call.type === 'missed' ? 'text-red-500' : 'text-black'}`}>{call.name}</h4>
                  <p className="text-xs text-neutral-400 font-medium">{call.type === 'incoming' ? 'Mobile' : 'Work'}</p>
                </div>
              </div>
              <span className="text-xs text-neutral-400 font-bold">{call.time}</span>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Tabs */}
      <div className="h-16 border-t border-neutral-100 flex items-center justify-around bg-white/80 backdrop-blur-md absolute bottom-0 w-full px-8 text-neutral-400">
        <button onClick={() => setTab('keypad')} className={`flex flex-col items-center gap-1 ${tab === 'keypad' ? 'text-green-600' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>
            <span className="text-[10px] font-bold">Keypad</span>
        </button>
        <button onClick={() => setTab('recents')} className={`flex flex-col items-center gap-1 ${tab === 'recents' ? 'text-green-600' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span className="text-[10px] font-bold">Recents</span>
        </button>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-[10px] font-bold">Contacts</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneApp;
