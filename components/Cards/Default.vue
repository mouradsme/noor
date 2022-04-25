<template>
  <v-card class="default-card">
    <div class="video" v-if="isVid">
       <video  width="auto" height="100%" muted autoplay loop playsinline  >
         <source type="video/ogg" :src="img" />
       </video>

    </div>
    <figure v-else>
      <img
        :src="img"
        alt="img"
      >
    </figure>
    <div class="text">
      <h6 class="title">{{ title }}</h6>
      <p v-html="desc">>{{ desc }}</p>

      <v-btn
        color="secondary"
        class="button"
        @click="showModal(desc, title)">
         {{ $t('medicalLanding.more') }}
      </v-btn>
    </div>
    
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
import $ from 'jquery'
export default {
  methods: {

    showModal: (s, t) => {
      $('#modal > .modal-content > .modal-header > .modal-title').html(t)
      $('#modal > .modal-content > .modal-body').html(s)
      $('#modal').fadeIn(150)   
    }
  },
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    isVid: {
      type: Boolean,
      required: false
    },
    button: {
      type: String,
      required: false
    }
  }
}
</script>
