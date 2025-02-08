import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useRoute } from './router';
import { federationPlugin } from './plugins/federationPlugin';
import { getRemotes } from './routeManifest';

const app = createApp({
  name: 'Host',
  ...App,
});

app.use(useRoute());

app.use(federationPlugin, getRemotes());

app.mount('#app');
