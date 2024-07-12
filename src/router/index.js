import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../pages/HomePage.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/AboutPage.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/ContactPage.vue")
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../pages/TeamPage.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../pages/BlogPage.vue")
    },
    {
      path: "/Singleblog",
      name: "Singleblog",
      component: () => import("../pages/SingleBlogPage.vue")
    },
    {
      path: "/privacy-policy",
      name: "privacy policy",
      component: () => import("../pages/PrivacyPolicyPage.vue")
    },
    {
      path: "/terms-of-service",
      name: "terms of service",
      component: () => import("../pages/TermsPage.vue")
    },
    {
      path: "/landing-page",
      name: "landing page",
      component: () => import("../pages/LandingPage.vue")
    },
    {
      path: '/:catchAll(.*)', // Catch all unmatched routes
      name: '404',
      component: () => import("../pages/404Page.vue")
    }
  ]
})

export default router
