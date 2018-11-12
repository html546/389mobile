<template>
    <div class="wrapper-box">
        <Navbar @moveLeft="moveleft" />
        <div class="chunk-box">
            <div class="chunk-box-list">
                <h4>0.3</h4>
                <span>SEK市价</span>
            </div>
            <div class="chunk-box-list">
                <h4>149</h4>
                <span>SEK持有量</span>
            </div>
            <div class="chunk-box-list">
                <h4>$44.7</h4>
                <span>SEK账户价值</span>
            </div>
        </div>
        <!-- <div class="index-list">
            <div class="index-list-li">
                <router-link to="">
                    <p>
                        <v-icon name="tubiaozhexiantu"></v-icon>
                    </p>
                    <span>挂卖SEK</span>
                </router-link>
            </div>
            <div class="index-list-li">
                <router-link to="">
                    <p>
                        <v-icon name="jiaoyijilu"></v-icon>
                    </p>
                    <span>SEK交易记录</span>
                </router-link>
            </div>
            <div class="index-list-li">
                <router-link to="">
                    <p>
                        <v-icon name="23234234234"></v-icon>
                    </p>
                    <span>SEK购买</span>
                </router-link>
            </div>
            <div class="index-list-li">
                <router-link to="">
                    <p>
                        <van-icon name="wap-nav" size="25px" color="#004ea1"></van-icon>
                    </p>
                    <span>SEK买卖交易</span>
                </router-link>
            </div>
        </div> -->
        <div class="index-list">
            <van-col span="8">
                <router-link to="">
                    <p>
                        <v-icon name="tubiaozhexiantu"></v-icon>
                    </p>
                    <span>挂卖SEK</span>
                </router-link>
            </van-col>
            <van-col span="8">
                <router-link to="">
                    <p>
                        <v-icon name="jiaoyijilu"></v-icon>
                    </p>
                    <span>SEK交易记录</span>
                </router-link>
            </van-col>
            <van-col span="8">
                <router-link to="">
                    <p>
                        <v-icon name="23234234234"></v-icon>
                    </p>
                    <span>SEK购买</span>
                </router-link>
            </van-col>
            <van-col span="8">
                <router-link to="">
                    <p>
                        <van-icon name="wap-nav" size="25px" color="#004ea1"></van-icon>
                    </p>
                    <span>SEK买卖交易</span>
                </router-link>
            </van-col>
            <van-col span="8"></van-col>
            <van-col span="8"></van-col>
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
import { Icon, Row, Col } from 'vant'
import '@/assets/less/Table.css'
export default {
    name: '',
    components: {
        Drawer,
        Tabbar,
        Navbar,
        [Icon.name]: Icon,
        [Row.name]: Row,
        [Col.name]: Col
    },
    data() {
        return {
        }
    },
    created() {

    },
    methods: {
        moveleft() {
            this.$refs.child.$emit('open')
        }
    }
}
</script>

<style lang="less">

  .chunk-box {
    margin: 10PX 40px 20px;
    border-radius: 20px;
    background: url(../assets/images/list_bg_1.jpg) no-repeat center center;
    background-size: 100% auto;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
    .chunk-box-list {
      padding: 50px 30px;
      width: 33.33%;
      box-sizing: border-box;
      float: left;
      text-align: center;
      color: #fff;
      border: 1px solid #e7e7e7;
      border-right: none;
      h4 {
        font-weight: 900;
        font-size: 36px;
        font-family: Arial;
      }
      span {
        font-size: 12px;
        color: #f5f5f5;
        font-family: monospace;
      }
      &:last-child {
        border-right: 1px solid #e7e7e7;
      }
    }
  }
  /* .index-list {
    width: 94%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    margin: 20px auto;
    .index-list-li {
      width: calc(~"(100% - 4px)/3");
      border: 1px solid #e7e7e7;
      float: left;
      border-right: none;
      padding: 40px 0;
      p {
        text-align: center;
        margin-bottom: 10px;
        .v-icon {
          font-size: 60px;
          color: #004ea1;
        }
      }
      span {
        display: inline-block;
        width: 100%;
        text-align: center;
        font-size: 12px;
      }
      &:last-child {
        border-right: 1px solid #e7e7e7;
      }
    }
  } */
</style>