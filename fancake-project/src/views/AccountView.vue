<template>
  <div class="background" :class="$style.account_background">
    <common-account></common-account>
  </div>
</template>

<script>
// components
import CommonAccount from '../components/account/CommonAccount.vue';
import { isLogin } from '@/assets/js/common.js'

export default {
  components: {
    CommonAccount
  },
  created() {
    if(isLogin()) {
      this.$router.replace('/Main');
    }
  }
}
</script>

<style module>
.account_background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--background-grey-color);
}
</style>
