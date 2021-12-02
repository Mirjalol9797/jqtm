<template>
  <div class="contact-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Aloqa</span>
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
              <h1 class="contact-page__title">{{$t('contactPage.title')}}</h1>
            </div>
          </b-row>
          <b-row class="contact-page__info">
            <b-col md="4"  class="contact-page__item">
              <div class="contact-page__icon">
                <img src="../assets/images/address.svg" alt="">
              </div>
              <div class="contact-page__info-title">{{$t('contactPage.address')}}</div>
              <div class="contact-page__body">{{$t('contactPage.addressTitle')}}</div>
            </b-col>
            <b-col md="4"  class="contact-page__item">
              <div class="contact-page__icon">
                <img src="../assets/images/phone.svg" alt="">
              </div>
              <div class="contact-page__info-title">{{$t('contactPage.phone')}}</div>
              <div class="contact-page__body">
                <a href="tel:+998712441524">(+998 71) 244-15-24</a>
              </div>
            </b-col>
            <b-col md="4"  class="contact-page__item">
              <div class="contact-page__icon">
                <img src="../assets/images/email.svg" alt="">
              </div>
              <div class="contact-page__info-title">{{$t('contactPage.email')}}</div>
              <div class="contact-page__body">
                <a href="mailto:uzjournal@mail.uz">uzjournal@mail.uz</a>
              </div>
            </b-col>
          </b-row>
          <b-row class="contact-page__map">
            <b-col cols="12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.5448434595792!2d69.24915735085372!3d41.322108039614236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b72efbb0c17%3A0xa52a74c6aab1b415!2zMzAg0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1606201414102!5m2!1sru!2s" 
                width="auto" 
                height="400" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="" 
                aria-hidden="false"
                tabindex="0"
              ></iframe>
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
      crumbs: [
        { id: 1, title: 'Асосий', url: '/', disabled: false },
        { id: 2, title: 'Контактлар', url: '/contact', disabled: true},
      ],
      crumbsRu: [
        { id: 1, title: 'Главный', url: '/', disabled: false },
        { id: 2, title: 'Контакты', url: '/contact', disabled: true},
      ],
    }
  }
}
</script>