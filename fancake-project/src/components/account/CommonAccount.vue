<template>
    <div class="account-container">
        <div class="logo">
            <router-link to="/main"><img src="@/assets/images/common/head_logo.png" alt="myfancake 로고"/></router-link>
        </div>
        <div class="content-area">
            <!-- <login-account></login-account> -->
            <router-view></router-view>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>
</script>

<style scoped>
@import url('@/assets/css/account/account-common.css');
</style>