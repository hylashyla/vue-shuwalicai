<template>
    <section class="h5_header">
        <ul>
            <slot></slot>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.h5_header,
.h5_header ul {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}


.h5_header {
    height: 2.5rem;
    color: #f56151;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 11;
    border-top: 1px solid #e7e8f0;
    border-bottom: 1px solid #e7e8f0;
}
.h5_header ul {
    height: 100%;
    padding: 0 .75rem;
    overflow: hidden;
    position: relative;
}
.h5_header, .h5_header ul {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.h5_header li {
    display: inline-block;
}
.h5_header .logo_in {
    display: inline-block;
    color: #666;
    font-size: .75rem;
    line-height: .75rem;
    margin-top: .775rem;
}
.h5_header .register {
    display: inline;
    padding-right: 5px;
}
.h5_header .login {
    display: inline;
    padding-left: 5px;
}
.h5_header .home_logo {
    position: absolute;
    top: .75rem;
    left: 50%;
    margin-left: -1.975rem;
    vertical-align: middle;
    width: 3.95rem;
    height: .9rem;
    background: url(../assets/imgs/logo.png) 50% no-repeat;
    -webkit-background-size: 3.95rem .9rem;
    background-size: 3.95rem .9rem;
}
.h5_header .download {
    position: absolute;
    top: .525rem;
    right: .75rem;
    height: .7rem;
    padding: .35rem .35rem .4rem;
    background: #f56151;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .7rem;
    line-height: .7rem;
    z-index: 999;
}
.h5_header .home {
    margin: .75rem 0;
    float: left;
    width: .9rem;
    height: 1rem;
    background: url(../assets/imgs/home.png) 50% no-repeat;
    -webkit-background-size: .9rem 1rem;
    background-size: .9rem 1rem;
}
.h5_header .font {
    display: inline-block;
    margin: .875rem 0 0 .325rem;
    width: 3.1rem;
    height: .75rem;
    background: url(../assets/imgs/logo.png) 50% no-repeat;
    -webkit-background-size: 3.1rem .75rem;
    background-size: 3.1rem .75rem;
}
.h5_header .h5_title {
    z-index: -1;
    position: absolute;
    top: .825rem;
    width: 100%;
    left: .5rem;
    text-align: center;
    font: .9rem PingFangSC-Regular;
    color: #293040;
    line-height: .9rem;
}
</style>

