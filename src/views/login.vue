<template>
  <div>
    <div class="login">
      <div class="logIco">
          <img src="@/assets/img/logo.png" width="83" alt="">
          <div class="close_">
              <img src="@/assets/img/close.png" alt="" @click="back()">
          </div>
      </div>
      <div class="changeTabs">
          <div class="changeTab">
              <span class="changeText" :class="{ chosedText : tapIndex === 1  }" @click="changeTable(1)">سجل</span>
          </div>
          <div class="changeTab ">
              <span  class="changeText" :class="{ chosedText : tapIndex === 0  }" @click="changeTable(0)">التوقيع</span>
          </div>
      </div>
      <div class="loginPart" v-if="tapIndex === 0">
          <div class="formInput">
              <input type="text" placeholder="طلبنممنثمقكرده هتسثتي" v-model="logName">
              <input type="password" placeholder="بطاقة هدية" v-model="logPwd">
          </div>
          <router-link to="/fogetPwd">
            <div class="loginText">
                <span>بطاقة يمنكنتكترببيصثدهدية</span>
            </div>
          </router-link>
          <div style="text-align: center">
              <button type="button" class="loginButton" @click="login()"> افحص الآن</button>
          </div>
      </div>

      <div class="registerPart" v-if="tapIndex === 1">
          <div class="formInput">
              <input type="text" placeholder="طلبنممنثمقكرده هتسثتي" v-model="regName" @blur="resName()">
              <input type="password" placeholder="بطاقة هدية" v-model="regPwd" @blur="respwd()">
          </div>
          <div class="registerText">
              <span>بطاقة يمنكنتكترببيصثدهدية</span>
              <span>8 بطاقتكتردهدية</span>
              <span>بطاقة يمنكنتيثقللقز</span>
              <span>بل٤ثسيسردهدية</span>
          </div>
          <div style="text-align: center">
              <button type="button" class="loginButton" @click="regiest()"> افحص الآن</button>
          </div>
          <div class="loginTip">
              تهتشخهساعب( ارنتيعنا%15تخهاي )
          </div>
      </div>
    </div>  
  </div>
</template>

<script>

import * as api from "../api/commonApi";
import router from "vue-router";
import { Dialog, Swipe, SwipeItem, CountDown, List,Toast } from 'vant';
import axios from "axios";
import store from '../store/store.js'
// import src from '@/assets/img/personal/user_img.png'
export default {
  data() {
    return {
      tapIndex:0,
      regName:'',
      regPwd:'',
      logName:'',
      logPwd:''
    }
  },
   components: {
       Swipe,
       Dialog,
       SwipeItem,
       router,
       CountDown,
       Toast
   },
  methods: {
    changeTable(index) {
      this.$data.tapIndex = index;
    },
    respwd(){

    },
    resName(){

    },
    back(){
        this.$router.go(-1);//返回上一层
    },
    // 登录
    login(){
        console.log("11111",this.logName,this.logPwd)
        var data = {...this.$store.state.defaultData};
        data.email = this.logName;
        data.passwd = this.logPwd;
        if (this.logName == '') {
            Toast.fail("email不能为空")
            return;
        }
         if (this.logPwd == '') {
            Toast.fail("密码不能为空")
            return;
        }
        this.$post('/api/user/login',data).then(data => {
            var that = this;
            console.log("list",data)
            if (data.code == 200) {
                var src = require('@/assets/img/personal/user_img.png');
                store.commit('changeStore',{key:'token',val:data.data.token});
                if (data.data.photo !=='' && (data.data.photo !== null)) {
                    store.commit('changeStore',{key:'photo',val:data.data.photo});
                }else{
                    store.commit('changeStore',{key:'photo',val:src});
                }
                console.log('denglu',src,data.data.photo)
                Toast.success(data.message)
                localStorage.setItem('token',data.data.token)
                localStorage.setItem('id_cart',data.data.id_cart)
                setTimeout(() => {
                    that.$router.push('/')
                }, 1000);
            }
            if (data.code == 400) {
                Toast.fail(data.message)
            }
        }).catch(error => {
            console.log(error);
        });
    },
    // 注册
    regiest(){
        console.log("222",this.regName,this.regPwd)
        var data = {...this.$store.state.defaultData};
        data.email = this.regName;
        data.passwd = this.regPwd;
        if (this.regName == '') {
            Toast.fail("email不能为空")
            return;
        }
         if (this.regPwd == '') {
            Toast.fail("密码不能为空")
            return;
        }
        this.$post('/api/user/register',data).then(data => {
            var that = this;
            if(data.code == 400){
                Toast.fail(data.message);
            }
            if (data.code == 200) {
                var src = require('@/assets/img/personal/user_img.png');
                store.commit('changeStore',{key:'token',val:data.data.token});
                if (data.data.photo !=='' && (data.data.photo !== null)) {
                    store.commit('changeStore',{key:'photo',val:data.data.photo});
                }else{
                    store.commit('changeStore',{key:'photo',val:src});
                }
                Toast.success(data.message)
                localStorage.setItem('token',data.data.token)
                localStorage.setItem('id_cart',data.data.id_cart)
                setTimeout(() => {
                    that.$router.push({
                        name: 'Home'
                    })
                }, 1000);

            }
            console.log("list",data)
        }).catch(error => {
            console.log(error);
        });
    }
  },
}
</script>

<style lang="scss" scoped>
    .login{
        background: #fff;
    }
  .logIco{
      text-align: center;
      margin-top: 86px;
  }
  .changeTabs{
      height: 30px;
      width: 100%;
      margin-top: 40px;
  }
  .changeTab{
      width: 50%;
      text-align: center;
      font-size: 16px;
      font-family: Cairo-Bold;
      float: left;
  }
  .changeText{
      display: inline-block;
      height: 25px;
  }
  .chosedText{
      font-weight: bolder;
      border-bottom: 2px solid black;
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
      margin: 36px auto;
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
  .registerText{
      width: 80%;
      direction: rtl;
      margin: 30px auto;
      text-align: right;
  }
  .registerText span{
      display: block;
      color: #999999;
  }
  .close_{
      position: absolute;
      overflow: auto;
      top: 10px;
      left: 10px;
      z-index: 999;
  }
</style>


