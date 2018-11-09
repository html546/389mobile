<template>
    <DwbVueDrawer 
        :visible.sync="visible" 
        :position="position" 
        :lockScroll="lockScroll" 
        :zIndex="zIndex" 
        :maskStyle="maskStyle" 
        :containerStyle="containerStyle" 
        @open="open" 
        @close="close">
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <ul class="list">
            <li>5</li>
            <li>首页</li>
            <li>会员资料</li>
            <li>账户管理</li>
            <li>组织图</li>
            <li>奖金管理</li>
            <li>财务管理</li>
            <li>交易市场</li>
            <li>SEK管理</li>
            <li>公司留言</li>
            <li>公告栏</li>
        </ul>
    </DwbVueDrawer>
</template>

<script>
import { DwbVueDrawer } from 'dwb-vue-drawer';
export default {
    name: '',
    components: {
        DwbVueDrawer
    },
    data() {
        return {
            active: 0,
            visible: false,
            position: 'left',
            lockScroll: true,
            maskClosable: true,
            zIndex: 200,
            maskStyle: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
            },
            containerStyle: {
                backgroundColor: '#303d4e',
                width: '50vw'
            }
        }
    },
    methods: {
        show(position) {
            this.position = position
            this.visible = true
        },
        open() {
            console.log('open callback')
        },
        close() {
            console.log('close callback')
        }
    }
}
</script>

<style lang="less" scoped>
.logo {
  width: 100%;
  text-align: center;
  img {
    width: 250px;
    height: 250px;
    margin: 20px auto;
    border-radius: 50%;
    border: 15px solid #a88744;
  }
}
.list li {
  height: 80px;
}
</style>