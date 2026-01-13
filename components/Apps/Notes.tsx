
import React from 'react';

const NotesApp: React.FC = () => {
  const notes = [
    { title: 'Shopping List', date: 'Today', content: 'Milk, Eggs, Bread, Galaxy Buds Pro 3' },
    { title: 'Project Ideas', date: 'Yesterday', content: 'Build a One UI launcher with React and Gemini AI' },
    { title: 'Reminders', date: 'Oct 24', content: 'Software update at 2:00 AM' }
  ];

  return (
    <div className="flex-1 bg-[#F9F9F9] flex flex-col h-full relative">
      <div className="p-6 pb-2">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">Samsung Notes</h2>
      </div>

      <div className="px-6 py-4">
        <div className="bg-neutral-200/50 rounded-2xl px-4 py-2.5 flex items-center gap-3">
          <svg className="w-4 h-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input className="bg-transparent border-none outline-none text-sm font-medium w-full" placeholder="Search notes" />
        </div>
      </div>

      <div className="flex-1 px-6 space-y-4 overflow-y-auto pb-24">
        {notes.map((note, i) => (
          <div key={i} className="bg-white rounded-[24px] p-5 shadow-sm border border-neutral-100 flex flex-col gap-1 active:scale-[0.98] transition-transform">
            <h3 className="text-lg font-bold text-black">{note.title}</h3>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-tighter">{note.date}</p>
            <p className="text-sm text-neutral-500 mt-1 line-clamp-1">{note.content}</p>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-10 right-8 w-16 h-16 bg-orange-600 rounded-full shadow-2xl flex items-center justify-center text-white active:scale-90 transition-transform">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button>

      {/* Bottom Nav */}
      <div className="h-16 border-t border-neutral-100 flex items-center justify-around bg-white/80 backdrop-blur-md absolute bottom-0 w-full px-8 text-neutral-400">
        <div className="flex flex-col items-center gap-1 text-orange-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h18M3 7h18M3 19h18"/></svg>
            <span className="text-[10px] font-bold">Notes</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-[10px] font-bold">Favorites</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span className="text-[10px] font-bold">Folders</span>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
