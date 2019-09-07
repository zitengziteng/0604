<template>
   <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
    <header-detail :seller="seller"></header-detail>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
  import { getSeller } from 'api'
  import VHeader from 'components/v-header/v-header'
  import HeaderDetail from 'components/header-detail/header-detail'
  import Tab from 'components/tab/tab'
  import Goods from 'components/goods/goods'
  import Seller from 'components/seller/seller'
  import Ratings from 'components/ratings/ratings'

  
export default {
  // name: 'app',
  data(){
    return{
      seller:{}
    }
  },
    computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
// 调用{getSeller 方法}  返回是promise,所以then中拿数据；then((seller)，seller赋值，传递给头部，<v-header ：seller>
// created 生命周期 调用getsell（）方法， getsell()方法具体做一些（函数已经封装好，请求）事情 
  created() {
    this._getSeller()
  },
   methods: {
     _getSeller(){
        getSeller().then((seller)=>{
        this.seller = seller
      })
     }
   },
    components: {
          Tab,
      VHeader
  },
}
</script>

<style>

</style>
