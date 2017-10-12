<template>
    <div class="notice" style="">
        <div class="notice-title">
            {{ noticeTitle }}
        </div>
        <div class="notice-detail">详情</div>
    </div>
</template>
<script>
export default {
    props: {
        noticeTitle: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            
        }
    }
}
</script>
<style>
#homepage .notice {
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 .75rem;
    background-color: #fcc1bb;
    position: relative;
}
#homepage .notice .notice-title {
    float: left;
    width: 80%;
    font-size: .65rem;
    color: #d93e23;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
#homepage .notice .notice-detail {
    float: right;
    font-size: .6rem;
    color: #d93e23;
}
</style>
