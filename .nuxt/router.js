import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e14ea196 = () => interopDefault(import('..\\pages\\spices\\index.vue' /* webpackChunkName: "pages/spices/index" */))
const _4305d705 = () => interopDefault(import('..\\pages\\spices\\_id\\index.vue' /* webpackChunkName: "pages/spices/_id/index" */))
const _162726fa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/spices",
    component: _e14ea196,
    name: "spices"
  }, {
    path: "/spices/:id",
    component: _4305d705,
    name: "spices-id"
  }, {
    path: "/",
    component: _162726fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
