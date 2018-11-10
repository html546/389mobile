<template>
    <DwbVueDrawer :visible.sync="visible" :position="position" :lockScroll="lockScroll" :zIndex="zIndex" :maskStyle="maskStyle" :containerStyle="containerStyle" @open="open" @close="close">
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <ul class="list">
            <van-cell-group>
                <van-cell :title="username">
                    <van-icon slot="right-icon" name="like" class="van-cell__right-icon"></van-icon>
                </van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="首页" is-link icon="wap-home"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="会员资料" is-link icon="contact"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="账户管理" is-link icon="records"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="组织图" is-link icon="photo"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="奖金管理" is-link icon="after-sale"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="财务管理" is-link icon="discount"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="交易市场" is-link icon="logistics"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="SEK管理" is-link icon="edit-data"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="公司留言" is-link icon="phone"></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="公告栏" is-link icon="phone"></van-cell>
            </van-cell-group>
        </ul>
    </DwbVueDrawer>
</template>

<script>
import { DwbVueDrawer } from 'dwb-vue-drawer';
import { Cell, CellGroup,Icon } from 'vant';
export default {
    name: '',
    components: {
        DwbVueDrawer,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Icon.name]:Icon
    },
    data() {
        return {
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
                width: '50vw',
                // overflowY:'scroll'
            },
            username:'123'
        }
    },
    created() {
        var vm = this;
        vm.username = JSON.parse(localStorage.getItem('user')).username;
    },
    mounted() {
        this.$nextTick(function () {
            this.$on('open', () => {
                this.visible = true;
            })
        })
    },
    methods: {
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
.list{
    height: 100%;
    li{
        height: 80px;
    }
}
.van-cell-group {
  background: #303d4e;
  .van-cell {
    background: #303d4e;
    color: #fff;
  }
}
</style>