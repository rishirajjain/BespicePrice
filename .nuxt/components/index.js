export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Loading } from '../..\\components\\loading.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as SpiceDetails } from '../..\\components\\spiceDetails.vue'
export { default as Spicelist } from '../..\\components\\spicelist.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyLoading = import('../..\\components\\loading.vue' /* webpackChunkName: "components_loading" */).then(c => c.default || c)
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components_Nav" */).then(c => c.default || c)
export const LazySpiceDetails = import('../..\\components\\spiceDetails.vue' /* webpackChunkName: "components_spiceDetails" */).then(c => c.default || c)
export const LazySpicelist = import('../..\\components\\spicelist.vue' /* webpackChunkName: "components_spicelist" */).then(c => c.default || c)
