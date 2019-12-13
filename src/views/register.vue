<template>
    <div id='register'>
        <div class="title">
            <h3>会员注册</h3>
        </div>
        <div class="content">
            <div class="content-top">
                <input type="text" class="phoneInput" v-on:keyup="inputPhone" placeholder="请输入手机号">
            </div>
            <!-- <div  style='background-color:#333;height:1px;width:100%'></div> -->
            <div class="content-bottom">
                <input type="text" class="codeInput" v-on:keyup="inputCode" placeholder="请输入验证码">
                <div class="sendCode" v-show="show" @click='sendMsgCode'>获取验证码</div>
                <div class="sendCode" v-show="!show">已发送{{count}}</div>
            </div>

        </div>
        <mt-button type="default" @click='submit'
            style="background-color: #e1b053;color:#fff;margin-top: 4.08rem;padding: 0 5rem;">立即注册</mt-button>
    </div>
</template>
<script>
    import axios from 'axios'
    import { Button } from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                phoneNumber: '',
                code: '',
                count: '',
                show: true,
                getCode: ''
            }
        },
        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background:#EEE')
        },
        methods: {
            inputPhone: function (e) {
                console.log('手机号为:', e.target.value);
                this.phoneNumber = e.target.value;
            },
            //获取验证码输入框的值
            inputCode: function (e) {
                console.log('验证码输入框的值-为:', e.target.value);
                this.inputCode = e.target.value
            },
            //发送短信验证码
            sendMsgCode: function () {
                const TIME_COUNT = 60;
                let phoneNumber = this.phoneNumber;
                console.log('phoneNumber is:', phoneNumber.length);
                if (phoneNumber.length != 11) {
                    Toast('请输入正确手机号');
                    return
                }
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
                axios({
                    url: '/api/vip/sendSms',
                    method: 'post',
                    params: {
                        shopId: 1,
                        phoneNumber: phoneNumber
                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        Accept: 'application/json'
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        this.code = res.data.data;
                        Toast('发送成功');
                    }
                }).catch(res1 => {
                    console.log(res1, 'res1')
                })
            },
            //提交,注册登录
            submit: function () {
                let code = this.code;
                let getCode = this.getCode;
                let phoneNumber = this.phoneNumber;
                if (code != getCode) {
                    Toast('验证码不正确');
                    return
                }
                axios({
                    url: '/api/vip/sendSms',
                    method: 'post',
                    params: {
                        shopId: 1,
                        phoneNumber: phoneNumber
                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        Accept: 'application/json'
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        // this.code = res.data.data;
                        Toast('登录成功');
                        
                    }
                }).catch(res1 => {
                    console.log(res1, 'res1')
                })
            },

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
        /* height: 6.26rem; */
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin-top: 2.5rem;
        align-items: center;
    }

    .content-top {
        width: 100%;
        display: flex;
        height: 3.13rem;
        /* flex-direction: column;
        align-items: center; */
        border-bottom: 0.08rem solid #999;
    }

    .content-bottom {
        width: 100%;
        display: flex;
        height: 3.13rem;
        margin-top: 0.09rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .phoneInput {
        width: 100%;
        height: 3.11rem;
        /* height: 3.12rem; */

        border: none;
        padding-left: 0.53rem;
    }

    .codeInput {
        width: 12.48rem;
        /* height: 3.11rem; */
        border: none;
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0.53rem;
    }


    .sendCode {
        font-size: 0.64rem;
        color: #ff0000;
        text-align: center;
        line-height: 3.13rem;
        height: 100%;
        margin-right: 0.56rem;
    }
</style>