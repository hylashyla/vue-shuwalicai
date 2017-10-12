<template>
  <div>
        <h5-header>
            <li class="logo"> <a class="home" href="/"></a> <a class="font"></a> </li>
            <li class="h5_title">活期理财</li>
            <li class="download">下载App</li>
        </h5-header>
        
        <div class="product-list">
            <div class="edu-doc"> {{ edu_doc }}</div>
            <div class="item-wraper" >
                <a class="list-item " data-href="product?productId=82000440" id="list-item-82000440" v-for="(item, index) in project_info_list">
                    <div class="corner-out red" v-if="item.licai_tab_desc != '立即转入'">
                        <div class="corner red">
                            <p>{{ item.licai_tab_desc.split('|')[0] }}</p>
                            <p>{{ item.licai_tab_desc.split('|')[1] }}</p>
                        </div>
                    </div>
                    <div class="product-title "> <img src="https://8.baidu.com/content/resource/insure/productList/app-icon-safe-2.png" alt="">
                        <span>{{ item.project_name }}</span>
                    </div>
                    <div class="tag-box"> </div>
                    <div class="item-left">
                        <div class="rate"> {{ parseFloat(item.yield_rate).toFixed(3) }} % </div>
                        <p>预期年化收益率</p>
                    </div>
                    <div class="item-right">
                        <div class="product-detail duration"> 理财期限
                            <span class="detail-num">
                                <span>{{ item.project_cycle }}</span>天</span>
                        </div>
                        <div class="product-detail">起投金额
                            <span class="detail-num">
                                <span>{{ item.trans_min_limit }}</span>元</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="sale-out"> 已售罄产品
                <i class="right"></i>
            </div>
            <div class="load-more">已经加载全部</div>
        </div>

  </div>
</template>

<script>
import H5Header from '../components/header'
export default {
    name: 'currentList',
    components: {
        H5Header
    },
    data () {
        return {
            edu_doc : "百度金融风控把关，严格筛选产品所投基础资产，标的资产安全可靠。收益稳健、本息安全，是理财安心之选。",
            project_info_list : [
                {
                    "summary": "35天持有期 | 3万元起投",
                    "project_name": "新客专享·百安1月170926",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 35,
                    "yield_rate": "6.000",
                    "trans_min_limit": 3000000,
                    "item_start_time": "2017-09-21 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "35天持有期 | 3万元起投",
                    "project_name": "父母理财·百康1月170926",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 35,
                    "yield_rate": "5.800",
                    "trans_min_limit": 3000000,
                    "item_start_time": "2017-09-19 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "35天持有期 | 5万元起投",
                    "project_name": "百富1月170926",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 35,
                    "yield_rate": "5.400",
                    "trans_min_limit": 5000000,
                    "item_start_time": "2017-09-19 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "35天持有期 | 1万元起投",
                    "project_name": "百安1月170926",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 35,
                    "yield_rate": "5.300",
                    "trans_min_limit": 1000000,
                    "item_start_time": "2017-09-19 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "70天持有期 | 1万元起投",
                    "project_name": "百安2月170928",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 70,
                    "yield_rate": "5.400",
                    "trans_min_limit": 1000000,
                    "item_start_time": "2017-09-21 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "181天持有期 | 10万元起投",
                    "project_name": "百盈6月170929",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 181,
                    "yield_rate": "6.100",
                    "trans_min_limit": 10000000,
                    "item_start_time": "2017-09-22 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "181天持有期 | 5万元起投",
                    "project_name": "百富6月170929",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 181,
                    "yield_rate": "6.050",
                    "trans_min_limit": 5000000,
                    "item_start_time": "2017-09-22 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "181天持有期 | 1万元起投",
                    "project_name": "百安6月170929",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 181,
                    "yield_rate": "6.000",
                    "trans_min_limit": 1000000,
                    "item_start_time": "2017-09-22 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "271天持有期 | 1万元起投",
                    "project_name": "百安9月170928",
                    "project_status_desc": "立即转入",
                    "licai_tab_desc": "立即转入",
                    "project_cycle": 271,
                    "yield_rate": "6.050",
                    "trans_min_limit": 1000000,
                    "item_start_time": "2017-09-21 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                },
                {
                    "summary": "34天持有期 | 3万元起投",
                    "project_name": "新客专享·百安1月170929",
                    "project_status_desc": "明日08:00开抢",
                    "licai_tab_desc": "明日|08:00开抢",
                    "project_cycle": 34,
                    "yield_rate": "6.000",
                    "trans_min_limit": 3000000,
                    "item_start_time": "2017-09-25 08:00:00",
                    "peaced_icon": "https://8.baidu.com/content/resource/insure/productList/app-icon-safe-3.png",
                }
            ]
        }
    },
    
}
</script>

<style>
.product-list .edu-doc {
    margin-bottom: .5rem;
    padding: .85rem .75rem .85rem 2.4rem;
    color: #222;
    font-size: .7rem;
    line-height: 1rem;
    background: url(../assets/imgs/edu-doc.png) no-repeat .75rem 1.05rem;
    -webkit-background-size: 1.3rem 1.3rem;
    background-size: 1.3rem 1.3rem;
    background-color: #fff;
    text-align: justify;
    max-height: 999999px;
}
.product-list .list-item:first-child {
    border: 0;
}
.product-list .list-item {
    position: relative;
    display: block;
    border-top: 1px solid #eee;
    background-color: #fff;
    padding: 1rem 0;
    overflow: hidden;
    text-decoration: none;
    color: #222;
    max-height: 999999px;
}
.product-list .product-title {
    line-height: 1rem;
    font-size: .7rem;
    padding: 0 .75rem 0 1.7rem;
    position: relative;
    margin-bottom: 0;
    font-family: PingFangSC-Regular;
}
.product-list .product-title img {
    position: absolute;
    left: .75rem;
    top: .075rem;
    height: .7rem;
}
.product-list .tag-box {
    margin: 0 1.7rem .65rem;
    font-size: 0;
}
.product-list .item-left {
    float: left;
    width: 40%;
    text-align: left;
    padding-left: 1.7rem;
    color: #bcbcbc;
    font-size: .55rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.product-list .item-left .rate {
    position: relative;
    line-height: 1.55rem;
    margin-bottom: .1rem;
    color: #fb5a5c;
    font-size: 1.5rem;
    font-family: DINAlternate-Bold;
}
.product-list .item-right {
    padding: 0;
    padding-left: 14%;
    border-left: 1px solid #e6e6e6;
    overflow: hidden;
    min-height: 2.125rem;
}
.product-list .item-right .product-detail {
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: .55rem;
    color: #bcbcbc;
}
.product-list .item-right .duration {
    margin-bottom: .55rem;
}
.product-list .item-right .product-detail .detail-num {
    font-family: DIN-Regular;
    color: #222;
}
.product-list .item-right .product-detail .detail-num span {
    margin-right: .25rem;
    font-size: .9rem;
    padding: 0 .025rem 0 .075rem;
    font-family: DIN-Regular;
    line-height: 1;
}
.product-list .list-item .corner-out {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 2px solid #bcbcbc;
    border-bottom-color: #fff;
    width: 3.35rem;
    height: 3.35rem;
    -webkit-transform: translate(.5rem,.8rem) rotate(-30deg);
    -ms-transform: translate(.5rem,.8rem) rotate(-30deg);
    transform: translate(.5rem,.8rem) rotate(-30deg);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    padding: .15rem;
}
.product-list .list-item .corner-out .corner.red, .product-list .list-item .corner-out.red {
    border-color: #fb5a5c;
    border-bottom-color: #fff;
    color: #fb5a5c;
}
.product-list .list-item .corner-out .corner {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: .525rem;
    border: 1px solid #bcbcbc;
    border-bottom-color: #fff;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    font-size: .55rem;
    color: #aaa;
    text-align: center;
}
.product-list .list-item .corner-out .corner.red p {
    font-size: .5rem;
}
.product-list .sale-out {
    overflow: hidden;
    height: 2.2rem;
    line-height: 2.2rem;
    padding: 0 .75rem;
    margin-top: .5rem;
    background-color: #fff;
    color: #222;
    font-size: .75rem;
}
.product-list .sale-out .right {
    display: block;
    float: right;
    height: 2.2rem;
    width: .5rem;
    background: url(../assets/imgs/right.png) 0 no-repeat;
    -webkit-background-size: .5rem .8rem;
    background-size: .5rem .8rem;
}
.product-list .load-more {
    color: #8994a5;
    font-size: .7rem;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
}
</style>


