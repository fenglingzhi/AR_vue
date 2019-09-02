<template>
    <div class="Collection">
        <header>
            <div class="header_wrap">
                <div class="search" onclick="search()"><img src="../assets/img/index/serch.png" alt=""></div>
                <div class="title"><img src="../assets/img/index/AR-logo.png" alt=""></div>
                <div class="announce" onclick="announce()"><img src="../assets/img/index/message.png" alt=""></div>
            </div>
        </header>
        <div class="category_wrap">
            <van-row>
                <van-col span="16">

                </van-col>
            </van-row>
            <div style="clear: both"></div>
        </div>
    </div>
</template>

<script>
    import { getData,postData } from '../config.js';
    import { Dialog, List  } from 'vant';
    import router from "vue-router";
    import store from '../store/store.js'
    export default {
        name: "category",
        components: {
            router,
            store,
        },
        data() {
            return {
                category_list:{},
                category_second_list:{},
                class_show:0
            }
        },
        methods: {
            getList(){
                this.$post('/api/category/getCategoryProducts',
                    {
                        // id_category:store.state.collection_id,
                        id_category:1,
                        sort:'price:desc',
                        page:'1',
                        lang_id:'1'
                    }).then(resp => {
                    this.category_second_list = resp.data;
                    console.log(this.category_second_list)
                })
            }
        },
        beforeMount(){

        },
        mounted() {
            this.getList();
        }
    }
</script>

<style scoped lang="scss">
    .Collection{
        header{
            position: fixed;
            overflow: auto;
            background: #fff;
            top: 0;
            width: 100%;
            border-bottom: 1px solid #E7E7E7;
            .header_wrap{
                height: 44px;
                display: flex;
                display:-webkit-flex;
                justify-content:space-between;
                padding: 0 10px;
                align-items: center;
            }
        }
    }

</style>