<template>
  <b-container>
    <b-row class="release">
      <div class="release__title">{{$t('trainingPage.trening')}}</div>
      <b-row class="release__list">
        <b-col 
          md="4" 
          cols="6" 
          class="release__item"
          v-for="release in getRelease"
          :key="release.id"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div class="release__img">
            <img :src="release.image" alt="">
          </div> 
          <!-- <div class="release__address" v-if="$i18n.locale == 'uz'">{{release.address}}</div>
          <div class="release__address" v-else>{{release.address_kl}}</div> -->
          <div class="release__info">
            <nuxt-link :to="'release/'+release.id" class="release__subtitle" v-if="$i18n.locale == 'uz'" v-html="release.title_of_trening"></nuxt-link>
            <nuxt-link :to="'release/'+release.id" class="release__subtitle" v-else v-html="release.title_of_trening_kl"></nuxt-link>
            <div class="release__data">{{release.time.replace('T', ' / ').replace('Z', ' ').slice(0, 10)}}</div>
          </div>
        </b-col>      
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('getReleases') // action function name
  },
  computed: {
    ... mapGetters({
      getRelease: 'getRelease' // getter function name
    })
  }
}
</script>
