import React from 'react';

import bridge from '@vkontakte/vk-bridge';
import ReactDOM from 'react-dom/client';

import { App } from 'app/App';

bridge.send('VKWebAppInit');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
