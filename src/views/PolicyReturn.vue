<template>
  <div class="return">
    <header class="dis_flex">
      <span></span>
      <span></span>
      <span>
        <a @click="$router.go(-1)">
          <span class="fontSize12 color000000" style="margin-right:10px;font-weight: 600;">الإرجاع</span>
          <img src="../assets/img/return.png" alt />
        </a>
      </span>
    </header>
    <div class="faq_content">
      <div class="faq_title">
        <span class="color999">الإرجاع/</span>
        <span>ما هي سياسة الإرجاع لديكم؟</span>
      </div>

      <div class="faq_details_title">
        <span>ما هي سياسة الإرجاع لديكم؟</span>
      </div>

      <div class="faq_details_content">
        <span class="fontSize12">
          <p>
            <span>
              سياسة الإرجاع
              <br />كيفية القيام بإرجاع
              <br />1. أرسل طلبك إلى service@zorafan.com مع سبب الإرجاع.
              <br />2. وسيتم رد الإرشادات عليك بمجرد تلقينا طلبك.
              <br />3. أرسل منتجاتك إلى العنوان المعين وأعطنا الوثائق المتعلقة بالإرجاع حسب إرشادات الإرجاع الخاصة بنا.
              <br />4. بمجرد أن يتم استلام الحزمة، سيتم الانتهاء من إرجاعك.
            </span>
            <span>
              <br />
            </span>
          </p>
          <p>
            <span>
              أحكام الإرجاع والاستبدال *
              <br />1. يجب أن تبدأ جميع المتطلبات للإرجاع في غضون 30 يوما من استلام حزمتك.
              <br />&nbsp;2.لا يمكن إرجاع أو استبدال المنتجات التالية: البودي سوت، والملابس الداخلية وملابس النوم، وملابس السباحة، والمجوهرات والإكسسوارات (بإستثناء الأوشحة، الحقائب، وبطانيات حورية البحر)
              <br />3. يجب أن ترجع جميع المنتجات في حالتها الأصلية وجميع العلامات مرفقة. نحن لا نقبل أي منتج مرجع يتم ارتداؤه أو تلفه أو غسله أو تغييره عن أي طريق.
              <br />4 - نحن لا نقبل استلام البضائع التي تم إرجاعها من قبلكم بدون التحقق معنا أولا.
              <br />ملاحظة: يرجى عدم الإرجاع إلى العنوان المرفق بالحزمة الخاصة بك. هذا ليس عنوان الإرجاع الخاص بنا، وذلك سيؤثر في معالجة الإرجاع الخاص بك.
              <br />
            </span>
          </p>
          <p>
            <span>
              إعادة الأموال
              <br />تتم معالجة عملية الإرجاع بعد استلامنا الحزمة. سيتم إرجاع المبلغ المسترد إلى حساب باي بال (PayPal) أو حساب الدفع الأصلي حسب طلبك.
              <br />ملاحظة: رسوم الشحن الأصلية والتكلفة للدفع عند الاستلام غير قابلة للاسترداد."
            </span>
          </p>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import router from "vue-router";
import { METHODS } from "http";
export default {
  data() {
    return {};
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
    .faq_details_content {
      padding: 0 20px;
      line-height: 20px;
      .fontSize12 {
        font-size: 12px;
      }
      p {
        margin: 0 0 10px;
      }
    }
  }
}
</style>