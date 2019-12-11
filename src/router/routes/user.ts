import loadable from '@loadable/component'

const routes = [
  {
    path: '/user',
    title: '用户列表',
    group: '用户模块',
    isMenu: true,
    useLayout: true,
    component: loadable(() => import('@/pages/Index/Index'))
  },
  {
    path: '/user/detail',
    title: '用户详情',
    group: '用户模块',
    useLayout: true,
    component: loadable(() => import('@/pages/Index/Index'))
  }
];

export default routes;
