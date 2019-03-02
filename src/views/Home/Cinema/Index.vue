<template>
  <div>
    <div class="c-head">
      <div class="header">
        <div class="left" @click="goCity">
          <i>{{ curCityName }}</i>
          <em class="iconfont icon-xiajiantou"></em>
        </div>
        <div class="center">影院</div>
        <div class="right">
          <em class="iconfont icon-fangdajing"></em>
        </div>
      </div>
      <div class="nav">
        <div class="left">
          <span>全城</span>
          <em class="iconfont icon-xiajiantou"></em>
        </div>
        <div class="right">
          <span>最近去过</span>
          <em class="iconfont icon-xiajiantou"></em>
        </div>
      </div>
    </div>

    <div class="c-main">
      <ul>
        <li v-for="(item, index) in cinemasList" :key="index">
          <a href="#">
            <div class="left">
              <span>{{ item.name }}</span>
              <span>{{ item.address }}</span>
            </div>
            <div class="right">
              <span>
                <i>￥</i>
                <i>{{ item.lowPrice/100 }}</i>
                <i>起</i>
              </span>
              <span>距离未知</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data () {
    return {
      cinemasList: []
    }
  },
  methods: {
    goCity () {
      this.$router.push('/city');
    }
  },
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  },
  created () {
    this.$http.get('https://m.maizuo.com/gateway?cityId=440100&k=8644876', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154812358253596896886810"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      // console.log(res);
      let data = res.data;
      if (data.status === 0) {
        this.cinemasList = data.data.cinemas;
        // console.log(this.cinemasList);
      } else {
        alert('网络异常,请稍后重试')
      }
    })
  }
}
</script>

<style lang="less">
.c-head{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: #fff;
}
.header {
  height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededed;
}
.header .left {
  width: 54px;
  font-size: 14px;
  margin-left: 15px;
}
.header .center {
  font-size: 18px;
  width: 222px;
  text-align: center;
}
.header .right {
  width: 54px;
  text-align: right;
}
.nav {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #191a1b;
  font-size: 14px;
  border-bottom: 1px solid #ededed;
}
.c-main{
  margin-top: 96px;
  margin-bottom: 50px;
}
.c-main ul li {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ededed;
}
.c-main ul li a {
  display: flex;
}
.c-main ul li a .left {
  width: 250px;
  margin-right: 15px;
}
.c-main ul li a .left span:first-child {
  color: #191a1b;
  font-size: 16px;
}
.c-main ul li a .left span:last-child {
  color: #797d82;
  font-size: 12px;
  display: block;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  margin-top: 5px;
}
.c-main ul li a .right {
  width: 65px;
  text-align: right;
}
.c-main ul li a .right span:first-child {
  color: #ff5f16;
}
.c-main ul li a .right span:first-child i:nth-child(1) {
  font-size: 12px;
}
.c-main ul li a .right span:first-child i:nth-child(2) {
  font-size: 16px;
}
.c-main ul li a .right span:first-child i:nth-child(3) {
  font-size: 10px;
}
.c-main ul li a .right span:last-child {
  display: inline-block;
  margin-top: 5px;
  color: #797d82;
}
</style>
