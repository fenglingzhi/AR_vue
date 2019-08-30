<template>
    <div class="category">
        <div class="category_index">
            <ul>
                <li>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { getData,postData } from '../config.js';
    import * as api from "../api/commonApi";
    import { Dialog, Swipe, SwipeItem, CountDown, List  } from 'vant';
    import router from "vue-router";
    import axios from "axios";
    import store from '../store/store.js'
    export default {
        name: "category",
        components: {
            router,
            store,
            getData,
            postData
        },
        data() {
            return {
                title1:'en',
                title2:'ar'
            }
        },
        methods: {
            getCategoryList(data){
                this.$post('/api/navigation/getlists',{id_currency:1}).then(resp => {
                    console.log(resp)
                })
            }
        },
        mounted() {
            this.getCategoryList()
        }
    }
</script>

<style scoped>
    .category{

    }
</style>