<template>
    <div id='detail'>
        <div class="content">
            <img src="../assets/logo.png" class="head">
            <div class="info">
                <div class="info-left">姓名</div>
                <div class="info-right">某某某</div>
            </div>
            <div class="info">
                <div class="info-left">性别</div>
                <div class="info-right">男</div>
            </div>
            <div class="info" @click='showBirthday'>
                <div class="info-left">生日</div>
                <div class="info-right" v-if='year'>{{year}}年{{month}}月{{date}}日 ></div>
                <div class="info-right" v-else>可享受生日优惠，请设置 ></div>
            </div>
            <div class="info">
                <div class="info-left">手机号</div>
                <div class="info-right">12345678901</div>
            </div>
        </div>
        <mt-datetime-picker v-model="dateValue" type="date" ref="picker" year-format="{value} 年"
            month-format="{value} 月" date-format="{value} 日" :endDate="new Date()" @confirm="handleConfirm"
            :startDate="startDate" @cancel="checkinCancel">
        </mt-datetime-picker>
    </div>
</template>
<script>
    import { DatetimePicker } from 'mint-ui';
    import Vue from 'vue'
    Vue.component(DatetimePicker.name, DatetimePicker)
    export default {
        name: 'detail',
        data() {
            return {
                year: '',
                dateValue: '',
                isClicked: false,
                pickerVisible: '',
                startDate: new Date('1960-01-01'),
            }
        },
        beforeCreate() {
            var that = this;
            document.querySelector('body').setAttribute('style', 'background:#f3f3f3')
        },
        methods: {
            //获取用户信息
            created() {
                // let shopId = 
                // let openId = 
                axios({
                    url: '/api/vip/memberDetails',
                    method: 'get',
                    params: {
                        shopId: 1,
                        openId: openId
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
            showBirthday: function () {
                this.$refs.picker.open();
            },
            handleConfirm(value) {

                this.year = value.getFullYear();
                this.month = value.getMonth() + 1;
                this.date = value.getDate();
                console.log('this.year', this.year);


            },
            checkinCancel() {
                console.log('关闭时间选择器');
                this.$refs.picker.close();
            }
        },
    }
</script>
<style>
    #detail {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        width: 18.93rem;
        height: 17.6rem;
        background-color: #ffffff;
        border-radius: 0.26rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0.56rem;
    }

    .head {
        width: 3.36rem;
        height: 3.36rem;
        background-color: #adadad;
        border: solid 0.13rem #c1c1c1;
        border-radius: 50%;
        margin-top: 2.53rem;
        margin-bottom: 2.53rem;
    }

    .info {
        width: 17.86rem;
        height: 2.13rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-top: 1px solid #dddddd;
        justify-content: space-between;
        font-size: 0.64rem;
    }

    .info-left {
        color: #333333;
    }

    .info-right {
        color: #b5b5b5;
    }
</style>