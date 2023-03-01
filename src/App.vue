<template>
  <HeaderVue/>
  <router-view :key="$route.path"/>
  <FooterVue/>

</template>

<script>
  import HeaderVue from "@/components/includes/HeaderView";
  import FooterVue from "@/components/includes/FooterView";
  export default {
    name: "App",
    components: {HeaderVue, FooterVue}
  }
</script>

<style>

</style>
