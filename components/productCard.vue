<template>
  <div class="">
    <div class="item-block">
      <img class="item-poster" :src="item.image">
      <div class="item-content p-4">
        <nuxt-link :id="item.url" :to="'/products/' +item.url" class="item-title">
          {{ $t('lang') === 'en' ? item.title_en : item.title_fr }}
        </nuxt-link>
        <div class="item-price">{{item.price}} <i class="fa fa-dollar"></i> </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: ''
    },
    data() {
      return {
        defaultImg: require('~/assets/svg/product.svg')
      }
    }
  }
</script>

<style scoped>
  .item-block {
    padding: 10px 15px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
  }
  .item-poster, .item-title, .item-price {
    cursor: pointer;
    text-decoration: none;
  }
  .item-poster {
    object-fit: fill;
    width: 100%;
    height: 30vh;
    min-height: 200px;
  }
  .item-title {
    line-height: 1rem;
    font-size: 1.2rem;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0,0,0,0.8);
  }
  .item-price {
    color: #da0303;
    padding: 5px 0px;
    font-size: 1.5rem;
    font-weight: 400;
  }
  .item-city {
    font-size: 1rem;
    color: rgba(0,0,0,0.8);
  }
</style>
