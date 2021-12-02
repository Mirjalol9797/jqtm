<template>
  <footer class="footer">
    <b-container fluid>
      <b-row class="footer__top">
        <b-container>
          <b-row class="align-items-center">
            <b-col lg="3">
              <div class="footer__logo">
                <nuxt-link to="/">
                  <img src="../assets/images/footer_logo.png" alt="logo">
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="9" class="footer__navWrap">
              <ul class="footer__nav">
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
            </b-col>
          </b-row>
        </b-container>
      </b-row>
      <b-row class="footer__middle">
        <b-container>
          <b-row>
            <b-col lg="3" md="6">
              <div class="footer__email">
                <span>{{$t('footer.email')}}</span>
                <a href="mailto:journal@bcc.com.uz">journal@bcc.com.uz</a>
                <a href="mailto:mediauz@bcc.com.uz">mediauz@bcc.com.uz</a>
                <ul class="footer__social">
                  <li>
                    <a href="#">
                      <img src="../assets/images/social/instagram.svg" alt="instagramm">
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/jurnalistikauzbek" target="_blank">
                      <img src="../assets/images/social/telegram.svg" alt="telegram">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/social/vk2.svg" alt="vk">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/images/social/facebook2.svg" alt="facebook">
                    </a>
                  </li>
                </ul>
              </div>
            </b-col>
            <b-col lg="4" md="6">
              <div class="footer__address">
                <span>{{$t('footer.address')}}</span>
                <div>{{$t('contactPage.addressTitle')}}</div>
              </div>
            </b-col>
            <b-col lg="3" md="6">
              <div class="footer__number">
                <span>{{$t('footer.phone')}}</span>
                <a href="tel:+998712441524">(+998 71) 244-15-24</a>
                <a href="tel:+998712441596">(+998 71) 244-15-96</a>
              </div>
            </b-col>
            <b-col lg="2" md="6">
              <BacktoTop />
            </b-col>
          </b-row>
        </b-container>
      </b-row>
      <b-row class="footer__bottom">
        <b-container>
          <b-row>
            <b-col lg="7">
              <div class="footer__copyright">
                © 2020 {{$t('footer.site_name')}} <br>
                <span> {{$t('footer.siteAdmin')}} <a href="https://greatsoft.uz/uz">GreatSoft</a></span>
              </div>
            </b-col>
            <b-col lg="5">
              <div class="footer__confiden">
                <!-- <a href="#">Условия использования</a> -->
                <!-- <a href="#">Конфиденциальность</a> -->
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
import BacktoTop from "./BacktoTop"
export default {
  components: {
    BacktoTop
  }
}
</script>