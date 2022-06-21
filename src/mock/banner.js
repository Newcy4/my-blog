import Mock from 'mockjs'
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'

// 参数：接口，请求方法，模拟数据(数组)
Mock.mock('/api/banner', 'get', {
  code: 0,
  msg: '',
  data: [
    // {
    //   id: '1',
    //   midImg: 'http://mdrs.yuanjin.tech/img/20201031141507.jpg',
    //   bigImg: 'http://mdrs.yuanjin.tech/img/20201031141350.jpg',
    //   title: '凛冬将至',
    //   description: '人唯有恐惧的时候方能勇敢'
    // },
    // {
    //   id: '2',
    //   midImg: 'http://mdrs.yuanjin.tech/img/20201031205550.jpg',
    //   bigImg: 'http://mdrs.yuanjin.tech/img/20201031205551.jpg',
    //   title: '血火同源',
    //   description: '如果我回头，一切都完了'
    // },
    // {
    //   id: '3',
    //   midImg: 'http://mdrs.yuanjin.tech/img/20201031204401.jpg',
    //   bigImg: 'http://mdrs.yuanjin.tech/img/20201031204403.jpg',
    //   title: '听我怒吼',
    //   description: '兰尼斯特有债必偿'
    // }
    {
      id: '1',
      midImg: 'http://mdrs.yuanjin.tech/img/20201031141507.jpg',
      bigImg: img1,
      title: '家乡的树',
      description: '急雨收残暑，梧桐一叶惊'
    },
    {
      id: '2',
      midImg: 'http://mdrs.yuanjin.tech/img/20201031205550.jpg',
      bigImg: img2,
      title: '长相思·山一程',
      description: '风一更，雪一更，聒碎乡心梦不成，故园无此声'
    },
    {
      id: '3',
      midImg: 'http://mdrs.yuanjin.tech/img/20201031204401.jpg',
      bigImg: img3,
      title: '借问江潮与海水',
      description: '相恨不如潮有信，相思始觉海非深'
    },
    {
      id: '4',
      midImg: 'http://mdrs.yuanjin.tech/img/20201031204401.jpg',
      bigImg: img4,
      title: '小孩子的画',
      description: '我们最终记住的不是热烈，而是存在于彼此之间温柔的细枝末节'
    }
  ]
})
