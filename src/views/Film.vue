<template>
  <div>
    <MzBanner></MzBanner>
    <div class="city-btn" @click="gocity">
      <span>深圳</span>
      <i class="iconfont icon-xiajiantou"></i>
    </div>
    <mz-tabs></mz-tabs>
    <ul class="main">
      <router-link tag="li" to="/detail/100">
        <a href="#">
          <div class="left">
            <img src="" style="width:.66rem;height: .9081; display: block" />
          </div>
          <div class="center">
            <p><span>流浪地球&nbsp;</span><span>2D</span></p>
            <p><span>观众评分&nbsp;</span><span>7.9</span></p>
            <p><span>主演：郭帆 屈楚萧 李光洁 吴孟达 赵今麦</span></p>
            <p><span>中国大陆 | 100分钟</span></p>
          </div>
          <div class="right"><span>购票</span></div>
        </a>
      </router-link>
      <router-link tag="li" to="/detail/200">喜剧之王</router-link>
      <router-link tag="li" to="/detail/300">美少女战士</router-link>
      <router-link tag="li" to="/detail/400">哈哈哈哈</router-link>
    </ul>
  </div>
</template>

<script>
import MzBanner from '../components/MzBanner';
import MzTabs from '../components/MzTabs';
export default {
  components: {
    MzBanner,
    MzTabs
  },
  methods: {
    gocity () {
      this.$router.push('/city');
    }
  }
}
</script>

<style lang="less">
  .city-btn{
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
  }
  .main{
    background: #fff;
    li{
      height: 124px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #ededed;
      a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .right{
          width: .5rem;
          height: .25rem;
          border: 1px solid #ff5f16;
          border-radius: .03rem;
          color: #ff5f16;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .center{
          padding: .1rem;
          color: #797d82;
          font-size: .14rem;
          width: 2.05rem;
          p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
          }
          p:first-child{
            font-size: .16rem;
            color: black;
            height: .22rem;
            display: flex;
            align-items: center;
            span:last-child{
              background: #d2d6dc;
              height: .14rem;
              line-height: .14rem;
              border-radius: .02rem;
              color: #fff;
              font-size: .1rem;
              padding: 0 .02rem;
            }
          }
          p:nth-child(2){
            span:last-child{
              font-size: .14rem;
              color: #ff5f16;
            }
          }
        }
      }
    }
  }
</style>
