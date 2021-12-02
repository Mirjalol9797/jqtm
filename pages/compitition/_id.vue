<template>
  <div class="compitition-page page-item">
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
              <h1 class="archive-page__title" v-if="$i18n.locale == 'uz'">{{compititionItem.title}}</h1>
              <h1 class="archive-page__title" v-else>{{compititionItem.title_kl}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <!-- <img :src="compititionItem.image" alt=""> -->
              </div>
              <div class="page-item__text" v-html="compititionItem.text">
              </div>
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
      compititionItem: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Танловлар', url: '/uz/compitition', disabled: false},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Конкурсы', url: '/ru/compitition', disabled: false},
      ],
    }
  },
  methods: {
    async getCompititionItem() {
      await this.$axios.get(`tanlovlar/${this.$route.params.id}/`)
        .then((res) => {
          this.compititionItem = res.data;
          console.log('compititionItem', res)
        })
        .catch((error) => {
          console.log('compititionItem', error)
        })
    }
  },
  created() {
    this.getCompititionItem()
    .then(() => {
      this.crumbs.push(
        { id: 3, title: this.compititionItem.title, url: '/compitition', disabled: true},
      );
      this.crumbsRu.push(
        { id: 3, title: this.compititionItem.title_kl, url: '/compitition', disabled: true},
      );
    })
  }
}
</script>