<template>
    <div id="center">
        <img src="../assets/form_card.png" class="top-img">
        <div class="menu-content">
            <div class="menuList">

                <div class="menu-item">
                    <div class="menu-item-title">优惠券</div>
                    <div class="menu-item-number">0张</div>
                </div>|
                <div class="menu-item">
                    <div class="menu-item-title">余额</div>
                    <div class="menu-item-number">￥0</div>
                </div>|
                <div class="menu-item">
                    <div class="menu-item-title">积分</div>
                    <div class="menu-item-number">0</div>
                </div>
            </div>
            <div class="member-text">会员充值满100赠10</div>
        </div>
        <div class="member-bottom">
            <div class="bottom-list">
                <div class="member-data">
                    <div class="data-name">会员资料</div>
                    <div class="data-info">详情 ></div>
                </div>
                <div class="member-data">
                    <div class="data-name">消费记录</div>
                    <div class="data-info">></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'center',
        data() {
            return {
                
            }
        },
        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background:#f3f3f3')
        },

    }
</script>
<style>
    #center {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .top-img {
        /* position: fixed; */
        /* top: 0; */
        /* margin-top: 0.69rem; */
        width: 100%;
        height: 6.77rem;
        box-sizing: border-box;
        /* z-index:1000; */
    }

    .menuList {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
        color: #989898;
    }

    .menu-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
    }

    .menu-item-title {

        font-size: 0.64rem;
        margin-bottom: 0.48rem;
    }

    .menu-content {
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* z-index:900; */
    }

    .menu-item-number {
        color: #f60000;
        font-size: 0.64rem;
    }

    .member-text {
        width: 100%;
        text-align: center;
        font-size: 0.53rem;
        color: #989898;
        margin-top: 1.38rem;
        margin-bottom: 0.93rem;
    }

    .bottom-list {
        width: 18.93rem;
        height: 13.33rem;
        display: flex;
        flex-direction: column;
        font-size: 0.64rem;
        background-color: #fff;
        margin-top: 0.53rem; 
    }

    .member-bottom{ 
        width: 100%;
        /* height: 16.29rem; */
        /* background-color: #f3f3f3; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .member-data {
        /* width: 100%; */
        height: 2.16rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #dddddd;
        margin-left: 0.8rem;
        align-items: center;
    }

    .data-info {
        color: #b5b5b5;
        margin-right: 0.8rem;
    }
</style>