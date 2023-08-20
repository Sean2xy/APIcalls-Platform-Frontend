export default [
  { path: '/', name: 'API调用主页', icon: 'HomeOutlined', component: './Index' },
  { name: '我的接口', icon: 'StarOutlined', path: '/my_interface', component: './MyInterface' },
  { path: '/interface_info/:id', name: '查看接口', icon: 'smile', component: './InterfaceInfo', hideInMenu: true },
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  {
    path: '/admin',
    name: '管理中心',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { name: '接口管理', icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo' },
      { name: '接口分析', icon: 'analysis', path: '/admin/interface_analysis', component: './Admin/InterfaceAnalysis' },
    ],
  },
  { name: '个人中心', icon: 'UserOutlined', path: '/profile', component: './User/Profile' },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
