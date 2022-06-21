// 导入需要的组件
// import Home from '@/views/Home'
// import Blog from '@/views/Blog'
// import About from '@/views/About'
// import Message from '@/views/Message'
// import Project from '@/views/Project'
// import BlogDetail from '@/views/Blog/Detail.vue'
import NotFound from '@/views/NotFound.vue'

// 为了适应github pages的url,如果在本地运行，请改为空字符串
const baseUrl = '/my-blog'

const routes = [
  {
    path: baseUrl + '/index.html',
    redirect: baseUrl + '/'
  },
  {
    name: 'Home',
    path: baseUrl + '/',
    // component: Home,  // 为了分页优化，就不直接导入组件了
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home'), //设置webpackChunkName其实就是为了方便查看打包结果，可以设置也可以不设置
    meta: {
      title: '首页'
    }
  },
  {
    name: 'Blog',
    path: baseUrl + '/article',
    // component: Blog,
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog'),
    meta: {
      title: '文章'
    }
  },
  {
    name: 'CategoryBlog',
    path: baseUrl + '/article/cate/:categoryId',
    // component: Blog,
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog'),
    meta: {
      title: '文章'
    }
  },
  {
    name: 'BlogDetail',
    path: baseUrl + '/article/:id',
    // component: BlogDetail,
    component: () => import(/* webpackChunkName: "blogdetail" */ '@/views/Blog/Detail.vue'),
    meta: {
      title: '文章详情'
    }
  },
  {
    name: 'About',
    path: baseUrl + '/about',
    // component: About,
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
    meta: {
      title: '关于我'
    }
  },
  {
    name: 'Message',
    path: baseUrl + '/message',
    // component: Message,
    component: () => import(/* webpackChunkName: "message" */ '@/views/Message'),
    meta: {
      title: '留言板'
    }
  },
  {
    name: 'Project',
    path: baseUrl + '/project',
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
