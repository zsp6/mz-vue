<template>
  <div>
    <div class="c-head">
      <div class="header">
        <div class="left">
          <i>北京</i>
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
        <li>
          <a href="#">
            <div class="left">
              <span>保利国际影城北京天安门店</span>
              <span>北京市西城区前门煤市街北京坊C1区，B1\B2层</span>
            </div>
            <div class="right">
              <span>
                <i>￥</i>
                <i>40</i>
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
