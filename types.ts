
// Fix: Added missing AppID values to match those defined in constants.tsx
export type AppID = 'assistant' | 'weather' | 'settings' | 'camera' | 'browser' | 'calculator' | 'gallery' | 'notes' | 'phone' | 'messages' | 'playstore' | 'clock' | 'files';

export interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface AppMetadata {
  id: AppID;
  name: string;
  icon: string; // SVG path or component name
  color: string;
  isSystem?: boolean;
}

export interface SystemState {
  isDrawerOpen: boolean;
  isQuickSettingsOpen: boolean;
  activeApp: AppID | null;
  openingAppRect: Rect | null;
  recentApps: AppID[];
  batteryLevel: number;
  time: string;
}
