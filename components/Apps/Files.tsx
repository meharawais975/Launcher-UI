
import React from 'react';

const FilesApp: React.FC = () => {
  const categories = [
    { name: 'Images', count: '1,204', icon: '🖼️', color: 'bg-blue-50' },
    { name: 'Videos', count: '84', icon: '🎥', color: 'bg-red-50' },
    { name: 'Audio', count: '412', icon: '🎵', color: 'bg-purple-50' },
    { name: 'Documents', count: '29', icon: '📄', color: 'bg-orange-50' },
    { name: 'Downloads', count: '15', icon: '⬇️', color: 'bg-green-50' },
    { name: 'Install Files', count: '2', icon: '📦', color: 'bg-sky-50' },
  ];

  return (
    <div className="flex-1 bg-[#F9F9F9] flex flex-col h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">My Files</h2>
      </div>

      <div className="px-6 grid grid-cols-3 gap-3">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-4 rounded-[28px] shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-transform border border-neutral-100">
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-[11px] font-bold text-black">{cat.name}</span>
            <span className="text-[10px] text-neutral-400 font-medium">{cat.count}</span>
          </div>
        ))}
      </div>

      <div className="px-6 mt-8">
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 px-2">Storage</h3>
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-neutral-100 space-y-6">
           <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-black">Internal Storage</span>
                <span className="text-xs text-neutral-400">82% used</span>
              </div>
              <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '82%' }} />
              </div>
              <p className="text-[10px] text-neutral-400 mt-2 font-medium">104.2 GB / 128 GB</p>
           </div>

           <div className="flex items-center gap-4 text-neutral-400 pt-2 opacity-50">
              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-xl">☁️</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-black opacity-40">OneDrive</p>
                <p className="text-xs">Tap to sign in</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FilesApp;
