<template>
  <div class="form-wrap">
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="routeLink.medical.home">
          <img :src="logo" alt="logo">
        </nuxt-link>
      </div>
    </hidden>
    <hidden point="smDown">
      <v-btn
        :href="routeLink.medical.home"
        icon
        class="backtohome"
      >
        <i class="ion-ios-home-outline" />
        <i class="ion-ios-arrow-round-back-outline" />
      </v-btn>
    </hidden>

    <v-container class="max-md">
      <h3 class="use-text-title pb-3 text-center">
        {{ $t('conv.' + this.$props.pid + '.title') }}
      </h3>
      <p class="desc use-text-subtitle2 text-center">
        {{ $t('conv.common.docs') }}
      </p>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import logo from '~/static/images/medical-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import Hidden from '../Hidden'

export default {
  props: ['pid'],
  components: {
    Hidden
  },
  data() {
    return {
      snackbar: false,
      logo: logo,
      brand: brand,
      routeLink: link,
    }
  },
  methods: {
  }
}
</script>
