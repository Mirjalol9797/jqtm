<template>
  <main class="main__page">
    <h1 style="display:none">{{$t('site.name')}}</h1>
    <div class="main__slider">  
      <hooper 
        :settings="hooperSettings"
        class="hooper__slider"
      >
        <slide class="slider__item" v-for="slide in slides" :key="slide.id">
          <div class="slider__img">
            <img 
              :src="slide.image" 

              
              alt="img"
            >
          </div>
          <div class="slider__content">
            <b-container>
              <div class="slider__title" v-if="$i18n.locale == 'uz'">{{slide.title}}</div>
              <div class="slider__title" v-else>{{slide.title_kl}}</div>
              <div class="slider__text" v-if="$i18n.locale == 'uz'" v-html="slide.text"></div>
              <div class="slider__text" v-else v-html="slide.text_kl"></div>
              <!-- <div class="site__button">Купрок</div> -->
            </b-container>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>  
    <Posts />
    <News />
    <Trainer />
    <div class="main-project">
      <b-container fluid>
        <b-container>
          <b-row>
            <b-col cols="12">
              <h2 class="main__title" data-aos="fade-up" data-aos-duration="800">{{$t('index.projects')}}</h2>
            </b-col>
          </b-row>
          <b-row class="main-project__list">
            <b-col 
              lg="3" 
              md="6" 
              cols="12" 
              class="main-project__item mb-3"
              v-for="project in getProject"
              :key="project.id"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <nuxt-link :to="localePath('/projects/'+project.id)" class="main-project__img">
                <img :src="project.image" alt="">
                <div class="main-project__info"> 
                  <div class="main-project__title" v-if="$i18n.locale == 'uz'">{{project.title}}</div>
                  <div class="main-project__title" v-else>{{project.title_kl}}</div>
                  <div class="main-project__text" v-if="$i18n.locale == 'uz'" v-html="project.content"></div>
                  <div class="main-project__text" v-else v-html="project.content_kl"></div>
                </div>
              </nuxt-link>
            </b-col>            
          </b-row>
          <b-row>
            <b-col cols="12">
              <nuxt-link :to="localePath('/projects')" class="site__button">{{$t('btn_more.title')}}</nuxt-link>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
    <div class="main-compitition">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="main__title" data-aos="fade-up" data-aos-duration="800">{{$t('index.compitition')}}</h2>
          </b-col>
        </b-row>
        <b-row class="main-compitition__list">
          <b-col 
            lg="4" 
            md="6"
            cols="12" 
            class="main-compitition__item"
            v-for="compitition in getCompitition"
            :key="compitition.id"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <nuxt-link :to="localePath('/compitition/'+compitition.id)" class="main-compitition__img">
              <img :src="compitition.image" alt="">
            </nuxt-link>
            <div class="main-compitition__info">
              <nuxt-link 
                :to="localePath('/compitition/'+compitition.id)" 
                class="main-compitition__title"
                v-if="$i18n.locale == 'uz'"
              >
                {{compitition.title}}
              </nuxt-link>
              <nuxt-link 
                :to="localePath('/compitition/'+compitition.id)" 
                class="main-compitition__title"
                v-else
              >
                {{compitition.title_kl}}
              </nuxt-link>
              <div class="main-compitition__date">{{compitition.date.replace('T', ' / ').replace('Z', ' ').slice(0, 10)}}</div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <nuxt-link :to="localePath('/compitition')" class="site__button">{{$t('btn_more.title')}}</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-gallery">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="main__title" data-aos="fade-up" data-aos-duration="500">{{$t('index.gallery')}}</h2>
          </b-col>
        </b-row>
        <b-row class="main-gallery__wrap">
          <b-col lg="5" class="main-gallery__movie">
            <div 
              class="movie__list" 
              v-for="video in videos.slice(0, 1)" 
              :key="video.id"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <!-- <video width="auto" height="350" controls="controls" :poster="video.image">
                <source :src="video.video" type='video/ogg; codecs="theora, vorbis"'>
                <source :src="video.video" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                <source :src="video.video" type='video/webm; codecs="vp8, vorbis"'>
              </video> -->
              <iframe 
                width="475" 
                height="380" 
                :src="video.video" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
          </b-col>
          <b-col lg="6" offset-lg="1" class="main-gallery__slider">
            <hooper :settings="mainSlider">
              <slide class="main-gallery__item" v-for="gallery in maingallery" :key="gallery.id"> 
                <div class="main-gallery__img">
                  <img :src="gallery.image"  alt="image">
                </div>
                <div class="main-gallery__title" v-if="$i18n.locale == 'uz'">{{gallery.title}}</div>
                <div class="main-gallery__title" v-else>{{gallery.title_kl}}</div>
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
            <nuxt-link :to="localePath('/gallery')" class="site__button">{{$t('btn_more.title')}}</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-arxiv">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="main__title" data-aos="fade-up" data-aos-duration="800">{{$t('index.archive')}}</h2>
          </b-col>
        </b-row>
        <b-row class="main-arxiv__list">
          <b-col 
            lg="4" 
            class="main-arxiv__item" 
            v-for="archive in getArchive" 
            :key="archive.id"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <nuxt-link :to="localePath('/archive/'+archive.id)" class="main-arxiv__img">
              <img :src="archive.image" alt="image">
            </nuxt-link>
            <div class="main-arxiv__info">
              <nuxt-link :to="localePath('/archive/'+archive.id)" class="main-arxiv__title" v-if="$i18n.locale == 'uz'">{{archive.title}}</nuxt-link>
              <nuxt-link :to="localePath('/archive/'+archive.id)" class="main-arxiv__title" v-else>{{archive.title_kl}}</nuxt-link>
              <div class="main-arxiv__text" v-if="$i18n.locale == 'uz'" v-html="archive.text"></div>
              <div class="main-arxiv__text" v-else v-html="archive.text_kl"></div>
            </div>
          </b-col>              
        </b-row>
        <b-row>
            <b-col cols="12">
              <nuxt-link :to="localePath('/archive')" class="site__button">{{$t('btn_more.title')}}</nuxt-link>
            </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-about">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="main__title">{{$t('index.about')}}</h2>
          </b-col>
        </b-row>
        <b-row 
          class="main-about__wrap" 
          v-for="about in abouts" 
          :key="about.id"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <b-col lg="5">
            <div class="main-about__img">
              <img :src="about.image" alt="">
            </div>
          </b-col>
          <b-col lg="7" class="main-about__info">
            <div class="main-about__text" v-html="about.content" v-if="$i18n.locale == 'uz'"></div>
            <div class="main-about__text" v-html="about.content_kl" v-else></div>
            <nuxt-link :to="localePath('/about')" class="site__button" data-aos="fade-up" data-aos-duration="800">{{$t('btn_more.title')}}</nuxt-link>
          </b-col>
        </b-row>       
      </b-container>
    </div>
    <div class="main-map">
      <b-container>
        <b-row>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.5448434595792!2d69.24915735085372!3d41.322108039614236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b72efbb0c17%3A0xa52a74c6aab1b415!2zMzAg0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1606201414102!5m2!1sru!2s" 
            width="100%" 
            height="350" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
          ></iframe>
        </b-row>
      </b-container>

      
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

import {mapGetters} from 'vuex';

import Trainer from '../components/Trainers'
import Posts from '../components/Posts'
import News from '../components/News'

export default {
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false
      },
      mainSlider: {
        infiniteScroll: true,
        wheelControl: false,
        itemsToShow: 2
      },
      abouts: [],
      slides: [],
      maingallery: [],
      errored: false,
      videos: []      
    }
  },
  components: { 
    VueSlickCarousel,
    Hooper,
    Slide, 
    HooperNavigation,
    Trainer,
    Posts,
    News
  },
  methods: {
    async getAbout() {
      await this.$axios.get('haqimizda/us/')
        .then((res) => {
          this.abouts = res.data;
          // console.log('getAbout', res);
        })
        .catch((error) => {
          // console.log(error);
          this.errored = true
        })
    },
    async getSlider() {
      await this.$axios.get('menu/')
        .then((res) => {
          this.slides = res.data;
        })
        .catch((error) => {
          this.errored = true;
        })
    },
    async getMainGallery() {
      await this.$axios.get('galeriya/pictures/')
        .then((res) => {
          this.maingallery = res.data
        })
        .catch(() => {})
    },
    async getVideo() {
      await this.$axios.get('galeriya/videos/')
        .then((res) => {
          this.videos = res.data
        })
        .catch((error) => {})
    }    
  },
  mounted() {
    this.getAbout(),
    this.getSlider(),
    this.getMainGallery(),
    this.getVideo(),
    this.$store.dispatch('getArchive'),
    this.$store.dispatch('getCompitition'),
    this.$store.dispatch('getProject')
  },
  computed: {
    ... mapGetters({
      getArchive: 'getArchive',
      getCompitition: 'getCompitition',
      getProject: 'getProject'
    })
  }
}
</script>