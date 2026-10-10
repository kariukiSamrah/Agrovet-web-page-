import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker immediately for offline precaching
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('New content available for Nyeri Farmers Agrovet, updating...');
  },
  onOfflineReady() {
    console.log('Nyeri Farmers Agrovet is ready to work offline on PC and mobile.');
  },
});

createRoot(document.getElementById('root')!).render(<App />);

