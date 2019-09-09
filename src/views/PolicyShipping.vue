<template>
  <div class="return">
    <header class="dis_flex">
      <span></span>
      <span></span>
      <span>
        <a @click="$router.go(-1)">
          <span
            class="fontSize12 color000000"
            style="margin-right:10px;font-weight: 600;"
          >سياسة الشحن</span>
          <img src="../assets/img/return.png" alt />
        </a>
      </span>
    </header>
    <div class="faq_content">
      <div class="faq_title">
        <span class="color999">سياسة الشحن//</span>
        <span>سياسة الشحن</span>
      </div>
      <div class="faq_details_title">
        <span>سياسة الشحن</span>
      </div>
      <div class="faq_detail_desc">
        <span>سوف يتم شحن طلبك لك فور تجهيزه، يختلف وقت الشحن من بلد إلى آخر، يرجى الرجوع إلى الجدول أدناه للحصول على التفاصيل.</span>
      </div>
      <div class="faq_type">
        <div class="type-title">
          <p :class="{'active':faq_type==1}" @click="faq_type=1">الدول الأخرى</p>
          <p :class="{'active':faq_type==2}" @click="faq_type=2">دول الخليج العربية الست</p>
        </div>
        <div class="type-detail" v-if="faq_type==1">
          <van-collapse v-model="activeNames1">
            <van-collapse-item title="الولايات المتحدة" name="1-1">
              <table>
                <tbody>
                  <tr style="height: 21px;">
                    <td style="width: 33.3333%; text-align: center; height: 21px;">طريق الشحن</td>
                    <td style="width: 33.3333%; text-align: center; height: 21px;">التكلفة</td>
                    <td
                      style="width: 33.3333%; text-align: center; height: 21px;"
                    >زمن التوصيل (يوم العمل)</td>
                  </tr>
                  <tr style="height: 21px;">
                    <td
                      style="width: 33.3333%; text-align: center; height: 42px;"
                      rowspan="2"
                    >الشحن المعجل</td>
                    <td
                      style="width: 33.3333%; text-align: center; height: 21px;"
                    >الشحن المجاني للطلب أكثر من $40</td>
                    <td style="width: 33.3333%; text-align: center; height: 42px;" rowspan="2">6</td>
                  </tr>
                  <tr style="height: 21px;">
                    <td
                      style="width: 33.3333%; text-align: center; height: 21px;"
                    >رسم الشحن $7 للطلب $0-$40</td>
                  </tr>
                </tbody>
              </table>
            </van-collapse-item>
            <van-collapse-item title="标题2" name="1-2">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="1-3">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="1-4">内容</van-collapse-item>
          </van-collapse>
        </div>
        <div class="type-detail" v-if="faq_type==2">
          <van-collapse v-model="activeNames2">
            <van-collapse-item title="标题1" name="2-1">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2-2">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2-3">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2-4">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2-5">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2-6">内容</van-collapse-item>
          </van-collapse>
        </div>
        <div class="tip">
          <p>ملاحظة: هذا لا يشمل عطلات نهاية الأسبوع أو الإجازات.</p>
          <p>يقدر وقت الشحن ويبدأ من تاريخ الشحن، بدلا من تاريخ الطلب، ويمكن أن يستغرق وقتا أطول من التاريخ المتوقع بسبب عنوان غير صالح أو إجراءات التخليص الجمركي أو لأسباب أخرى.</p>
          <p>يرجى تقديم تذكرة في غضون 6 أشهر من الشحن إذا لم تصل الحزمة في الوقت المناسب، وسيقوم ممثلنا بالرد عليك في غضون 24 ساعة. يرجى ملاحظة أن الطلبات المتأخرة قد لا تكون مقبولة.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import router from "vue-router";
import { METHODS } from "http";
import { Collapse, CollapseItem } from "vant";
Vue.use(Collapse).use(CollapseItem);
export default {
  data() {
    return {
      faq_type: 1,
      activeNames1: ["1-1", "1-2", "1-3", "1-4"],
      activeNames2: ["2-1", "2-2", "2-3", "2-4", "2-5", "2-6"]
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.return {
  .dis_flex {
    display: flex;
  }
  header {
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
    z-index: 999;
    border-bottom: 1px solid #d8d8d8;
    line-height: 44px;
    padding: 0 15px;
    justify-content: space-between;
    box-sizing: border-box;
    img {
      vertical-align: middle;
    }
  }
  .faq_content {
    margin-top: 45px;
    direction: rtl;
    text-align: right;
    .faq_title {
      /* text-align: center; */
      font-size: 12px;
      color: #000000;
      font-weight: 600;
      padding: 13px 15px 10px 15px;
      .color999 {
        color: #999999;
      }
    }
    .faq_details_title {
      padding: 24px 20px 10px 20px;
    }
    .faq_detail_desc {
      font-size: 12px;
      padding: 0 20px;
      span {
        color: #999999;
      }
    }
    .faq_type {
      padding: 24px 20px 10px 20px;
      font-size: 12px;
      .type-title {
        overflow: hidden;
        p {
          float: left;
          width: 50%;
          text-align: center;
        }
        p.active {
          text-decoration: underline;
          color: #000000;
          font-weight: bold;
        }
      }
      .type-detail {
        .van-collapse-item{
          margin-bottom: 5px;
        }
        .van-collapse-item__title{
          background: #d8d8d8;
        }
        .van-collapse-item__content{
          padding:0;
        }
        table{
          border:1px solid #999999;
        }
      }
    }
  }
}
</style>