
import React from 'react';

const WeatherApp: React.FC = () => {
  const hourly = Array.from({ length: 12 }, (_, i) => ({
    time: `${(new Date().getHours() + i) % 24}:00`,
    temp: Math.floor(Math.random() * 4) + 19,
    icon: i % 3 === 0 ? 'cloud-rain' : 'sun'
  }));

  const daily = [
    { day: 'Today', high: 24, low: 18, icon: 'sun' },
    { day: 'Sat', high: 22, low: 17, icon: 'cloud' },
    { day: 'Sun', high: 25, low: 19, icon: 'sun' },
    { day: 'Mon', high: 21, low: 16, icon: 'cloud-rain' },
    { day: 'Tue', high: 20, low: 15, icon: 'cloud-rain' },
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-sky-400 to-blue-500 text-white overflow-y-auto pb-10">
      <div className="flex flex-col items-center pt-8 pb-10">
        <h2 className="text-2xl font-semibold">Cupertino</h2>
        <span className="text-7xl font-thin tracking-tighter mt-1">21°</span>
        <span className="text-base font-medium opacity-90 mt-1">Partly Cloudy</span>
        <div className="flex gap-2 text-sm font-medium mt-1 opacity-80">
            <span>H:24°</span>
            <span>L:16°</span>
        </div>
      </div>

      <div className="px-5 space-y-4">
        {/* Hourly Forecast */}
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 overflow-hidden border border-white/10">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4 px-1">Hourly Forecast</p>
            <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
            {hourly.map((h, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 flex-shrink-0 min-w-[32px]">
                <span className="text-[11px] font-bold opacity-80">{idx === 0 ? 'Now' : h.time}</span>
                <div className="w-5 h-5 flex items-center justify-center">
                    {h.icon === 'sun' ? (
                        <div className="w-4 h-4 bg-yellow-300 rounded-full shadow-[0_0_10px_rgba(253,224,71,0.5)]" />
                    ) : (
                        <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                    )}
                </div>
                <span className="text-sm font-bold">{h.temp}°</span>
                </div>
            ))}
            </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4 px-1">5-Day Forecast</p>
            <div className="space-y-4">
                {daily.map((d, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-bold w-12">{d.day}</span>
                        <div className="w-5 h-5 flex items-center justify-center">
                             {d.icon === 'sun' ? <div className="w-3.5 h-3.5 bg-yellow-300 rounded-full" /> : <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>}
                        </div>
                        <div className="flex items-center gap-3 w-32">
                            <span className="text-sm font-bold opacity-60 w-6 text-right">{d.low}°</span>
                            <div className="flex-1 h-1 bg-white/20 rounded-full relative">
                                <div className="absolute left-1/4 right-1/4 h-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full" />
                            </div>
                            <span className="text-sm font-bold w-6 text-right">{d.high}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
