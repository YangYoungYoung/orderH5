<template>
    <div id="coupon">
        <div class="couponList">
            <div class="coupon-item">
                <div class="coupon-left" style="background-image: '../assets/coupon_bg.png';"></div>
                <div class="coupon-right">
                    <div class="right-top" style="background-image: '../assets/coupon_top.png';">立即使用</div>
                    <div class="right-bottom" style="background-image: '../assets/coupon_bootom.png';"></div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name: 'coupon',
        data() {
            return {

            }
        },
        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background:#f3f3f3');
        },
        created() {
            this.getCouponList();
        },
        methods: {
            getCouponList: function () {
                axios({
                    url: '/api/coupon/receiveList',
                    method: 'get',
                    params: {
                        shopId: 1,
                        openId: 1,
                        // userId: ''
                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        Accept: 'application/json'
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                     
                    }
                }).catch(res1 => {
                    console.log(res1, 'res1')
                })
            }
        },
    }

</script>

<style>
    #coupon {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .couponList {
        width: 9.64rem;
        display: flex;
        flex-direction: column;
        border-radius: 0.13rem;
        box-sizing: border-box;
        background-color: #fff;
    }

    .coupon-item {
        width: 9.2rem;
        height: 2.8rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
    }

    .coupon-left {
        width: 6.64rem;
        height: 2.8rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .coupon-right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .right-top {
        width: 2.56rem;
        height: 1.41rem;
        text-align: center;

    }
</style>