export default {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login'),
  meta: {
    title: {
      bold: 'OSSC',
      thin: 'Login'
    }
  }
}
