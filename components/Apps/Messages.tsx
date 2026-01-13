
import React from 'react';

const MessagesApp: React.FC = () => {
  const chats = [
    { name: 'Samsung', message: 'Your Galaxy S25 Ultra is ready for pickup!', time: 'Now', unread: true },
    { name: 'Mom', message: 'Did you see the new One UI 7 update?', time: '2:14 PM', unread: false },
    { name: 'Intelligence Team', message: 'The new generative AI features are live.', time: 'Yesterday', unread: false },
    { name: '+1 888-GALAXY', message: 'Verification code: 821903', time: 'Mon', unread: false }
  ];

  return (
    <div className="flex-1 bg-white flex flex-col h-full relative">
      <div className="p-6 pb-4">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">Messages</h2>
      </div>

      <div className="px-6 py-2">
         <div className="bg-neutral-100 rounded-2xl px-4 py-2 flex items-center gap-3">
            <svg className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input className="bg-transparent border-none outline-none text-sm w-full font-medium" placeholder="Search conversations" />
         </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 mt-2 space-y-1">
        {chats.map((chat, i) => (
          <div key={i} className="flex items-center gap-4 p-3 rounded-2xl active:bg-neutral-50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 font-bold">
               {chat.name[0]}
            </div>
            <div className="flex-1 border-b border-neutral-50 pb-3 group-last:border-none">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className="font-bold text-black">{chat.name}</h4>
                <span className={`text-[10px] font-bold ${chat.unread ? 'text-blue-600' : 'text-neutral-400'}`}>{chat.time}</span>
              </div>
              <p className={`text-sm line-clamp-1 ${chat.unread ? 'text-black font-semibold' : 'text-neutral-500'}`}>
                {chat.message}
              </p>
            </div>
            {chat.unread && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
          </div>
        ))}
      </div>

      <button className="absolute bottom-10 right-8 w-14 h-14 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white active:scale-90 transition-transform">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>
    </div>
  );
};

export default MessagesApp;
