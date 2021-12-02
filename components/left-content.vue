<template>
  <div class="left__content">
    <div class="left__top">
      <!-- <Posts />  -->
      <div class="left__item" v-for="post in posts.slice(0, 8)" :key="post.id">
        <div class="left__date">{{post.date.replace('T', ' / ').replace('Z', ' ').slice(0, 10)}}</div>
        <nuxt-link :to="localePath('/posts/'+post.id)" class="left__content" v-if="$i18n.locale == 'uz'" v-html="post.title"></nuxt-link>
        <nuxt-link :to="localePath('/posts/'+post.id)" class="left__content" v-else v-html="post.title_kl"></nuxt-link>
      </div>
    </div>
    <div class="left__bottom">
      <img src="../assets/images/Rectangle12.png" alt="">
      <b-form @submit.prevent="onSubmit">
        <b-form-group>
          <b-form-input 
            type="text" 
            required 
            :placeholder="$t('leftForm.name')"
            v-model="form.name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input 
            type="number" 
            required 
            placeholder="+998 99 999 99 99"
            v-model="form.phone"
            min="9"
          >
          </b-form-input>
        </b-form-group>
        <b-form-textarea 
          required
          :placeholder="$t('leftForm.comment')" 
          rows="8"
          v-model="form.comment"
        >
        </b-form-textarea>
        <b-button type="submit" variant="primary">{{$t('leftForm.btn')}}</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "left-content",
  data() {
    return {
      form: {
        name: '',
        phone: '',
        comment: ''
      },
      posts: ''
    }
  },
  methods: {
    // async onSubmit() {
    //   await this.$axios.post('contact/', this.form)
    //     .then((res) => {
    //       console.log('onSubmit', res)
    //     })
    //     .catch((error) => {
    //       console.log('onSubmit', error)
    //     })
    // },
    async onSubmit() {
      await this.$axios.post('contact/', this.form)
        .then(async () => {
          console.log('numebr', this.form);
          this.form = {
            name: '',
            phone: '',
            comment: ''
          }
          try {
            this.$toast.success({
              title: `${this.$t('toast.title')}`,
              message: `${this.$t('toast.content')}`,
              
            })
          } catch (err) {
            console.log(err)
            this.$toast.error({
              title: `${this.$t('toast.ertitle')}`,
              message: `${this.$t('toast.ercontent')}`,
            })
          }
        })
    },    

    async getPosts() {
      await this.$axios.get('elonlar/')
        .then((res) => {
          this.posts = res.data;
          // console.log('getPosts', res)
        })
        .catch((res) => {
          // console.log('getPosts', res)
        })
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>
