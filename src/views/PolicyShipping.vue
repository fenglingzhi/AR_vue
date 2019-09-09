<template>
  <div class="shipping">
    <header class="dis_flex">
      <span></span>
      <span></span>
      <span>
        <a href="http://m.zorafan.com/faq">
          <span
            class="fontSize12 color000000"
            style="margin-right:10px;font-weight: 600;"
          >سياسة الشحن</span>
          <img
            src="https://m.zorafan.com/themes/default2018/img/personal/faq_back.png"
            alt
            width="16"
          />
        </a>
      </span>
    </header>
    <div class="faq_content">
      <div class="faq_title">
        <span class="color999">سياسة الشحن/</span>
        <span>سياسة الشحن</span>
      </div>

      <div class="faq_details_title">
        <span>سياسة الشحن</span>
      </div>

      <div class="faq_details_content">
        <span class="fontSize12">
          <div class="adress_content">
            <div class="adress_item">
              <div class="adress_item_detail">
                <p
                  class="adress_item_detail_des"
                >سوف يتم شحن طلبك لك فور تجهيزه، يختلف وقت الشحن من بلد إلى آخر، يرجى الرجوع إلى الجدول أدناه للحصول على التفاصيل.</p>
              </div>
            </div>
            <div class="adress_item">
              <div class="tableChanges">
                <div class="tabChanges">
                  <div
                    class="changeButton chosedButton"
                    @click="tabChange('tabB','tabA',this)"
                  >دول الخليج العربية الست</div>
                  <div class="changeButton" @click="tabChange('tabA','tabB',this)">الدول الأخرى</div>
                </div>
                <div class="tabContent">
                  <div class="tabA">
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">الإمارات</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody" style="display: none;">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
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
                              >الشحن المجاني للطلب أكثر من $50</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >7~3</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $8 للطلب $0-$50</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">السعودية</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody" style="display: none;">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
                              <td style="width: 33.3333%; text-align: center; height: 21px;">التكلفة</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >زمن التوصيل (يوم العمل)</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >الشحن السريع</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >الشحن المجاني للطلب أكثر من $89</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~3</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $8 للطلب $0-$89</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">الكويت</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody" style="display: none;">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
                              <td style="width: 33.3333%; text-align: center; height: 21px;">التكلفة</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >زمن التوصيل (يوم العمل)</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >الشحن السريع</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >الشحن المجاني للطلب أكثر من $99</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~3</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $8 للطلب $0-$99</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">البحرين</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody" style="display: none;">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
                              <td style="width: 33.3333%; text-align: center; height: 21px;">التكلفة</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >زمن التوصيل (يوم العمل)</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >الشحن السريع</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >الشحن المجاني للطلب أكثر من $99</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~3</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $8 للطلب $0-$99</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">عمان</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody" style="display: none;">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
                              <td style="width: 33.3333%; text-align: center; height: 21px;">التكلفة</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >زمن التوصيل (يوم العمل)</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >الشحن السريع</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >الشحن المجاني للطلب أكثر من $89</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~3</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $8 للطلب $0-$89</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">قطر</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody" style="display: none;">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
                              <td style="width: 33.3333%; text-align: center; height: 21px;">التكلفة</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >زمن التوصيل (يوم العمل)</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >الشحن السريع</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >الشحن المجاني للطلب أكثر من $99</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~3</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $8 للطلب $0-$99</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tip">
                      <p>ملاحظة: هذا لا يشمل عطلات نهاية الأسبوع أو الإجازات.</p>
                      <p>يقدر وقت الشحن ويبدأ من تاريخ الشحن، بدلا من تاريخ الطلب، ويمكن أن يستغرق وقتا أطول من التاريخ المتوقع بسبب عنوان غير صالح أو إجراءات التخليص الجمركي أو لأسباب أخرى.</p>
                      <p>يرجى تقديم تذكرة في غضون 6 أشهر من الشحن إذا لم تصل الحزمة في الوقت المناسب، وسيقوم ممثلنا بالرد عليك في غضون 24 ساعة. يرجى ملاحظة أن الطلبات المتأخرة قد لا تكون مقبولة.</p>
                    </div>
                  </div>
                  <div class="tabB">
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">الولايات المتحدة</div>
                        <div class="state">-</div>
                      </div>
                      <div class="itemBody" style="display: block;">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
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
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >6</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $7 للطلب $0-$40</td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="tip">
                          <p>ملاحظة:</p>
                          <p>لم نفتح بعد قنوات لوجستية في ألاسكا وساموا الأمريكية وغوام وهاواي وجزر ماريانا الشمالية وبورتوريكو وجزر فيرجن، لذلك لن يتم شحن المنتجات إلى هذه المناطق مؤقتا.</p>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">أستراليا</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
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
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~6</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $3 للطلب $0-$40</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">كندا</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
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
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~6</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $4 للطلب $0-$40</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="item">
                      <div class="itemHead" @click="openSee(this)">
                        <div class="itemName">الدول الأخرى</div>
                        <div class="state">+</div>
                      </div>
                      <div class="itemBody">
                        <table
                          style="border-collapse: collapse; width: 100%; height: 63px; border-color: #dcdede;"
                          border="1"
                        >
                          <tbody>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >طريق الشحن</td>
                              <td style="width: 33.3333%; text-align: center; height: 21px;">التكلفة</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >زمن التوصيل (يوم العمل)</td>
                            </tr>
                            <tr style="height: 21px;">
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >الشحن السريع</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 21px;"
                              >رسم الشحن $15 لجميع الطلبات</td>
                              <td
                                style="width: 33.3333%; text-align: center; height: 42px;"
                                rowspan="2"
                              >8~4</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tip">
                      <p>ملاحظة: هذا لا يشمل عطلات نهاية الأسبوع أو الإجازات.</p>
                      <p>يقدر وقت الشحن ويبدأ من تاريخ الشحن، بدلا من تاريخ الطلب، ويمكن أن يستغرق وقتا أطول من التاريخ المتوقع بسبب عنوان غير صالح أو إجراءات التخليص الجمركي أو لأسباب أخرى.</p>
                      <p>يرجى تقديم تذكرة في غضون 6 أشهر من الشحن إذا لم تصل الحزمة في الوقت المناسب، وسيقوم ممثلنا بالرد عليك في غضون 24 ساعة. يرجى ملاحظة أن الطلبات المتأخرة قد لا تكون مقبولة.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import router from "vue-router";
import { METHODS } from "http";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    openSee(dom) {
      $(dom)
        .parent()
        .find(".itemBody")
        .slideToggle();
      var stat = $(dom)
        .find(".state")
        .html();
      if (stat == "-") {
        $(dom)
          .find(".state")
          .html("+");
      } else {
        $(dom)
          .find(".state")
          .html("-");
      }
    },
    tabChange(nameA, nameB, dom) {
      $(".chosedButton").removeClass("chosedButton");
      $("." + nameA).css("display", "none");
      $("." + nameB).css("display", "block");
      $(dom).addClass("chosedButton");
    }
  }
};
</script>
<style lang="scss">
.return {
  text-align: right;
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
  }
  .faq_content {
    margin-top: 45px;
    direction: rtl;
  }
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
      .adress_content {
        margin-bottom: 80px;
        direction: rtl;
        .adress_item {
          margin-top: 10px;
          background: #ffffff;
          .adress_item_detail {
            padding: 0 0 20px;
            direction: rtl;
            .adress_item_detail_des {
              font-size: 12px;
              color: #999999;
              line-height: 14px;
              margin-top: 7px;
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
}
</style>