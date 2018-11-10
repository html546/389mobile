<template>
    <van-tabbar v-model="active" fixed>
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item icon="logistics">交易中心</van-tabbar-item>
        <van-tabbar-item icon="cart">商城购物</van-tabbar-item>
        <van-tabbar-item icon="contact">团队管理</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    name: '',
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
            active: 0
        }
    },
    watch: {
        active(val, oldVal) {
            console.log(val);
            if(val === 0){
                this.$router.push({path:'/index'})
            }else if(val === 1){
                this.$router.push({path:'/trade'})
            }
        }
    }
}
</script>

<style lang="less" scoped>
.van-tabbar {
  background-color: rgb(167, 135, 67);
  .van-tabbar-item {
    color: #fff;
  }
}
</style>