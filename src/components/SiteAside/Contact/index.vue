<template>
  <ul class="contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github"></Icon>
        </div>
        <span>{{ data.githubName }}</span>
      </a>
      <!-- <div class="pop">
        <img src="@/../public/img/weixin.jpg" alt="" />
      </div> -->
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail"></Icon>
        </div>
        <span>{{ data.mail }}</span>
      </a>
      <!-- <div class="pop">
        <img src="@/../public/img/weixin.jpg" alt="" />
      </div> -->
    </li>
    <li>
      <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin"></Icon>
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon'
import { mapState } from 'vuex'

export default {
  components: {
    Icon
  },
  computed: {
    ...mapState('setting', ['data'])
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/var.less';
@import '@/styles/mixin.less';
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }
  .icon {
    width: 36px;
    font-size: 26px;
  }
  .pop {
    height: 150px;
    width: 150px;
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0); // 纵向展开动画0 -> 1
    transform-origin: center bottom; // 将展开原点设置为底部
    transition: 0.3s; // 过渡效果
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg); // rotate旋转45度
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
