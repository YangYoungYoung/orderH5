<template>
    <div id='register'>
        <div class="title">
            <h3>会员注册</h3>
        </div>
        <div class="content">
            <div class="content-top">
                <input type="text" class="phoneInput">
                <div class="content-bottom">
                    <input type="text" class="codeInput">
                    <div class="sendCode">获取验证码</div>
                </div>
            </div>
        </div>
        <mt-button type="default" style="background-color: #e1b053;color:#fff;margin-top: 6.08rem;">立即注册</mt-button>
    </div>
</template>
<script>
    import { Button } from 'mint-ui';
    export default {
        data() {
            return {

            }
        },
        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background:#EEE')
        },
    }
</script>
<style scoped>
    body {
        width: 100%;
        height: 100%;
        background-color: #eee;
    }

    #register {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #eee;
    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4.58rem;
    }

    .content {
        width: 17.86rem;
        height: 6.26rem;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin-top: 2.5rem;
        align-items: center;
    }

    .content-top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content-bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .phoneInput {
        width: 15.73rem;
        height: 3.12rem;
        border-bottom: 1px solid #dddddd;
    }

    .codeInput {
        width: 12.48rem;
        height: 3.12rem;

    }

    .sendCode {
        font-size: 0.64rem;
        color: #ff0000;
    }
</style>