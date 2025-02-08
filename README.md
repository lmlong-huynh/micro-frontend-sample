# Micro Frontend Sample

This repository is a sample project designed to demonstrate the Micro Frontend Architecture using Vue 3, Vite, and Module Federation to build modular applications. Each micro frontend runs with its own Vue instance, initialized separately via `entry.js`, rather than sharing the host's Vue instance.

Additionally, this project utilizes a Route Manifest to dynamically define and manage routing for different micro frontends. The Route Manifest is responsible for:

- Dynamically loading routes from micro frontends
- Ensuring seamless navigation between different micro apps
- Registering and updating route configurations at runtime
- Maintaining consistency in route structure across the micro frontends
- Delegating rendering responsibilities to `Loader.vue`, which mounts or unmounts micro frontends dynamically

## Features

- Micro Frontend Architecture with Vue 3
- Vite for fast development and bundling
- Module Federation to dynamically load micro frontends
- Lerna for monorepo management
- Independent Routing per micro frontend
- Separate Vue Instances for each micro frontend
- Dynamic Route Manifest Management

## Project Structure

```sh
micro-frontend-sample/
├── packages/
│   ├── host/          # Shell application (Main container)
│   ├── app-1/         # Micro frontend 1
│   ├── app-2/         # Micro frontend 2
│
├── package.json       # Monorepo package manager with workspaces
├── lerna.json         # Lerna configuration
├── README.md          # Documentation
```

## Installation

### Clone the Repository
```sh
git clone https://github.com/lmlong-huynh/micro-frontend-sample.git
cd micro-frontend-sample
```

### Install Dependencies
Using NPM:
```sh
npm install
```

### Start the Applications
Run the development servers for all micro frontends:
```sh
npm run dev
```
This will start the host app and all micro frontends simultaneously.

Alternatively, you can start each package individually:
```sh
cd packages/host && npm run dev
cd packages/app-1 && npm run dev
cd packages/app-2 && npm run dev
```

## Micro Frontend Routing
| Micro Frontend | URL |
|---------------|----------------|
| Host App      | `http://localhost:5010` |
| App 1         | `http://localhost:5011` |
| App 2         | `http://localhost:5012` |

The Host dynamically loads App 1 and App 2 via Module Federation and manages routing through the Route Manifest.

## Example Usage of Route Manifest

The Route Manifest is used to dynamically register micro frontend routes in the host application. Instead of directly referencing remote apps, all routes are set to render `Loader.vue`, which is responsible for loading, mounting, and unmounting the micro frontends dynamically.

### Example: `packages/host/src/router/routeManifest.js`
```js
export const routeManifest = [
  {
    route: {
      path: '/app-1',
      name: 'App1',
      meta: { requiresAuth: false },
    },
    remote: { module: 'app1/App' }
  },
  {
    route: {
      path: '/app-2',
      name: 'App2',
      meta: { requiresAuth: false },
    },
    remote: { module: 'app2/App' }
  }
];
```

### Example: `packages/host/src/router/index.js`
```js
import { createRouter, createWebHistory } from 'vue-router';
import routeManifest from '../routeManifest';

const getRoutes = () => {
  return routeManifest.map((mfe) => ({
    path: mfe.route.path,
    name: mfe.route.name,
    meta: mfe.route.meta,
    component: () => import('@/components/Loader.vue'), // All routes point to Loader.vue
  }));
};

const routes = getRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

This setup ensures that the host app dynamically loads and mounts micro frontends when navigating, using `Loader.vue` as the single entry point for rendering micro frontends.