
import Layout from '@/components/public/Layout'

const router = {
  path: '/',
  component: () => import(Layout)
}

export default router