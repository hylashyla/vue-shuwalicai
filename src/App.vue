<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    (function() {
      var viewport = document.querySelector("meta[name=viewport]");
      var passDeviceList = [/MiuiBrowser/i, /MI\s4W/i, /HUAWEI/i, /walletapp/];
      var pass = passDeviceList.some(function(item) {
        return item.test(navigator.userAgent);
      });
      if ((document.documentElement.getBoundingClientRect().width
        && window.screen.width > document.documentElement.getBoundingClientRect().width) || pass) {
        var clientWidth = document.documentElement.getBoundingClientRect().width;
        clientWidth = (window.innerWidth < clientWidth && window.innerWidth !== 0) ? window.innerWidth : clientWidth;
        window.scaleInfo = {
          scaleRatio: clientWidth / 375,
          scaleType: 0
        };
        var fontSize = window.scaleInfo.scaleRatio * 20;
        // 偶现fontsize计算结果为0，强制写为20
        fontSize = fontSize || 20;
        document.documentElement.style.cssText = 'font-size:' + fontSize + 'px!important;';
      }
      else {
        if (viewport) {
          viewport.setAttribute('content', 'width=750,user-scalable=0');
        }
        else {
          document.write('<meta name="viewport" content="width=750,user-scalable=0">')
        }
        window.scaleInfo = {
          scaleRatio: 2,
          scaleType: 1
        };
      }
    })();
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
