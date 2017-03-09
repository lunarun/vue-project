import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/index'
import Test from 'components/Test/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
