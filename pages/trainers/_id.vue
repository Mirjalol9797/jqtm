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
              <h1 class="archive-page__title" v-if="$i18n.locale == 'uz'">{{trainersItem.name}}</h1>
              <h1 class="archive-page__title" v-else>{{trainersItem.name_kl}}</h1>
            </div>
          </b-row>
          <b-row>
            <b-col cols="12" class="page-item__content">
              <div class="page-item__img">
                <!-- <img :src="trainersItem.image" alt=""> -->
              </div>
              <div class="page-item__text" v-if="$i18n.locale == 'uz'" v-html="trainersItem.about_work"></div>
              <div class="page-item__text" v-else v-html="trainersItem.about_work_kl"></div>
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
      trainersItem: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Биз ҳақимизда', url: '/uz/about', disabled: false},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'О нас', url: '/ru/about', disabled: false},
      ],
    }
  },
  methods: {
    async getTrainersItem() {
      await this.$axios.get(`trenerlar/trenerlar/${this.$route.params.id}/`)
        .then((res) => {
          this.trainersItem = res.data;
          console.log('trainersItem', res)
        })
        .catch((error) => {
          console.log('trainersItem', error)
        })
    }
  },
  created() {
    this.getTrainersItem()
    .then(() => {
      this.crumbs.push(
        { id: 3, title: this.trainersItem.name, url: '/about', disabled: true},
      );
      this.crumbsRu.push(
        { id: 3, title: this.trainersItem.name_kl, url: '/about', disabled: true},
      );
    })
  }
}
</script>