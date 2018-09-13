<template>
  <section class="container">
    <Layout>
      <h2 slot="header" class="has-text-white">{{$t('links.electronic_products')}}</h2>
      <div slot="content">
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="(item, index) in products" :key="index">
            <product-card :item="item"></product-card>
          </div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from '~/components/PageLayout'
import productCard from '~/components/productCard'
export default {
  components: {
    Layout,
    productCard
  },
  data() {
    return {
      products: {
        rasp_v2: {
          url: 'rasp_v2',
          image: require('~/assets/images/products/rasp_v2.png'),
          title_fr: 'Raspberry PI v2',
          title_en: 'Raspberry PI v2',
          desc_fr: '',
          desc_en: '',
          price: 76,
          type: 'raspberry'
        },
        rasp_v3: {
          url: 'rasp_v3',
          image: require('~/assets/images/products/rasp_v3.png'),
          title_fr: 'Raspberry PI v3',
          title_en: 'Raspberry PI v3',
          desc_fr: '',
          desc_en: '',
          price: 87,
          type: 'raspberry'
        },
        uno_mega: {
          url: 'uno_mega',
          image: require('~/assets/images/products/uno_mega.jpg'),
          title_fr: 'Arduino Uno v3 MEGA328P',
          title_en: 'Arduino Uno v3 MEGA328P',
          desc_fr: '',
          desc_en: '',
          price: 25,
          type: 'arduino'
        },
        uno_atmega: {
          url: 'uno_atmega',
          image: require('~/assets/images/products/uno_atmega.png'),
          title_fr: 'Arduino Uno v3 ATmega328P',
          title_en: 'Arduino Uno v3 ATmega328P',
          desc_fr: '',
          desc_en: '',
          price: 35,
          type: 'arduino'
        },
        nodemcu_esp8266: {
          url: 'nodemcu_esp8266',
          image: require('~/assets/images/products/nodemcu_esp8266.png'),
          title_fr: 'NodeMCU ESP8266',
          title_en: 'NodeMCU ESP8266',
          desc_fr: '',
          desc_en: '',
          price: 22,
          type: 'esp'
        },
        relay_5v_1: {
          url: 'relay_5v_1',
          image: require('~/assets/images/products/relay_5v_1.jpg'),
          title_fr: 'Relay 5v, 1 canal',
          title_en: 'Relay 5v, 1 channel',
          desc_fr: '',
          desc_en: '',
          price: 7,
          type: 'relay'
        },
        relay_5v_2: {
          url: 'relay_5v_2',
          image: require('~/assets/images/products/relay_5v_2.jpg'),
          title_fr: 'Relay 5v, 2 canal',
          title_en: 'Relay 5v, 2 channel',
          desc_fr: '',
          desc_en: '',
          price: 14,
          type: 'relay'
        },
        relay_5v_4: {
          url: 'relay_5v_4',
          image: require('~/assets/images/products/relay_5v_4.jpg'),
          title_fr: 'Relay 5v, 4 canal',
          title_en: 'Relay 5v, 4 channel',
          desc_fr: '',
          desc_en: '',
          price: 20,
          type: 'relay'
        },
        breadboard_400x350: {
          url: 'breadboard_400x350',
          image: require('~/assets/images/products/breadboard_400x350.png'),
          title_fr: 'Breadboard 400x350',
          title_en: 'Breadboard 400x350',
          desc_fr: '',
          desc_en: '',
          price: 10,
          type: 'breadboard'
        },
        breadboard_830: {
          url: 'breadboard_830',
          image: require('~/assets/images/products/breadboard_830.png'),
          title_fr: 'Breadboard 830',
          title_en: 'Breadboard 830',
          desc_fr: '',
          desc_en: '',
          price: 18.5,
          type: 'breadboard'
        },
        ultrasonic: {
          url: 'ultrasonic',
          image: require('~/assets/images/products/ultrasonic.jpeg'),
          title_fr: 'Capteur à ultrasons',
          title_en: 'Ultrasonic Sensor',
          desc_fr: '',
          desc_en: '',
          price: 10.5,
          type: 'sensor'
        },
        moisture_sensor: {
          url: 'moisture_sensor',
          image: require('~/assets/images/products/moisture_sensor.jpeg'),
          title_fr: "Capteur d'humidité du sol",
          title_en: 'Soil Moisture Sensor',
          desc_fr: '',
          desc_en: '',
          price: 11,
          type: 'sensor'
        },
        pir_motion_sensor: {
          url: 'pir_motion_sensor',
          image: require('~/assets/images/products/pir_motion_sensor.jpg'),
          title_fr: "Capteur de mouvement",
          title_en: 'Motion Sensor',
          desc_fr: '',
          desc_en: '',
          price: 9,
          type: 'sensor'
        }
      }
    }
  }
}
</script>

<style>

</style>
