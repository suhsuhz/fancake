<template>
  <div class="background" :class="$style.account_background">
    <common-account></common-account>
  </div>
</template>

<script>
// components
import CommonAccount from '../components/account/CommonAccount.vue';

export default {
  components: {
    CommonAccount
  },
  created() {
    this.$store.dispatch('FETCH_USER_TOKEN');
    if (this.$store.state.userInfo && this.$store.state.userInfo.access_token) {
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
