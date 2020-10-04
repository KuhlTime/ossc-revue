export default {
  path: '/docs',
  name: 'docs',
  component: () => import('@/views/Docs'),
  meta: {
    title: {
      bold: 'API',
      thin: 'Docs'
    },
    back: 'home'
  }
}
