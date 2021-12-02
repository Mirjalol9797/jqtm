<template>
  <div class="trainers-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Arxiv</span>
            </div> -->
            <Breadcrumb v-if="$i18n.locale == 'uz'" :crumbs="crumbs" />
            <Breadcrumb v-else :crumbsRu="crumbsRu" />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row class="webinars">
        <h1 class="webinars__title">{{$t('trainingPage.vebinar')}}</h1>
        <b-row class="webinars__list">
          <b-col 
            md="6" 
            class="webinars__item"
            v-for="webinar in webinars"
            :key="webinar.id"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div class="webinars__img">
              <img :src="webinar.image" alt="">
            </div>
            <div class="webinars__info">
              <div class="webinars__subtitle" v-if="$i18n.locale == 'uz'">{{webinar.title}}</div>
              <div class="webinars__subtitle" v-else>{{webinar.title_kl}}</div>
              <nuxt-link to="" class="webinars__link" v-if="webinar.vebinar_type == 'online'">{{webinar.url}}</nuxt-link>
              <div class="webinars__address" v-if="webinar.vebinar_type == 'offline'">{{webinar.address}}</div>
            </div>
          </b-col>
        </b-row>
      </b-row>
      <!-- <Trening /> -->
      <Release/>
    </b-container>
  </div>
</template>

<script>
import Trening from '~/components/Trening.vue';
export default {
  components: { Trening },
  data() {
    return {
      webinars: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Тренинглар', url: '/training', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Тренинги', url: '/training', disabled: true},
      ],
    }
  },
  methods: {
    async getWebinar() {
      await this.$axios.get('treninglar/treneringlar/')
        .then((res) => {
          this.webinars = res.data;
        })
        .catch(() => {})
    }
  },
  mounted() {
    this.getWebinar()
  }
}
</script>