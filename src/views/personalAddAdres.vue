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
                        <input type="text" style="font-weight: 600;background:#fff;" disabled  v-model="selCountry" id="country_select_input">
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
                <!-- firstname -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثث نطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.firstname">
                        </div>
                    </div>
                </div>
                <!-- middlename -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثث نطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.middlename">
                        </div>
                    </div>
                </div>
                <!-- lastname -->
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.lastname">
                        </div>
                    </div>
                </div>
            </div>

            <div class="addAdress_content_container">
                <!-- 省州 -->
                <div class="addAdress_content_item dis_flex" id="state_select" v-if="stateFlag" @click="selMstate()"> 
                    <div class="addAdress_content_item_right">
                        <label for="" class="addAdress_content_item_title">*البلد /   المنطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="font-weight: 600;background:#fff;" disabled  v-model="selState">
                        </div>
                    </div>
                    <div class="addAdress_content_item_left">
                        <img src="@/assets/img/personal/adress_goLeft.png" alt="" width="8">
                    </div>
                </div>
                 <!-- 城市 -->
                <div class="addAdress_content_item dis_flex" id="city_select" v-if="cityFlag" @click="selMcity()">
                    <div class="addAdress_content_item_right">
                        <label for="" class="addAdress_content_item_title">*البلد /   المنطقة</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="font-weight: 600;background:#fff;" disabled  v-model="selCity">
                        </div>
                    </div>
                    <div class="addAdress_content_item_left">
                        <img src="@/assets/img/personal/adress_goLeft.png" alt="" width="8">
                    </div>
                </div>
                <!-- 省州输入 -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border" v-if="!stateFlag">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلعهع</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.state_name">
                        </div>
                    </div>
                </div>
                <!-- 城市输入 -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border" v-if="!cityFlag">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس (ظيشبليازوا)</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.city">
                        </div>
                    </div>
                </div>
                <!-- 街道名称 -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.street">
                        </div>
                    </div>
                </div>
                 <!-- 地址1 -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.address1">
                        </div>
                    </div>
                </div>
                 <!-- 地址2 -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثس يشثقز</label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.address2">
                        </div>
                    </div>
                </div>
                <!-- 邮编 -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">*البلثابتس يشثقز <span class="addAdress_content_item_title_sub"> البلثابتس يشثقز C/O (ظيشبليازوا)</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.postcode">
                        </div>
                    </div>
                </div>
                <!-- 手机号 -->
                <div class="addAdress_content_item dis_flex addAdress_content_item_border">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثس يتتابيبفبينعب <span class="addAdress_content_item_title_sub"> البلثابتس  الشسيثقز (ستعيلش)</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.phone">
                        </div>
                    </div>
                </div>
                 <!-- 备用号 -->
                <div class="addAdress_content_item dis_flex">
                    <div class="addAdress_content_item_right flexone">
                        <label for="inputError" class="addAdress_content_item_title">البلثس يتتابيبفبينعب <span class="addAdress_content_item_title_sub"> البلثابتس  الشسيثقز (ستعيلش)</span></label>
                        <div class="addAdress_content_item_input">
                            <input type="text" style="background:#fff;" v-model="submitAdders.alertnate_phone">
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
                    <label for="show-notes"  :class="{ showChecked : submitAdders.is_default == 1}"  @click="defaultSel()"></label>
                    <div class="addAdress_content_item_input" style="opacity: 0;">
                        <input type="checkbox" style="background:#fff;"  class="addAdress_default_checked">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 底部按钮 -->
    <div class="adress_addContainer">
        <div class="adress_addButton" @click="submitAderes()">
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
                <span>{{selCountry}}</span>
            </div>
            <div class="Popup_content_title">
                <span>مناسن/ تنالسخهشامنتالط</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_country"
             v-for="(item, index) in countryList" :key="index"  @click="selectCountry(item.name,item.country_id)">
                <span>{{item.name}}</span>
            </div>
            
        </div>
    </div>
    <!--  省份/州 弹窗 -->
    <div class="Mask" id="Mask_state">
        <div class="dis_flex Popup_header">
            <span></span>
            <span class="header_titile">البلد /   المنطقة</span>
            <span class="Popup_close_saudi"><img src="@/assets/img/personal/adress_close.png" alt="" width="12"></span>
        </div>
        <div class="Popup_content">
            <div class="Popup_content_location">
                <img src="@/assets/img/personal/adress_loaction.png" alt="" width="12" >
                <span>{{selState}}</span>
            </div>
            <div class="Popup_content_title">
                <span>مناسن/ تنالسخهشامنتالط</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_saudi" v-for="(item, index) in stateList" :key="index"  @click="selectState(item.name,item.state_id)">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
    <!-- 城市弹窗 -->
    <div class="Mask" id="Mask_city">
        <div class="dis_flex Popup_header">
            <span></span>
            <span class="header_titile">البلد /   المنطقة</span>
            <span class="Popup_close_emirates"><img src="@/assets/img/personal/adress_close.png" alt="" width="12"></span>
        </div>
        <div class="Popup_content">
            <div class="Popup_content_location">
                <img src="@/assets/img/personal/adress_loaction.png" alt="" width="12" >
                <span>{{selCity}}</span>
            </div>
            <div class="Popup_content_title">
                <span>مناسن/ تنالسخهشامنتالط</span>
            </div>
            <div class="Popup_content_item addAdress_content_item_border Popup_content_item_emirates" v-for="(item, index) in cityList" 
            :key="index" @click="selectCity(item.name,item.city_id)">
                <span>{{item.name}}</span>
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
import { Dialog, Swipe, SwipeItem, CountDown, List,Toast } from 'vant';
import router from "vue-router";
import axios from "axios";
import $ from "jquery"
import store from '../store/store.js'

export default {
    data() {
        return {
            addersDetail:{},
            submitAdders:{
                id_country:'',
                firstname:'',
                middlename:'',
                lastname:'',
                address1:'',
                address2:'',
                city:'',
                postcode:'',
                id_country:'',
                id_state:'',
                state_name:'',
                national_id:'',
                street:'',
                phone:'',
                alertnate_phone:'',
                is_default:''
            },
            countryList:[],
            selCountry:'',
            id_country:'',
            stateList:[],
            selState:'',
            id_state:'',
            cityList:[],
            id_city:'',
            selCity:'',
            stateFlag: false, // 省州输入标识
            cityFlag: false, // 城市输入标识
            type:''
        }
    },
    components: {
       Swipe,
       Dialog,
       SwipeItem,
       router,
       CountDown,
       Toast
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
    // 设置默认
    defaultSel(){
        console.log
        if (this.submitAdders.is_default == 1) {
            this.submitAdders.is_default = 0;
        }else{
            this.submitAdders.is_default = 1;
        }
         console.log(this.submitAdders.is_default)
    },

    // 省州弹框打开
    selMstate(){
        $("#Mask_state").css("top","0");
    },
    // 城市弹框打开
    selMcity(){
        $("#Mask_city").css("top","0");
    },
    // 国家选择
    selectCountry(name,id){
        this.selCountry = name;
        this.id_country = id;
        var data = {...this.$store.state.defaultData};
        data.action = 'getStates';
        data.id_country = id;
        this.getState(data);
        $("#Mask_country").css("top","100%");
    },
    // 省州选择
    selectState(name,id){
        console.log(111111)
        this.selState = name;
        this.id_state = id;
        var data = {...this.$store.state.defaultData};
        data.action = 'getCitys';
        data.id_country = this.id_country;
        data.id_state = id;
        this.getCity(data);
        $("#Mask_state").css("top","100%");
    },
      // 城市选择
    cityState(name,id){
        console.log(111111)
        this.selCity = name;
        this.id_city = id;
        $("#Mask_city").css("top","100%");
    },
    // 获取国家
    getCountry(data){
        var that = this;
        that.$post('/api/country/getCountries',data).then(data => {
            console.log("list",data)
            if (data.code == 200) {
                that.countryList = data.data;
            }
            if (data.code == 400) {
                Toast.fail(data.message)
            }
        }).catch(error => {
            console.log(error);
        });
    },
    // 获取省州
    getState(data){
        console.log("省州",data)
        var that = this;
        that.$post('/api/country/getStates',data).then(data => {
            console.log("list",data)
            if (data.code == 200) {
                that.stateList = data.data;
                if(that.stateList.length > 0){
                    that.stateFlag = true;
                }else{
                    that.stateFlag = false;
                }
            }
            if (data.code == 400) {
                Toast.fail(data.message)
            }
        }).catch(error => {
            console.log(error);
        });
    },
    // 获取城市
    getCity(data){
        var that = this;
        that.$post('/api/country/getCitys',data).then(data => {
            console.log("list",data)
            if (data.code == 200) {
                that.cityList = data.data;
                if(that.cityList.length > 0){
                    that.cityFlag = true;
                }else{
                    that.cityFlag = false;
                }
            }
            if (data.code == 400) {
                Toast.fail(data.message)
            }
        }).catch(error => {
            console.log(error);
        });
    },
    // 获取地址详情
    getAdress(data){
        var that = this;
        this.$post('/api/user_address/getAddressById',data).then(data => {
            console.log("dizhi",data)
            that.addersDetail = data.data;
            that.addersDetail.id_address = data.data.address_id;
            delete  that.addersDetail.address_id;
            that.addersDetail.id_country = data.data.country_id;
            delete  that.addersDetail.country_id;
            that.addersDetail.id_state = data.data.state_id;
            delete  that.addersDetail.state_id;
            that.addersDetail.state_name = data.data.state;
            delete  that.addersDetail.state;
            that.submitAdders = that.addersDetail;
            that.selCity = data.data.city;
            that.selCountry = data.data.country_name;
            that.selState = data.data.state;
            if(data.data.is_default == '1'){
                $(".addAdress_default_checked").parent().prev().addClass("showChecked")
            }
        }).catch(error => {
        console.log(error);
      });
    },
    // 提交修改
    submitAderes(){
        var data = {...this.$store.state.defaultData,...this.submitAdders};
        var that = this;
        if(this.type == 'eidt'){
            var  url = '/api/user_address/updateAddress';
        }else{
            var  url = '/api/user_address/addAddress';
        }
        that.$post(url,data).then(data => {
            console.log("list",data)
            if (data.code == 200) {
                Toast.success('成功')
            }
            if (data.code == 400) {
                Toast.fail(data.message)
            }
        }).catch(error => {
            console.log(error);
        });
    }

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
        // 省份/州 选择
        $("#state_select").click(function(){
            console.log(11111)
            $("#Mask_state").css("top","0");
        })
        $(".Popup_close_saudi").click(function(){
            $("#Mask_state").css("top","100%");
        })
        $(".Popup_content_item_saudi").click(function(){
            $("#saudi_state_select_input").attr("value",$(this).find("span").html());
            $("#saudi_state_select_input").parent().prev().addClass("addAdress_content_item_title_focus");
            $("#Mask_state").css("top","100%");
        })
        // 阿联酋 省份/州 选择
        $("#city_select").click(function(){
            $("#Mask_city").css("top","0");
        })
        $(".Popup_close_emirates").click(function(){
            $("#Mask_city").css("top","100%");
        })
        $(".Popup_content_item_emirates").click(function(){
            $("#emirates_state_select_input").attr("value",$(this).find("span").html());
            $("#emirates_state_select_input").parent().prev().addClass("addAdress_content_item_title_focus");
            $("#Mask_city").css("top","100%");
        })
        $('.Mask_saudi_id_card').height($(window).height())
    })
    var data = {...this.$store.state.defaultData};
    data.action = 'getCountries';
    this.getCountry(data)
    this.type =  this.$route.params.type;
    var dataAders = {...this.$store.state.defaultData}
    dataAders.action = 'getAddressById'
    dataAders.id_address = this.$route.params.id;
    this.getAdress(dataAders)
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
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px  5px;
  }
  .addAdress_content_item_right{
      position: relative;
  }
//   .addAdress_content_item_left{
//       line-height: 40px;
//   }
  /* 单选css  begin*/
  .show-notes-container{
      width:40px;
      position: relative;
  }
  .showChecked{
      background: #999999 !important;
  }
  .showChecked:after{
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
      top:0px;
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
      text-align: right;
      overflow: auto;
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
      display: flex;
      box-sizing: border-box;
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

