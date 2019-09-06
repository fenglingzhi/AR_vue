<template>
  <div>
    <header class="dis_flex">
        <span></span>
        <!-- 编辑个人信息 -->
        <span class="header_titile">تحرير الملف الشخصي</span>
        <span><img src="@/assets/img/personal/adress_return.png" alt="" class="header_return_img" @click="back()"></span>
    </header>
    <div class="info_content">
        <div class="info_container">
            <div class="info_item">
                <!-- 用户名 -->
                <label for="">*اسم المستخدم:</label>
                <div class="info_item_inputone">
                    <input type="text" placeholder="jie.ding@kapeixi.com" v-model="personalInfo.email" readonly>
                </div>
            </div>
            <div class="info_item">
                <!-- 昵称 -->
                <label for="">*اسم الشهرة:</label>
                <div class="info_item_inputone">
                    <input type="text" v-model="personalInfo.nickname">
                </div>
            </div>
            <div class="info_item">
                <!-- *生日：请输入您的生日 -->
                <label for="">*تاريخ الميلاد: الرجاء إدخال تاريخ ميلادك</label>
                <div class="info_item_inputthree">
                    <!-- 年 -->
                    <input type="text" placeholder="عام" v-model="personalInfo.sl_year">
                    <!-- 月 -->
                    <input type="text" placeholder="شهر" v-model="personalInfo.sl_month">
                    <!-- 日 -->
                    <input type="text" placeholder="يوم" v-model="personalInfo.sl_day">
                </div>
            </div>
            <div class="info_item">
                <!-- 性别 -->
                <label for="">الجنس</label>
                <div class="info_item_inputthree">
                    <div class="info_item_radio">
                        <img src="@/assets/img/select.png" alt="" width="20" class="info_item_radio_img">
                        <input type="radio" name="sex" value="1"  v-model="personalInfo.gender">
                        <!-- 男性 -->
                        <label>ذكر</label>
                    </div>
                    <div class="info_item_radio">
                        <img src="@/assets/img/option.png" alt="" width="20" class="info_item_radio_img">
                        <input type="radio" name="sex" value="2" v-model="personalInfo.gender">
                        <!-- 女性 -->
                        <label>أنثى</label>
                    </div>
                    <div class="info_item_radio">
                        <img src="@/assets/img/option.png" alt="" width="20" class="info_item_radio_img">
                        <input type="radio" name="sex" value="3" v-model="personalInfo.gender">
                        <!-- 特殊 -->
                        <label>خاص</label>
                    </div>
                </div>
            </div>
            <div class="info_item">
                <!-- *国家：请输入您的国家 -->
                <label for="">*الدولة: الرجاء إدخال دولتك</label>
                <div class="info_item_inputone">
                    <input type="text" v-model="personalInfo.country_name">
                </div>
            </div>
            <div class="info_item">
                <!-- 电话号码 -->
                <label for="">رقم الهاتف:</label>
                <div class="info_item_inputone">
                    <input type="text" v-model="personalInfo.phone">
                </div>
            </div>
            <div class="info_item">
                <!-- 偏好 -->
                <label for="">تفضيل:</label>
                <div class="info_item_inputtwo">
                    <div class="info_item_checkbox">
                        <img src="@/assets/img/personal/info_checkbox.png" alt="" width="18" class="info_item_checkbox_img">
                        <input type="checkbox" value="">
                        <!-- 女性 -->
                        <label>نساء</label>
                    </div>
                </div>
                <div class="info_item_inputtwo">
                    <div class="info_item_checkbox">
                        <img src="@/assets/img/personal/info_checkbox.png" alt="" width="18" class="info_item_checkbox_img">
                        <input type="checkbox" value="">
                        <!-- 男性 -->
                        <label>رجال</label>
                    </div>
                    <div class="info_item_checkbox">
                        <img src="@/assets/img/personal/info_checkbox.png" alt="" width="18" class="info_item_checkbox_img">
                        <input type="checkbox" value="">
                        <!-- 儿童 -->
                        <label>أطفال</label>
                    </div>
                </div>
                <div class="info_item_inputtwo">
                    <div class="info_item_checkbox">
                        <img src="@/assets/img/personal/info_checkbox.png" alt="" width="18" class="info_item_checkbox_img">
                        <input type="checkbox" value="">
                        <!-- 大码 -->
                        <label>مقاسات كبيرة</label>
                    </div>
                    <div class="info_item_checkbox">
                        <img src="@/assets/img/personal/info_checkbox.png" alt="" width="18" class="info_item_checkbox_img">
                        <input type="checkbox" value="">
                        <!-- 居家 -->
                        <label>منزل</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="adress_addContainer">
        <div class="adress_addButton">
            <!-- 保存 -->
            <span>حفظ</span>
        </div>
        <!-- 完善个人信息可获得一张打折券 -->
        <span class="adress_word fontSize12 color000000">يمكنك الحصول على قسيمة خصم بملء الملف الشخصي </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import * as api from "../api/commonApi";
import router from "vue-router";
import axios from "axios";
import { Dialog, List  } from 'vant';
import store from '../store/store.js'
import $ from "jquery"
import BottomBar from "./BottomBar"

export default {
    data() {
        return {
            personalInfo:{
              email:'',
              nickname:'',
              sl_year:'',
              sl_month:'',
              sl_day:'',
              id_gender:'',
              career:'',
              career_description:'',
              size:'',
              height:'',
              id_country:'',
              preference:'',
              phone:'',
              customer_id:''
            },
        }
    },
    methods: {
        getInfo(){
            var data = {...this.$store.state.defaultData}
            this.$post('/api/user/getIdentity',data).then(data => {
                console.log("list",data)
                // this.Lists = this.Lists.concat(redata.data.data.products);
                // this.total_page = redata.data.data.total_page;
                this.personalInfo = data.data.identity;
            }).catch(error => {
              console.log(error);
            });
        },


        back(){
         this.$router.go(-1);//返回上一层
        },
    },
    mounted() {
        this.getInfo();
         $(function () {
            $(".info_item_radio").click(function(){
                $(".info_item_radio").children("input[name='sex']").each(function(index,item){
                    $(item).eq(0).removeAttr("checked");
                })
                $(".info_item_radio").children("img").each(function(index,item){
                    $(item).attr('src','@/assets/img/option.png')
                })
                $(this).children("input[name='sex']").eq(0).attr("checked","checked");
                $(this).children("img").attr('src','@/assets/img/select.png')
                return false;
            })
            
            $(".info_item_checkbox").click(function(){
                console.log($(this).children("img"))
                if($(this).children("input[type='checkbox']").prop("checked")){
                    $(this).children("input[type='checkbox']").prop("checked",false)
                    $(this).children("img").attr('src','@/assets/img/personal/info_checkbox.png')
                }else{
                    $(this).children("input[type='checkbox']").prop("checked",true)
                    $(this).children("img").attr('src','@/assets/img/personal/info_checkbox_selected.png')
                }
            })
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

.info_content{
    margin-top:45px;
    margin-bottom:100px;
}
.info_container{
    text-align: right;
    margin-top:10px;
    background-color: #fff;
}
.info_item{
    direction:rtl;
    flex-direction: row;
    justify-content: space-between;
    line-height: 33px;
    padding: 0 20px;
    margin:10px;
}
.info_item label{
    font-size: 12px;
    color: #999999;
    font-weight:unset;
    margin:0;
    line-height:23px;
}
.info_item_inputone input[type="text"]{
    border: 1px solid #D8D8D8;
    width: 100%;
    padding:4px;
}
.info_item_inputone input[type="text"]:focus{
    outline: 0;
}
.info_item_inputone input[type="text"]::-webkit-input-placeholder {
    color:#D8D8D8;
}
.info_item_inputthree{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.info_item_inputthree input[type="text"]{
    border: 1px solid #D8D8D8;
    width: 30%;
    padding:4px;
}
.info_item_inputthree input[type="text"]:focus{
    outline: 0;
}
.info_item_inputthree input[type="text"]::-webkit-input-placeholder {
    color:#D8D8D8;
}
.info_item_inputthree label{
    margin-right:8px;
}
.info_item_radio{
    position: relative;
}
.info_item_radio input[type="radio"]{
    opacity: 0;
}
.info_item_radio_img{
    position: absolute;
    top:6px;
    z-index: 9;
}
.info_item_inputtwo{
    display: flex;
}
.info_item_inputtwo .info_item_checkbox:nth-child(even){
    margin-right:40px;
}
.info_item_inputtwo label{
    margin-right:8px;
}
.info_item_inputtwo input[type="checkbox"]{
    opacity: 0;
}
.info_item_checkbox{
    position: relative;
}
.info_item_checkbox_img{
    position: absolute;
    top:6px;
    z-index: 9;
}

.adress_addContainer{
    padding: 0 15px ;
    position: fixed;
    width:100%;
    padding-bottom:26px;
    bottom:0;
    text-align: center;
    background-color: #F6F6F6;
    z-index:10;
    box-sizing: border-box;
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
.adress_word{
    margin-top:10px;
}
</style>

