<template>
  <div>
    <div class="main">
      <ul>
        <router-link tag="li" to="/detail/100" v-for="(item,index) in nowPlayList" :key="index">
          <div class="left">
            <img :src="item.poster" style="width:66px;height: 90.81px; display: block">
          </div>
          <div class="center">
            <p>
              <span>{{ item.name }}&nbsp;</span>
              <span>{{ item.filmType.name }}</span>
            </p>
            <p>&nbsp;</p>
            <p>
              <span>主演：{{item.actors ? item.actors.map(films => films.name).join(' ') : '暂无主演'}}</span>
            </p>
            <p>
              <span>上映日期: {{ coming(item) }}</span>
            </p>
          </div>
        </router-link>
      </ul>
      <p v-if="this.pageNum < this.pages" @click="loadMode" class="load-more"><span>点击加载更多</span></p>
      <p v-else class="end">到底啦</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data () {
    return {
      nowPlayList: [],
      pageNum: 1,
      pageSize: 10,
      totals: 0 // 总页
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.totals / this.pageSize);
    }
  },
  methods: {
    coming (prop) {
      var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      var n = new Date(prop.premiereAt * 1000);
      var m = Number(n.getMonth() + 1);
      var d = n.getDate();
      var w = n.getDay();
      return (week[w] + ' ' + m + '月' + d + '日');
    },
    soomFilm () {
      this.$http.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 152900,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 2,
          k: 5821513
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154812358253596896886810"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        let data = res.data.data.films;
        this.nowPlayList = this.nowPlayList.concat(data);
        this.totals = res.data.data.total;
      })
    },
    loadMode () {
      this.pageNum++;
      this.soomFilm();
    }
  },
  created () {
    this.soomFilm();
  }
}
</script>

<style lang="less">
  .load-more{
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 10px;
    span{
      font-size: 14px;
      border: 1px solid #e7e7e7;
      border-radius: 20%;
      width: 130px;
      background: pink;
      display: inline-block;
    }
  }
  .end{
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 10px 0;
  }
</style>
