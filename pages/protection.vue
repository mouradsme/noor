<template>
  <div class="main-wrap">
    <decoration />
    <Convention pid="protection" />

    <v-container class="max-md" style="max-width: 600px">
        <div class="docs" id="docs1">
            <div v-for="doc in docs1">{{doc}}</div>
        </div>


  </v-container>    
  </div>

</template>

<style scoped lang="scss">
.docs > div {
   .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
  }
.main-wrap {
  position: relative;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
</style>

<script>
import Convention from '~/components/Forms/Convention'
import Decoration from '~/components/Forms/Decoration'
import brand from '~/static/text/brand'

export default {
  components: {
    Convention,
    Decoration
  },
  data() {
    return {
      docs1: this.$i18n.t('conv.protection.docs')
    }
  },
  head() {
    return {
      title: brand.medical.name + ' - Protection Civile'
    }
  }
}
</script>
