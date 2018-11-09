<template>
    <div class="wrapper">
        <p class="text-center">语言选择:</p>
        <p class="text-center">
            <a href="javascript:;">简体中文</a>
            <a href="javascript:;">English</a>
        </p>
        <div class="logo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <h2 class="title">会员登录</h2>
        <van-cell-group class="van-input-group">
            <van-field class="van-input" v-model="username" clearable placeholder="会员编号" error />
            <van-field class="van-input" v-model="password" clearable type="password" placeholder="登录密码" error />
        </van-cell-group>
        <van-button size="large" @click="submit">登录</van-button>
    </div>
</template>

<script>
import { Field, CellGroup, Button } from 'vant';
import axios from 'axios';
// import api from '@/api';
export default {
    name: '',
    components: {
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submit() {
            var vm = this;
            this.$http.post('/remote/api/login/login', {
                username: vm.username,
                password: vm.password
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  margin-top: 140px;
  p {
    color: #fff;
    text-align: center;
    color: #6b6e70;
    margin: 0 0 10px;
  }
  p:nth-child(2) a {
    color: #fff;
  }
  .logo {
    width: 100%;
    text-align: center;
    img {
      margin: 20px auto;
    }
  }
  .title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #8e7237;
    margin: 20px 0;
  }
  .van-input-group {
    margin: 0 20px;
    background: #1c1c1c;
    .van-input {
      margin-bottom: 10px;
    }
  }
  .van-button {
    width: calc(~"100% - 40px");
    margin-left: 20px;
    background: rgb(167, 135, 67);
    color: #fff;
    border: none;
  }
}
</style>