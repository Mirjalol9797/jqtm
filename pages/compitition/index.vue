<template>
  <div class="compitition-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Tanlovlar</span>
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
              <h1 class="compitition-page__title">{{$t('compititionPage.title')}}</h1>
            </div>
          </b-row>
          <b-row class="compitition-page__list">
            <b-col 
              md="4" 
              cols="6" 
              class="compitition-page__item"
              v-for="(compitition, index) in getCompitition"
              :key="index.id" 
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <nuxt-link :to="'compitition/' + compitition.id" class="compitition-page__img">
                <img :src="compitition.image" alt="image">
              </nuxt-link>
              <div class="compitition-page__info">
                <nuxt-link :to="'compitition/' + compitition.id" class="compitition-page__subtitle" v-if="$i18n.locale == 'uz'">{{compitition.title}}</nuxt-link>
                <nuxt-link :to="'compitition/' + compitition.id" class="compitition-page__subtitle" v-else>{{compitition.title_kl}}</nuxt-link>
                <div class="compitition-page__date">{{compitition.date.replace('T', ' / ').replace('Z', ' ').slice(0, 10)}}</div>
              </div>
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
        { id: 2, title: 'Танловлар', url: '/compitition', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Конкурсы', url: '/compitition', disabled: true},
      ],
    }
  },  
  computed: {
    ... mapGetters({
      getCompitition: 'getCompitition'
    })
  },
  mounted() {
    this.$store.dispatch('getCompitition');
  }
}
</script>