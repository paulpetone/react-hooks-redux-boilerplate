module.exports = {
  home: {
    path: `/`,
    component: `src/pages/index.js`,
  },
  about: {
    path: `/about`,
    component: `src/pages/about/index.js`,
  },
  example: {
    path: `/example`,
    component: `src/pages/example/index.js`,
  },
  dynamicRoute: {
    path: `/dynamic-route(/:id)`,
    component: `src/pages/dynamic-route/index.js`,
  },
}
