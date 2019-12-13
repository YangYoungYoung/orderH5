<template>
    <div id="cart">
        <template v-if='cartList'>
            <div class="cart-list">
                <div class="cart-item" v-for="(item, index) in cartList" :key="index">
                    <div class="item-name">{{item.dishName}}</div>
                    <div class="item-right">
                        <div class="item-price">{{item.dishPrice}}</div>
                        <div class="buy-num">
                            <div class="jian-btn" @click="jianBtnTap(index)">
                                -</div>
                            <input type="number" :value='(item.number)' v-on:keyup="inputTargetValue"
                                class="number-input" />
                            <div class="jia-btn" @click="jiaBtnTap(index)">+
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="footer">

                <div class="totalprice">总价:￥{{totalPrice}}</div>
                <div class="submit" @click='submit'>提交</div>
            </div>
        </template>
        <template v-else>
            <div class="null-view">
                <div class="null-title">购物车空空如也</div>
                <mt-button type="danger" style="padding:0 3rem;" @click='toOrder'>立即点餐</mt-button>
            </div>
        </template>
    </div>
</template>
<script>
    import { Button } from 'mint-ui';
    import axios from 'axios'
    export default {
        name: 'cart',
        data() {
            return {
                cartList: [],
                totalPrice: 0
            }
        },
        created() {
            this.getData();
        },
        methods: {
            //获取购物车数据
            getData: function () {
                axios({
                    url: '/api/cart/select',
                    method: 'get',
                    params: {
                        shopId: '1',
                        tableId: '1'
                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        Accept: 'application/json'
                    }
                }).then(res => {
                    console.log('res。。。。。。。。。。。。', res);
                    const cartList = res.data.data;
                    this.cartList = cartList;
                    this.getTotalPrice();
                }).catch(res1 => {
                    console.log('res1......', res1)
                })
            },
            //数量加
            jiaBtnTap: function (index) {
                console.log('菜品数量加。。。。。');
                // const shopId = sessionStorage.getItem('shopId');
                // const tableId = sessionStorage.getItem('tableId');
                let totalCount = this.totalCount;
                let cartList = this.cartList;
                cartList[index].number++;
                let dishId = cartList[index].dishId;
                let dishName = cartList[index].dishName;
                let dishImage = cartList[index].dishImage;
                let number = cartList[index].number;
                let dishPrice = cartList[index].dishPrice;
                totalCount++;
                this.totalCount = totalCount;
                axios({
                    url: '/api/cart/add',
                    method: 'post',
                    params: {
                        // shopId: shopId,
                        // tableId: tableId,
                        shopId: 1,
                        tableId: 1,
                        dishId: dishId,
                        dishName: dishName,
                        dishImage: dishImage,
                        number: number,
                        dishPrice: dishPrice
                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        Accept: 'application/json'
                    }
                }).then(res => {
                    console.log('数量加======', res);
                    // this.cartList = cartList;
                    this.totalPrice = res.data.data.totalPrice;
                }).catch(res1 => {
                    console.log(res1, 'res1')
                })
            },
            //数量减
            jianBtnTap: function (index, parentIndex) {
                console.log('菜品数量减。。。。。');
                // const shopId = sessionStorage.getItem('shopId');
                // const tableId = sessionStorage.getItem('tableId');
                let totalCount = this.totalCount;
                let cartList = this.cartList;
                cartList[index].number--;
                let dishId = cartList[index].dishId;
                totalCount--;
                this.totalCount = totalCount;
                axios({
                    url: '/api/cart/reduceNumber',
                    method: 'post',
                    params: {
                        // shopId: shopId,
                        // tableId: tableId,
                        shopId: 1,
                        tableId: 1,
                        dishId: dishId,
                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        Accept: 'application/json'
                    }
                }).then(res => {
                    console.log('数量减---------', res);
                    // this.totalCount = totalCount;
                    // this.cartList = cartList;
                    // this.totalCount = res.data.data.totalCount;
                    this.getData();
                    if (res.data.data != null) {
                        this.totalPrice = res.data.data.totalPrice;
                    }
                }).catch(res1 => {
                    console.log(res1, 'res1')
                })
            },
            //获取输入框值
            inputTargetValue: function (e) {
                console.log(e.target.value);
                let totalCount = this.totalCount;
                let cartList = this.cartList;
                cartList[index].number=e.target.value;
                let dishId = cartList[index].iftId;
                let dishName = cartList[index].dishName;
                let dishImage = cartList[index].dishImage;
                let number = cartList[index].number;
                let dishPrice = cartList[index].price;
                this.totalCount = totalCount;
                axios({
                    url: '/api/cart/add',
                    method: 'post',
                    params: {
                        // shopId: shopId,
                        // tableId: tableId,
                        shopId: 1,
                        tableId: 1,
                        dishId: dishId,
                        dishName: dishName,
                        dishImage: dishImage,
                        number: number,
                        dishPrice: dishPrice
                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        Accept: 'application/json'
                    }
                }).then(res => {
                    console.log('数量加======', res);
                    this.cartList = cartList;
                    this.totalPrice = res.data.data.totalPrice;
                }).catch(res1 => {
                    console.log(res1, 'res1')
                })
            },
            //生成预订单，跳转到支付页面
            submit: function () {
                let cartList = this.cartList;
                //封装好订单数组
                let dishArray = new Array;
                for (var i = 0; i < cartList.length; i++) {
                    var temp = {
                        cid: cartList[i].id,
                        dishId: cartList[i].dishId,
                        dishImage: cartList[i].dishImage,
                        dishName: cartList[i].dishName,
                        dishPrice: cartList[i].dishPrice,
                        number: cartList[i].number
                    }
                    dishArray.push(temp);
                }
                console.log('dishArray is:',dishArray);
                // let openId = 
                axios({
                    url: '/api/order/add',
                    method: 'POST',
                    params: {
                        // shopId: shopId,
                        // tableId: tableId,
                        shopId: 1,
                        tableId: 1,
                        dishArray: dishArray,
                        // remark: '',
                        // vipId:''

                    },
                    headers: {
                        // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => {
                    console.log('生成预订单======', res);
                    this.$router.push('/form')
                }).catch(res1 => {
                    console.log(res1, 'res1')
                })

            },
            //计算总价
            getTotalPrice: function () {
                let cartList = this.cartList;
                let totalPrice = 0;
                console.log('计算总价cartList:', cartList);
                if (cartList != null) {
                    console.log('当前总价为：::::::::::::::', totalPrice);
                    for (var i = 0; i < cartList.length; i++) {
                        totalPrice += cartList[i].dishPrice * cartList[i].number;
                    }
                }
                this.totalPrice = totalPrice;

            },
            //立即点餐
            toOrder: function () {
                this.$router.push('/order')
            }
        },
    }

</script>
<style>
    #cart {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    }

    .null-view {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10rem;
        ;
    }

    .null-title {
        font-size: 1rem;
        color: #999;
        margin-bottom: 2rem;
    }

    .cart-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cart-item {
        width: 19.2rem;
        display: flex;
        height: 2.66rem;
        flex-direction: row;
        align-items: center;
        /* justify-content: space-between; */
        border-bottom: 1px solid #e2e2e2;
    }

    .item-name {
        font-size: 0.8rem;
        color: #333333;
        width: 100%;
        text-align: left;
    }

    .item-price {
        font-size: 0.74rem;
        color: #333333;
    }

    .item-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .buy-num {
        width: 4.37rem;
        height: 1.28rem;
        /* line-height: 1.28rem; */
        position: absolute;
        right: 0.8rem;
        /* bottom: 0; */
        display: flex;
        /*justify-content: space-between;*/
        font-size: 0.64rem;
        text-align: center;
    }

    .jian-btn {
        width: 1.28rem;
        height: 1.28rem;
        border-left: 0.03rem solid #ccc;
        border-bottom: 0.03rem solid #ccc;
        border-top: 0.03rem solid #ccc;
        border-bottom-left-radius: 0.16rem;
        border-top-left-radius: 0.16rem;
        text-align: center;
        line-height: 1.28rem;
    }

    .jian-btn.disabled {
        background-color: #f5f5f9;
        border-left: 0.03rem solid #eee;
        border-bottom: 0.03rem solid #eee;
        border-top: 0.03rem solid #eee;
        color: #ccc;
        text-align: center;
        line-height: 1.28rem;
    }

    .jia-btn {
        width: 1.28rem;
        height: 1.28rem;
        border-right: 0.03rem solid #ccc;
        border-bottom: 0.03rem solid #ccc;
        border-top: 0.03rem solid #ccc;
        border-bottom-right-radius: 0.16rem;
        border-top-right-radius: 0.16rem;
        text-align: center;
        line-height: 1.28rem;
    }


    .number-input {
        width: 1.81rem;
        height: 1.17rem;
        /* min-height: 1.28rem; */
        text-align: center;
        font-size: 0.64rem;
        border: 0.03rem solid #ccc;
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 2.66rem;
        position: fixed;
        background-color: #eee;
        bottom: 0;
        z-index: 999;

    }

    .submit {
        width: 5.33rem;
        height: 2.66rem;
        background-color: #fada85;
        text-align: center;
        line-height: 2.66rem;
        font-size: 0.8rem;
    }

    .totalprice {
        margin-left: 1.44rem;
        font-size: 0.96rem;
    }
</style>