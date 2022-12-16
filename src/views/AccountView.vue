<template>
  <div class="background" :class="$style.background_color">
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
    if (this.$store.state.userInfo.access_token) {
      this.$router.replace('/Main');
    }
  }
}
</script>

<style module>
.background_color {
  background-color: var(--background-grey-color);
}
</style>
