<template>
  <fragment>
    <div class="root">
      <div class="deco"></div>
      <v-container :class="{ 'fixed-width': mdUp }">
        <u-animate-container>
          <v-row class="spacing6" justify="center">
            <v-col cols="12" sm="9" md="2" class="pa-0">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                    {{ $t('medicalLanding.ask_doctors') }}
                  </h4>
                  <v-list class="nav">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, index) in categories"          
                        :key="index"
                        class="filter"
                        :data-filter="item"
                      >
                        <v-list-item-title >
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
              </u-animate>
            </v-col>
            <v-col cols="12" lg="8" md="10" class="pa-6 py-0">
              <div class="massonry">
                <v-row>
                  <v-col
                    v-for="(item, index) in doctorsData"
                    :key="index"
                    cols="12"
                    sm="6"
                    class="px-lg-8 px-3 py-3 filterable"
                    :category="item.category"
                  >
                    <u-animate
                      :delay="(0.2 * index) + 's'"
                      duration="0.4s"
                      name="fadeInUpShort"
                    >
                      <div>
                        <profile-card
                          :avatar="item.avatar"
                          :name="item.name"
                          :title="item.title"
                          :tel="item.tel"
                          :exp="item.exp"
                          :message="item.message"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import "./ask-doctors-style.scss";
@import "../Title/title-style.scss";
</style>

<script>
/* eslint-disable prettier/prettier */
import ProfileCard from "../Cards/Profile";
import $ from 'jquery'
export default {
  components: {
    ProfileCard
  },
  methods: { 
   
  },
  data() {
    let doctorsCategories = this.$i18n.t('doctorsCategories')
    let doctorsData = this.$i18n.t('doctorsData')
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      categories: doctorsCategories,
      doctorsData: doctorsData 
      
    };
  },
  mounted() {
    this.loaded = true;
    let All = this.$i18n.t('doctorsCategories')[0]
    $(function() {
      $(".filter").on('click', function(e) {
        e.preventDefault()
        let s = $(this).data('filter')
      if (s !== All) {
        $('.filterable').hide().filter('[category="' + s + '"]').show();
      }
      else {
        $('.filterable').show();
      }

    
      })
    })
  },
  computed: {
    mdUp() {
      return (
        this.$mq === "mdDown" || this.$mq === "lgDown" || this.$mq === "xl"
      );
    }
  }
};
</script>
