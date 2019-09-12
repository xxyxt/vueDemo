import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import pageRoom from '@/components/pageRoom'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        keepAlive: false // 导航栏在该页面显示
      }
    },
    {
      path: '/pageRoom',
      name: 'pageRoom',
      component: pageRoom,
      meta: {
        keepAlive: true // 导航栏在该页面显示
      }
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        keepAlive: true // 导航栏在该页面显示
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true // 导航栏在该页面显示
      },
      redirect: '',
      children: [
        {
          path: '/pageRoom',
          name: 'pageRoom',
          component: pageRoom,
          meta: {
            keepAlive: true // 导航栏在该页面显示
          }
        },
        {
          path: '/test',
          name: 'test',
          component: test,
          meta: {
            keepAlive: true // 导航栏在该页面显示
          }
        }
      ]
    }
  ],
  proxyTable: {
    '/api': {
      target: 'http://47.107.38.151:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
})
