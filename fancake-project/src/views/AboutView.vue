<template>
    <div class="background" :class="[$style.background_color]">
        <header-layout></header-layout>
        <div :class="[$style.wrapper]">
            <index-about></index-about>
        </div>
        <footer-layout></footer-layout>
    </div>
</template>
  
<script>
import FooterLayout from '../components/layout/FooterLayout.vue';
import HeaderLayout from '../components/layout/HeaderLayout.vue';
import IndexAbout from '../components/about/IndexAbout.vue';

export default {
    components: { HeaderLayout, FooterLayout, IndexAbout },
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
</style>