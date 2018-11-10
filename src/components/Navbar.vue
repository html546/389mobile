<template>
    <van-nav-bar :title="username" @click-left="onClickLeft" @click-right="onClickRight" class="header">
        <van-icon name="wap-nav" slot="left"></van-icon>
        <van-icon name="more-o" slot="right"></van-icon>
    </van-nav-bar>
</template>

<script>
import { NavBar, Icon } from 'vant'
export default {
    name: '',
    components: {
        [Icon.name]: Icon,
        [NavBar.name]: NavBar
    },
    data() {
        return {
            username: '',
        }
    },
    created() {
        var vm = this;
        vm.username = JSON.parse(localStorage.getItem('user')).username;
    },
    methods: {
        onClickLeft() {
            // alert('左边滑出');
            this.$emit('moveLeft')
            // this.$refs.child.$emit('open')
        },
        onClickRight() {
            alert('右边退出');
        }
    }
}
</script>

<style lang="less" scoped>
.header {
  background-color: rgb(167, 135, 67);
  color: #fff;
  .van-icon {
    color: #fff;
  }
}
</style>