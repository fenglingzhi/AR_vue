<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/cupshe.png">
    <div class="login">
      <input type="text" v-model="username" placeholder="用户名qwe">
      <input type="text" v-model="password" placeholder="密码123">
      <div class="submit" @click="login(username,password)">submit</div>
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
              api.Login(username,password).then(resp=>{
                  this.token = resp.data.token;
                  Dialog.alert({
                      title: 'token',
                      message: this.token
                  }).then(() => {
                      // on close
                  });
                  console.log(this.token = resp.data);
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
