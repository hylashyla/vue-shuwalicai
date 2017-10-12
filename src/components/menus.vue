<template>
    <div class="menus">
        <div class="balance-item menu-item" v-for="menu in menus" @click="jumpUrl(menu.url)">
            <span class="menu-icon"></span>
            <span class="menu-name">{{ menu.name }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        menus: {
            type: Array,
            default: []
        }
        
    },
    data () {
        return {

        }
    },
    methods : {
        jumpUrl (url) {
            location.href = url;
        }
    }
}
</script>


<style scoped>
#homepage .menus {
    width: 100%;
    color: #222;
    background: #fff;
    margin-bottom: .5rem;
    padding: 1.325rem 0 1.1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
#homepage .menus .menu-item {
    width: 33%;
    height: 100%;
    border-right: 2px solid #eee;
    text-align: center;
    font: .7rem PingFangSC-Regular,Microsoft;
}
#homepage .menus .menu-item span {
    display: block;
}
#homepage .balance-item .menu-icon {
    background: url(../assets/imgs/menus/1.png) 50% no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
}
#homepage .fixed-item .menu-icon {
    background: url(../assets/imgs/menus/2.png) 50% no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
}
#homepage .fund-item .menu-icon {
    background: url(../assets/imgs/menus/3.png) 50% no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
}
#homepage .menu-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0 auto;
    margin-bottom: .5rem;
}
</style>
