<template>
  <section class="container">
    <Layout>
      <div slot="header" class="is-white">
        <div class="columns">
          <div class="column is-one-third">
            <img src="~/assets/images/my_profile.jpg" class="profile" />
          </div>
          <div class="column is-two-third is-items-center is-content-center">
            <div class="intro-details">
              <h2 class="title is-2 is-white">Olivier M. Esuka</h2>
              <div class="social-links">
                <a href="https://www.twitter.com/oesukam/" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a>
                <!-- <a href="#" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a> -->
                <a href="https://github.com/oesukam" target="_blank" title="Github"><i class="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/oesukam/" target="_blank" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="content">
        <br>
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">{{$t('home.about_me')}}</h2>
            <p v-html="$t('home.introduction')"></p>
            <br>
            <!-- <a
              :href="$t('lang') === 'en' ? resume_en : resume_fr"
              target="_blank"
              class="button btn-secondary"
            >
              {{$t('all.download_cv')}}
            </a> -->
          </div>
          <div class="column">
            <table class="home-table">
              <tr>
                <td class="has-text-weight-semibold">{{$t('all.residence')}}</td>
                <td class="px-10">:</td>
                <td>Rwanda</td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">{{$t('all.email')}}</td>
                <td class="px-10">:</td>
                <td>oesukam@gmail.com</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from '~/components/PageLayout'
export default {
  head() {
    return { title: this.$t('home.title') }
  },
  components: {
    Layout
  },
  data() {
    return {
      resume_en: require('~/assets/images/resume_en.png'),
      resume_fr: require('~/assets/images/resume_fr.png')
    }
  }
}
</script>

<style>
  .profile {
    border: 3px solid #fff;
    background-color: #fff;
    text-align: center;
    max-width: 280px;
    margin-bottom: -60px;
    text-align: center;
    -webkit-box-shadow: 0 3px 8px 0 rgba(0,0,0,.1);
    -moz-box-shadow: 0 3px 8px 0 rgba(0,0,0,.1);
    box-shadow: 0 3px 8px 0 rgba(0,0,0,.1);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .profile:hover {
    -webkit-transform: translateY(-9px);
    -ms-transform: translateY(-9px);
    -o-transform: translateY(-9px);
    transform: translateY(-9px);
    -webkit-box-shadow: 0 18px 24px rgba(0,0,0,.15);
    -moz-box-shadow: 0 18px 24px rgba(0,0,0,.15);
    -o-box-shadow: 0 18px 24px rgba(0,0,0,.15);
    box-shadow: 0 18px 24px rgba(0,0,0,.15)
  }
  .intro-details {
    padding: 40px;
  }
  .social-links {
    position: relative;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
  }
  .social-links a {
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 24px;
    background-color: #fff;
    margin: 0 5px;
    color: #9e9e9e;
    text-align: center;
    -webkit-box-shadow: 0 3px 8px 0 rgba(0,0,0,.1);
    -moz-box-shadow: 0 3px 8px 0 rgba(0,0,0,.1);
    box-shadow: 0 3px 8px 0 rgba(0,0,0,.1);
  }
  .social-links a i {
    line-height: 36px;
    font-size: 16px;
  }
  .home-table {
    margin: 0 auto;
    font-size: 1rem;
  }
  @media screen and (max-width: 500px) {
    .intro-details {
      padding: 40px 10px;
    }
  }
</style>
