
import React, { useState } from 'react';

const GalleryApp: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = Array.from({ length: 24 }, (_, i) => `https://picsum.photos/800/800?random=${i + 10}`);

  return (
    <div className="flex-1 bg-white flex flex-col h-full relative">
      <div className="p-4 flex items-baseline justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <h2 className="text-xl font-bold tracking-tight">All Photos</h2>
        <span className="text-blue-600 text-sm font-semibold">Select</span>
      </div>
      
      <div className="grid grid-cols-3 gap-0.5 pb-20 overflow-y-auto">
        {images.map((url, i) => (
          <div 
            key={url} 
            className="aspect-square bg-neutral-100 overflow-hidden cursor-pointer active:opacity-70 transition"
            onClick={() => setSelectedImage(url)}
          >
            <img src={url} alt="Gallery item" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      {/* Image Detail Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black flex flex-col animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="h-16 flex items-center justify-between px-6 text-white pt-4">
             <button className="text-sm font-semibold">Done</button>
             <div className="flex gap-6">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 6L5 20M5 6l14 14"/></svg>
             </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <img 
              src={selectedImage} 
              alt="Detailed view" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
            />
          </div>
          <div className="h-20 flex items-center justify-around px-12 text-white/80 pb-6">
             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-8M12 8V4M8 12h8"/></svg>
             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </div>
        </div>
      )}

      {/* Bottom Tabs */}
      <div className="h-16 border-t border-neutral-100 flex items-center justify-around bg-white/90 backdrop-blur-md absolute bottom-0 w-full px-4 text-neutral-400">
        <div className="flex flex-col items-center gap-1 text-blue-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/></svg>
            <span className="text-[10px] font-bold">Photos</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-[10px] font-bold">For You</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
            <span className="text-[10px] font-bold">Albums</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span className="text-[10px] font-bold">Search</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryApp;
