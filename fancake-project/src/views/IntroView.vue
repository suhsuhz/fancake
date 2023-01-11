<template>
    <div class="background" :class="[$style.background_color]">
        <header-layout></header-layout>
        <div :class="[$style.wrapper]">
            <for-artist></for-artist>
        </div>
        <footer-layout></footer-layout>
    </div>
</template>
  
<script>
import FooterLayout from '../components/layout/FooterLayout.vue';
import HeaderLayout from '../components/layout/HeaderLayout.vue';
import ForArtist from '../components/introduce/ForArtist.vue';

export default {
    components: { HeaderLayout, FooterLayout, ForArtist },
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