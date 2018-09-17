<template>
  <section class="container">
    <Layout>
      <h2 slot="header" class="has-text-white">{{$t('links.teaching')}}</h2>
      <div slot="content">
        <div class="columns is-multiline">
          <div class="column is-half">
            <div class="header-title">
              <h3 class="title is-3 year-title">2018</h3>
              <h4 class="title is-3 acad-title">{{$t('teaching.academic_year')}}</h4>
            </div>
            <!-- UCK -->
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">UCK - Université Catholique de Kisangani</h4>
                <span class="item-small">Kisangani</span>
                <!-- <ul class="item-list">
                  <li>Système d’informatique et les bases de données</li>
                </ul> -->
              </div>
            </div>

            <!-- UMC -->
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">UMC - Université Mariste du Congo</h4>
                <span class="item-small">Kisangani</span>
                <!-- <ul class="item-list">
                  <li>Système d’informatique et les bases de données</li>
                </ul> -->
              </div>
            </div>

            <!-- ULM -->
            <div class="timeline">
              <div class="timeline-item">
                <h4 class="item-title">ULK - Université Libre de Kisangani</h4>
                <span class="item-small">Kisangani</span>
                <ul class="item-list">
                  <!-- <li>Système d’informatique et les bases de données</li> -->
                </ul>
              </div>
            </div>
            <div class="fw-divider-space"></div>
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

<style>
.timeline {
  border-left: 2px solid #e0e0e0;
  padding: 15px 0;
}
.timeline-item {
  position: relative;
  padding: 15px 20px 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-left: 2px solid #2196F3;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.2)
}

.timeline-item:hover {
  box-shadow: 0 0 8px 0 rgba(0,0,0,.2)
}

.timeline-item:last-child {
  margin-bottom: 0
}

.timeline-item:before {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  width: 12px;
  height: 12px;
  top: 20px;
  left: -29px;
  border: 2px solid #2196F3;
  z-index: 2
}

.timeline-item:after {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: #2196F3;
  border-radius: 10px;
  width: 29px;
  height: 2px;
  top: 25px;
  left: -29px;
  z-index: 1
}

.timeline-item .item-title {
  display: block;
  margin: 0;
  font-size: 16px;
  line-height: 1.2em
}

.timeline-item .item-period {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #2196F3;
  margin-bottom: 8px
}

.timeline-item .item-small {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #9e9e9e;
  margin-left: 5px;
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 1px solid #e0e0e0
}

.timeline-item .item-logo {
  display: block;
  margin-bottom: 5px;
}

.timeline-item .item-logo img {
  max-width: 200px;
  max-height: 48px;
}

.skills-info {
  margin-bottom: 30px;
  margin-top: 10px;
}

.skills-info h4 {
  font-size: .8em;
  line-height: 1.1em;
  position: relative;
  margin: 0 0 5px;
}

.skill-container {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 12px;
  margin-bottom: 12px;
  width: 100%
}

.skill-percentage {
  background-color: #2196F3;
  height: 10px;
  padding: 0
}

.skill-percentage {
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  transition: all 2s ease-in-out
}

.fw-divider-space {
  clear: both;
  width: 100%;
  padding-top: 30px;
}
.header-title {
  margin-bottom: 20px;
  position: relative;
}
.year-title {
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 0px !important;
  position: relative;
  color: #fff;
  background-color: #2196F3;
}
.acad-title {
  color: #2196F3;
}
.acad-title:after {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 3px;
  background: linear-gradient(to right, #2196F3, #fff);
}
.item-list {
  margin-left: 20px;
  list-style: square;
}
</style>
