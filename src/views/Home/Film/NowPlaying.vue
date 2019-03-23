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
              <span>{{ item.item.name }}</span>
            </p>
            <p>
              <span>观众评分&nbsp;</span>
              <span>{{ item.grade }}</span>
            </p>
            <p>
              <span>主演：{{item.actors ? item.actors.map(films => films.name).join(' ') : '暂无主演'}}</span>
            </p>
            <p>
              <span>{{ item.nation }} | {{ item.runtime }}</span>
            </p>
          </div>
          <div class="right">
            <span>购票</span>
          </div>
        </router-link>
      </ul>

      <p v-if="pageNum < pages" @click="loadMore" class="load-more"><span>点击加载更多</span></p>
      <p v-else class="end">我是有底线的，别拉啦。</p>
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
      total: 0
    }
  },
  computed: {
    // pages  一共多少页
    pages () {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    getFilmData () {
      this.$http.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 440300,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 1,
          k: 1647641
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154812358253596896886810"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        // console.log(res);
        let data = res.data.data.films;
        // this.nowPlayList = data;
        // 让数据追加
        this.nowPlayList = this.nowPlayList.concat(data);
        this.total = res.data.data.total;
      })
    },
    loadMore () {
      this.pageNum++;
      this.getFilmData();
    }
  },
  created () {
    this.getFilmData();
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
