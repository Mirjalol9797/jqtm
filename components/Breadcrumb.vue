<template>
  <div>
    <b-breadcrumb v-if="$i18n.locale == 'uz'">
      <b-breadcrumb-item v-for="i in crumbs" :key="i.id" :to="i.url" :active="i.disabled">
        <span>{{ i.title }}</span>
      </b-breadcrumb-item>
    </b-breadcrumb>
    <b-breadcrumb v-else>
      <b-breadcrumb-item v-for="i in crumbsRu" :key="i.id" :to="i.url" :active="i.disabled">
        <span>{{ i.title }}</span>
      </b-breadcrumb-item>
    </b-breadcrumb>    
  </div>
</template>
<script>
export default {
  props: {
    crumbs: {
      type: Array
    },
    crumbsRu: {
      type: Array
    }
  }
}
</script>
<style>
  .breadcrumb {
    background-color: #fff;
    padding: 25px 0;
    margin-bottom: 0;
  }
</style>