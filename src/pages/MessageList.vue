<template>
    <div class="wrapper-box">
        <Navbar @moveLeft="moveleft" />
        <div class="index-list">
            <van-col span="8">
                <router-link to="/messageList">
                    <p>
                        <v-icon name="gonggao"></v-icon>
                    </p>
                    <span>公告</span>
                </router-link>
            </van-col>
            <van-col span="8">
                <router-link to="">
                    <p>
                        <van-icon name="pending-evaluate" size="30px" color="#004ea1"></van-icon>
                    </p>
                    <span>咨询留言</span>
                </router-link>
            </van-col>
            <van-col span="8">
                <router-link to="">
                    <p>
                        <van-icon name="records" size="30px" color="#004ea1"></van-icon>
                    </p>
                    <span>咨询记录</span>
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