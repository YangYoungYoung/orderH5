<template>
    <div id="expense">
        <div class="list-item">
            <div class="item-top">
                <img src="../assets/logo.png" class="user-img">
                <div class="user-name">123123</div>
            </div>
            <div class="item-bottom">
                <div class="item-data">2019.06.06</div>
                <div class="item-price">￥2019.06.06</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "expense",
        data() {
            return {

            }
        },
        beforeCreate() {
            var that = this;
            document.querySelector('body').setAttribute('style', 'background:#f3f3f3')
        },
    }
</script>
<style>
    #expense {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    }

    .list-item {
        display: flex;
        flex-direction: column;
        width: 18.93rem;
        height: 5.55rem;
        background-color: #ffffff;
        border-radius: 0.26rem;
        margin-top: 0.53rem;
    }
    .item-top{
        display: flex;
        flex-direction: row;
        margin-top: 0.53rem;
        margin-left: 0.56rem;
        align-items: center;
        margin-bottom: 1.36rem;
    }
    .user-img{
        width: 1.68rem;
        height: 1.68rem;
        border-radius: 50%;
        background-color: #eee;
    }
    .user-name{
        margin-left: 0.56rem;
        color: #666666;
        font-size: 0.95rem;
    }

    .item-bottom{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
    }
    .item-data{
        color: #666666;
        font-size: 0.95rem;
        margin-left: 0.56rem;

    }
    .item-price{
        color: #d40000;
        font-size: 0.96rem;
        margin-right: 0.56rem;
    }

</style>