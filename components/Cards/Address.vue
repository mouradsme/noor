<template>
  <div class="address-card">
    <div class="paper">
      <h6 class="title">
        {{ name }}
      </h6>
      <v-row>
        <v-col cols="12" md="6">
          <v-icon class="icon">mdi-phone</v-icon>
          {{ phone }}
        </v-col>
        <v-col cols="12" md="6">
          <v-icon class="icon">mdi-email</v-icon>
          {{ email }}
        </v-col>
        <v-col cols="12" md="12">
          <v-icon class="icon">mdi-map-marker</v-icon>
          {{ address }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
  }
}
</script>
