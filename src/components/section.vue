<template>
    <div>
        <div class="licai" v-for="(col, index) in columns" :key="index" >
            <div class="title">
                <span class="left">{{ col.column_name }}</span>
                <span class="right">{{ col.column_introduce }}</span>
            </div>
            <div class="product-list">
                <router-link
                :class="['list-item','list-item-new']"
                v-if="col.column_list_type === 1"
                v-for="(item, index) in col.column_list"
                :key="index"
                tag="div"
                :to="item.detail_url"
                >
                    <div class="product-title">
                        <template v-if="item.safe_item">
                            <img :src="icon_safe.src" alt="">
                        </template>
                        
                        <span>{{ item.item_name }}</span>
                    </div>

                    <div class="item-left">
                        <div class="rate">{{ Math.round(item.profit_rate_value*100)/100 }}%</div>
                        <p>{{ item.profit_rate_name }} </p>
                    </div>
                    <div class="item-right">
                        <div class="product-detail duration"> {{ item.purchaseSellDescLabel }}
                            <span class="detail-num lt-fz">
                                <span>{{ item.itemDuration }}</span>天
                            </span>
                        </div>
                        <div class="product-detail">起投金额
                            <span class="detail-num">
                                <span>{{ item.itemMinPurchase }}</span>元</span>
                        </div>
                    </div>
                </router-link>

                <router-link 
                :class="['product-detail','list-item-new']"
                v-if="col.column_list_type === 2"
                v-for="(item,index) in col.column_list"
                :key="index"
                tag="div"
                :to="item.detail_url"
                >
                    <div class="detail-left">
                        <div class="shouyi">{{ Math.round(item.profit_rate_value*100)/100 }}%</div>
                        <div class="tip">{{ item.profit_rate_name }}</div>
                    </div>
                    <div class="detail-right">
                        <div class="name ">{{ item.item_name }}
                            <i>{{ item.item_type_decs }}</i>
                        </div>
                        <div class="info">{{ item.item_label }}</div>
                    </div>
                </router-link>

            </div>
            
            <router-link :class="'more'"  tag="div" :to="col.more_url">查看更多活期理财</router-link>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            icon_safe: {
                src: require('../assets/imgs/app-icon-safe-2.png')
            },
            columns: [
                {
                    column_name: "精选活期",
                    column_introduce: "高收益活期理财",
                    column_list_type: 1,
                    column_list: [
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "随存随取",
                            "itemMinPurchase": "100",
                            "needLogin": 0,
                            "onlineTime": 1500293842000,
                            "offlineTime": 1567253842000,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": false,
                            "item_name": "百赚利滚利版(嘉实活期宝)",
                            "item_label": "随存随取 | 1元起投",
                            "profit_rate_name": "七日年化收益率",
                            "profit_rate_value": "4.1480",
                            "safe_item": false,
                            "item_id": "4",
                            "item_type": 1,
                            "item_type_decs": "",
                            "can_show_detail": true,
                            "item_status": -1,
                            "item_status_desc": "",
                            "detail_url": "https://8.baidu.com/fm/balance/product-detail.html?itemId=4",
                            "item_tab_desc": ""
                        }
                    ],
                    "more_url": "/currentList",
                    "show_more": "查看更多活期理财"
                },
                {
                    "column_name": "精选定期",
                    "column_introduce": "收益安心享",
                    column_list_type: 1,
                    "column_list": [
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "34",
                            "itemMinPurchase": "3000000",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": true,
                            "item_name": "新客专享·百安1月170922",
                            "item_label": "34天持有期 | 3万元起投",
                            "profit_rate_name": "预期年化收益率",
                            "profit_rate_value": "6.000",
                            "safe_item": true,
                            "item_id": "82000429",
                            "item_type": 2,
                            "item_type_decs": "",
                            "can_show_detail": true,
                            "item_status": 2,
                            "item_status_desc": "立即转入",
                            "detail_url": "https://8.baidu.com/fm/licai/fixed/index.html#product?productId=82000429",
                            "item_tab_desc": "立即转入"
                        },
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "35",
                            "itemMinPurchase": "3000000",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": true,
                            "item_name": "父母理财·百康1月170926",
                            "item_label": "35天持有期 | 3万元起投",
                            "profit_rate_name": "预期年化收益率",
                            "profit_rate_value": "5.800",
                            "safe_item": true,
                            "item_id": "82000432",
                            "item_type": 2,
                            "item_type_decs": "",
                            "can_show_detail": true,
                            "item_status": 2,
                            "item_status_desc": "立即转入",
                            "detail_url": "https://8.baidu.com/fm/licai/fixed/index.html#product?productId=82000432",
                            "item_tab_desc": "立即转入"
                        },
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "181",
                            "itemMinPurchase": "10000000",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": true,
                            "item_name": "百盈6月170922",
                            "item_label": "181天持有期 | 10万元起投",
                            "profit_rate_name": "预期年化收益率",
                            "profit_rate_value": "6.100",
                            "safe_item": true,
                            "item_id": "82000428",
                            "item_type": 2,
                            "item_type_decs": "",
                            "can_show_detail": true,
                            "item_status": 2,
                            "item_status_desc": "立即转入",
                            "detail_url": "https://8.baidu.com/fm/licai/fixed/index.html#product?productId=82000428",
                            "item_tab_desc": "立即转入"
                        },
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "70",
                            "itemMinPurchase": "1000000",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": true,
                            "item_name": "百安2月170928",
                            "item_label": "70天持有期 | 1万元起投",
                            "profit_rate_name": "预期年化收益率",
                            "profit_rate_value": "5.400",
                            "safe_item": true,
                            "item_id": "82000434",
                            "item_type": 2,
                            "item_type_decs": "",
                            "can_show_detail": true,
                            "item_status": 1,
                            "item_status_desc": "今日08:00开抢",
                            "detail_url": "https://8.baidu.com/fm/licai/fixed/index.html#product?productId=82000434",
                            "item_tab_desc": "今日|08:00开抢"
                        }
                    ],
                    "more_url": "https://8.baidu.com/fm/licai/fixed/index.html#products",
                    "show_more": "查看更多定期理财"
                },
                {
                    "column_name": "精选基金",
                    "column_introduce": "投基赚大钱",
                    column_list_type: 2,
                    "column_list": [
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "",
                            "itemMinPurchase": "",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": false,
                            "item_name": "易方达安心回报A",
                            "item_label": "长青基金 | 当季牛基 ",
                            "profit_rate_name": "近一年收益率",
                            "profit_rate_value": "9.432718",
                            "safe_item": false,
                            "item_id": "110027",
                            "item_type": 4,
                            "item_type_decs": "债券基金",
                            "can_show_detail": true,
                            "item_status": -1,
                            "item_status_desc": "",
                            "detail_url": "https://8.baidu.com/fm/licai/fund/index.html#product?id=110027",
                            "item_tab_desc": ""
                        },
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "",
                            "itemMinPurchase": "",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": false,
                            "item_name": "国泰新经济",
                            "item_label": "长青基金 | 规模巨擘 ",
                            "profit_rate_name": "近一年收益率",
                            "profit_rate_value": "40.266713",
                            "safe_item": false,
                            "item_id": "000742",
                            "item_type": 5,
                            "item_type_decs": "混合偏股",
                            "can_show_detail": true,
                            "item_status": -1,
                            "item_status_desc": "",
                            "detail_url": "https://8.baidu.com/fm/licai/fund/index.html#product?id=000742",
                            "item_tab_desc": ""
                        },
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "",
                            "itemMinPurchase": "",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": false,
                            "item_name": "景顺长城沪深300",
                            "item_label": "长青基金 | 规模巨擎 ",
                            "profit_rate_name": "近一年收益率",
                            "profit_rate_value": "30.550497",
                            "safe_item": false,
                            "item_id": "000311",
                            "item_type": 6,
                            "item_type_decs": "指数基金",
                            "can_show_detail": true,
                            "item_status": -1,
                            "item_status_desc": "",
                            "detail_url": "https://8.baidu.com/fm/licai/fund/index.html#product?id=000311",
                            "item_tab_desc": ""
                        },
                        {
                            "secondaryProfitRateValue": "",
                            "profitType": 1,
                            "profitChangeTime": "",
                            "itemDuration": "",
                            "itemMinPurchase": "",
                            "needLogin": 0,
                            "onlineTime": null,
                            "offlineTime": null,
                            "purchaseSellDescLabel": "理财期限",
                            "operateTag": "",
                            "promote": "",
                            "safeItem": false,
                            "item_name": "易黄金ETF联接C",
                            "item_label": "保值避险 | 抵御通胀 ",
                            "profit_rate_name": "近一个月收益率",
                            "profit_rate_value": "0.080653",
                            "safe_item": false,
                            "item_id": "002963",
                            "item_type": 7,
                            "item_type_decs": "黄金ETF",
                            "can_show_detail": true,
                            "item_status": -1,
                            "item_status_desc": "",
                            "detail_url": "https://8.baidu.com/fm/licai/fund/index.html#product?id=002963",
                            "item_tab_desc": ""
                        }
                    ],
                    "more_url": "https://8.baidu.com/fm/licai/fund/index.html#products",
                    "show_more": "查看更多基金理财"
                }
            ],
        }
    }
}
</script>

<style scoped>
#homepage .licai {
    background: #fff;
    margin-bottom: .5rem;
    overflow: hidden;
}

#homepage .licai:last-child {
    margin-bottom: 0;
}

#homepage .title {
    padding: 0 .75rem;
    height: 2.25rem;
    background-color: #fff;
    line-height: 2.25rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
}
#homepage .title {
    border-bottom: none;
}
#homepage .title .left {
    font-size: .75rem;
    color: #222;
}
#homepage .title .right {
    margin-left: .3rem;
    font-size: .65rem;
    color: #999;
}
#homepage .product-list {
    padding: 0 .625rem;
    background: #fff;
}
.product-list {
    background-color: #f7f7f9;
    font-family: PingFangSC-Regular,Helvetica Neue,Helvetica;
    -webkit-font-smoothing: antialiased;
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
#homepage .product-list .list-item {
    border-top: 1px solid #eee;
}
#homepage .list-item:last-child {
    border: none;
}
.product-list .list-item:first-child {
    border: 0;
}
.product-list .product-title {
    line-height: 1rem;
    font-size: .7rem;
    padding: 0 .75rem 0 1.7rem;
    position: relative;
    margin-bottom: 0;
    font-family: PingFangSC-Regular;
}
#homepage .product-list .product-title {
    padding: 0 .75rem 0 1rem;
}
.product-list .product-title img {
    position: absolute;
    left: .75rem;
    top: .075rem;
    height: .7rem;
}
#homepage .product-list .product-title img {
    left: .1rem;
    top: .16rem;
}
#homepage .product-list .item-left {
    margin-top: .675rem;
    padding-left: 1rem;
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
#homepage .product-list .item-left .rate {
    font-family: DINAlternate-Bold,DIN-Regular;
}
@media only screen and (max-device-width: 320px) {
    #homepage .product-list .item-left .rate {
        font-size: 1.4rem;
    }
}
.product-list .item-right {
    padding: 0;
    padding-left: 14%;
    border-left: 1px solid #e6e6e6;
    overflow: hidden;
    min-height: 2.125rem;
}
#homepage .product-list .item-right {
    border: none;
    margin-top: .675rem;
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
.product-list .item-right .product-detail .detail-num.lt-fz span {
    font-size: .75rem;
}
#homepage .product-list .item-right .product-detail .detail-num span {
    font-family: DIN-Regular;
}
#homepage .product-list .item-right .product-detail .detail-num.lt-fz span {
    font-family: PingFangSC-Regular,Microsoft YaHei,Arial,sans-serif;
}
#homepage .more {
    border-top: 1px solid #eee;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
    font-size: .7rem;
    color: #999;
}

#homepage .product-detail.list-item-new {
    padding-right: .75rem;
    border-top: 1px solid #eee;
    overflow: hidden;
    position: relative;
}
#homepage .product-detail .detail-left {
    float: left;
    width: 34%;
    text-align: center;
    margin-right: .6rem;
}
#homepage .product-detail .detail-left .shouyi {
    margin: 1.1rem 0 0;
    padding-bottom: .15rem;
    font-size: 1.5rem;
    color: #fb5a5c;
    font-family: DINAlternate-Bold,DIN-Regular;
    border-right: 1px solid #eee;
    line-height: 1.45rem;
}
#homepage .product-detail .detail-left .tip {
    font-size: .55rem;
    color: #999;
    margin-bottom: 1.25rem;
    border-right: 1px solid #eee;
}
#homepage .product-detail .detail-right .name {
    position: relative;
    margin: 1.1rem 0 .475rem;
    font-size: .8rem;
    color: #222;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
#homepage .product-detail .detail-right .name i {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    margin-top: -.4rem;
    display: inline-block;
    font-style: normal;
    font-family: PingFangSC-Regular;
    font-size: .5rem;
    color: #fb6f57;
    height: .8rem;
    padding: 0 .2rem;
    text-align: center;
    line-height: .75rem;
    border: 1px solid #fb6f57;
    -webkit-border-radius: .7rem;
    border-radius: .7rem;
    margin-left: .25rem;
}
#homepage .product-detail .detail-right .info {
    font-size: .6rem;
    color: #666;
}
</style>

