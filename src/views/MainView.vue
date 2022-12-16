<template>
  <div class="background" :class="[$style.background_color]">
    <div :class="[$style.wrapper]">
      <header-layout :class="[$style.main_header]"></header-layout>
      <index-main></index-main>
      <footer-layout></footer-layout>
    </div>
  </div>
</template>

<script>
import FooterLayout from '../components/layout/FooterLayout.vue';
import HeaderLayout from '../components/layout/HeaderLayout.vue';
import IndexMain from '../components/main/IndexMain.vue';

export default {
  components: { HeaderLayout, FooterLayout, IndexMain },
}
</script>

<style module>
.background_color {
  background-color: #fff;
}
.wrapper {
  width: 100%;
  margin: 0 auto;
}
.main_header {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>