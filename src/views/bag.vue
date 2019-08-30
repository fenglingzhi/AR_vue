<template>
  <div class="productDetail_zd">
    <header>
      <div class="header_wrap">
        <div class="bag">
          <img src="../assets/img/index/bag.png" alt />
          <div class="num">12</div>
        </div>
        <div class="logo">
          <img src="../assets/img/index/AR-logo.png" alt />
        </div>
        <div class="back_logo">
          <div class="back">
            <img src="../assets/img/return.png" alt />
          </div>
        </div>
      </div>
    </header>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="black" id="swiper">
      <van-swipe-item v-for="(img,index) in data_all.images" :key="index">
        <img :src="img" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="category_info">
      <div class="share_title">
        <div class="share">
          <img src="../assets/img/product_detail/share.png" alt />
        </div>
        <div class="title">{{data_all.name}}</div>
      </div>
      <div class="price">
        <span class="old_price">{{data_all.old_price}}</span>
        <span class="now_price">{{data_all.new_price}}</span>
      </div>
      <div class="color_wrap">
        <div class="color_title">س :</div>
        <div class="color">
          <div
            class="color_list"
            v-for="(color,index) in data_all.product_attribute_colors"
            :key="index"
          >
            <img :src="color.color_image_url" :alt="color.name" />
          </div>
        </div>
      </div>
      <div class="size_wrap">
        <div class="size_title">نتبلي :</div>
        <div class="size">
          <div
            class="size_list"
            v-for="(size,index) in data_all.product_attribute_sizes"
            :key="index"
          >{{size.name}}</div>
        </div>
      </div>
      <!-- 产品信息 -->
      <div class="product_info">
        <div class="size_guide">
          <div class="size_guide_icon">
            <img src="../assets/img/choseMore.png" alt />
          </div>
          <div class="size_guide_title">نتبرالت،رل نتمياستلمظ</div>
        </div>
        <div class="material_policy">
          <div class="material_policy_title">
            <div
              class="material"
              @click="material_content_show_change2t"
              :class="{'material_policy_active':material_content_show}"
            >نتبرالت،رل</div>
            <div
              class="policy"
              @click="material_content_show_change2f"
              :class="{'material_policy_active':!material_content_show}"
            >نتبراماتسبس / اتنلشست،رل</div>
          </div>
          <div class="material_policy_wrap">
            <!-- 描述 -->
            <div
              class="material_content"
              v-show="material_content_show"
              v-html="data_all.description"
            ></div>
            <div class="policy_content" v-show="!material_content_show">
              <div class="policy_list">
                <div class="policy_title">نتبراماتاتنلت،رل :</div>
                <div class="policy_text" :class="{'policy_text_active':view_more1}">
                  <a
                    :href="data_all.return_policy"
                    target="_blank"
                  >{{data_all.return_policy_message}}</a>
                </div>
                <div class="view_more" v-show="!view_more1" @click="view_more1_change2t">
                  <div class="view_more_icon">
                    <img src="../assets/img/down.png" alt />
                  </div>
                  <div class="view_more_text">نتبراماتات ستامش</div>
                </div>
                <div class="close_view_more" v-show="view_more1" @click="view_more1_change2f">
                  <div class="view_more_icon">
                    <img src="../assets/img/up.png" alt />
                  </div>
                  <div class="view_more_text">نتبراماتات ستامش</div>
                </div>
              </div>
              <div class="policy_list">
                <div class="policy_title">نتبراماتاتنلت،رل :</div>
                <div class="policy_text" :class="{'policy_text_active':view_more2}">
                  <a
                    :href="data_all.shipping_policy"
                    target="_blank"
                  >{{data_all.shipping_policy_message}}</a>
                </div>
                <div class="view_more" v-show="!view_more2" @click="view_more2_change2t">
                  <div class="view_more_icon">
                    <img src="../assets/img/down.png" alt />
                  </div>
                  <div class="view_more_text">نتبراماتات ستامش</div>
                </div>
                <div class="close_view_more" v-show="view_more2" @click="view_more2_change2f">
                  <div class="view_more_icon">
                    <img src="../assets/img/up.png" alt />
                  </div>
                  <div class="view_more_text">نتبراماتات ستامش</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "vue-router";
import { METHODS } from "http";
export default {
  data() {
    return {
      // 获取语言id
      color_selected: "",
      size_selected: "",
      material_content_show: true,
      data_all: {},
      view_more1: false,
      view_more2: false
    };
  },
  components: {},
  mounted() {
    this.getDetailInfo();
  },
  methods: {
    material_content_show_change2f() {
      this.material_content_show = false;
    },
    material_content_show_change2t() {
      this.material_content_show = true;
    },
    view_more1_change2t() {
      this.view_more1 = true;
    },
    view_more1_change2f() {
      this.view_more1 = false;
    },
    view_more2_change2t() {
      this.view_more2 = true;
    },
    view_more2_change2f() {
      this.view_more2 = false;
    },
    getDetailInfo() {
      let data = {
        id_currency: 1,
        id_product: 26,
        lang_id: 1
      };
      this.$post("/api/product/getProduct", data).then(res => {
        let data = res.data.data;
        console.log(data);
        this.$set(this.data_all, "name", data.name);
        this.$set(this.data_all, "description", data.description);
        this.$set(this.data_all, "old_price", data.old_price);
        this.$set(this.data_all, "new_price", data.new_price);
        this.$set(this.data_all, "images", data.images);
        this.$set(this.data_all, "return_policy", data.return_policy);
        this.$set(this.data_all, "shipping_policy", data.shipping_policy);
        this.$set(
          this.data_all,
          "shipping_policy_message",
          data.shipping_policy_message
        );
        this.$set(
          this.data_all,
          "return_policy_message",
          data.return_policy_message
        );
        this.$set(
          this.data_all,
          "product_attribute_colors",
          data.product_attribute_colors
        );
        this.$set(
          this.data_all,
          "product_attribute_sizes",
          data.product_attribute_sizes
        );
      });
    }
  }
};
</script>
<style lang="scss">
.productDetail_zd {
  padding-bottom: 70px;
  header {
    .header_wrap {
      height: 44px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      position: relative;
    }
    .logo {
    }
    .back_logo {
    }
    .num {
      width: 18px;
      line-height: 18px;
      border-radius: 10px;
      position: absolute;
      border: 1px solid #000;
      bottom: 4px;
      left: 25px;
      background: #000;
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }
  #swiper {
    max-height: 500px;
    .van-swipe__indicators {
      .van-swipe__indicator {
        background-color: transparent;
        border: 1px solid black;
      }
    }
  }
  //   商品尺码
  .category_info {
    padding: 10px;
    background: #fff;
    margin-bottom: 10px;
    .share_title {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      overflow: auto;
      .share {
        width: 23px;
        img {
          height: 24px;
        }
      }
      .share_title .title {
        line-height: 24px;
        font-size: 16px;
      }
    }
    .price {
      text-align: right;
      .old_price {
        font-size: 14px;
        font-weight: bold;
        text-decoration: line-through;
        padding-right: 10px;
      }
      .now_price {
        font-size: 18px;
        font-weight: bold;
        color: #d00000;
      }
    }
    .color_wrap {
      font-size: 14px;
      text-align: right;
      .color {
        overflow: hidden;
      }
      .color_list {
        float: right;
        width: 36px;
        padding: 5px;
        margin: 10px;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      .color_list_active {
        border: 1px solid #333;
      }
    }
    .size_wrap {
      .size {
        overflow: hidden;
      }
      font-size: 14px;
      text-align: right;
      clear: both;
      .size_list {
        padding: 2px 0;
        float: right;
        text-align: center;
        border: 1px solid #d8d8d8;
        margin: 10px;
        width: 50px;
      }
      .size_list_active {
        background: #333333;
        color: #fff;
      }
    }
    // 产品信息
    .product_info {
      padding: 0 10px;
      margin: 10px 0;
      background: #fff;
      .size_guide {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        .size_guide_icon {
          height: 14px;
          width: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .material_policy {
        .material_policy_title {
          width: 100%;
          background: #f8f8f8;
          overflow: auto;
          .material {
            float: right;
            margin-left: 30px;
            padding: 10px 0;
          }
          .policy {
            padding: 10px 0;
            float: right;
          }
          .material_policy_active {
            border-bottom: 2px solid #000000;
            font-weight: bold;
          }
        }
        .material_policy_wrap {
          .material_content {
            text-align: right;
            padding: 20px 0;
          }
          .policy_content {
            text-align: right;
            .policy_list {
              border-bottom: 2px solid #d8d8d8;
              margin: 10px 0;
              .policy_title {
                font-weight: bold;
                padding: 20px 0;
              }
              .policy_text {
                height: 50px;
                overflow: hidden;
                line-height: 20px;
              }
              .policy_text_active {
                height: auto;
              }
              .view_more,
              .close_view_more {
                display: flex;
                justify-content: center;
                padding-bottom: 10px;
                .view_more_icon {
                  width: 14px;
                  height: 10px;
                  margin-right: 20px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>