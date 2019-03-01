<template>
  <div class="list">
    <ul>
      <li :class="{'active': filmType === 'nowPlaying'}" @click="go('nowPlaying')">
        <span>正在热映</span>
      </li>
      <li :class="{'active': filmType === 'ComingSoon'}" @click="go('ComingSoon')">
        <span>即将热映</span>
      </li>
      <div class="tab-wrapper" :style="[
            {width: '50%'},
            {transform: filmType === 'nowPlaying' ? 'translate3d(0%, 0px, 0px)' : 'translate3d(100%, 0px, 0px)' }
          ]"><span class="tab-ink" style="width:56px;"></span></div>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState([
      'filmType'
    ])
  },

  methods: {
    ...mapMutations([
      'chgFilmType'
    ]),

    go (name) {
      this.chgFilmType(name);
      this.$router.replace('/films/' + name);
    }
  }
}
</script>

<style lang="less">
.list{
  height: 49px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededed;
  background: #fff;
  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: relative;
    li{
      display: flex;
      justify-content: space-around;
      font-size: 14px;
    }
    .tab-wrapper{
      position: absolute;
      margin: auto;
      top: 32px;
      left: 0;
      .tab-ink{
        border-bottom: 2px solid #ff5f16;
        border-radius: 20px;
        display: block;
        margin: auto;
      }
    }
  }
}
</style>
