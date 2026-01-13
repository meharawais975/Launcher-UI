
import React from 'react';

const SettingsApp: React.FC = () => {
  const sections = [
    {
      title: 'Connectivity',
      items: [
        { label: 'Airplane Mode', icon: '✈️', toggle: true },
        { label: 'Wi-Fi', icon: '📶', value: 'Intelligence_5G' },
        { label: 'Bluetooth', icon: '🎧', value: 'Connected' },
        { label: 'NFC and contactless payments', icon: '💳' },
      ]
    },
    {
      title: 'Personalization',
      items: [
        { label: 'Notifications', icon: '🔔' },
        { label: 'Display', icon: '☀️', value: 'Adaptive' },
        { label: 'Wallpaper and style', icon: '🖼️' },
        { label: 'Home screen', icon: '🏠' },
        { label: 'Lock screen', icon: '🔒' },
      ]
    },
    {
      title: 'Advanced Features',
      items: [
        { label: 'Galaxy AI', icon: '✨', value: 'Active' },
        { label: 'Multi window', icon: '📱' },
        { label: 'Software update', icon: '🔄', value: 'Up to date' },
      ]
    },
    {
      title: 'About Phone',
      items: [
        { label: 'Phone name', icon: 'ℹ️', value: 'Galaxy S25 Ultra' },
        { label: 'Status information', icon: '📊' },
        { label: 'Legal information', icon: '⚖️' },
      ]
    }
  ];

  return (
    <div className="flex-1 bg-[#F4F4F4] flex flex-col h-full overflow-y-auto pb-20">
      <div className="px-6 pt-10 pb-6 text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          G
        </div>
        <h2 className="text-2xl font-bold text-black tracking-tight">Galaxy Account</h2>
        <p className="text-sm text-neutral-500">gemini.ai@samsung.com</p>
      </div>

      <div className="px-4 py-2 flex flex-col gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h3 className="px-4 text-[11px] font-bold text-neutral-400 uppercase tracking-widest">{section.title}</h3>
            <div className="bg-white rounded-[28px] overflow-hidden shadow-sm">
              {section.items.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between px-5 py-4 active:bg-neutral-50 transition-colors cursor-pointer ${
                    i !== section.items.length - 1 ? 'border-b border-neutral-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[15px] font-medium text-black">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.value && <span className="text-sm text-neutral-400 font-medium">{item.value}</span>}
                    {item.toggle ? (
                      <div className="w-11 h-6 bg-blue-500 rounded-full relative p-0.5">
                        <div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-5" />
                      </div>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"/></svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 px-8 text-center flex flex-col gap-1 opacity-40 mb-10">
        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">One UI 7.0 | Android 15</p>
        <p className="text-[9px] text-neutral-400">Security patch level: May 1, 2025</p>
      </div>
    </div>
  );
};

export default SettingsApp;
