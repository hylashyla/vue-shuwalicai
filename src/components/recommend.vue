<template>
    <div class="licai cash">
        <div class="title">
            <span class="left">余额盈</span>
        </div>
        <div class="content-wrapper">
            <div class="content">
                <div class="profit">4.097%</div>
                <div class="profit-label">七日年化收益率</div>
                <button class="btn-cash-pay">立即转入</button>
            </div>
            <div class="tag-top-line"></div>
            <div class="tag-wrapper">
                <span class="tag">随存随取</span>
                <span class="tag">稳健货基</span>
                <span class="tag">购买定期理财无限额</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
      return {

      }
  }
}
</script>

<style scoped>

#homepage .title {
    border-bottom: none;
}
#homepage .licai .content-wrapper {
    margin: 0 .75rem .75rem;
    background: #f5f8fc;
    padding: .9rem .75rem .75rem;
    position: relative;
}

#homepage .licai .content {
    padding-bottom: .75rem;
}
#homepage .licai .content .profit {
    font-family: DINAlternate-Bold;
    font-size: 1.6rem;
    color: #fa6446;
}
#homepage .licai .content .profit-label {
    font-family: PingFangSC-Light;
    color: #a6acb8;
    font-size: .6rem;
}
#homepage .licai .content .btn-cash-pay {
    position: absolute;
    right: .75rem;
    top: 1.15rem;
    border: none;
    background: #ff7357;
    color: #fff;
    font-size: .65rem;
    height: 1.3rem;
    padding: 0 .35rem;
    outline: none;
}

#homepage .licai .content-wrapper .tag-top-line {
    height: 1px;
    background: url(../assets/imgs/tag-top-line.png) 50% no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}

#homepage .licai .content-wrapper .tag-wrapper {
    padding-top: .7rem;
    overflow: hidden;
}
#homepage .licai .content-wrapper .tag {
    background: #deb96f;
    color: #fff;
    font-size: .55rem;
    line-height: .8rem;
    padding: 0 .15rem;
    margin-left: .45rem;
    float: left;
}
#homepage .licai .content-wrapper .tag:first-child {
    margin-left: 0;
}
</style>


