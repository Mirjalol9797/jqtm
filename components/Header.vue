<template>
  <header class="header">
    <b-container fluid>
      <b-row class="header__top">
        <b-container>
          <div class="col-6 p-0">
            <b-form class="header__form" @submit.prevent="searchInput">
              <b-form-group>
                <b-form-input
                  type="text"
                  :placeholder="$t('header.search')"
                  v-model="search"
                >
                </b-form-input>
                <b-button type="submit"></b-button>
              </b-form-group>
            </b-form>
          </div>
          <div class="col-6 p-0">
            <ul class="header__lang">
              <li>
                <nuxt-link exact active-class="active" @click="selectLang('UZ')" :to="switchLocalePath('uz')">UZ</nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="active" @click="selectLang('РУ')" :to="switchLocalePath('ru')">RU</nuxt-link>
              </li>
            </ul>
          </div>
        </b-container>
      </b-row>
      <b-row class="header__bottom">
        <b-container>
          <b-row>
            <b-col cols="3" class="header__logo">
              <nuxt-link to="/">
                <img src="../assets/images/jurnalist-logo.png" alt="logo">
              </nuxt-link>
            </b-col>
            <b-col cols="9">
              <ul class="header__nav">
                <li>
                  <nuxt-link exact active-class="active" :to="localePath('/')">{{$t('header.main')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/projects')">{{$t('header.projects')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/compitition')">{{$t('header.compitition')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/guides')">{{$t('header.guides')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/gallery')">{{$t('header.gallery')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/training')">{{$t('header.training')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/archive')">{{$t('header.archive')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/contact')">{{$t('header.contact')}}</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="active" :to="localePath('/about')">{{$t('header.about')}}</nuxt-link>
                </li>
              </ul>
              <div class="mobile-menu">
                <MobileMenu />
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import { create } from 'domain'
import MobileMenu from './MobileMenu'
export default {
  data() {
    return {
      search: '',
      isActive: 'UZ',
    }
  },
  components: {
    MobileMenu
  },
  methods: {
    searchInput(){
      this.$router.push(this.localePath('search'));
      this.$store.dispatch('getInput', this.search);
    },
    selectLang(text) {
      if (text === 'UZ') {
        this.isActive = text;
      } else {
        this.isActive = 'РУ';
      }
    }
  },
  mounted() {
    // this.getInput()
  }
}
</script>
