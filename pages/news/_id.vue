<template>
  <div class="compitition-page page-item">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
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
              <h1 class="archive-page__title" v-if="$i18n.locale == 'uz'">{{newsItem.title}}</h1>
              <h1 class="archive-page__title" v-else>{{newsItem.title_kl}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <!-- <img :src="postsItem.image" alt=""> -->
              </div>
              <div class="page-item__text" v-html="newsItem.taxt" v-if="$i18n.locale == 'uz'"></div>
              <div class="page-item__text" v-html="newsItem.text_kl" v-else></div>
            </b-col>            
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      newsItem: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
      ],
    }
  },
  methods: {
    async getNewsItem() {
      await this.$axios.get(`yangiliklar/${this.$route.params.id}/`)
        .then((res) => {
          this.newsItem = res.data;
          // console.log('postsItem', res)
        })
        .catch(() => {})
    }
  },
  created() {
    this.getNewsItem()
    .then(() => {
      this.crumbs.push(
        { id: 2, title: this.newsItem.title, url: '/news', disabled: true},
      );
      this.crumbsRu.push(
        { id: 2, title: this.newsItem.title_kl, url: '/news', disabled: true},
      );
    })
  }
}
</script>