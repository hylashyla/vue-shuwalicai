<template>
    <div>
        <div class="block" style="width:100%;height:2.5rem"></div>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <footer>
            <div class="footer-content">
                <div class="footer-wrap text28">
                    <span>下载树蛙理财APP&nbsp;够丑萌&nbsp;财安心</span>
                    <div class="arrow"></div>
                </div>
                <div class="contact">
                    <span class="text24">客服热线</span>
                    <a class="no_underline" href="tel:12345">12345</a>
                </div>
            </div>
            <div class="footer-notice">
                <span class="text24"> © 2017 京ICP证123456号 </span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
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
body,
h2,
h3,
p {
    margin: 0;
}

li,
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

html {
    -webkit-text-size-adjust: 100%;
    font-size: 40px;
}

footer {
    background-color: #f7f7f9;
    width: 100%;
    box-sizing: border-box;
}

footer .footer-content {
    padding: 1.25rem 0 1rem;
    border-bottom: 1px solid #e2e2e2;
}

footer .text28 {
    margin-left: .8rem;
    font-size: .7rem;
    line-height: .75rem;
    color: #666;
    margin-bottom: .9rem;
    text-align: center;
}

footer .arrow {
    display: inline-block;
    margin: 0 .5rem;
    vertical-align: middle;
    width: .325rem;
    height: .65rem;
    background: url(../assets/imgs/right.png) 0 0 no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
}

footer .contact,
footer .footer-notice {
    height: .6rem;
    text-align: center;
}

footer .contact .text24 {
    margin-left: -.825rem;
}

footer .no_underline {
    text-decoration: none;
    padding-left: .25rem;
    color: #3083fb;
}

footer .no_underline,
footer .text24 {
    display: inline-block;
    font-size: .6rem;
    color: #aaa;
    vertical-align: top;
}

footer .footer-notice {
    padding: .8rem 0;
}
</style>
