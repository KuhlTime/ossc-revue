import Home from '@/views/Home.vue'
import auth from '../middleware/auth'

export default {
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    middleware: auth,
    title: {
      bold: 'OSSC',
      thin: 'Revue'
    }
  }
}
