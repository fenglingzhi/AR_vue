<template>
  <div class="productDetail_zd">
    <header>
      <div class="header_wrap">
        <div class="bag-img" @click="$router.push('Bag')">
          <img src="../assets/img/index/bag.png" alt />
          <div class="num">{{selected_products_num}}</div>
        </div>
        <div class="logo">
          <img src="../assets/img/index/AR-logo.png" alt />
        </div>
        <div class="back_logo" @click="$router.go(-1)">
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
        <div class="share" @click="share_show_event">
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
            @click="color_selected=color.id_color"
            :class="{'active':color_selected==color.id_color}"
            v-for="(color,index) in data_all.product_attribute_colors"
            :key="index"
          >
            <img :src="color.color_image_url" :alt="color.name" />
          </div>
        </div>
      </div>
      <div class="size_wrap">
        <div class="size_title">الحجم :</div>
        <div class="size">
          <div
            class="size_list"
            @click="size_selected=size.id_size"
            :class="{'active':size_selected==size.id_size}"
            v-for="(size,index) in data_all.product_attribute_sizes"
            :key="index"
          >{{size.name}}</div>
        </div>
      </div>
      <!-- 产品信息 -->
      <div class="product_info">
        <div class="size_guide">
          <!-- <div class="size_guide_icon">
            <img src="../assets/img/choseMore.png" alt />
          </div>-->
          <div class="size_guide_title">نتبرالت،رل نتمياستلمظ</div>
        </div>
        <div class="material_policy">
          <div class="material_policy_title">
            <div
              class="material"
              @click="material_content_show_change2t"
              :class="{'material_policy_active':material_content_show}"
            >الوصف</div>
            <div
              class="policy"
              @click="material_content_show_change2f"
              :class="{'material_policy_active':!material_content_show}"
            >سياسة الشحن/سياسة الإرجاع</div>
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
    <!-- 添加进购物车按钮 -->
    <div class="add2bag_box">
      <button @click="add2bag">الإضافة إلى حقيبة التسوق</button>
    </div>

    <!-- 分享模态框 -->
    <van-popup v-model="share_show" position="bottom">
      <div class="social_box">
        <div class="social_wrap">
          <div class="social_title">مشاركة مع</div>
          <div class="social_item_wrap">
            <div class="social_item" @click="share('fb')">
              <img src="../assets/img/product_detail/Facebook.png" alt />
            </div>
            <!-- <div class="social_item">
              <img src="../assets/img/product_detail/ins.png" alt />
            </div>-->
            <div class="social_item" @click="share('pinterest')">
              <img src="../assets/img/product_detail/pinterest.png" alt />
            </div>
            <!-- <div class="social_item">
              <img src="../assets/img/product_detail/message.png" alt />
            </div>-->
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import router from "vue-router";
import { METHODS } from "http";
export default {
  data() {
    return {
      color_selected: "",
      size_selected: "",
      material_content_show: true,
      //   详情数据
      data_all: {},
      view_more1: false,
      view_more2: false,
      share_show: false,
      //   购物车已选择的商品数量
      selected_products_num: 0
    };
  },
  components: {},
  mounted() {
    this.getDetailInfo();
    this.getSelectedProductsNum();
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
    // 获取商品详情
    getDetailInfo() {
      let data = {
        id_currency: 1,
        id_product: 26,
        lang_id: 1
      };
      this.$post("/api/product/getProduct", data).then(res => {
        let data = res.data;
        console.log("商品详情", data);
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
    },
    // 获取购物车中物品数量
    getSelectedProductsNum() {
      let data = {
        id_currency: 1,
        customer_id: 1
      };
      this.$post("/api/cart/getCartProducts", data).then(res => {
        this.selected_products_num = res.data.productRecommends.length;
      });
    },
    // 添加商品进购物车
    add2bag() {
      if (this.color_selected == "") {
        this.$toast("请选择颜色");
        return false;
      }
      if (this.size_selected == "") {
        this.$toast("请选择尺码");
        return false;
      }
      //   let data={
      //   }
      //   this.$post("/api/cart/setCartProduct",data).then(res=>{

      //   })
    },
    share_show_event() {
      this.share_show = true;
    },
    // 分享事件
    share(type) {
      let share_url = window.location.href;
      switch (type) {
        case "fb":
          let fb_url = "http://www.facebook.com/sharer/sharer.php?u=";
          window.open(fb_url + share_url);
          break;
        case "pinterest":
          let pinterest_url =
            "https://www.pinterest.com/pin/create/button/?url=";
          window.open(pinterest_url + share_url);
          break;
      }
    }
  }
};
</script>
<style lang="scss">
.productDetail_zd {
  padding-top: 44px;
  padding-bottom: 67px;
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9;
    background: white;
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
        border: 1px solid white;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      .color_list.active {
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
      .size_list.active {
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
        justify-content: flex-end;
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
  .social_wrap {
    padding: 0 20px 20px 20px;
    .social_title {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid #d8d8d8;
      color: #999999;
      margin-bottom: 10px;
    }
    .social_item_wrap {
      display: flex;
      justify-content: space-between;
    }
  }
  .add2bag_box {
    border-top: 1px solid black;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px 20px;
    background: white;
    box-sizing: border-box;
    button {
      width: 100%;
      border: none;
      background: #000;
      color: white;
      font-size: 14px;
      padding: 10px;
    }
  }
}
</style>