
import React, { useState, useRef, useEffect } from 'react';
import { assistant } from '../../services/geminiService';

const AssistantApp: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Intelligence is ready. How can I assist you?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await assistant.chat(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-white h-full">
      <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-3 pb-24">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[78%] px-4 py-2.5 rounded-[22px] text-[14px] leading-snug tracking-tight ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-neutral-100 text-neutral-800'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 px-4 py-3 rounded-[22px]">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" />
                <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white/80 backdrop-blur-md absolute bottom-0 w-full border-t border-neutral-100">
        <div className="flex items-center bg-neutral-100 rounded-[24px] px-4 py-1 gap-2">
          <button className="text-neutral-400 hover:text-blue-600 transition">
             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          </button>
          <input 
            className="flex-1 bg-transparent border-none outline-none py-2 text-[14px] text-black placeholder-neutral-400"
            placeholder="Type or Ask Intelligence..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`p-1.5 rounded-full transition ${input.trim() ? 'bg-blue-600 text-white' : 'text-neutral-300'}`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssistantApp;
