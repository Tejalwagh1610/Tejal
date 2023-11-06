const routes = [
  {
    path: '/tejal',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/tejal', component: () => import('pages/IndexPage.vue') },
      { path: '/tejal/about', component: () => import('components/AboutMe.vue') },
      { path: '/tejal/MoreAbout', component: () => import('src/pages/MoreAboutMe.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
