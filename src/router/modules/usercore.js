
import Layout from '@/layout/index'

export default {
  path: '/usercore',
  component: Layout,
  redirect: 'index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/usercore/index.vue'),
      name: 'usercore',
      meta: { title: '个人中心', affix: true }
    },

  ]
}

