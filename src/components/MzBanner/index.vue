<template>
  <div class="swiper-container mz-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
       v-for="item in bannerList"
       :key="item.bannerId">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import axios from 'axios';
// import http from '@/utils/http.js'
export default {
  data () {
    return {
      // 轮播图的数据
      bannerList: [],
      // 轮播图的实例对象
      mySwiper: null
    }
  },
  methods: {
    initSwiper () {
      /* eslint-disable */
      this.mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
      /* eslint-enable */
    }
  },
  created () {
    this.$http.get('https://m.maizuo.com/gateway?type=2&cityId=110100&k=6538420', {
      headers: {
        // 配置请求头
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154812358253596896886810"}',
        'X-Host': 'mall.cfg.common-banner'
      },
      params: {
        pageSize: 10
      }
    }).then((res) => {
      // console.log(res);
      let data = res.data;
      if (data.status === 0) {
        this.bannerList = data.data;
        this.$nextTick(() => {
          this.initSwiper();
        })
      } else {
        alert('网络异常,请稍后重试')
      }
    })
  }
};
</script>

<style lang="less">
.mz-banner {
  height: 210px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
