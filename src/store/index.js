// 仓库文件
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
// 创建仓库
let store = new Vuex.Store({
  // 选项对象
  // 转态 - 项目中需要用的到数据 (需要在多个组件中使用的数据)
  state: {
    // 当前定位的或者切换的城市
    curCityName: '',
    // 城市列表数据
    cityData: [],
    // 影片类型
    filmType: 'nowPlaying'
  },
  getters: {
    /**
     * 对 state 中的 cityData 做二次处理 并返回数据
     * @param {Object} state 仓库中的state
     */
    filterCityData (state) {
      let hash = {};
      let i = 0;
      let res = [];
      state.cityData.forEach(item => {
        // 1. 得到当前城市的首字母
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        // 2. 判断当前城市的首字母是循环过程中第一次出现,还是多次出现.
        if (hash[firstLetter]) {
          // 存在
          let index = hash[firstLetter] - 1;
          res[index].list.push(item);
        } else {
          // 不存在
          hash[firstLetter] = ++i;
          let obj = {};
          obj.py = firstLetter;
          obj.list = [item];
          res.push(obj);
        }
      });
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      });
      return temp;
    },
    /**
     * 右侧显示的字母的数据
     * @param {Object} state 仓库中的 state
     * @param {Object} getters 仓库中的 getters
     */
    filterLetters (state, getters) {
      return getters.filterCityData.map(item => {
        return item.py;
      });
    }
  },
  mutations: {
    chgFilmType (state, payload) {
      state.filmType = payload;
    },
    // key: value
    /**
     * 修改 curCityName
     * @param {Object} state 就是当前仓库的 state
     * @param {Object} payload 提交的载荷(参数)
     */
    chgCityName (state, payload) {
      state.curCityName = payload.name;
    },
    /**
     * 修改 cityData
     * @param {Object} state 就是当前仓库的 state
     * @param {Object} payload 提交的载荷(参数)
     */
    chgCityData (state, payload) {
      state.cityData = payload
    }
  },
  actions: {
    /**
    获取城市列表数据
     */
    getCityData ({ state, getters, commit }) {
      axios.get('./json/city.json').then(response => {
        let res = response.data;
        if (res.status === 0) {
          // this.cityData = res.data.cities;
          // this.$store.commit('chgCityData', res.data.cities);
          // this.changeCity(res.data.cities);
          commit('chgCityData', res.data.cities);
        } else {
          alert(res.msg);
        }
      });
    },
    /**
     * 调用百度 api 获取当前城市名称
     */
    getCityName ({ commit }) {
      /* eslint-disable */
      var myCity = new BMap.LocalCity();
      myCity.get((result) => {
        commit('chgCityName', {
          name: result.name.substr(0, 2),
          id: result.id
        })
      });
    }
  }
})
export default store;
