// 导入需要的组件
// import Home from '@/views/Home'
// import Blog from '@/views/Blog'
// import About from '@/views/About'
// import Message from '@/views/Message'
// import Project from '@/views/Project'
// import BlogDetail from '@/views/Blog/Detail.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/index.html',
    redirect: '/'
  },
  {
    name: 'Home',
    path: '/',
    // component: Home,  // 为了分页优化，就不直接导入组件了
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home'), //设置webpackChunkName其实就是为了方便查看打包结果，可以设置也可以不设置
    meta: {
      title: '首页'
    }
  },
  {
    name: 'Blog',
    path: '/article',
    // component: Blog,
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog'),
    meta: {
      title: '文章'
    }
  },
  {
    name: 'CategoryBlog',
    path: '/article/cate/:categoryId',
    // component: Blog,
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog'),
    meta: {
      title: '文章'
    }
  },
  {
    name: 'BlogDetail',
    path: '/article/:id',
    // component: BlogDetail,
    component: () => import(/* webpackChunkName: "blogdetail" */ '@/views/Blog/Detail.vue'),
    meta: {
      title: '文章详情'
    }
  },
  {
    name: 'About',
    path: '/about',
    // component: About,
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
    meta: {
      title: '关于我'
    }
  },
  {
    name: 'Message',
    path: '/message',
    // component: Message,
    component: () => import(/* webpackChunkName: "message" */ '@/views/Message'),
    meta: {
      title: '留言板'
    }
  },
  {
    name: 'Project',
    path: '/project',
    // component: Project,
    component: () => import(/* webpackChunkName: "project" */ '@/views/Project'),
    meta: {
      title: '项目&效果'
    }
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound
  }
]

export default routes
