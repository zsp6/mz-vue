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
            <span>上映日期: {{ '周' + new Date(item.premiereAt*1000).getDay() +' '+ Number(new Date(item.premiereAt*1000).getMonth()+1) + '月'+ new Date(item.premiereAt*1000).getDate() + '日'}}</span>
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      nowPlayList: []
    }
  },
  created () {
    axios.get('https://m.maizuo.com/gateway?cityId=152900&pageNum=1&pageSize=10&type=2&k=5821513', {
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
