<template>
  <div>
    <header class="dis_flex">
        <span></span>
        <span class="header_titile">عنوان الشحن</span>
        <span><img src="@/assets/img/personal/adress_return.png" alt="" class="header_return_img" @click="back()"></span>
    </header>
    <div class="addAdress_content">
        <!-- 国家选择 -->
        <div class="addAdress_content_container">
            <div class="addAdress_content_item dis_flex" id="country_select">
                <div class="addAdress_content_item_right">
                    <label for="" class="addAdress_content_item_title">*البلد /   المنطقة</label>
                    <div class="addAdress_content_item_input">
                        <input type="text" style="font-weight: 600;background:#fff;" disabled  value="" id="country_select_input">
                    </div>
                </div>
                <div class="addAdress_content_item_left">
                    <img src="@/assets/img/personal/adress_goLeft.png" alt="" width="8">
                </div>
            </div>
        </div> 
        <!-- common begin -->
        <div class="common_adress">
            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثث نطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثث نطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div>

            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلعهع</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس (ظيشبليازوا)</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثابتس يشثقز <span class="addAdress_content_item_title_sub"> البلثابتس يشثقز C/O (ظيشبليازوا)</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثس يتتابيبفبينعب <span class="addAdress_content_item_title_sub"> البلثابتس  الشسيثقز (ستعيلش)</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <!-- common end -->

        <!-- 沙特 begin -->
        <div class="saudi_adress">
            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثث نطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثث نطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div>

            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border" id="saudi_state_select">
                    <div class="addAdress_content_item_right">
                        <label for="" class="addAdress_content_item_title">*البلعهع / ستمات</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="font-weight: 600;background:#fff;" disabled  value="" id="saudi_state_select_input">
                        </div>
                    </div>
                    <div class="addAdress_content_item_left">
                        <img src="@/assets/img/personal/adress_goLeft.png" alt="" width="8">
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلث</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثابتس يشثقز 1 <span class="addAdress_content_item_title_sub"> البلثابتس يشثنتاتار،ومتا م ت لللقز</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثابتس يشثقز 2 <span class="addAdress_content_item_title_sub"> البلثابتس  الشسي.تاتتزمنت نتانمت</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثابتس يشستالنتالشنتب (شتلتبلايش)<span class="addAdress_content_item_title_sub" onclick="check_id_card()"> ?</span></label>

                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثابتس / يش ستالنتاشت </label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">SA +966 | *البلثابيطسيش ستالنتاشت</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">SA +966 | البلثابيطسيش ستالنتاشت</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 沙特 end -->

        <!-- 阿联酋 begin -->
        <div class="emirates_adress">
            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثث نطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div>

            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border" id="emirates_state_select">
                    <div class="addAdress_content_item_right">
                        <label for="" class="addAdress_content_item_title">*البلعهع / ستمات</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="font-weight: 600;background:#fff;" disabled  value="" id="emirates_state_select_input">
                        </div>
                    </div>
                    <div class="addAdress_content_item_left">
                        <img src="@/assets/img/personal/adress_goLeft.png" alt="" width="8">
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلث</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثابتس يشثقز 1 <span class="addAdress_content_item_title_sub"> البلثابتس يشثنتاتار،ومتا م ت لللقز</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثابتس يشثقز 2 <span class="addAdress_content_item_title_sub"> البلثابتس  الشسي.تاتتزمنت نتانمت</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثابتس / يش ستالنتاشت</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثابتس / يش ستالنتاشت </label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="addAdress_content_container">
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">AE +971 | *البلثابيطسيش ستالنتاشت</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">AE +971 | البلثابيطسيش ستالنتاشت</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 阿联酋 end -->

        <!-- 单选模块 -->
        <div class="addAdress_content_container">
            <div class="addAdress_content_item dis_flex">
                <div class="addAdress_content_item_right flexone">
                    <label for="" class="addAdress_content_item_title">*البلثث نطقة</label>
                    <div class="addAdress_content_item_input"></div>
                </div>
                <div class="addAdress_content_item_left show-notes-container">
                    <label for="show-notes"></label>
                    <div class="addAdress_content_item_input" style="opacity: 0;">
                        <input type="checkbox" style="background:#fff;"  class="addAdress_default_checked">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 底部按钮 -->
    <div class="adress_addContainer">
        <div class="adress_addButton">
            <span>حسناً</span>
        </div>
        <div style="margin-top: 10px;">
            <span>اختيار نم العنوان الافتراضي</span>
        </div>
        
    </div>
    <!-- 国家选择弹窗 -->
    <div class="Mask" id="Mask_country">
        <div class="dis_flex Popup_header">
            <span></span>
            <span class="header_titile">البلد /   المنطقة</span>
            <span class="Popup_close"><img src="@/assets/img/personal/adress_close.png" alt="" width="12"></span>
        </div>
        <div class="Popup_content">
            <div class="Popup_content_location">
                <img src="@/assets/img/personal/adress_loaction.png" alt="" width="12" >
                <span>Macau</span>
            </div>
            <div class="Popup_content_title">
                <span>مناسن/ تنالسخهشامنتالط</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country">
                <span>Qatar</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country">
                <span>Kuwait</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country">
                <span>Oman</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country">
                <span>Bahrain</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country">
                <span>Israel</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country">
                <span>Morocco</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country">
                <span>Algeria</span>
            </div>
        </div>
    </div>
    <!-- 沙特 省份/州 弹窗 -->
    <div class="Mask" id="Mask_saudi">
        <div class="dis_flex Popup_header">
            <span></span>
            <span class="header_titile">البلد /   المنطقة</span>
            <span class="Popup_close_saudi"><img src="@/assets/img/personal/adress_close.png" alt="" width="12"></span>
        </div>
        <div class="Popup_content">
            <div class="Popup_content_location">
                <img src="@/assets/img/personal/adress_loaction.png" alt="" width="12" >
                <span>Macau</span>
            </div>
            <div class="Popup_content_title">
                <span>مناسن/ تنالسخهشامنتالط</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi">
                <span>Qatar1</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi">
                <span>Kuwait2</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi">
                <span>Oman3</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi">
                <span>Bahrain4</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi">
                <span>Israel5</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi">
                <span>Morocco6</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi">
                <span>Algeria7</span>
            </div>
        </div>
    </div>
    <!-- 阿联酋 省份/州 弹窗 -->
    <div class="Mask" id="Mask_emirates">
        <div class="dis_flex Popup_header">
            <span></span>
            <span class="header_titile">البلد /   المنطقة</span>
            <span class="Popup_close_emirates"><img src="@/assets/img/personal/adress_close.png" alt="" width="12"></span>
        </div>
        <div class="Popup_content">
            <div class="Popup_content_location">
                <img src="@/assets/img/personal/adress_loaction.png" alt="" width="12" >
                <span>Macau</span>
            </div>
            <div class="Popup_content_title">
                <span>مناسن/ تنالسخهشامنتالط</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates">
                <span>Qatar11</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates">
                <span>Kuwait22</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates">
                <span>Oman33</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates">
                <span>Bahrain44</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates">
                <span>Israel55</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates">
                <span>Morocco66</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates">
                <span>Algeria77</span>
            </div>
        </div>
    </div>
    <!-- 沙特身份证验证弹窗 -->
    <div class="Mask_saudi_id_card">
        <div class="id_card_wrap">
            <div class="id_card">
                <img src="@/assets/img/ksa id card 2.png" alt="">
                <div class="tip_text">يرجى إضافة رقم الهوية الخاص بك في حالة التفتيش الجمركي</div>
            </div>
            <div class="Mask_saudi_id_card_button" onclick="close_mask_saudi_id()">نعم</div>
        </div>
    </div>
  </div>
</template>

<script>
import * as api from "../api/commonApi";
import { Dialog, List  } from 'vant';
import router from "vue-router";
import axios from "axios";
import $ from "jquery"
import store from '../store/store.js'

export default {
  data() {
    return {
      countryList:[]
      
    }
  },
  methods: {
    check_id_card() {
      $('.Mask_saudi_id_card').css('display','block')

    },
    close_mask_saudi_id() {
      $('.Mask_saudi_id_card').css('display','none')
    },
    back(){
      this.$router.go(-1);//返回上一层
    },
  },
  mounted() {
     $(function () {
        $(".addAdress_content_item_input input").focus(function(){
            $(this).parent().prev().addClass("addAdress_content_item_title_focus");
        })
        $(".addAdress_content_item_input input").blur(function(){
            if($(this).val() == ''){
                $(this).parent().prev().removeClass("addAdress_content_item_title_focus");
            }
        })
        $("label[for='inputError']").click(function(){
            $(this).addClass("addAdress_content_item_title_focus");
            $(this).next().find('input').focus();
        })
        
        // 选择默认地址checkbox按钮事件
        $(".addAdress_default_checked").change(function(){
            if($(this).prop('checked')){
                $(this).parent().prev().addClass("show-notes-checked")
            }else{
                $(this).parent().prev().removeClass("show-notes-checked")
            }
        })
        $("label[for='show-notes']").click(function(){
            if($(this).next().find('.addAdress_default_checked').prop('checked')){
                $(this).removeClass("show-notes-checked");
                $(this).next().find('.addAdress_default_checked').prop('checked',false)
            }else{
                $(this).addClass("show-notes-checked");
                $(this).next().find('.addAdress_default_checked').prop('checked',true)
            }
        })
        // 国家选择弹窗事件
        $("#country_select").click(function(){
            $("#Mask_country").css("top","0");
        })
        $(".Popup_close").click(function(){
            $("#Mask_country").css("top","100%");
        })
        $(".Popup_content_item_country").click(function(){
            $("#country_select_input").attr("value",$(this).find("span").html());
            $("#country_select_input").parent().prev().addClass("addAdress_content_item_title_focus");
            $("#Mask_country").css("top","100%");
        })
        // 沙特 省份/州 选择
        $("#saudi_state_select").click(function(){
            $("#Mask_saudi").css("top","0");
        })
        $(".Popup_close_saudi").click(function(){
            $("#Mask_saudi").css("top","100%");
        })
        $(".Popup_content_item_saudi").click(function(){
            $("#saudi_state_select_input").attr("value",$(this).find("span").html());
            $("#saudi_state_select_input").parent().prev().addClass("addAdress_content_item_title_focus");
            $("#Mask_saudi").css("top","100%");
        })
        // 阿联酋 省份/州 选择
        $("#emirates_state_select").click(function(){
            $("#Mask_emirates").css("top","0");
        })
        $(".Popup_close_emirates").click(function(){
            $("#Mask_emirates").css("top","100%");
        })
        $(".Popup_content_item_emirates").click(function(){
            $("#emirates_state_select_input").attr("value",$(this).find("span").html());
            $("#emirates_state_select_input").parent().prev().addClass("addAdress_content_item_title_focus");
            $("#Mask_emirates").css("top","100%");
        })
        $('.Mask_saudi_id_card').height($(window).height())
    })
  },
}
</script>

<style lang="scss" scoped>
 header{
      position: fixed;
      width:100%;
      background: #fff;
      top: 0;
      z-index: 999;
      border-bottom: 1px solid #D8D8D8;
      display: flex;
      box-sizing: border-box;
      line-height: 44px;
      padding: 0 18px;
      justify-content: space-between;
  }
  .header_titile{
      font-size: 14px;
      color: #000000;
      font-weight: 600;
  }
  .header_return_img{
      width:10px;
  }
  .addAdress_content{
      margin-top:55px;
      margin-bottom:110px;
  }
  .addAdress_content_container{
      background: #fff;
      margin-top:10px;
      padding: 0 15px;
  }
  .addAdress_content_item{
      display: flex;
      direction: rtl;
      text-align: right;
      line-height: 20px;
      font-size: 14px;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px  5px;
  }
  .addAdress_content_item_right{
      position: relative;
  }
  .addAdress_content_item_left{
      line-height: 40px;
  }
  /* 单选css  begin*/
  .show-notes-container{
      width:40px;
      position: relative;
  }
  .show-notes-checked{
      background: #999999 !important;
  }
  .show-notes-checked:after{
      left: 22px !important;
  }
  .addAdress_content_item_left label[for="show-notes"]{
      position: absolute;
      top: 10px;
      left: 2px;
      width: 40px;
      height: 20px;
      background: #D8D8D8;
      box-shadow: inset 0 1px 3px 0 rgba(0,0,0,.3);
      border-radius: 10px;
      cursor: pointer;
      transition: all .2s ease;
  }
  .addAdress_content_item_left label[for="show-notes"]:after{
      position: absolute;
      content: "";
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      background-image: linear-gradient(-180deg,#F8F9F6 0,#F5F5F5 100%);
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.3);
      border-radius: 8px;
      transition: all .15s ease;
  }
    /* 单选css  end*/
  .addAdress_content_item label{
      margin:0;
      z-index: 9
  }
  .addAdress_content_item input[type="text"]{
      border:none;
      line-height: 20px;
      padding-top:20px;
      font-size: 14px;
      color: #000000;
      width:100%;
  }
  .addAdress_content_item input[type="text"]:focus{
      outline: 0;
  }
  .addAdress_content_item_title{
      font-size:14px;
      color: #999999;
      font-weight: unset;
      position: absolute;
      top:10px;
      transition: all 450ms cubic-bezier(.23,1,.32,1) 0s;
      -webkit-transition: all 450ms cubic-bezier(.23,1,.32,1) 0s;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .addAdress_content_item_title_sub{
      color: #D8D8D8;
  }
  .addAdress_content_item_title_focus{
      font-size:12px;
      color: #999999;
      font-weight: unset;
      position: absolute;
      top:0;
      transform: scale(1) translate(0,-.10px);
  }
  .addAdress_content_item_input{
      position: relative;
  }
  

  
  .addAdress_content_item_border{
      border-bottom: 2px solid #D8D8D8;
  }
  
  .adress_addContainer{
      padding: 0 15px ;
      position: fixed;
      width:100%;
      padding-bottom:26px;
      bottom:0;
      z-index: 999;
      text-align: center;
      box-sizing: border-box;
      background-color: #F6F6F6;
  }
  .adress_addButton{
      background: #333333;
      direction: rtl;
      text-align: center;
      color: #fff;
      font-size: 14px;
      color: #FFFFFF;
      font-weight: 600;
      line-height: 45px;
  }

  .Mask{
      width:100%;
      background-color: #F6F6F6 ;
      height: 100%;
      position: fixed;
      top:100%;
      z-index: 999;
      transition: all 450ms cubic-bezier(.23,1,.32,1) 0s;
      -webkit-transition: all 450ms cubic-bezier(.23,1,.32,1) 0s;
  }
  .Popup_header{
      position: absolute;
      width: 100%;
      background: #fff;
      top: 0;
      z-index: 999;
      line-height: 44px;
      padding: 0 18px;
      justify-content: space-between;
      border: 1px solid #D8D8D8;
  }
  .Popup_content{
      margin-top:50px;
  }
  .Popup_content_item{
      line-height: 46px;
      direction: rtl;
      padding: 0 20px;
      background-color: #fff;
  }   
  .Popup_content_location{
      line-height: 50px;
      padding: 0 15px;
      direction: rtl;
      background-color: #F6F6F6 ;
      font-size: 14px;
      color: #000000;
      font-weight: 600;
  }
  .Popup_content_title{
      line-height: 46px;
      direction: rtl;
      padding: 0 20px;
      color: #000000;
      font-size: 12px;
      font-weight: 600;
      background-color: #fff;
  }
  /* 地址选择 通用 / 沙特 /阿联酋 模块 */
  .common_adress{
      display: block;
  }
  .saudi_adress{
      display: none;
  }
  .emirates_adress{
      display: none;
  }
  .Mask_saudi_id_card{
      position: fixed;
      top: 0;
      left: 0;
      overflow: auto;
      background: rgba(0,0,0,.6);
      width: 100%;
      z-index: 999999;
      display: none;
  }
  .id_card_wrap{
      width: 220px;
      height: 220px;

      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -110px;
      margin-top: -110px;

  }
  .id_card_wrap img{
      width: 100%;
  }
  .id_card{
      background: #fff;
      padding: 20px;
  }
  .tip_text{
      margin-top: 20px;
  }
  .Mask_saudi_id_card_button{
      background: #333;
      text-align: center;
      color: #fff;
      padding: 15px 0;

  }
</style>

