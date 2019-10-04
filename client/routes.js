import entry from './app.vue'
import home from './views/home'
import layout from './views/layout'
// const layout = () => import('./views/layout.vue')
const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        component: home,
      },
    ]
  },
]

export default routes
