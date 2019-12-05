<template>
    <div id="form">
        <div class="form-content">
            <div class="form-card">
                <img src="" class="member-card">
            </div>
            <div class="member-info">
                <h4>会员特权</h4>
                <div class="member-menu">
                    <div class="menu-item">
                        <img src="" alt="">
                        <div class="item-text"></div>
                    </div>
                </div>
                <mt-button @click.native="login"
                    style="margin-bottom: 7.9rem;color: #f3f5f7;background-color: #c4a564;">
                    会员登录</mt-button>
            </div>
            <div class="form-view">
                <div class="form-text">订单小计</div>
                <div class="form-price"></div>
            </div>
            <div class="footer">
                <div class="footer-left"></div>
                <div class="footer-right">立即支付</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'form',
        data() {
            return {

            }
        },
        methods: {
            //登录
            login: function () {

            },

        },
    }
</script>
<style>
    #form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .member-card {
        width: 100%;
        height: 6rem;
    }

    .member-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: #fff;
    }

    .member-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0.7rem;
    }

    .menu-item {
        display: flex;
        flex-direction: column;
        width: 20%;
        align-items: center;

    }

    .member-btn {
        width: 7.6rem;
        height: 1.7rem;
        text-align: center;
        vertical-align: middle;
        color: #f3f5f7;
        font-size: 0.64rem;
        margin-top: 0.8rem;
        border: none;
        border-radius: 14px;
        margin-bottom: 7.9rem;
    }

    .form-view {
        width: 14.67rem;
        height: 2.53rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }

    .footer {
        width: 100%;
        height: 2.67rem;
        background-color: #fff;
        position: fixed;
        bottom: 0;
    }
    .form-content{
        width: 100%;
        padding-bottom: 2.67rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>