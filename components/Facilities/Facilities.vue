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
            v-for="(item, index) in facilityList"
            :key="index"
            class="item"
          >
            <card
              :title="item.title"
              :desc="item.desc"
              :img="item.img"
              :isVid="item.isVid"
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
            :text="$t('medicalLanding.services_title')"
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
    <div id="modal">
<div class="modal-content">
  <div class="modal-header">
    <span class="close">&times;</span>
    <h2 class="modal-title"></h2>
  </div>
  <div class="modal-body">
  </div>
  <div class="modal-footer">
  </div>
</div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./facilities-style.scss";
#modal {
  
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 40px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

<script>
import imgApi from "~/static/images/imgAPI";
import Card from "../Cards/Default";
import TitleIcon from "../Title/WithIcon";
import $ from 'jquery'
export default {
  components: {
    Card,
    TitleIcon,
    Slick: () => import("vue-slick")
  },
  data() { 
        
    let imgs = {
      irm: {
        "isVid": true,
        "src": imgApi.services.irm
      },
      lab: {
        "isVid": true,
        "src": imgApi.services.lab 
      }, 
      mamo: {
        "isVid": true,
        "src": imgApi.services.mamo 
      }, 
      radio: {
        "isVid": true,
        "src": imgApi.services.radio 
      }, 
      scanner: {
        "isVid": true,
        "src": imgApi.services.scanner 
      }, 
      pre: {
        "isVid": true,
        "src": imgApi.services.pre
      },
      teeth: {
        "isVid": true,
        "src": imgApi.services.teeth
      },
      echo: {
        "isVid": true,
        "src": imgApi.services.echo
      },
      cyto: {
        "isVid": true,
        "src": imgApi.services.cyto
      },
      ex: {
        "isVid": true,
        "src": imgApi.services.ex
      },
       
    }
    let facilityList = []
    let services = this.$i18n.t('services')
    for (let i = services.length - 1; i >= 0; i--)
      facilityList.push({"isVid":  imgs[services[i].id].isVid, "title": services[i].title, "desc": services[i].desc, "img": imgs[services[i].id].src })
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
      facilityList: facilityList
    };
  },
  
  mounted() {
    $(document).on('click', '.close', function() {
      $('#modal').fadeOut(100);
    }) 
    $(document).on('keyup', function(e) {
      if (e.key == "Escape")  $('#modal').fadeOut(100);
    });
    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(
      this.facilityList.length + props - this.slickOptions.slidesToShow
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
