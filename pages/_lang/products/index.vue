<template>
  <section class="container">
    <Layout>
      <h2 slot="header" class="has-text-white">{{$t('links.electronic_products')}}</h2>
      <div slot="content">
        <div class="columns">
          <div class="column">
            <div class="field">
              <div :class="[
                'control',
                { 'has-icons-right': !searching },
                { 'is-loading': searching }
              ]">
                <input class="input" v-model="keywords" type="text" :placeholder="$t('all.search')">
                <span v-if="!searching" class="icon is-small is-right">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="(item, index) in filteredProducts" :key="index">
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
import some from 'lodash.some'
export default {
  components: {
    Layout,
    productCard
  },
  data() {
    return {
      loading: false,
      searching: false,
      keywords: '',
      products: [
        {
          url: 'rasp_v2',
          image: require('~/assets/images/products/rasp_v2.png'),
          title_fr: 'Raspberry PI v2',
          title_en: 'Raspberry PI v2',
          desc_fr: '',
          desc_en: '',
          price: 76,
          type: 'raspberry'
        },
        {
          url: 'rasp_v3',
          image: require('~/assets/images/products/rasp_v3.png'),
          title_fr: 'Raspberry PI v3',
          title_en: 'Raspberry PI v3',
          desc_fr: '',
          desc_en: '',
          price: 87,
          type: 'raspberry'
        },
        {
          url: 'uno_mega',
          image: require('~/assets/images/products/uno_mega.jpg'),
          title_fr: 'Arduino Uno v3 MEGA328P',
          title_en: 'Arduino Uno v3 MEGA328P',
          desc_fr: '',
          desc_en: '',
          price: 30,
          type: 'arduino'
        },
        {
          url: 'uno_atmega',
          image: require('~/assets/images/products/uno_atmega.png'),
          title_fr: 'Arduino Uno v3 ATmega328P',
          title_en: 'Arduino Uno v3 ATmega328P',
          desc_fr: '',
          desc_en: '',
          price: 40,
          type: 'arduino'
        },
        {
          url: 'nodemcu_esp8266',
          image: require('~/assets/images/products/nodemcu_esp8266.png'),
          title_fr: 'NodeMCU ESP8266 (Wifi)',
          title_en: 'NodeMCU ESP8266 (Wifi)',
          desc_fr: '',
          desc_en: '',
          price: 22,
          type: 'esp'
        },
        {
          url: 'relay_5v_1',
          image: require('~/assets/images/products/relay_5v_1.png'),
          title_fr: 'Relay 5v, 1 canal',
          title_en: 'Relay 5v, 1 channel',
          desc_fr: '',
          desc_en: '',
          price: 7,
          type: 'relay'
        },
        {
          url: 'relay_5v_2',
          image: require('~/assets/images/products/relay_5v_2.png'),
          title_fr: 'Relay 5v, 2 canal',
          title_en: 'Relay 5v, 2 channel',
          desc_fr: '',
          desc_en: '',
          price: 14,
          type: 'relay'
        },
        {
          url: 'relay_5v_4',
          image: require('~/assets/images/products/relay_5v_4.jpg'),
          title_fr: 'Relay 5v, 4 canal',
          title_en: 'Relay 5v, 4 channel',
          desc_fr: '',
          desc_en: '',
          price: 20,
          type: 'relay'
        },
        {
          url: 'breadboard_400x350',
          image: require('~/assets/images/products/breadboard_400x350.png'),
          title_fr: 'Breadboard 400x350',
          title_en: 'Breadboard 400x350',
          desc_fr: '',
          desc_en: '',
          price: 10,
          type: 'breadboard'
        },
        {
          url: 'breadboard_830',
          image: require('~/assets/images/products/breadboard_830.png'),
          title_fr: 'Breadboard 830',
          title_en: 'Breadboard 830',
          desc_fr: '',
          desc_en: '',
          price: 18.5,
          type: 'breadboard'
        },
        {
          url: 'pcb_coper_s1',
          image: require('~/assets/images/products/pcb_coper_s1.jpg'),
          title_fr: 'Plaque à simple face en cuivre',
          title_en: 'Single Side Copper Clad plate',
          desc_fr: '',
          desc_en: '',
          price: 6.5,
          type: 'pcb'
        },
        {
          url: 'ultrasonic',
          image: require('~/assets/images/products/ultrasonic.jpeg'),
          title_fr: 'Capteur à ultrasons',
          title_en: 'Ultrasonic Sensor',
          desc_fr: '',
          desc_en: '',
          price: 10.5,
          type: 'sensor'
        },
        {
          url: 'moisture_sensor',
          image: require('~/assets/images/products/moisture_sensor.jpeg'),
          title_fr: "Capteur d'humidité du sol",
          title_en: 'Soil Moisture Sensor',
          desc_fr: '',
          desc_en: '',
          price: 11,
          type: 'sensor'
        },
        {
          url: 'pir_motion_sensor',
          image: require('~/assets/images/products/pir_motion_sensor.jpg'),
          title_fr: "Capteur de mouvement",
          title_en: 'Motion Sensor',
          desc_fr: '',
          desc_en: '',
          price: 9,
          type: 'sensor'
        },
        {
          url: 'liquid_pump_12v_4l',
          image: require('~/assets/images/products/liquid_pump_12v_4l.jpg'),
          title_fr: "Pompe à eau",
          title_en: 'Water Pump (4L/Min)',
          desc_fr: '',
          desc_en: '',
          price: 40,
          type: 'pump'
        },
        {
          url: 'mini_gprs_gms_sim800l',
          image: require('~/assets/images/products/mini_gprs_gms_sim800l.jpg'),
          title_fr: "GPRS GSM SIM800L",
          title_en: 'GPRS GSM SIM800L',
          desc_fr: '',
          desc_en: '',
          price: 43,
          type: 'gsm'
        },
        {
          url: 'servo_motor_sg90',
          image: require('~/assets/images/products/servo_motor_sg90.jpg'),
          title_fr: "Mini Tower Pro Servo Motor SG90",
          title_en: 'Mini Tower Pro Servo Motor SG90',
          desc_fr: '',
          desc_en: '',
          price: 12,
          type: 'servo_motor'
        },
        {
          url: 'servo_motor_mg995',
          image: require('~/assets/images/products/servo_motor_mg995.jpg'),
          title_fr: "Tower Pro Servo Motor MG995",
          title_en: 'Tower Pro Servo Motor MG995',
          desc_fr: '',
          desc_en: '',
          price: 16,
          type: 'servo_motor'
        },
        {
          url: 'motor_driver_L293D_control_shield',
          image: require('~/assets/images/products/motor_driver_L293D_control_shield.jpg'),
          title_fr: "L293D Carte d'extension de moteur L293D POUR blindage de moteur Arduino",
          title_en: 'L293D motor drive expansion board FOR Arduino motor shield',
          desc_fr: '',
          desc_en: '',
          price: 18,
          type: 'motor_controller'
        },
        {
          url: 'motor_driver_L9110S_control_shield',
          image: require('~/assets/images/products/motor_driver_L9110S_control_shield.jpg'),
          title_fr: "L9110S Contrôleur de pilote de moteur pas à pas à double courant continu de moteur pas à pas de pont en H",
          title_en: 'L9110S H-bridge Stepper Motor Dual DC Stepper Motor Driver Controller',
          desc_fr: '',
          desc_en: '',
          price: 7,
          type: 'motor_controller'
        },
        {
          url: 'ir_remote_receiver',
          image: require('~/assets/images/products/ir_remote_receiver.jpg'),
          title_fr: "Télécommande IR et récepteur",
          title_en: 'IR Remote & Receiver',
          desc_fr: '',
          desc_en: '',
          price: 11,
          type: 'infrared'
        },
        {
          url: 'rfid_sensor_MFRC522',
          image: require('~/assets/images/products/rfid_sensor_MFRC522.jpg'),
          title_fr: "Capteur RFID et un ID",
          title_en: 'RFID Sensor with one tag',
          desc_fr: '',
          desc_en: '',
          price: 22,
          type: 'sensor'
        },
        {
          url: 'rfid_tag_RC522_13_56Mhz',
          image: require('~/assets/images/products/rfid_tag_RC522_13_56Mhz.jpg'),
          title_fr: "Tag RFID",
          title_en: 'RFID tag',
          desc_fr: '',
          desc_en: '',
          price: 4,
          type: 'tag'
        },
        {
          url: 'lcd_16x2_i2c',
          image: require('~/assets/images/products/lcd_16x2_i2c.png'),
          title_fr: "LCD 16x2 (i2c)",
          title_en: 'LCD 16x2 (i2c)',
          desc_fr: '',
          desc_en: '',
          price: 21,
          type: 'lcd'
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      let keywords = this.keywords
      if (keywords.length > 0) {
        keywords = (keywords.split(/\s+/) || []).map(val => val.toLowerCase())
        return this.products.filter(val => {
          return some(keywords, (v => {
            return val.title_fr.toLowerCase().match(v) || val.title_en.toLowerCase().match(v)
          }))
        })
      }
      return this.products
    }
  }
}
</script>

<style>

</style>
