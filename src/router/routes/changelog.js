export default {
  path: '/changelog',
  name: 'changelog',
  component: () => import('@/views/Changelog.vue'),
  meta: {
    title: {
      bold: 'Change',
      thin: 'Log'
    },
    back: 'home'
  }
}
