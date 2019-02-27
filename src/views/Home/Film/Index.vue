<template>
  <div>
    <MzBanner></MzBanner>
    <div class="city-btn" @click="gocity">
      <span>{{ curCityName }}</span>
      <i class="iconfont icon-xiajiantou"></i>
    </div>
    <mz-tabs></mz-tabs>
    <!-- 三级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MzBanner from '@/components/MzBanner';
import MzTabs from '@/components/MzTabs';
export default {
  components: {
    MzBanner,
    MzTabs
  },
  methods: {
    gocity () {
      this.$router.push('/city');
    }
  },
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  }
};
</script>

<style lang="less">
.city-btn {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
.main {
  background: #fff;
  margin-bottom: 44px;
  li {
    height: 124px;
    display: flex;
    align-items: center;
    margin: 0 15px;
    justify-content: space-around;
    border-bottom: 1px solid #ededed;
    .right {
      width: 50px;
      height: 25px;
      border: 1px solid #ff5f16;
      border-radius: 3px;
      color: #ff5f16;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    .center {
      padding: 10px;
      color: #797d82;
      font-size: 14px;
      width: 205px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
      p:first-child {
        font-size: 16px;
        color: black;
        height: 22px;
        display: flex;
        align-items: center;
        span:last-child {
          background: #d2d6dc;
          height: 14px;
          line-height: 14px;
          border-radius: 2px;
          color: #fff;
          font-size: 10px;
          padding: 0 2px;
        }
      }
      p:nth-child(2) {
        span:last-child {
          font-size: 14px;
          color: #ff5f16;
        }
      }
    }
  }
}
</style>
