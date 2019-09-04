<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="loadMore" :offset="300">
      <div class="list">
        <div>
          <img src="" alt="" srcset="">
        </div>
        <div>
          <img src="" alt="">
          <div class="flex-cloumn">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
     </van-list>
  </div>
</template>

<script>
import * as api from "../api/commonApi";
import router from "vue-router";
import axios from "axios";
import { Dialog, List  } from 'vant';
import store from '../store/store.js'
export default {
  data() {
    return {
      lists:[],
      loading: false,
      finished: false,
      listData:{
        action:'getWishlists',
        id_currency:"1",
        page:"1"
      },
      total_page:"" ,
    }
  },
  methods: {
    getWishlist(data){
      this.$post('/api/wishlist/getWishlists',data).then(data => {
         console.log("list",data)
          this.Lists = this.Lists.concat(redata.data.data.products);
          this.total_page = redata.data.data.total_page;
      }).catch(error => {
        console.log(error);
      });
    },
    loadMore() {
    // 异步更新数据
        setTimeout(() => {
            if(this.total_page >= this.listData.page ){
                console.log("下拉",this.listData)
                this.listData.page = Number(this.listData.page) + 1;
                this.getWishlist(this.listData);
                if(this.total_page = this.listData.page){
                    this.loading = false;
                    this.finished = true;
                }
            }else{
                this.loading = false;
                this.finished = true;
            }
        }, 3000);
    },
  },
  mounted() {
    this.listData ={ ...this.$store.state.defaultData,...this.listData}
    console.log(this.listData)
    this.getWishlist(this.listData)
  },
}
</script>