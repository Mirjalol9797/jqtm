<template>
  <div class="archive-page">
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
      <b-row class="mobile__view">
        <b-col class="pl-0 left__form" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <b-row>
            <div class="col-12">
              <h1 class="archive-page__title">{{$t('index.archive')}}</h1>
            </div>
          </b-row>
          <b-row class="archive-page__list">
            <b-col 
              md="6" 
              class="archive-page__item" 
              v-for="(archive, index) in getArchive" 
              :key="index.id"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <nuxt-link :to="'archive/'+archive.id" class="archive-page__img">
                <img 
                  :src="archive.image" 
                  alt=""
                >
              </nuxt-link>
              <nuxt-link :to="'archive/'+archive.id" v-if="$i18n.locale == 'uz'" class="archive-page__subtitle">{{archive.title}}</nuxt-link>
              <nuxt-link :to="'archive/'+archive.id" v-else class="archive-page__subtitle">{{archive.title_kl}}</nuxt-link>
              <div class="archive-page__body" v-if="$i18n.locale == 'uz'" v-html="archive.text"></div>
              <div class="archive-page__body" v-else  v-html="archive.text_kl"></div>
            </b-col>                                                                       
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Архив', url: '/archive', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Архив', url: '/archive', disabled: true},
      ],
    }
  },
  computed: {
    ... mapGetters({
      getArchive: 'getArchive'
    })
  },
  mounted() {
    this.$store.dispatch('getArchive');
  }
}
</script>