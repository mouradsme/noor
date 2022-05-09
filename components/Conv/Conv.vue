<template>
  <div class="root">
    <div class="carousel-handle">
      <div v-if="loaded" class="carousel-wrap">
        <slick
          ref="slick"
          :options="slickOptions"
        >
          <div class="item">
            <div class="carousel-prop">
              <div />
            </div>
          </div>
          <div
            v-for="(item, index) in Conventions"
            :key="index"
            class="item"
          >
            <card
              :title="item.title"
              :cid="item.id"
              :button="$t('medicalLanding.services_button')"
            />
          </div>
          <div class="item">
            <div class="carousel-prop">
              <div />
            </div>
          </div>
        </slick>
      </div>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('conv.common.title')"
            icon="library_add"
            extended
          />
          <nav class="arrow">
            <v-btn
              fab
              small
              aria-label="next"
              class="margin"
              @click="next()"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              aria-label="prev"
              class="margin"
              @click="prev()"
            >
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </nav>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./conv-style.scss";

</style>

<script>
import Card from "../Cards/Convention";
import TitleIcon from "../Title/WithIcon";
export default {
  components: {
    Card,
    TitleIcon,
    Slick: () => import("vue-slick")
  },
  data() { 

    let Conventions = []
    let convs = this.$i18n.t('conv')
    for (const conv in convs)
      if (conv !== 'common')
      Conventions.push(convs[conv])
    return {
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      },
      Conventions: Conventions
    };
  },
  
  mounted() {
    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(
      this.Conventions.length + props - this.slickOptions.slidesToShow
    );
    setTimeout(() => {
      if (window.innerWidth > 1200 && !this.$vuetify.rtl) {
        this.$refs.slick.goTo(lastSlide);
      }
    }, 100);
  },
  methods: {
    next: function() {
      this.$refs.slick.next();
    },
    prev: function() {
      this.$refs.slick.prev();
    }
  }
};
</script>
