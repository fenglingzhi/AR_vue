<template>
  <div class="couponList">
    <header>
      <div class="header_wrap">
        <div class="title">عنوان الشحن&nbsp;</div>
        <div class="announce">
          <img src="../assets/img/return.png" alt />
        </div>
      </div>
    </header>
    <!-- 优惠券 -->
    <ul class="couponBox" v-if="data_all.length>0">
      <li class="coupon active">
        <div class="left">
          <p>kul15</p>
        </div>
        <div class="right">
          <div class="right-top">
            <h2>15%</h2>
            <p>具体的内容</p>
          </div>
          <div class="right-bottom">2019/10/12-2020/10/12</div>
        </div>
        <img src="../assets/img/coupon/active.png" alt class="active-img" />
      </li>
      <li class="coupon unuseable">
        <div class="left">
          <p>kul15</p>
        </div>
        <div class="right">
          <div class="right-top">
            <h2>15%</h2>
            <p>具体的内容</p>
          </div>
          <div class="right-bottom">2019/10/12-2020/10/12</div>
        </div>
        <img src="../assets/img/coupon/active.png" alt class="active-img" />
      </li>
    </ul>
    <!-- 无优惠券 -->
    <div class="no-coupon" v-if="data_all.length==0">
      <img src="../assets/img/coupon/no.png" alt />
      <p>暂无优惠券</p>
    </div>
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
    this.getCouponList();
  },
  methods: {
    getCouponList() {
      let data = {
        customer_id: 1,
        currency_id: 1
      };
      this.$post("/api/userIdentity/getCartRules", data).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss">
.couponList {
  padding-top: 44px;
  header {
    position: fixed;
    overflow: auto;
    background: #fff;
    top: 0;
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
  .couponBox {
    background: #f1f1f1;
    padding-top: 20px;
    .coupon {
      background: url("../assets/img/coupon/coupon.png") center/contain
        no-repeat;
      width: 351px;
      height: 146px;
      // margin: 0 auto;
      margin: -25px 12px;
      overflow: hidden;
      padding: 20px 10px;
      box-sizing: border-box;
      .left {
        float: left;
        width: 29%;
        height: 100%;
        position: relative;
        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          margin: 0 auto;
          color: green;
        }
      }
      .right {
        float: right;
        height: 100%;
        padding-right: 20px;
        width: 58%;
        text-align: right;
        .right-top {
          h2 {
            margin: 0;
            margin-top: 12px;
          }
          p {
            margin: 0;
          }
        }
        .right-bottom {
          margin-top: 5px;
          padding: 5px;
          border-top: 1px solid green;
          color: grey;
        }
      }
      .active-img {
        display: none;
      }
    }
    .coupon.active {
      position: relative;
      .active-img {
        position: absolute;
        top: 16px;
        right: 6px;
        width: 34px;
        display: block;
      }
    }
    .coupon.unuseable {
      background: url("../assets/img/coupon/coupon-grey.png") center/contain
        no-repeat;
      .left {
        p {
          color: grey;
        }
      }
      .right {
        .right-top {
          h2,
          p {
            color: grey;
          }
        }
        .right-bottom {
          border-top: 1px solid grey;
        }
      }
    }
  }
  .no-coupon {
    text-align: center;
    padding-top: 80px;
    img {
      display: block;
      margin: 0 auto;
      width: 140px;
    }
    p {
      margin: 0;
    }
  }
}
</style>