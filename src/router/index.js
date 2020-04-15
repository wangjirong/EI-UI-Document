import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [ {
  path: '/guide',
  name: 'Guide',
  component: ()=>import('../Menu/Guide')
}, {
  path: '/component',
  name: 'Component',
  component: ()=>import('../Menu/Compoent'),
  children:[
    {
      path: '/component/button',
      name: 'Button',
      component: ()=>import('../Menu/Basic/Button'),
    }
  ]
}, {
  path: '/theme',
  name: 'Theme',
  component: ()=>import('../Menu/Theme')
},{
  path: '/source',
  name: 'Source',
  component: ()=>import('../Menu/Source')
},  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router