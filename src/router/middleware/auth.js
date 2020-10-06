// https://markus.oberlehner.net/blog/implementing-a-simple-middleware-with-vue-router/

import store from '@/store'

export default function auth({ next, router }) {
  console.info(`Authorized: ${store.getters.isAuthorized}`)

  if (!store.getters.isAuthorized) {
    return router.push({ name: 'login' })
  }

  return next()
}
