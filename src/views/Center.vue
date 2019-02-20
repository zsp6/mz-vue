<template>
  <div>
    <div class="my">
      <div class="my-header">
        <em class="iconfont icon-xiugaigerentouxiang-"></em>
        <div class="nick-name">立即登录</div>
      </div>
      <ul class="nav">
        <li>
          <em class="iconfont icon-qiaquan"></em>
          <span>电影订单</span>
        </li>
        <li>
          <em class="iconfont icon-ziyuanjk"></em>
          <span>拼团订单</span>
        </li>
      </ul>
      <div class="my-card">
        <em class="iconfont icon-card"></em>
        <span>卖座卡</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="yue">
        <em class="iconfont icon-yue"></em>
        <span>余额</span>
        <i>
          <strong>
            <i>￥</i>
            <i>0&nbsp;</i>
          </strong>
          <i class="iconfont icon-youjiantou"></i>
        </i>
      </div>
      <div class="shezhi">
        <em class="iconfont icon-shezhi2"></em>
        <span>设置</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.my{
  .my-header {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: flex;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
    .icon-xiugaigerentouxiang-{
      font-size: 67px;
    }
    .nick-name {
      font-size: 16px;
      padding-left: 20px;
    }
  }
  .nav {
    width: 100%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      flex-flow: column;
      span {
        color: #797d82;
      }
      em {
        font-size: 26px;
      }
    }
    li:first-child{
      em{
        color: #ffc82f;
        margin-bottom: 8px;
      }
    }
    li:last-child{
      em {
        color: #637406;
        margin-bottom: 8px;
      }
    }
  }
  .my-card,.shezhi{
    height: 49px;
    border-bottom: 1px solid #ededed;
    background: #fff;
    padding: 0 15px;
    line-height: 49px;
    span {
      display: inline-block;
      width: 279px;
      margin-left: 15px;
      color: #191a1b;
      font-size: 16px;
    }
    em {
      font-size: 20px;
      color: pink
    }
  }
  .yue{
    height: 49px;
    border-bottom: 1px solid #ededed;
    background: #fff;
    padding: 0 15px;
    line-height: 49px;
    em{
      font-size: 20px;
      color: pink;
    }
    span {
      display: inline-block;
      width: 250px;
      margin-left: 15px;
      color: #191a1b;
      font-size: 16px;
    }
    i{
      strong{
        i:first-child {
          font-size: 14px;
          color: #797d82;
        }
        i:last-child {
          font-size: 16px;
          color: #797d82;
        }
      }
    }
  }
}
</style>
