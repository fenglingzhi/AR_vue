<template>
  <div class="bag">
    <header>
      <div class="header_wrap">
        <div class="title">عنوان الشحن&nbsp;</div>
        <div class="announce">
          <img src="../assets/img/return.png" alt />
        </div>
      </div>
    </header>
    <div class="body">
      <!-- 空购物车 -->
      <div class="no_product" v-if="data_all.length==0">
        <img src="../assets/img/bag/bag.png" alt />
        <p style="text-align: center">سنمتاشمنلال مامنتاش …</p>
        <a href class="buy_again">الشراء الفوري</a>
      </div>
      <!-- 有东西 -->
      <div class="has_product" v-if="data_all.length>0">
        <div class="policy">منتاتسلتشلمتالمشعمعغصعضلتال</div>
        <div class="product_list" v-for="(product,index) in data_all" :key="index">
          <div class="product_list_wrap">
            <div class="stepper">
              <div class="stepper_wrap">
                <div class="add">
                  <img src="../assets/img/bag/add.png" alt />
                </div>
                <div class="num">
                  <input type="text" />
                </div>
                <div class="minus">
                  <img src="../assets/img/bag/minus.png" alt />
                </div>
              </div>
            </div>
            <div class="product_info">
              <div class="price">{{product.newprice}}</div>
              <div class="title">بطاقة يمنكنت دهدية يثقللقز</div>
              <div class="size">بطاقة:L</div>
              <div class="color">بتمقة:تنابن</div>
              <div class="delete">
                <img src="../assets/img/bag/delete.png" alt />
              </div>
            </div>
            <div class="product_img">
              <img :src="product.img_url" alt />
            </div>
          </div>
          <div class="tips">
            بطاقة يظتز،وز،منكنت دهدية يثقللقز
            <img src="../assets/img/bag/alert.png" alt />
          </div>
        </div>
      </div>
    </div>
    <footer class="bag_footer" v-if="data_all.length>0">
      <div class="price_total">
        S.R. 24.00
        <span>كتن</span>
      </div>
      <div class="checkout">تقديم</div>
      <div class="coupon">
        <span>منسايتنبسنتانتلتال</span>منسايتنبسنتانتلتال
      </div>
    </footer>
  </div>
</template>
<script>
import router from "vue-router";
import { METHODS } from "http";
export default {
  data() {
    return {
      data_all: []
    };
  },
  components: {},
  mounted() {
    this.getBagInfo();
  },
  methods: {
    getBagInfo() {
      let data = {
        id_currency: 1,
        customer_id: 1
      };
      this.$post("/api/cart/getCartProducts", data).then(res => {
        let data = res.data;
        console.log(data);
        this.data_all = data.productRecommends;
      });
    }
  }
};
</script>
<style lang="scss">
.bag {
  padding-bottom: 114px;
  header {
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    .header_wrap {
      height: 44px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      .title {
        font-weight: bold;
        text-align: center;
        width: 100%;
      }
      .announce {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .body {
    margin-top: 45px;
    background: #f6f6f6;
    overflow: auto;
    position: relative;
    .policy {
      width: 100%;
      height: 36px;
      background: #999999;
      color: #fff;
      text-align: center;
      line-height: 36px;
      margin-bottom: 10px;
    }
    .product_list {
      padding: 10px 20px;
      background: #fff;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      .product_list_wrap {
        display: flex;
        .stepper {
          width: 15px;
          text-align: center;
          align-items: center;
          display: flex;
          .stepper_wrap {
            align-items: center;
            .num {
              margin: 20px 0;
            }
            input {
              border: none;
              width: 15px;
              outline: none;
              text-align: center;
            }
          }
        }
        .product_info {
          text-align: right;
          flex: 1;
          margin-right: 10px;
          position: relative;
          .delete {
            width: 18px;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
        .product_img {
          width: 100px;
          height: auto;
          img {
            width: 100%;
          }
        }
      }
      .tips {
        text-align: right;
        margin-top: 10px;
        color: #999999;
        img {
          width: 14px;
          margin-top: -4px;
          margin-left: 5px;
        }
      }
    }
  }
  .bag_footer {
    box-sizing: border-box;
    padding: 0 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.5);
    z-index: 999;
    background: #fff;
    .price_total {
      margin: 10px;
    }
    .checkout {
      background: #333;
      padding: 10px;
      color: #fff;
    }
    .coupon {
      margin: 10px;
    }
  }
  .no_product {
    width: 100%;
    margin: 0 auto;
    padding: 100px 0;
    background: white;
    .buy_again {
      text-align: center;
      margin-top: 20px;
      padding: 10px;
      background: #333333;
      color: #fff;
    }
  }
}
</style>