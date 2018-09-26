<template>
  <div>
    <TopMenu />
    <div id="main-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import TopMenu from '~/components/TopMenu'
export default {
  components: {
    TopMenu
  }
}
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  min-height: 100%;
}
body {
  background-image: url('~/assets/images/main_bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;

  position: relative;
  font-family: 'Roboto',Helvetica,sans-serif;
  color: #424242;
  margin: 0;
  min-height: 100vh;
  width: 100%;
  font-size: 15px;
  line-height: 1.6em;
  background-color: #f5f5f5;
  overflow-x: hidden;
  overflow-y: auto;
  background-size: cover;
  -webkit-background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-overflow-scrolling: touch;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
#main-container {
  padding: 15px;
}

.is-blue {
  color: #2196F3;
}
.bg-blue {
  background-color: #2196F3;
}
.progress .is-primary {
  background-color: #2196F3 !important;
}
.is-white {
  color: #fff;
}
.is-content-center {
  display: flex;
  justify-content: center;
}
.is-items-center {
  display: flex;
  align-items: center;
}

.px-10 {
  padding-left: 10px;
  padding-right: 10px;
}
.pl-10 {
  padding-left: 10px;
}
.input:focus {
  outline: none;
  border: 1px solid #2196f3;
}
</style>
