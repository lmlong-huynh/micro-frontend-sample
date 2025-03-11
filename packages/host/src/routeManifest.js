const routeManifest = [
  {
    remote: {
      module: 'app1',
      entry: 'http://localhost:5011/remoteEntry.js',
    },
    route: {
      name: 'app1',
      path: '/app-1',
      meta: {
        title: 'Micro App 1',
      },
    },
  },
  {
    remote: {
      module: 'app2',
      entry: 'http://localhost:5012/remoteEntry.js',
    },
    route: {
      name: 'app2',
      path: '/app-2',
      meta: {
        title: 'Micro App 2',
      },
    },
  },
];

/**
 * This function returns the remotes from the route manifest.
 */
export const getRemotes = () => {
  return routeManifest.map((mfe) => mfe.remote);
};

export default routeManifest;
