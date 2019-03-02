<template>
  <div>
    <ul class="main">
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
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data () {
    return {
      nowPlayList: []
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
    }
  },
  created () {
    this.$http.get('https://m.maizuo.com/gateway?cityId=152900&pageNum=1&pageSize=10&type=2&k=5821513', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154812358253596896886810"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      let data = res.data.data.films;
      this.nowPlayList = data;
    })
  }
}
</script>
