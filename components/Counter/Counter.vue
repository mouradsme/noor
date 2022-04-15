<template>
  <div class="counter-wrap">
    <v-container class="fixed-width">
      <v-row
        justify="center"
        align="center"
      >
        <v-col md="4">
          <div class="counter-item deco">
            <div class="text">
              <h3>
                100%
              </h3>
              <p>
                {{ $t('medicalLanding.quality') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4">
          <div class="counter-item deco">
            <div class="text">
              <h3>
                100%
              </h3>
              <p>
                {{ $t('medicalLanding.expertise') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4">
          <div class="counter-item">
            <div class="text">
              <h2>
                24
              </h2>
              <p>
                {{ $t('medicalLanding.about_hours') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>
