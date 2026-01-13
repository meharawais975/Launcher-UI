
import { AppMetadata } from './types';

export const APPS: AppMetadata[] = [
  { id: 'assistant', name: 'Bixby', icon: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z', color: 'bg-gradient-to-br from-blue-400 to-blue-700' },
  { id: 'weather', name: 'Weather', icon: 'M12 7V3m0 18v-4m5.657-11.343l2.828-2.828m-16.97 16.97l2.828-2.828M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0', color: 'bg-gradient-to-br from-sky-400 to-blue-500' },
  { id: 'settings', name: 'Settings', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06', color: 'bg-gradient-to-br from-slate-400 to-slate-600' },
  { id: 'gallery', name: 'Gallery', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', color: 'bg-gradient-to-br from-rose-400 to-rose-600' },
  { id: 'camera', name: 'Camera', icon: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z', color: 'bg-gradient-to-br from-red-500 to-red-700' },
  { id: 'calculator', name: 'Calculator', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z', color: 'bg-gradient-to-br from-teal-500 to-teal-700' },
  { id: 'browser', name: 'Internet', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', color: 'bg-gradient-to-br from-indigo-500 to-indigo-700' },
  { id: 'notes', name: 'Notes', icon: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z', color: 'bg-gradient-to-br from-orange-500 to-orange-700' },
  // Additional apps for App Drawer
  { id: 'phone', name: 'Phone', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z', color: 'bg-gradient-to-br from-green-500 to-green-700' },
  { id: 'messages', name: 'Messages', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', color: 'bg-gradient-to-br from-blue-300 to-blue-500' },
  { id: 'playstore', name: 'Play Store', icon: 'M5 3l14 9-14 9V3z', color: 'bg-gradient-to-br from-white to-slate-200' },
  { id: 'clock', name: 'Clock', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-gradient-to-br from-slate-700 to-black' },
  { id: 'files', name: 'My Files', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', color: 'bg-gradient-to-br from-yellow-500 to-orange-600' }
];

export const WALLPAPERS = [
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1620121692029-d088224efc74?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000',
];
