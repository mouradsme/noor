<template>
  <v-card class="default-card" style="height: 320px !important;">
    <figure>
      <img
        :src="imgApi.conventions[cid]"
        alt="img"
      >
    </figure>
    <div class="text">
      <h6 class="title">{{ title }}</h6>
      <router-link class="button button-conv" :to="cid">{{ $t('medicalLanding.more') }}</router-link>

    </div>
    
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
import imgApi from "~/static/images/imgAPI";
export default {
  data() {
    return {
      imgApi
    }
  },
  methods: {

  },
  props: {
    cid: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
 
    button: {
      type: String,
      required: false
    }
  }
}
</script>
