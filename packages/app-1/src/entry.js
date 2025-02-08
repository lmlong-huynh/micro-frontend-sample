import { createApp } from 'vue';
import App from './App.vue';

let app = null;

export const mount = (container) => {
  if (app == null) {
    app = createApp({
      name: 'Micro App 1',
      ...App,
    });
    try {
      app.mount(container);
    } catch (error) {
      console.error('ERROR: entry.ts mount()', error);
    }
  }
};

export const unmount = () => {
  if (app != null) {
    app.unmount();
    app = null;
  } else console.warn('App is not mounted.');
};
