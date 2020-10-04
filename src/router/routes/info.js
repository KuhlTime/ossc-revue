export default {
  path: '/info',
  name: 'info',
  component: () => import('@/views/Info'),
  meta: {
    title: {
      bold: 'Infos',
      thin: 'Über'
    },
    back: 'home'
  }
}
