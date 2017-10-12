<template>
    <div id="homepage">
        <h5-header>
            <li class="logo_in">
                <a class="register">注册</a>|
                <a class="login">登录</a>
            </li>
            <li class="home_logo"></li>
            <li class="download">下载App</li>
        </h5-header>
        <notice :noticeTitle="noticeTitle"></notice>
        <menus :menus="menus"></menus>
        <recommend></recommend>
     
        <slider animation="fade" :auto="slider.auto">
            <slider-item v-for="(i, index) in list" :key="index">
                <div :style="i">
                    <p style="line-height: 4.25rem; font-size: 5rem; text-align: center;"></p>
                </div>
            </slider-item>
        </slider>
        <my-section></my-section>
    


    </div>
</template>

<script>
import H5Header from '../components/header'
import Notice from '../components/notice'
import Menus from '../components/menus'
import Recommend from '../components/recommend'
import MySection from '../components/section'
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
    name: 'index',
    components: {
        H5Header,
        Notice,
        Menus,
        Recommend,
        Slider,
        SliderItem,
        MySection
    },
    created () {
        
    },
    data() {
        return {
            noticeTitle: '2017年9月22日21:00-23日9:00，暂停百赚利滚利快赎、钱包活期（嘉实活期宝）及基金理财赎回服务',
            menus: [
                {
                    name: '活期理财',
                    class: 'balance-item',
                    url: '/currentList',
                },
                {
                    name: '定期理财',
                    class: 'fixed-item',
                    url: '/fixedList',
                },
                {
                    name: '基金理财',
                    class: 'fund-item',
                    url: '/fundList',
                }
            ],
            list: [
                { backgroundImage: 'url(/static/imgs/banners/1.jpg)', width: '100%', height: '100%' },
                { backgroundImage: 'url(/static/imgs/banners/2.jpg)', height: '100%' },
                { backgroundImage: 'url(/static/imgs/banners/3.jpg)', width: '100%', height: '100%' },
            ],
            slider: {
                auto: true
            },
            sections: [
                {
                    title_left: '',
                    product_list: [
                        {

                        }
                    ],

                }
            ],


        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>




#homepage, #mycenter {
    background-color: #f7f7f9;
    overflow: auto;
    font-family: PingFangSC-Regular,Microsoft YaHei,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
}
#homepage .licai {
    background: #fff;
    margin-bottom: .5rem;
    overflow: hidden;
}

#homepage .title {
    padding: 0 .75rem;
    height: 2.25rem;
    background-color: #fff;
    line-height: 2.25rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
}
.slider {
    height: 4.25rem !important;
}
.indicators {
    bottom: 5px !important;
}
.slider-indicator-icon {
    width: 5px !important;
    height: 5px !important;
}

.slider-item .wrap > div {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}





</style>
