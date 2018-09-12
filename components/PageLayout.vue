<template>
  <section class="main-content">
    <div class="page-header">
      <slot name="header"></slot>
    </div>
    <div class="page-content">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
  .main-content {
    position: relative;
    background-color: transparent;
    overflow: hidden;
    border-radius: 15px;
    -webkit-box-shadow: 0 15px 25px 0 rgba(0,0,0,.1);
    -moz-box-shadow: 0 15px 25px 0 rgba(0,0,0,.1);
    box-shadow: 0 15px 25px 0 rgba(0,0,0,.1);
    -webkit-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -ms-transform: none;
    min-height: 100%;
  }
  .page-header {
    background-color: #2196f3;
    background-image: url('~/assets/images/sp_main_bg.png');
    position: relative;
    padding: 30px;
    margin-bottom: 0;
    background-size: cover;
    -webkit-background-size: cover;
    background-attachment: scroll;
    background-position: center center;
    background-repeat: no-repeat;
    text-align: center;
    font-size: 2rem;
    color: fff;
    font-weight: 600;
  }
  .page-content {
    padding: 30px;
    background-color: #fff;
  }
  .is-white {
    color: #fff;
  }
</style>
