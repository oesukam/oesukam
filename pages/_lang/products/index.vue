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
          price: 30,
          type: 'arduino'
        },
        uno_atmega: {
          url: 'uno_atmega',
          image: require('~/assets/images/products/uno_atmega.png'),
          title_fr: 'Arduino Uno v3 ATmega328P',
          title_en: 'Arduino Uno v3 ATmega328P',
          desc_fr: '',
          desc_en: '',
          price: 40,
          type: 'arduino'
        },
        nodemcu_esp8266: {
          url: 'nodemcu_esp8266',
          image: require('~/assets/images/products/nodemcu_esp8266.png'),
          title_fr: 'NodeMCU ESP8266 (Wifi)',
          title_en: 'NodeMCU ESP8266 (Wifi)',
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
        pcb_coper_s1: {
          url: 'pcb_coper_s1',
          image: require('~/assets/images/products/pcb_coper_s1.jpg'),
          title_fr: 'Plaque à simple face en cuivre',
          title_en: 'Single Side Copper Clad plate',
          desc_fr: '',
          desc_en: '',
          price: 6.5,
          type: 'pcb'
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
        },
        liquid_pump_12v_4l: {
          url: 'liquid_pump_12v_4l',
          image: require('~/assets/images/products/liquid_pump_12v_4l.jpg'),
          title_fr: "Pompe à eau",
          title_en: 'Water Pump (4L/Min)',
          desc_fr: '',
          desc_en: '',
          price: 40,
          type: 'pump'
        },
        mini_gprs_gms_sim800l: {
          url: 'mini_gprs_gms_sim800l',
          image: require('~/assets/images/products/mini_gprs_gms_sim800l.jpg'),
          title_fr: "GPRS GSM SIM800L",
          title_en: 'GPRS GSM SIM800L',
          desc_fr: '',
          desc_en: '',
          price: 43,
          type: 'gsm'
        },
        servo_motor_sg90: {
          url: 'servo_motor_sg90',
          image: require('~/assets/images/products/servo_motor_sg90.jpg'),
          title_fr: "Mini Tower Pro Servo Motor SG90",
          title_en: 'Mini Tower Pro Servo Motor SG90',
          desc_fr: '',
          desc_en: '',
          price: 12,
          type: 'servo_motor'
        },
        servo_motor_mg995: {
          url: 'servo_motor_mg995',
          image: require('~/assets/images/products/servo_motor_mg995.jpg'),
          title_fr: "Tower Pro Servo Motor MG995",
          title_en: 'Tower Pro Servo Motor MG995',
          desc_fr: '',
          desc_en: '',
          price: 16,
          type: 'servo_motor'
        },
        motor_driver_L293D_control_shield: {
          url: 'motor_driver_L293D_control_shield',
          image: require('~/assets/images/products/motor_driver_L293D_control_shield.jpg'),
          title_fr: "L293D Carte d'extension de moteur L293D POUR blindage de moteur Arduino",
          title_en: 'L293D motor drive expansion board FOR Arduino motor shield',
          desc_fr: '',
          desc_en: '',
          price: 18,
          type: 'motor_controller'
        },
        motor_driver_L9110S_control_shield: {
          url: 'motor_driver_L9110S_control_shield',
          image: require('~/assets/images/products/motor_driver_L9110S_control_shield.jpg'),
          title_fr: "L9110S Contrôleur de pilote de moteur pas à pas à double courant continu de moteur pas à pas de pont en H",
          title_en: 'L9110S H-bridge Stepper Motor Dual DC Stepper Motor Driver Controller',
          desc_fr: '',
          desc_en: '',
          price: 7,
          type: 'motor_controller'
        },
        ir_remote_receiver: {
          url: 'ir_remote_receiver',
          image: require('~/assets/images/products/ir_remote_receiver.jpg'),
          title_fr: "Télécommande IR et récepteur",
          title_en: 'IR Remote & Receiver',
          desc_fr: '',
          desc_en: '',
          price: 11,
          type: 'infrared'
        },
        rfid_sensor_MFRC522: {
          url: 'rfid_sensor_MFRC522',
          image: require('~/assets/images/products/rfid_sensor_MFRC522.jpg'),
          title_fr: "Capteur RFID",
          title_en: 'RFID Sensor',
          desc_fr: '',
          desc_en: '',
          price: 27,
          type: 'sensor'
        },
        rfid_tag_RC522_13_56Mhz: {
          url: 'rfid_tag_RC522_13_56Mhz',
          image: require('~/assets/images/products/rfid_tag_RC522_13_56Mhz.jpg'),
          title_fr: "Tag RFID",
          title_en: 'RFID tag',
          desc_fr: '',
          desc_en: '',
          price: 4,
          type: 'tag'
        }
      }
    }
  }
}
</script>

<style>

</style>
