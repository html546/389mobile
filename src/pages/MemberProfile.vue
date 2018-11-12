<template>
    <div class="wrapper-box">
        <Navbar @moveLeft="moveleft" />
        <div class="memberProfile">
            <van-row>
                <van-col span="4"></van-col>
                <van-col span="20"></van-col>
            </van-row>
        </div>
        <Tabbar></Tabbar>
        <Drawer ref="child" />
    </div>
</template>

<script>
// 这里使用了lazyload懒加载，可以后期加上加载中图片等一些配置信息
import Navbar from '@/components/Navbar'
import Tabbar from '@/components/Tabbar'
import Drawer from '@/components/Drawer'
import { Row, Col } from 'vant';
import '@/assets/less/Table.css'
export default {
    name: '',
    components: {
        Drawer,
        Tabbar,
        Navbar,
        [Row.name]: Row,
        [Col.name]: Col
    },
    data() {
        return {
            message: {}
        }
    },
    created() {
        let userid = JSON.parse(localStorage.getItem('user')).id;
        let sessionid = JSON.parse(localStorage.getItem('user')).sessionid;
        this.$http.post('/remote/api/member/memberProfile', {
            userid: userid,
            sessionid: sessionid
        }).then((response) => {
            console.log(response);
            // this.message = response.data.data;
        }).catch((error) => {
            console.log(error);
        })
    },
    methods: {
        moveleft() {
            this.$refs.child.$emit('open')
        }
    }
}
</script>

<style lang="less" scoped>
.memberProfile {
  margin: 20px;
  background: #fff;
  padding: 0 40px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  .van-row {
    border-bottom: 1px solid #d0d0d0;
    .van-col {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>