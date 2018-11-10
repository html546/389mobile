<template>
    <van-nav-bar :title="username" @click-left="onClickLeft" @click-right="onClickRight" class="header" :fixed="true">
        <van-icon name="wap-nav" slot="left"></van-icon>
        <van-icon name="more-o" slot="right"></van-icon>
    </van-nav-bar>
</template>

<script>
import { NavBar, Icon, Toast } from 'vant'
export default {
    name: '',
    components: {
        [Icon.name]: Icon,
        [NavBar.name]: NavBar,
        [Toast.name]: Toast
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
            var userid = JSON.parse(localStorage.getItem('user')).id;
            console.log(userid);
            this.$http.post('/remote/api/login/logout', {
                userid: userid
            }).then((response) => {
                console.log(response);
                Toast.success(response.data.msg);
                this.$router.push({path:'/'});
            }).catch((error) => {
                console.log(error);
            })
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