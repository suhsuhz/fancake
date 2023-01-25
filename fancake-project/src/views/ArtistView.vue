<template>
    <div class="background" :class="[$style.background_color]">
      <header-layout :class="[$style.main_header]"></header-layout>
      <div :class="[$style.wrapper]">
        <common-artist></common-artist>
      </div>
      <footer-layout></footer-layout>
    </div>
  </template>
  
  <script>
  import FooterLayout from '../components/layout/FooterLayout.vue'
  import HeaderLayout from '../components/layout/HeaderLayout.vue'
  import CommonArtist from '../components/artist/CommonArtist.vue'
  import { isLogin } from '@/assets/js/common.js'
  
  export default {
    components: { HeaderLayout, CommonArtist, FooterLayout },
    created() {
      if(!isLogin()) {
        alert("로그인 후 이용해주세요");
        this.$router.replace('/login');
      }
  
      this.$autoLogout();
    },
    updated() {
      this.$loginTimeUpdate();
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