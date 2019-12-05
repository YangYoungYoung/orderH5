<template>
    <div id="cart">
        <div class="cart-list">
            <div class="cart-item" v-for="(item, index) in carts" :key="index">
                <div class="item-name"></div>
                <div class="item-price"></div>
                <div class="buy-num">
                    <div class="jian-btn" v-bind:class="[item.number==1?'disabled':'']" @click="jianBtnTap(index,item.number)">
                        -</div>
                    <input type="text" value="{{item.number}}" v-on:keyup="inputTargetValue" />
                    <div class="jia-btn" @click="jiaBtnTap(index)">+
                    </div>
                </div>
            </div>
        </div>.
        <div class="footer">
            <div class="totalprice"></div>
            <div class="submit" @click='submit'>提交</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cart',
        data: {

            return({

            })
        },
        methods: {
            //数量减
            jianBtnTap(index) {
                console.log('index is:', index);
            },
            //数量加
            jiaBtnTap(index) {

            }
        },
        //获取输入框值
        inputTargetValue: function (e) {
            console.log(e.target.value);
        },
        submit:function(){
            
        }
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

    .cart-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e2e2e2;
    }

    .buy-num {
        width: 4.37rem;
        height: 1.28rem;
        line-height: 1.28rem;
        position: absolute;
        right: 0.8rem;
        bottom: 0;
        display: flex;
        /*justify-content: space-between;*/
        font-size: 0.64rem;
        text-align: center;
    }

    .jian-btn {
        width: 1.28rem;
        height: 100%;
        border-left: 0.03rem solid #ccc;
        border-bottom: 0.03rem solid #ccc;
        border-top: 0.03rem solid #ccc;
        border-bottom-left-radius: 0.16rem;
        border-top-left-radius: 0.16rem;
    }

    .jian-btn.disabled {
        background-color: #f5f5f9;
        border-left: 0.03rem solid #eee;
        border-bottom: 0.03rem solid #eee;
        border-top: 0.03rem solid #eee;
        color: #ccc;
    }

    .jia-btn {
        width: 1.28rem;
        height: 100%;
        border-right: 0.03rem solid #ccc;
        border-bottom: 0.03rem solid #ccc;
        border-top: 0.03rem solid #ccc;
        border-bottom-right-radius: 0.16rem;
        border-top-right-radius: 0.16rem;
    }

    .buy-num input {
        width: 1.81rem;
        height: 1.28rem;
        min-height: 1.28rem;
        text-align: center;
        font-size: 0.64rem;
        border: 0.03rem solid #ccc;
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>