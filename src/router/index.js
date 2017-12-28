import Vue from 'vue'
import Router from 'vue-router'

import readme from '@/docs/readme.md'
import header from '@/docs/header.md'
import footer from '@/docs/footer.md'
import button from '@/docs/button.md'
import messagebox from '@/docs/message-box.md'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'readme',
      component: readme
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/messagebox',
      name: 'messagebox',
      component: messagebox
    }
  ]
})
