<template>
  <div class="mz-city">
    <div class="dingwei">
      <div class="now-city">
        <div class="now-city-left" @click="gofilm">
          <em class="iconfont icon-shanchu"></em>
        </div>
        <div class="now-city-title">
          <span>当前城市 - {{ curCityName }}</span>
        </div>
      </div>
      <div class="search">
        <div class="input-warp">
          <i class="iconfont icon-fangdajing"></i>
          <input type="text" placeholder="输入城市名或拼音" class="txt">
        </div>
      </div>
    </div>
    <div class="city-main">
      <ul class="city-main-left">
        <div class="city-main-top">
          <div class="gps-city">
            <p>GPS定位你所在城市</p>
            <div>
              <span>定位失败</span>
            </div>
          </div>
          <div class="hot-city">
            <p>热门城市</p>
            <ul>
              <li>
                <span>北京</span>
              </li>
              <li>
                <span>上海</span>
              </li>
              <li>
                <span>广州</span>
              </li>
              <li>
                <span>深圳</span>
              </li>
            </ul>
          </div>
        </div>
        <li v-for="(item,index) in filterCityData" :key="index" :id="item.py">
          <p>{{ item.py }}</p>
          <ul>
            <li v-for="city in item.list" :key="city.cityId" @click="changeCity(city)" >
              <span>{{ city.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="city-main-right">
        <ul>
          <li v-for="(item,index) in filterLetters" :key="index" @click="hit(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
/**
 * PS: 在组件中使用 mapState mapGetters 是放在 computed
 *     在组件中使用 mapMutations mapActions 是放在 methods
 */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['cityData', 'curCityName']),
    ...mapGetters(['filterCityData', 'filterLetters'])
  },
  // computed: {
  //   cityData () {
  //     return this.$store.state.cityData;
  //   },
  //   curCityName () {
  //     return this.$store.state.curCityName;
  //   },
  //   filterCityData () {
  //     return this.$store.getters.filterCityData;
  //   },
  //   filterLetters () {
  //     return this.$store.getters.filterLetters;
  //   }
  // },
  methods: {
    gofilm () {
      return this.$router.push('@/views/Home/Film/Index.vue');
    },
    // 给组件加一个方法,这个方法其实就是 mutation
    ...mapMutations(['chgCityData', 'chgCityName']),
    ...mapActions(['getCityData']),
    /**
     * 右侧的拼音首字母点击
     * @param {String} py 点击的首字母
     */
    hit (py) {
      // 1. 得到左侧距离顶部的距离
      var el = document.getElementById(py);
      // console.log(el.offsetTop);
      // 2. 操作滚动条滚动
      document.documentElement.scrollTop = el.offsetTop;
    },
    /**
     * 切换城市
     * @param {Object} city 城市对象
     */
    changeCity (city) {
      // this.curCityName = city.name;
      // this.$store.commit('chgCityName', {
      //   name: city.name,
      //   age: 21
      // });
      this.chgCityName({
        name: city.name,
        age: 12
      });
      this.$router.back();
    }
  },
  created () {
    // this.getCityData();
    // 调用仓库中的 action 的 dispatch 方法
    // this.$store.dispatch('getCityData');
    this.getCityData();
  }
};
</script>

<style lang="less">
.dingwei{
  height: 94px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: #fff;
}
.now-city {
  height: 44px;
  line-height: 44px;
  display: flex;
}
.mz-city {
  padding-top: 94px;
}
.now-city-left {
  width: 50px;
  text-align: center;
  em {
    font-size: 20px;
  }
}
.now-city-title {
  width: 260px;
  height: 44px;
  text-align: center;
  font-size: 18px;
}
.search {
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #f4f4f4;
}
.input-warp {
  text-align: center;
  position: relative;
  i {
    position: absolute;
    left: 20px;
  }
}
.txt {
  background: #fff;
  width: 300px;
  height: 30px;
  outline: none;
  border: 0;
  border-radius: 5px;
  padding-left: 30px;
}
.input-warp input::-webkit-input-placeholder {
  color: #797d82;
}
.city-main-right {
  position: fixed;
  width: 27px;
  margin-top: 94px;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.city-main-top {
  background-color: #fff;
  padding-left: 15px;
  padding-top: 15px;
}
.gps-city > p {
  font-size: 13px;
  color: #797d82;
}
.gps-city > div {
  margin-top: 10px;
  height: 45px;
}
.gps-city > div > span {
  width: 94px;
  text-align: center;
  height: 30px;
  display: inline-block;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0 7.5px;
  font-size: 14px;
  color: #191a1b;
}
.hot-city > p {
  font-size: 13px;
  color: #797d82;
  margin-bottom: 10px;
}
.hot-city > ul > li {
  width: 94px;
  text-align: center;
  height: 30px;
  display: inline-block;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0 7.5px;
  font-size: 14px;
  color: #191a1b;
  margin-bottom: 15px;
}
.city-main-left > li > p {
  background-color: #f4f4f4;
  color: #797d82;
  padding: 0 0 0 15px;
  height: 30px;
  line-height: 30px;
}
.city-main-left > li > ul {
  padding: 0 0 0 15px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
}
.city-main-left > li > ul > li {
  background-color: #fff;
  height: 100%;
  line-height: 48px;
  font-size: 14px;
  width: 109px;
  text-align: center;
  border-bottom: 1px solid #ededed;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.city-main-right > ul > li {
  font-size: 11px;
  padding: 0 6px;
  color: #191a1b;
}
</style>
