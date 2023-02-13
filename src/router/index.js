import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use( VueRouter )

const router = new VueRouter( {
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'login',
      component: () => import( '../views/HomeView.vue' ),
      meta: {
        disableIfLoggedIn: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import( '../views/FormularView.vue' ),
      meta: {
        requiresAuth: true
      }
    }
  ]
} )

const isLoggedIn = () => {
  return localStorage.getItem( 'loggedin' )
}

router.beforeEach( ( to, from, next ) => {
  if ( to.meta.requiresAuth && isLoggedIn() === 'false' )
    next( { path: '/' } );
  else
    next()
} )


export default router
