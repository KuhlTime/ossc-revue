export default {
  path: '/terms',
  name: 'terms',
  component: () => import('@/views/Terms.vue'),
  meta: {
    title: {
      bold: 'Terms',
      thin: '&Conditions'
    },
    back: 'home'
  }
}
