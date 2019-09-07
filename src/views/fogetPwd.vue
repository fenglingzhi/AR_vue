<template>
  <div class="foget">
    <div class="logIco">
        <div class="close_">
            <img src="@/assets/img/close.png" alt=""  @click="back()">
        </div>
        <img src="@/assets/img/forgetPassword.png" width="100%" alt="">

    </div>
    <div class="loginText">
        <div>بطاقة يمنكنتكتر يمنكنتكترببيصثدهدية</div>
        <div>بطاقببيصثدهدية</div>
        <div>بطاقة يمنكنتكترببيصثدهدية</div>
    </div>

    <div class="formInput">
        <input type="text" placeholder="طلبنممنثمقكرده هتسثتي" v-model="email">
    </div>

    <div style="text-align: center">
        <button type="button" class="loginButton" @click="submit()"> افحص الآن</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import * as api from "../api/commonApi";
import router from "vue-router";
import axios from "axios";
import { Dialog, List ,Toast } from 'vant';
import store from '../store/store.js'

export default {
    data() {
      return {
          email:''
      }
    },
     components:{
        router,
        Dialog,
        router,
        Toast,
    },
    methods: {
        submit(){
            var that = this;
            var data = {...that.$store.state.defaultData}
            data.email = this.email;
            that.$post('/api/user/forgotpwd',data).then(data => {
                console.log("list",data)
                if (data.code == 200) {
                    Toast.success("邮件已发送请前往重置密码")
                }
                if (data.code == 400) {
                    Toast.fail(data.message)
                }
            }).catch(error => {
                console.log(error);
            });
        },
        back(){
            this.$router.go(-1);//返回上一层
        },
    },

}
</script>

<style lang="scss" scoped>
    .foget{
        background: #fff;
    }
  .logIco{
      text-align: center;
      width: 100%;
  }
  .formInput input{
      width: 80%;
      border: none;
      border-bottom: 1px solid #999999;
      outline: none;
      direction: rtl;
      margin-top: 18px;
      height: 36px;
      font-size: 16px;

  }
  .formInput{
      text-align: center;
      margin-top: 22px;

  }
  .loginText{
      width: 80%;
      direction: rtl;
      margin: 30px auto;
  }
  .loginText span{
      display: block;
      color:#333333;
      float: left;
      text-decoration: underline;
  }
  .loginButton{
      background: #333333;
      color: #fff;
      width: 80%;
      direction: rtl;
      margin: 60px auto;
      text-align: center;
      height: 45px;
      font-size: 18px;
      line-height: 44px;
      border: none;
  }
  .loginTip{
      text-align: center;
      font-weight: bold;
  }
  .close_{
      position: absolute;
      overflow: auto;
      top: 10px;
      left: 10px;
      z-index: 999;
  }
</style>

