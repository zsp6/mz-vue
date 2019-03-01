<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/films">
          <em class="iconfont icon-dianying"></em>
          <span>电影</span>
        </router-link>
      </li>
      <li>
        <router-link to="/cinemas">
          <em class="iconfont icon-yingyuana"></em>
          <span>影院</span>
        </router-link>
      </li>
      <li>
        <router-link to="/tuan">
          <em class="iconfont icon-tuangou"></em>
          <span>9.9拼团</span>
        </router-link>
      </li>
      <li>
        <router-link to="/center">
          <em class="iconfont icon-shouye"></em>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  ul{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a{
      display: flex;
      flex-flow: column;
      align-items: center;
      color: #797d82;
      em{
        font-size: 21px;
        margin-bottom: 3px;
      }
      &.router-link-active{
        color: #ff5f16;
      }
    }
  }
}
</style>
