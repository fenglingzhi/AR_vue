<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/cupshe.png">
    <div class="login">
      <input type="text" v-model="username" placeholder="用户名qwe">
      <input type="text" v-model="password" placeholder="密码123">
      <div class="submit" @click="login(username,password)"><i class="iconfont cupshe-xiangzi"></i> submit</div>
    </div>
  </div>
</template>

<script>
    import * as api from '../api/commonApi'
    import { Dialog } from 'vant';
    export default {
        components : {
            Dialog
        },
        data () {
            return {
                username: '',
                password: '',
                token: ''
            }
        },
        mounted() {

        },
        methods: {
          login:function (username,password) {
              let vm = this;
              api.Login(username,password).then(resp=>{
                  this.token = resp.data.token;
                  Dialog.alert({
                      title: 'token',
                      message: vm.token
                  }).then(() => {
                      // on close
                  });
                  console.log(vm.token = resp.data);
              })
          }
        }
    }
</script>
<style lang="scss" scoped>
  img{
    width: 200px;
    height: 200px;
    cursor: pointer;
    margin-top: 30px;
  }
  .login{

    input{
      margin: 10px auto;
      display: block;
    }
    .submit{
      cursor: pointer;
      padding: 10px;
      margin: 20px auto;
      background: #000;
      color: #fff;width: 100px;
    }
  }
</style>
