<template>
    <div class="wrapper-box">
        <Navbar @moveLeft="moveleft" />
        <div class="index-list">
            <van-col span="12">
                <router-link to="/register">
                    <p>
                        <v-icon name="zhucehuiyuan"></v-icon>
                    </p>
                    <span>注册会员</span>
                </router-link>
            </van-col>
            <van-col span="12">
                <router-link to="">
                    <p>
                        <v-icon name="huiyuanguanli_huiyuanjihuo"></v-icon>
                    </p>
                    <span>激活会员</span>
                </router-link>
            </van-col>
            <van-col span="12">
                <router-link to="">
                    <p>
                        <v-icon name="zuzhi"></v-icon>
                    </p>
                    <span>团队组织图</span>
                </router-link>
            </van-col>
            <van-col span="12">
                <router-link to="">
                    <p>
                        <v-icon name="guanxi"></v-icon>
                    </p>
                    <span>团队关系图</span>
                </router-link>
            </van-col>
        </div>
        <div class="index-list index-list1">
            <van-col span="8">
                <router-link to="">
                    <p>
                        <img src="@/assets/images/C_1.png" alt="">
                    </p>
                    <span>白银</span>
                </router-link>
            </van-col>
            <van-col span="8">
                <router-link to="">
                    <p>
                        <img src="@/assets/images/C_2.png" alt="">
                    </p>
                    <span>黄金</span>
                </router-link>
            </van-col>
            <van-col span="8">
                <router-link to="">
                    <p>
                        <img src="@/assets/images/C_3.png" alt="">
                    </p>
                    <span>白金</span>
                </router-link>
            </van-col>
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
</style>