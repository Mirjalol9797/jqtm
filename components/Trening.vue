<template>
  <div>
    <b-container>
      <b-row class="trening">
        <div class="trening__title">{{$t('trainingPage.trening')}}</div>
        <b-row>
          <b-col 
            md="6"
            lg="4" 
            class="trening__item" 
            v-for="(item, index) in trenings"
            :key="index.id"
            >
            <nuxt-link to="">
              <div class="trening__img">
                <img :src="item.img" alt="img">
              </div>
              <div class="trening__subtitle">{{item.title}}</div>
              <div class="trening__date">{{item.date.replace('T', ' / ').replace('Z', ' ')}}</div>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      trenings: []
    }
  },
  methods: {
    async getTrening() {
      await this.$axios.get(``)
        .then((res) => {
          this.trenings = res.data
        })
    }
  },
  mounted() {
    this.getTrening()
  }
}
</script>