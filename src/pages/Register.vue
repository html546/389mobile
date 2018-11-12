<template>
    <div class="wrapper-box">
        <Navbar @moveLeft="moveleft" />
        <form class="memberProfile" id="memberProfile">
            <van-cell-group>
                <van-field 
                    v-model="defaultname"
                    placeholder="请输入用户名"
                    label="用户名"
                    required
                    clearable
                     />
                     <template v-if="isedit === '1'">
                         <div v-for="(val,key,index) in message" :key="index">
                            <van-field 
                                :label="val.name"
                                :type="val.input"
                                v-if="val.input!=='hidden'&&val.input!=='select'"
                                :name="val.name"
                                required
                                v-model="val.default"
                                />
                                <van-row v-if="val.input ==='select'" class="My_select">
                                    <van-col span="8">
                                      <label for="">{{val.name}}</label>
                                    </van-col>
                                    <van-col span="16">
                                        <select name="" id="">
                                            <option v-for="(val1,key) in val.select" :name="val.name" :value="key" :key="key" :selected="val.default">{{val1}}</option>
                                        </select>
                                    </van-col>
                                </van-row>
                         </div>
                     </template>
                     <van-button type="danger" size="large" round @click="save">提交</van-button>
            </van-cell-group>
        </form>
        <Tabbar></Tabbar>
        <Drawer ref="child" />
    </div>
</template>

<script>
// 这里使用了lazyload懒加载，可以后期加上加载中图片等一些配置信息
import Navbar from '@/components/Navbar'
import Tabbar from '@/components/Tabbar'
import Drawer from '@/components/Drawer'
import { Field, CellGroup, Row, Col, Button } from 'vant';
import '@/assets/less/Table.css'
export default {
    name: '',
    components: {
        Drawer,
        Tabbar,
        Navbar,
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Row.name]: Row,
        [Col.name]: Col,
        [Button.name]: Button
    },
    data() {
        return {
            isedit:'',
            defaultname:'',
            columns:'',
            // show:false
        }
    },
    created() {
        let userid = JSON.parse(localStorage.getItem('user')).id;
        let sessionid = JSON.parse(localStorage.getItem('user')).sessionid;
        this.$http.post('/remote/api/member/register', {
            userid: userid,
            sessionid: sessionid,
            type:1
        }).then((response) => {
            console.log(response);
            this.defaultname = response.data.data.defaultname;
            this.isedit = response.data.data.isedit;
            this.message = response.data.data.regdatasets;
        }).catch((error) => {
            console.log(error);
        })
    },
    methods: {
        moveleft() {
            this.$refs.child.$emit('open')
        },
        save(e){
            e.preventDefault();
            let userid = JSON.parse(localStorage.getItem('user')).id;
            let sessionid = JSON.parse(localStorage.getItem('user')).sessionid;
            var memberProfile = document.getElementById('memberProfile');
            var formData = new FormData(memberProfile);
            formData.append('userid',userid);
            formData.append('sessionid',sessionid);
            formData.append('type','1');
            this.$http.post('/remote/api/member/registersave',formData).then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    filters:{
        select(val){
            console.log(Object.values(val));
            return Object.values(val);
        }
    }
}
</script>

<style lang="less" scoped>
.memberProfile {
  margin: 20px;
  background: #fff;
  padding: 0 40px 10PX;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  /* .van-row {
    border-bottom: 1px solid #d0d0d0;
    .van-col {
      height: 40px;
      line-height: 40px;
    }
  } */
  .My_select{
      padding: 10PX 15PX;
      .van-col{
          label{
              line-height: 24PX;
              font-size: 14PX;
              color: #333;
          }
          select{
              width: 100%;
          }
      }
  }
}
</style>