<template>
  <div class="background" :class="[$style.background_color]">
    <header-layout :class="[$style.main_header]"></header-layout>
    <div :class="[$style.wrapper]">
      <common-profile></common-profile>
    </div>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import FooterLayout from '../components/layout/FooterLayout.vue'
import HeaderLayout from '../components/layout/HeaderLayout.vue'
import CommonProfile from '../components/profile/CommonProfile.vue'

export default {
  components: { HeaderLayout, CommonProfile, FooterLayout },
  created() {
    this.$store.dispatch('FETCH_USER_TOKEN');
    if (!this.$store.state.userInfo.access_token) {
      alert("로그인 후 이용해주세요");
      this.$router.replace('/Login');
    }
  }
}
</script>

<style module>
.background_color {
  background-color: #fff;
}
.wrapper {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>