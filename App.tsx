
import React, { useState, useEffect, useCallback } from 'react';
import { AppID, SystemState, Rect } from './types';
import StatusBar from './components/StatusBar';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AppDrawer from './components/AppDrawer';
import QuickSettings from './components/QuickSettings';
import Window from './components/Window';
import { WALLPAPERS, APPS } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<SystemState>({
    isDrawerOpen: false,
    isQuickSettingsOpen: false,
    activeApp: null,
    openingAppRect: null,
    recentApps: [],
    batteryLevel: 98,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  });

  const [isClosing, setIsClosing] = useState(false);
  const [wallpaperIndex, setWallpaperIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prev => ({
        ...prev,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const openApp = useCallback((id: AppID, rect: Rect) => {
    setState(prev => ({
      ...prev,
      activeApp: id,
      openingAppRect: rect,
      isDrawerOpen: false,
      recentApps: [id, ...prev.recentApps.filter(a => a !== id)].slice(0, 5)
    }));
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
  }, [state.activeApp, isClosing, handleCloseStart]);

  const activeAppMetadata = APPS.find(a => a.id === state.activeApp);

  return (
    <div 
      className="fixed inset-0 overflow-hidden flex flex-col items-center justify-between transition-all duration-700"
      style={{
        backgroundImage: `url(${WALLPAPERS[wallpaperIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Enhanced Background Blur Layer */}
      {(state.isDrawerOpen || state.isQuickSettingsOpen || (state.activeApp && !isClosing)) && (
        <div className="absolute inset-0 full-blur-overlay z-10 transition-all duration-700 ease-in-out opacity-100" />
      )}

      {/* Top Status Bar - Full Width */}
      <StatusBar 
        time={state.time} 
        battery={state.batteryLevel} 
        onPullDown={() => toggleQuickSettings(true)}
        activeAppName={activeAppMetadata?.name}
      />

      {/* Main Home Screen Container - Heavier blur during transition */}
      <div 
        className={`flex-1 w-full relative transition-all duration-[1000ms] cubic-bezier(0.19, 1, 0.22, 1) ${
          state.activeApp && !isClosing 
            ? 'scale-[0.9] opacity-0 blur-[60px] pointer-events-none' 
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

      {/* Control Center Overlay with Deep Blur */}
      <QuickSettings 
        isOpen={state.isQuickSettingsOpen} 
        onClose={() => toggleQuickSettings(false)}
        onWallpaperChange={() => setWallpaperIndex((prev) => (prev + 1) % WALLPAPERS.length)}
      />

      {/* Active App Window Overlay */}
      {state.activeApp && (
        <Window 
          appId={state.activeApp} 
          startRect={state.openingAppRect}
          isClosing={isClosing}
          onClose={handleCloseStart}
          onAnimationComplete={handleCloseFinish}
        />
      )}

      {/* Bottom Navigation Gesture Bar */}
      <NavigationBar 
        onHome={goHome} 
        onBack={state.activeApp && !isClosing ? handleCloseStart : (state.isDrawerOpen ? () => toggleDrawer(false) : undefined)}
        onRecents={() => console.log('App Switcher')}
      />
    </div>
  );
};

export default App;
