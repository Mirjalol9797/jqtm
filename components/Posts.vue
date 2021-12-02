<template>
    <div class="main-posts">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="main__title" data-aos="fade-up" data-aos-duration="800">{{$t('index.advert')}}</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col 
            lg="6" 
            class="main-posts__item"
            v-for="(post, index) in getPosts"
            :key="index.id"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div class="main-posts__img">
              <img :src="post.image" alt="post">
            </div>
            <div class="main-posts__info">
              <div class="main-posts__date">{{post.date.replace('T', ' / ').replace('Z', ' ').slice(0, 10)}}</div>
              <nuxt-link :to="localePath('/posts/'+post.id)" class="main-posts__title" v-if="$i18n.locale == 'uz'">{{post.title}}</nuxt-link>
              <nuxt-link :to="localePath('/posts/'+post.id)" class="main-posts__title" v-else>{{post.title_kl}}</nuxt-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ... mapGetters({
      getPosts: 'getPosts'
    })
  },
  mounted() {
    this.$store.dispatch('getPosts');
  }
}
</script>