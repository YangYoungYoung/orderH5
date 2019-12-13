<template>
  <div id="hi">
    <mt-swipe style="height: 8.95rem;" :auto="4000">
      <mt-swipe-item v-for="(item, index) in banner" :key="index">
        <img class="banner" v-bind:src="item">
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <img class="banner" src="../assets/2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="banner" src="../assets/logo.png">
      </mt-swipe-item> -->
    </mt-swipe>
    <div class="menu">
      <div class="menu-item" v-for="(item, index) in menuArr" :key="index" @click="toMenus(index)">
        <img class="menu-img" v-bind:src="item.ul">
        <div class="menu-name">{{item.name}}</div>
      </div>
    </div>
    <div class="wifi-phone">
      <div class="shop-wifi-number">
        <div class="wifi">
          <img class="wifi-img" src="../assets/wifi.png">
          <div class="shop-address">{{phone}}</div>
        </div>
        <div class="wifi">
          <img class="wifi-img" src="../assets/phone.png">
          <div class="shop-wifi">{{wifi}}</div>
        </div>
      </div>
    </div>
    <div class="shopInfo">
      <div class="title">店铺展示</div>
      <div class="info-img" v-for="(item, index) in detailImg" :key="index">
        <img class="img-item" v-bind:src="item">
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import order from '../assets/order.png'
  import status from '../assets/status.png'
  import form from '../assets/form.png'
  import member from '../assets/member.png'
  import feedback from '../assets/feedback.png'
  import axios from 'axios'

  export default {
    name: 'hi',
    data() {
      return {
        menuArr: [
          { ul: order, name: '点餐' },
          { ul: status, name: '进度' },
          { ul: form, name: '订单' },
          { ul: member, name: '会员' },
          { ul: feedback, name: '反馈' }
        ],
        // imgArr: [
        //   { ul: info1 },
        //   { ul: info2 }
        // ],
        banner: [],
        detailImg: [],
        phone: '',
        wifi: ''
      }
    },
    created() {
      this.getData();
      // sessionStorage.setItem('shopId',shopId);
      // sessionStorage.setItem('tableId',tableId); 
    },
    methods: {
      getData: function () {

        // this.$axios.get('/api/test/ce', {
        //   params: {
        //     test: '1234'
        //   }
        // }).then(res => {
        //   console.log(res, 'res')
        // }).catch(res1 => {
        //   console.log(res1, 'res1')
        // })
        axios({
          // url: '/api/test/ce',
          url: '/api/shop/shopDetails',
          method: 'get',
          params: {
            shopId: '1'
          },
          headers: {
            // Authorization: 'Bearer eyJ0eXAiABUg-Fxs...',
            Accept: 'application/json'
          }
        }).then(res => {
          console.log(res, 'res')
          const phone = res.data.data.phone;
          this.phone = phone;
          const wifi = res.data.data.wifi;
          this.wifi = wifi;
          this.banner = res.data.data.banner;
          this.detailImg = res.data.data.details;
        }).catch(res1 => {
          console.log(res1, 'res1')
        })
      },
      toMenus(index) {
        console.log('index is:', index);
        switch (index) {
          case 0:
            // this.$router.push({path:'/order',params:{shopId:1}})
            this.$router.push({
              name: 'order',
              query: {
                shopId: 1,
              }
            }).catch(err => {
              console.log('跳转失败：', err);
            })
            break;
          case 1:
            this.$router.push({
              name: 'schedule',
              query: {
                shopId: 1,
              }
            }).catch(err => {
              console.log('跳转失败：', err);
            })

            break;
          case 2:
            this.$router.push({
              name: 'form',
              query: {
                shopId: 1,
              }
            }).catch(err => {
              console.log('跳转失败：', err);
            })

            break;
          case 3:
            this.$router.push({
              name: 'center',
              query: {
                shopId: 1,
              }
            }).catch(err => {
              console.log('跳转失败：', err);
            })
            break;
          case 4:
          this.$router.push({
              name: 'feedback',
              query: {
                shopId: 1,
              }}).catch(err => { 
                console.log('跳转失败：',err);
              })
            break;
        }
      }
    },

  }
</script>
<style>
  #hi {
    width: 100%;
    /* height: 100%; */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box; */
  }

  .banner {
    width: 100%;
    height: 8.95rem;
  }

  .menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1.9rem;
  }

  .menu-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-name {
    font-size: 0.6rem;
    margin-top: 0.5rem;
    color: #333333;
  }

  .menu-img {
    width: 2.77rem;
    height: 2.77rem;
  }

  .wifi-phone {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wifi-img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.45rem;
  }

  .shop-wifi-number {
    width: 14.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.45rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .wifi {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: row;
  }

  .shopInfo {
    width: 100%;
    background-color: #f5cda5;
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    width: 100%;
    font-size: 1rem;
    color: #333333;
    font-weight: bold;
    margin-top: 0.83rem;
    text-align: center;
  }

  .info-img {
    margin-top: 0.68rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.68rem;
  }

  .img-item {
    border-radius: 10px;
    width: 18.08rem;
    height: 9.33rem;
  }
</style>