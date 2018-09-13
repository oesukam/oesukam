<template>
  <div class="container top-mobile">
    <nav id="top-menu" class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand is-items-center">
        <a id="top-names" href="/">
          <h1 class="site-title">Olivier<span>ESUKA</span></h1>
        </a>

        <a @click.prevent="menu = !menu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="['navbar-menu', {'is-active': menu }]">
        <div class="navbar-end">
          <div class="navbar-item">
            <nuxt-link :to="$i18n.path('')">{{$t('links.home')}}</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link :to="$i18n.path('resume')">{{$t('links.resume')}}</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link :to="$i18n.path('teaching')">{{$t('links.teaching')}}</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link :to="$i18n.path('products')">{{$t('links.electronic_products')}}</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link :to="$i18n.path('contact')">{{$t('links.contact')}}</nuxt-link>
          </div>
          <div v-if="$i18n.locale === 'fr'" class="navbar-item">
            <nuxt-link
              :to="`/en` + $route.fullPath"
              class="Header__Link"
              active-class="none"
              exact
            >
              {{ $t('links.english') }}
            </nuxt-link>
          </div>
          <div  v-else class="navbar-item">
            <nuxt-link
              :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
              class="Header__Link"
              active-class="none"
              exact
            >
              {{ $t('links.french') }}
            </nuxt-link>
          </div>


        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isWhite: false,
        menu: false
      }
    },
    watch: {
      '$route'() {
        this.menu = false
      }
    },
    methods: {
      handleScroll (event) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isWhite = scroll > 100
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style scoped>
  #top-menu {
    background: transparent;
  }
  .navbar-item {
    position: relative;
  }
  .navbar-item a {
    color: #424242;
    font-weight: 400;
    font-size: 1.2rem;
  }
  .nuxt-link-exact-active {
    color: #2196F3 !important;
  }
  .nuxt-link-exact-active:after {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    width: 0;
    height: 2px;
    margin: 0 auto;
    background-color: #2eca7f;
    -webkit-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    -ms-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
  }

  .site-title {
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #49515d;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Montserrat',Helvetica,sans-serif;
    line-height: 20px;
    margin: 20px 0;
  }
  .site-title span {
    color: #2196F3;
    padding-left: 10px;
  }
  @media only screen and (min-width: 991px) {
    .site-title {
      color: #49515d
    }
    .header.sticked .site-title {
      color: #49515d
    }
  }
  @media only screen and (max-width: 1086px) {
    .site-title {
      color: #fff !important
    }
    .top-mobile {
      background-color: #2196F3;
    }
  }

  .is-active {
    position: fixed;
    background-color: #fff;
    top: 75px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    text-align: center;
    -webkit-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    -ms-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
  }
  .navbar-burger {
    margin-right: 15px;
    color: #fff;
    font-weight: 600;
  }
  #top-names {
    color: #4a4a4a;
    display: block;
    line-height: 1.5;
    padding: 8px 12px;
    padding: 0.5rem 0.75rem;
    position: relative;
  }
</style>
