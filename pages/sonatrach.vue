<template>
  <div class="main-wrap">
    <decoration />
    <Convention pid="sonatrach" />

    <v-container class="max-md" style="max-width: 600px">
      <div>
        <h1>{{ $t("conv.sonatrach.active.title") }}</h1>
        <div class="docs" id="docs1">
            <div v-for="doc in docs1">{{doc}}</div>
        </div>
      </div>
      <div>
        <h1>{{ $t("conv.sonatrach.retired.title") }}</h1>
        <div class="docs" id="docs2">
            <div v-for="doc in docs2">{{doc}}</div>
        </div>
      </div>
      <div>
        <h1>{{ $t("conv.sonatrach.widows.title") }}</h1>
        <div class="docs" id="docs3">
            <div v-for="doc in docs3">{{doc}}</div>
        </div>
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
      docs1: this.$i18n.t('conv.sonatrach.active.docs'),
      docs2: this.$i18n.t('conv.sonatrach.retired.docs'),
      docs3: this.$i18n.t('conv.sonatrach.widows.docs'),
    }
  },
  head() {
    return {
      title: brand.medical.name + ' - Sonatrach'
    }
  }
}
</script>
