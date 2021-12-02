<template>
  <div class="error-page">
    <b-container>
      <h1 class="error__title">404</h1>
      <div class="error__subtitle">{{$t('error.subtitle')}}</div>
      <div class="error__text">{{$t('error.text')}}</div>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>
<style lang="scss" scoped>
  .error-page {
    margin-bottom: 80px;
    margin-top: -50px;
    .error {
      &__title {
        font-weight: bold;
        font-size: 250px;
        color: #0094FF;
        text-align: center;
        line-height: inherit;
      }
      &__subtitle {
        font-weight: 300;
        font-size: 84px;
        color: #0094FF;
        text-align: center;
        line-height: inherit;
        margin-top: -80px;
      }
      &__text {
        font-weight: 200;
        font-size: 18px;
        color: #000;
        text-align: center;
      }
    }
  }

  @media (max-width: 640px) {
    .error-page {
      margin-bottom: 40px;
      margin-top: 0;
      .error {
        &__title {
          font-size: 100px;
        }
        &__subtitle {
          font-size: 25px;
          margin-top: -40px;
        }
        &__text {
          font-size: 14px;
        }
      }
    }
  }
</style>