
import React from 'react';

const StoreApp: React.FC = () => {
  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-y-auto pb-20">
      <div className="p-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <h2 className="text-2xl font-extrabold text-black tracking-tight">Play Store</h2>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">G</div>
      </div>

      <div className="px-6 space-y-8">
        <div>
          <h3 className="text-lg font-bold text-black mb-4">Recommended for you</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-shrink-0 w-40 space-y-2">
                <div className="w-40 h-40 bg-neutral-100 rounded-3xl overflow-hidden">
                  <img src={`https://picsum.photos/400/400?sig=${i+100}`} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-bold text-black">App Name {i}</p>
                <p className="text-xs text-neutral-400">Editor's Choice</p>
              </div>
            ))}
          </div>
        </div>

        <div>
           <h3 className="text-lg font-bold text-black mb-4">New & Updated</h3>
           <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl overflow-hidden">
                    <img src={`https://picsum.photos/200/200?sig=${i+200}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-black">Utility Pro {i}</p>
                    <p className="text-xs text-neutral-400">Productivity • 4.8★</p>
                  </div>
                  <button className="px-6 py-1.5 bg-neutral-100 text-blue-600 rounded-full text-sm font-bold active:bg-blue-50 transition-colors">Install</button>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="h-16 border-t border-neutral-100 flex items-center justify-around bg-white absolute bottom-0 w-full text-neutral-400">
        <div className="flex flex-col items-center gap-1 text-blue-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/></svg>
            <span className="text-[10px] font-bold">Games</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
            <span className="text-[10px] font-bold">Apps</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-[10px] font-bold">Offers</span>
        </div>
      </div>
    </div>
  );
};

export default StoreApp;
