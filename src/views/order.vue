<template>
    <div id="container">
        <div class="good">
            <div class="shop-left">
                <div class="type-item" v-for="(item, index) in typeArr" :key="index"
                    :style="{'background-color': (item.select ? '#fff':'#eee')}">
                    <div class="type-item-text">{{item.name}}</div>
                </div>
            </div>
            <div class="good-right" style="height: 400px; overflow-y:scroll">
                <div class="good-list" v-for="(product, index) in productList" :key="index">
                    <div class="right-title"></div>
                    <div class="good-item" v-for="(good, index) in product.goods" :key="index">
                        <div class="good-left">
                            <img v-bind:src="good.img" class="good-img" alt="商品图片">
                            <div class="good-info">
                                <div class="good-name">{{good.name}}</div>
                                <div class="good-member-price">{{good.memberPrice}}</div>
                                <div class="good-price">{{good.price}}</div>
                            </div>
                        </div>
                        <!--cartControl-->
                        <div class="cartControl-wrapper">
                            <div class="cartControl">
                                <div name="fade">
                                    <div class="cart-decrease" wx:if="{{productList.number > 0}}"
                                        data-item-index="{{index}}" data-parentIndex="{{parentIndex}}"
                                        catchtap="decreaseCart">
                                        <div class="inner iconfont icon-jian" style="font-size:0.72rem;color:#fada85;">
                                        </div>
                                    </div>
                                    <div class="cart-count" wx:if="{{productList.number > 0 }}">{{productList.number}}
                                    </div>
                                    <div class=" iconfont icon-jia cart-add " style="color:#fada85; "
                                        data-item-index="{{index}}" data-parentIndex="{{parentIndex}}"
                                        catchtap="addCart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--shopCart-->
        <div class="shopCart">
            <div class="content">
                <div class="content-left">
                    <div class="logo-wrapper">
                        <div class="logo highlight" bindtap='toCart'>
                            <div class="iconfont icon-gouwuche highlight"></div>
                        </div>
                        <div class="num" wx:if="{{totalCount> 0}}">{{totalCount}}</div>
                    </div>
                    <div class="price highlight">￥{{totalPrice}}</div>
                </div>
                <div class="content-right" catchtap="toCart">
                    <div class="pay enough" :class="payClass">
                        提交
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

    export default {
        name: 'container',
        data() {
            return {
                typeArr: [
                    { name: '会员折扣0', select: true },
                    { name: '会员折扣1', select: false },
                    { name: '会员折扣2', select: false },
                    { name: '会员折扣3', select: false },
                ]
            }
        }
    }
</script>
<style>
    #container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    }

    .good {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
        /* padding-bottom: 2.67rem; */
    }

    .shop-left {
        width: 3.97rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #eee;
    }

    .type-item {
        width: 100%;
        height: 1.97rem;
        display: flex;
        flex-direction: column;
        font-size: 0.64rem;
        color: #5c5d5f;
        text-align: center;
        align-items: center;
        vertical-align: middle;
        line-height: 1.97rem;

    }

    .type-item-text {
        display: flex;
        flex-direction: row;
        height: 1.97rem;
        text-align: center;
        align-items: center;
        vertical-align: middle;
    }

    .good-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    .good-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .right-title {
        font-size: 0.4rem;
    }

    .good-item {
        width: 15rem;
        height: 4.48rem;
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    .good-left {
        display: flex;
        flex-direction: row;

    }

    .good-img {
        width: 5.6rem;
        height: 4rem;
        background-color: #2b2b2b;
    }

    .good-info {
        display: flex;
        flex-direction: column;
        margin-left: 0.43rem;
    }

    .good-name {
        font-size: 0.9rem;
        color: #2b2b2b;
    }

    /* cartControl 样式 */

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl {
        font-size: 0;
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-decrease,
    .cart-add {
        display: inline-block;
        padding: 0.43rem 0.64rem 0.64rem 0.64rem;
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-decrease,
    .cart-add :fade-enter-active,
    :fade-leave-active {
        transition: all 0.4s linear;
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-decrease,
    .cart-add :fade-enter,
    :fade-leave-active {
        opacity: 0 transform translate3d(2.56rem, 0, 0);
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-decrease,
    .cart-add .inner {
        display: inline-block;
        line-height: 2.56rem;
        font-size: 2.56rem;
        vertical-align: top;
        color: rgb(0, 160, 220, 0.2);
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-decrease,
    .cart-add :inner-enter-active,
    :inner-leave-active {
        transition: all 0.4s linear;
        transform: rotate(0);
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-decrease,
    .cart-add :inner-enter,
    :inner-leave-active {
        opacity: 0 transform rotate(180deg);
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-count {
        display: inline-block;
        font-size: 1.07rem;
        line-height: 2.56rem;
        width: 1.28rem;
        vertical-align: top;
        padding-top: 0.64rem;
        text-align: center;
        color: rgb(147, 153, 159);
    }

    .goods .foods-wrapper .food-list .food-item .content .cartControl-wrapper .cartControl .cart-add {
        display: inline-block;
        padding: 0.64rem;
        line-height: 2.56rem;
        font-size: 2.56rem;
        vertical-align: top;
        color: rgb(0, 160, 220, 0.2);
    }

    .footer {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 2.67rem;
        background-color: #eee;
        align-items: center;
        justify-content: space-between;
    }

    /* shopcart 样式 */

    .shopCart {
        position: fixed;
        left: 0rpx;
        bottom: 0rpx;
        z-index: 50;
        width: 100%;
        height: 96rpx;
    }

    .shopCart .content {
        display: flex;
        background: #141d27;
    }

    .shopCart .content .content-left {
        flex: 1;
    }

    .shopCart .content .content-left .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -20rpx;
        margin: 0 24rpx;
        padding: 12rpx;
        width: 112rpx;
        height: 112rpx;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;
    }

    .shopCart .content .content-left .logo-wrapper .num {
        position: absolute;
        top: 0;
        right: 0;
        width: 48rpx;
        height: 48rpx;
        line-height: 48rpx;
        text-align: center;
        border-radius: 32rpx;
        font-size: 18rpx;
        font-weight: 700;
        color: #fff;
        background: rgb(240, 20, 20);
        box-shadow: 0 8rpx 16rpx 0 rgba(0, 0, 0, 0.4);
    }

    .shopCart .content .content-left .logo-wrapper .logo {
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 50%;
        background: #2b343c;
    }

    .shopCart .content .content-left .logo-wrapper .logo.highlight {
        background: rgb(0, 160, 220);
    }

    .shopCart .content .content-left .logo-wrapper .logo .icon-gouwuche {
        line-height: 88rpx;
        font-size: 48rpx;
        color: #80858a;
    }

    .shopCart .content .content-left .logo-wrapper .logo .icon-gouwuche.highlight {
        color: #fff;
    }

    .shopCart .content .content-left .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 24rpx;
        line-height: 48rpx;
        padding-right: 24rpx;
        box-sizing: border-box;

        font-size: 32rpx;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);
    }

    .shopCart .content .content-left .price.highlight {
        color: #fff;
    }

    .shopCart .content .content-left .desc {
        display: inline-block;
        vertical-align: top;
        line-height: 48rpx;
        margin-left: 24rpx;
        margin-top: 24rpx;
        color: rgba(255, 255, 255, 0.4);
        font-size: 20rpx;
    }

    .shopCart .content .content-right {
        flex: 0 0 210rpx;
        width: 210rpx;
    }

    .shopCart .content .content-right .pay {
        height: 96rpx;
        line-height: 96rpx;
        text-align: center;
        font-size: 24rpx;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        background: #2b333b;
    }

    .shopCart .content .content-right .pay.not-enough {
        background: #2b333b;
    }

    .shopCart .content .content-right .pay.enough {
        /* background: #00b43c; */
        background: #fada85;
        color: #333;
    }

    .shopCart .ball-container .ball {
        position: fixed;
        left: 64rpx;
        bottom: 44rpx;
        z-index: 200;
        transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    }

    .shopCart .ball-container .ball .inner {
        width: 32rpx;
        height: 32rpx;
        border-radius: 50%;
        background: rgb(0, 160, 220);
        transition: all 0.4s linear;
    }

    .shopCart .shopcart-list {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        transform: translate3d(0, -100%, 0);
    }

    .shopCart .shopcart-list :fade-enter-active,
    :fade-leave-active {
        transition: all 0.5s transform translate3d(0, -100%, 0);
    }

    .shopCart .shopcart-list :fade-enter,
    :fade-leave-active {
        transform: translate3d(0, 0, 0);
    }

    .shopCart .shopcart-list .list-header {
        height: 80rpx;
        line-height: 80rpx;
        padding: 0 36rpx;
        background: #f3f5f7;
        border-bottom: 2rpx solid rgba(7, 17, 27, 0.1);
    }

    .shopCart .shopcart-list .list-header .title {
        float: left;
        font-size: 28rpx;
        color: rgb(7, 17, 27);
    }

    .shopCart .shopcart-list .list-header .empty {
        float: right;
        font-size: 24rpx;
        color: rgb(0, 160, 220);
    }

    .shopCart .shopcart-list .list-content {
        padding: 0 36rpx;
        max-height: 434rpx;
        overflow: hidden;
        background: #fff;
    }

    .shopCart .shopcart-list .list-content .shopcart-food {
        position: relative;
        padding: 24rpx 0;
        box-sizing: border-box;
        /*border-top: 1px solid rgba(7,17,27,0.1);*/
    }

    .shopCart .shopcart-list .list-content .shopcart-food .name {
        line-height: 48rpx;
        font-size: 28rpx;
        color: rgb(7, 17, 27);
    }

    .shopCart .shopcart-list .list-content .shopcart-food .price {
        position: absolute;
        right: 180rpx;
        bottom: 24rpx;
        line-height: 48rpx;
        font-size: 28rpx;
        font-weight: 700;
        color: rgb(240, 20, 20);
    }

    .shopCart .shopcart-list .list-content .shopcart-food .cartControl-wrapper {
        position: absolute;
        right: 0;
        bottom: 12rpx;
    }
</style>