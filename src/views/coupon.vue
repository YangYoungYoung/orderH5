<template>
    <div id="coupon">
        <div class="couponList" style="display: flex;flex-direction: column;align-items: center;">
            <div class="coupon-item">
                <div class="coupon-left">
                    <div class="coupon-money">￥100</div>
                    <div class="coupon-manjian">满100减10</div>
                    <div class="coupon-time">2019-11-11——2019-11-12</div>
                </div>
                <div class="coupon-right">
                    <div class="right-top" style="background-image: '../assets/coupon_top.png';">立即使用</div>
                    <div class="right-bottom" style="background-image: '../assets/coupon_bootom.png';">转赠朋友</div>
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
        color: #fff;
    }

    .couponList {
        width: 18.9rem;
        display: flex;
        flex-direction: column;
        border-radius: 0.26rem;
        box-sizing: border-box;
        background-color: #fff;
        text-align: center;
        box-sizing: border-box;
        margin-top: 0.53rem;
        
    }

    .coupon-item {
        width: 18.4rem;
        height: 5.6rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        margin-top: 2.13rem;
    }

    .coupon-left {
        width: 13.28rem;
        height: 5.6rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('../assets/coupon_bg.png');
        background-size:100% 100%;  
    }

    .coupon-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-size: 0.8rem;
    }

    .right-top {
        width: 5.12rem;
        height: 2.82rem;
        text-align: center;
        background-image: url('../assets/coupon_top.png');
        background-size:100% 100%;
        line-height: 2.82rem;
    }

    .right-bottom {
        width: 5.12rem;
        height: 2.82rem;
        text-align: center;
        background-image: url('../assets/coupon_bootom.png');
        background-size:100% 100%;
        line-height: 2.82rem;
    }
    .coupon-money{
        font-size: 2.8rem;
        padding: 0;
        margin: 0;
    }

    .coupon-manjian{
        font-size: 0.96rem;
        margin-top: -0.5rem;
    }
    .coupon-time{
        font-size: 0.48rem;
        margin-top: 0.3rem;
    }
</style>