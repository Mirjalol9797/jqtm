<template>
  <div class="guides-page">
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
              <h1 class="guides-page__title">{{$t('guidesPage.title')}}</h1>
            </div>
          </b-row>
          <b-row class="guides-page__list">
            <b-col 
              md="4" 
              cols="6" 
              class="guides-page__item"
              v-for="guide in guides"
              :key="guide.id"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div class="guides-page__img">
                <img :src="guide.picture" alt="">
              </div>
              <div class="guides-page__subtitle" v-if="$i18n.locale == 'uz'">{{guide.title}}</div>
              <div class="guides-page__subtitle" v-else>{{guide.title_kl}}</div>
              <a :href="guide.pdf" target="_blank" download="true" class="guides-page__download">{{$t('guidesPage.dowland')}}</a>
            </b-col>           
          </b-row>          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guides: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Қулланмалар', url: '/guides', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Справочники', url: '/guides', disabled: true},
      ],
    }
  },
  methods: {
    async getGuides() {
      await this.$axios.get('qollanmalar/')
        .then((res) => {
          this.guides = res.data;
          // console.log('getGuides', res)
        })
        .catch(() => {})
    }
  },
  mounted() {
    this.getGuides()
  }
}
</script>