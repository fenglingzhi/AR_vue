<template>
  <div class="about">
    <van-tabs v-model="active" sticky @change="getTypeDate">
      <van-tab v-for="(tab) in typeList" :title="tab.name" :key="tab.id">
        <div :style="{height: contentHeight}" class="pic-content">
          <van-list :finished="finished" :finished-text="finishedText" v-model="loading" :offset="10" :immediate-check="false" @load="getserviceList">
            <van-row>
                <van-col span="12" class="pic-box" v-for="(serve) in serviceList" :key="serve.id"  @click="router(serve)">
                  <div class="pic-item">
                    <img v-if="serve.picturePath" :src="$BASE_PICTUREPATH_URL + serve.picturePath.split(',')[0]">
                  </div>
                  <p>{{serve.name}}</p>
                  <p class="price-red">¥{{serve.price}}</p>
                </van-col>
              </van-row>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs, List, Cell, Row, Col } from "vant";
import { FetchServeType, FetchServeList } from "../apis/serve.js";

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [Cell.name]: Cell,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      active: 0,
      typeList: [],
      serviceList: [],
      type: "",
      finishedText: "",
      finished: false,
      pageNum: 1,
      pageSize: 10,
      contentHeight: 0,
      loading: false
    };
  },
  mounted() {
    this.getOrderStyle();
    this.contentHeight = document.documentElement.clientHeight - 66 - 40 + "px";
    
  },
  methods: {
    async getOrderStyle() {
      let res = await FetchServeType();
      if (res.data && res.data.success) {
        this.typeList = res.data.data;
        this.type = res.data.data[0].name;
        this.getTypeDate();
      }
    },
    getTypeDate() {
      this.pageNum = 1;
      this.type = this.typeList[this.active].name;
      this.serviceList = [];
      this.finishedText = "";
      this.finished = false;
      this.getserviceList();
    },
    async getserviceList() {
      let toast = this.$toast.loading({
        mask: true,
        message: "加载中..."
      });
      const { type, pageNum, pageSize } = this;
      let params = {
        type,
        pageNum,
        pageSize
      };
      let res = await FetchServeList(params);
      this.loading = false;
      toast.close();
      if (res.data && res.data.success) {
        let list = (res.data.data && res.data.data.list) || [];
        if (pageNum > 1) {
          this.serviceList = [...this.serviceList, ...list];
        } else {
          this.serviceList = list;
        }
        // 如果当前页数 = 总页数，则已经没有数据
        if (res.data.data.pageNum === res.data.data.pages) {
          this.finished = true;
          this.finishedText = "- 没有更多了-";
        }
        // 如果总页数大于当前页码，页码+1
        if (res.data.data.pages > pageNum) {
          this.pageNum++;
        }
      }
      console.log("FetchServeList: ", this.serviceList);
    }
  }
};
</script>

<style lang="scss" scoped>
.pic-content {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .pic-box {
   /*background-color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 0.7rem;
    padding: 0.8rem;
    height: 16rem;
    border-radius: 4px;*/
    p:nth-of-type(1) {
      padding: 0.8rem 0;
    }
    p:nth-of-type(2) {
      color: red;
    }
    .pic-item {
      height: 11rem;

      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        border-radius: 4px;
      }
    }
  }
}
</style>
