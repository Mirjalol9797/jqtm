<template>
  <div class="archive-page page-item">
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
              <h1 class="archive-page__title" v-if="$i18n.locale == 'uz'">{{archiveItem.title}}</h1>
              <h1 class="archive-page__title" v-else>{{archiveItem.title_kl}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <!-- <img :src="archiveItem.image" alt=""> -->
              </div>
              <div class="page-item__text" v-if="$i18n.locale == 'uz'" v-html="archiveItem.text"></div>
              <div class="page-item__text" v-esle v-html="archiveItem.text_kl"></div>
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
      archiveItem: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Архив', url: '/uz/archive', disabled: false},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Архив', url: '/ru/archive', disabled: false},
      ],
    }
  },
  methods: {
    async getArchiveItem() {
      await this.$axios.get(`arxiv/${this.$route.params.id}/`)
        .then((res) => {
          this.archiveItem = res.data;
          // console.log('archiveItem', res)
        })
        .catch((error) => {})
    }
  },
  created() {
    this.getArchiveItem()
    .then(() => {
      this.crumbs.push(
        { id: 3, title: this.archiveItem.title, url: '/archice', disabled: true},
      );
      this.crumbsRu.push(
        { id: 3, title: this.archiveItem.title_kl, url: '/archice', disabled: true},
      );
    })
  }
}
</script>