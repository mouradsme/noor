<template>
  <div class="root">
    <div class="parallax-bottom">
     </div>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col cols="12" lg="1" class="pa-6" v-if="isDesktop" />
        <v-col cols="12" lg="5" md="6" class="pa-6">
          <h4 class="title-primary mt-10">
            {{ $t('clinic.contact_info.title') }}
          </h4>
          <div class="block">
            <u-animate-container>
              <div v-for="(item, index) in clinicData" :key="index">
                <u-animate
                  :offset="-50"
                  :delay="(index * 0.3) + 's'"
                  name="fadeInLeftShort"
                  duration="0.3s"
                >
                  <AddressCard
                    :name="item.name"
                    :phone="item.phone"
                    :email="item.email"
                    :address="item.address"
                    social="https://www.facebook.com/CLINIQUENOOR14"
                  />
                </u-animate>
              </div>
            </u-animate-container>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-6">
          <v-card class="map">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.5250419802906!2d1.3396967145575234!3d35.36743175472632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1286d03bf7174d7f%3A0xf90e1ff206ed39a1!2sClinique%20Nour!5e0!3m2!1sen!2sdz!4v1649720575349!5m2!1sen!2sdz" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './clinics-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import ParallaxOval from '../Parallax/Oval'
import AddressCard from '../Cards/Address'

export default {
  components: {
    ParallaxOval,
    AddressCard
  },
  data() {
    let clinicData = this.$i18n.t('clinic.data')

    return {
      clinicData: [clinicData],
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
