<template>
    <div class="wrapper-box">
        <van-nav-bar :title="username" @click-left="onClickLeft" @click-right="onClickRight" class="header">
            <van-icon name="wap-nav" slot="left"></van-icon>
            <van-icon name="more-o" slot="right"></van-icon>
        </van-nav-bar>
        <div class="banner">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image,index) in images" :key="index">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="pannel">
            <van-row>
                <van-col span="6">账号</van-col>
                <van-col span="6">5</van-col>
                <van-col span="6">姓名</van-col>
                <van-col span="6">123</van-col>
            </van-row>
            <van-row>
                <van-col span="6">停止配送SEK</van-col>
                <van-col span="6">正常</van-col>
                <van-col span="6">停止收入</van-col>
                <van-col span="6">正常</van-col>
            </van-row>
            <van-row>
                <van-col span="6">投资金额</van-col>
                <van-col span="6">100.00</van-col>
                <van-col span="6">投资等级</van-col>
                <van-col span="6">白银</van-col>
            </van-row>
            <van-row>
                <van-col span="6">激活币</van-col>
                <van-col span="6">0.00</van-col>
                <van-col span="6">现金币</van-col>
                <van-col span="6">0.00</van-col>
            </van-row>
            <van-row>
                <van-col span="6">注册币</van-col>
                <van-col span="6">0.00</van-col>
                <van-col span="6">交易币</van-col>
                <van-col span="6">0.00</van-col>
            </van-row>
            <van-row>
                <van-col span="6">购物币</van-col>
                <van-col span="6">0.00</van-col>
                <van-col span="6">数字货币基金</van-col>
                <van-col span="6">0.00</van-col>
            </van-row>
            <van-row>
                <van-col span="6">持币收益</van-col>
                <van-col span="6">0.00</van-col>
                <van-col span="6">SEK</van-col>
                <van-col span="6">149</van-col>
            </van-row>
            <van-row>
                <van-col span="6">SKFCC</van-col>
                <van-col span="6">0.00</van-col>
            </van-row>
        </div>
        <div class="notice">
            <van-panel title="公告">
                <div class="notice_content">内容</div>
            </van-panel>
        </div>
        <Tabbar></Tabbar>
        <Drawer ref="child" />
    </div>
</template>

<script>
// 这里使用了lazyload懒加载，可以后期加上加载中图片等一些配置信息
import { NavBar, Icon, Swipe, SwipeItem, Lazyload, Row, Col, Panel } from 'vant'
import Tabbar from '@/components/Tabbar'
import Drawer from '@/components/Drawer'
export default {
    name: '',
    components: {
        [NavBar.name]: NavBar,
        [Icon.name]: Icon,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Lazyload.name]: Lazyload,
        [Row.name]: Row,
        [Col.name]: Col,
        [Panel.name]: Panel,
        Drawer,
        Tabbar
    },
    data() {
        return {
            username: '',
            images: [
                '../../static/images/banner1.jpg',
                '../../static/images/banner2.jpg',
                '../../static/images/banner3.jpg'
            ],
        }
    },
    created() {
        var vm = this;
        vm.username = JSON.parse(localStorage.getItem('user')).username;
        // console.log(JSON.parse(localStorage.getItem('user')).username);
        let userid = JSON.parse(localStorage.getItem('user')).id;
        let sessionid = JSON.parse(localStorage.getItem('user')).sessionid;
        this.$http.post('/remote/api/index/index', {
            userid: userid,
            sessionid: sessionid
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        this.$http.post('/remote/api/index/getad', {
            userid: userid,
            sessionid: sessionid
        }).then((response) => {
            console.log(response);
            vm.images = response.data.data;
        }).catch((error) => {
            console.log(error);
        })
    },
    methods: {
        onClickLeft() {
            // alert('左边滑出');
            this.$refs.child.$emit('open')
        },
        onClickRight() {
            alert('右边退出');
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper-box {
  background-color: #f3f3f4;
  height: auto;
  .header {
    background-color: rgb(167, 135, 67);
    color: #fff;
    .van-icon {
      color: #fff;
    }
  }
  .banner {
    margin: 25px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .pannel {
    margin: 25px;
    box-sizing: border-box;
    background: #fff;
    .van-row {
      padding: 10px;
      width: 90%;
      margin: 0 auto;
      box-sizing: border-box;
      height: 50px;
      border-bottom: 1px solid #d0d0d0;
      .van-col {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .notice {
    margin: 0 25px 25px;
    padding-bottom: 100px;
    .notice_content {
      padding: 20px 30px;
    }
  }
}
</style>