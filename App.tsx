
import React, { useState, useEffect, useCallback } from 'react';
import { AppID, SystemState, Rect } from './types';
import StatusBar from './components/StatusBar';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AppDrawer from './components/AppDrawer';
import QuickSettings from './components/QuickSettings';
import Window from './components/Window';
import EdgePanel from './components/EdgePanel';
import { WALLPAPERS, APPS } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<SystemState>({
    isDrawerOpen: false,
    isQuickSettingsOpen: false,
    activeApp: null,
    openingAppRect: null,
    recentApps: [],
    batteryLevel: 98,
    time: '',
  });

  const [isClosing, setIsClosing] = useState(false);
  const [isRecentsOpen, setIsRecentsOpen] = useState(false);
  const [wallpaperIndex, setWallpaperIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setState(prev => ({
        ...prev,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const openApp = useCallback((id: AppID, rect: Rect) => {
    setState(prev => ({
      ...prev,
      activeApp: id,
      openingAppRect: rect,
      isDrawerOpen: false,
      isQuickSettingsOpen: false,
      recentApps: [id, ...prev.recentApps.filter(a => a !== id)].slice(0, 10)
    }));
    setIsRecentsOpen(false);
  }, []);

  const handleCloseStart = useCallback(() => {
    setIsClosing(true);
  }, []);

  const handleCloseFinish = useCallback(() => {
    setIsClosing(false);
    setState(prev => ({ ...prev, activeApp: null, openingAppRect: null }));
  }, []);

  const toggleDrawer = useCallback((open: boolean) => {
    setState(prev => ({ ...prev, isDrawerOpen: open }));
    if (open) setIsRecentsOpen(false);
  }, []);

  const toggleQuickSettings = useCallback((open: boolean) => {
    setState(prev => ({ ...prev, isQuickSettingsOpen: open }));
  }, []);

  const goHome = useCallback(() => {
    if (state.activeApp && !isClosing) {
      handleCloseStart();
    }
    setState(prev => ({
      ...prev,
      isDrawerOpen: false,
      isQuickSettingsOpen: false
    }));
    setIsRecentsOpen(false);
  }, [state.activeApp, isClosing, handleCloseStart]);

  const activeAppMetadata = APPS.find(a => a.id === state.activeApp);

  return (
    <div 
      className="fixed inset-0 overflow-hidden flex flex-col items-center justify-between transition-all duration-[1000ms] cubic-bezier(0.19, 1, 0.22, 1)"
      style={{
        backgroundImage: `url(${WALLPAPERS[wallpaperIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Dim & Blur Overlay */}
      {(state.isDrawerOpen || state.isQuickSettingsOpen || isRecentsOpen) && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[60px] z-10 animate-fade-in" />
      )}

      <StatusBar 
        time={state.time} 
        battery={state.batteryLevel} 
        onPullDown={() => toggleQuickSettings(true)}
        activeAppName={activeAppMetadata?.name}
      />

      <div 
        className={`flex-1 w-full relative transition-all duration-[800ms] cubic-bezier(0.19, 1, 0.22, 1) ${
          (state.activeApp && !isClosing) || isRecentsOpen
            ? 'scale-[0.88] opacity-0 blur-3xl pointer-events-none' 
            : 'scale-100 opacity-100 blur-0'
        }`}
      >
        <Home 
          onAppOpen={openApp} 
          onSwipeUp={() => toggleDrawer(true)}
        />
        
        <AppDrawer 
          isOpen={state.isDrawerOpen} 
          onClose={() => toggleDrawer(false)} 
          onAppOpen={openApp} 
        />
      </div>

      {/* Galaxy Recents UI */}
      {isRecentsOpen && (
        <div className="absolute inset-0 z-[120] flex flex-col items-center justify-center p-8 animate-fade-in">
           <div className="flex gap-8 overflow-x-auto w-full py-10 scrollbar-hide px-10">
              {state.recentApps.map((id) => {
                const app = APPS.find(a => a.id === id);
                return (
                  <div 
                    key={id} 
                    className="flex-shrink-0 w-72 h-[480px] glass-dark-oneui rounded-[48px] flex flex-col items-center justify-center gap-6 active:scale-95 transition-transform shadow-2xl"
                    onClick={(e) => openApp(id, e.currentTarget.getBoundingClientRect())}
                  >
                    <div className={`${app?.color} w-24 h-24 samsung-icon flex items-center justify-center shadow-2xl`}>
                        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d={app?.icon}/></svg>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">{app?.name}</span>
                  </div>
                );
              })}
              {state.recentApps.length === 0 && <p className="text-white/40 font-bold italic text-lg">No active windows</p>}
           </div>
           <div className="flex gap-4">
               <button 
                 onClick={() => { setState(prev => ({...prev, recentApps: []})); setIsRecentsOpen(false); }}
                 className="mt-4 px-12 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-sm border border-white/20 active:scale-90 transition-transform"
               >
                 Close All
               </button>
           </div>
        </div>
      )}

      <QuickSettings 
        isOpen={state.isQuickSettingsOpen} 
        onClose={() => toggleQuickSettings(false)}
        onWallpaperChange={() => setWallpaperIndex((prev) => (prev + 1) % WALLPAPERS.length)}
      />

      <EdgePanel onAppOpen={openApp} />

      {state.activeApp && (
        <Window 
          appId={state.activeApp} 
          startRect={state.openingAppRect}
          isClosing={isClosing}
          onClose={handleCloseStart}
          onAnimationComplete={handleCloseFinish}
        />
      )}

      <NavigationBar 
        onHome={goHome} 
        onBack={state.activeApp && !isClosing ? handleCloseStart : (state.isDrawerOpen ? () => toggleDrawer(false) : (isRecentsOpen ? () => setIsRecentsOpen(false) : undefined))}
        onRecents={() => setIsRecentsOpen(!isRecentsOpen)}
      />
    </div>
  );
};

export default App;
