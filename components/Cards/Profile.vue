<template>
  <v-card class="profile">
    <div class="person-block">
      <v-avatar class="photo" width="80" height="80">
        <img :src="avatar" :alt="name">
      </v-avatar>
      <div class="name-card">
        <h4>{{ name }}</h4>
        <p>{{ title }}</p>
        <p>{{ message }}</p>
       </div>
    </div>
    <hr class="divider" />
    <div class="action">
      <div class="property">
        <span>
          <i class="ion-thumbsup"></i> {{ tel }}</span>
          <span><i class="ion-briefcase"></i>&nbsp; {{ exp }} ans</span>
      </div>
      <v-btn
        color="secondary"
        class="button"
        @click="document.location.href='tel:'+tel">
         {{ $t('medicalLanding.call') }}
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tel: {
      type: String,
      required: false
    },
    exp: {
      type: Number,
      required: false
    },
    message: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    }
  }
}
</script>
