<template>
  <div class="gallery">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Trenerlar</span>
            </div> -->
            <Breadcrumb v-if="$i18n.locale == 'uz'" :crumbs="crumbs" />
            <Breadcrumb v-else :crumbsRu="crumbsRu" />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row>
        <b-col lg="12">
          <h2 class="gallery__title">{{$t('galleryPage.title')}}</h2>
        </b-col>
        <b-col lg="3">
          <div class="gallery__videos">
            <div 
              class="video" 
              v-for="video in videos" 
              :key="video.id"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <!-- <img src="../assets/images/9.png" alt=""> -->
              <!-- <video width="270" height="200" controls="controls" :poster="video.image">
                <source :src="video.video" type='video/ogg; codecs="theora, vorbis"'>
                <source :src="video.video" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                <source :src="video.video" type='video/webm; codecs="vp8, vorbis"'>
              </video> -->
              <iframe 
                width="255" 
                height="200" 
                :src="video.video" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
              <!-- https://www.youtube.com/watch?v=hrpsKfFGJ7I&list=RDhrpsKfFGJ7I&start_radio=1&ab_channel=StarPro
              https://youtu.be/hrpsKfFGJ7I
              src="https://www.youtube.com/embed/hrpsKfFGJ7I"  -->
              <p v-if="$i18n.locale == 'uz'">{{video.title}}</p>
              <p v-else>{{video.title_kl}}</p>
              <!-- <span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M2.97786 0.308689C1.71568 -0.415315 0.692383 0.177798 0.692383 1.63238V12.3666C0.692383 13.8226 1.71568 14.415 2.97786 13.6917L12.3601 8.31101C13.6227 7.58675 13.6227 6.41334 12.3601 5.68925L2.97786 0.308689Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="14" height="14" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </span> -->
              <!-- <div class="play">
                <p>{{video.title}}</p>
              </div> -->
            </div>
          </div>
        </b-col>
        <b-col lg="9">
          <div class="gallery__content">
            <b-row class="gallery__list">
              <b-col 
                lg="4" 
                md="4" 
                cols="6" 
                class="mb-4"
                v-for="gallery in gallerys"
                :key="gallery.id"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div class="gallery__image">
                  <img :src="gallery.image" alt="">
                  <!-- <div class="gallery__text">
                    <i>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.46387 3.59277H7.28027V4.53613H4.46387V7.44824H3.51367V4.53613H0.710938V3.59277H3.51367V0.666992H4.46387V3.59277Z" fill="white"/>
                      </svg>
                    </i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                  </div> -->
                </div>
                <h4 v-if="$i18n.locale == 'uz'">{{gallery.title}}</h4>
                <h4 v-else>{{gallery.title_kl}}</h4>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallerys: [],
      videos: [],
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Галерея', url: '/gallery', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Галерея', url: '/gallery', disabled: true},
      ],
    }
  },
  methods: {
    async getGallery() {
      await this.$axios.get('galeriya/pictures/')
        .then((res) => {
          this.gallerys = res.data;
          // console.log('getGallery', res)
        })
        .catch(() => {})
    },
    async getVideo() {
      await this.$axios.get('galeriya/videos/')
        .then((res) => {
          this.videos = res.data;
          // console.log('getGallery', res)
        })
        .catch(() => {})
    }
  },
  mounted() {
    this.getGallery(),
    this.getVideo()
  }
}
</script>
