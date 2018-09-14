<template>
  <section class="container">
    <Layout>
      <h2 slot="header" class="has-text-white">{{$t('links.contact')}}</h2>
      <div slot="content">
        <div class="columns">
          <div class="column">
            <table>
              <tr>
                <td>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                </td>
                <td>{{$t('all.drc')}}</td>
              </tr>
              <tr>
                <td>
                  <div class="contact-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                </td>
                <td>contact@oesukam.me</td>
              </tr><tr>
                <td>
                  <div class="contact-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                </td>
                <td>+243972734435</td>
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
  components: {
    Layout
  }
}
</script>

<style scoped>
  .contact-icon {
    background-color: #fafafa;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
  tr {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
