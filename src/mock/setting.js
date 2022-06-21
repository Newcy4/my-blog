import Mock from 'mockjs'
import myAvatar from '@/assets/myAvatar.jpg'
import qqQrCode from '../../public/img/qq.jpg'
import weixinQrCode from '../../public/img/weixin.jpg'
Mock.mock('/api/setting', 'get', {
  code: 0,
  msg: '',
  data: {
    avatar: myAvatar,
    siteTitle: '阿四的小窝',
    github: 'https://github.com/DuYi-Edu',
    qq: '779213589',
    qqQrCode,
    weixin: 'alv1444',
    weixinQrCode,
    mail: '779213589@qq.com',
    icp: '粤ICP备17001719号',
    githubName: 'github账号',
    favicon: 'http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f'
  }
})
