<template>
    <div class="artist_container">
        <div class="artist_content">
            <section class="artist_banner_section">
                <img src="" alt="배너이미지"/>
            </section>
            <section class="artist_tap_section">
                <span class="tap_button cur-pointer"><router-link to="/artist/musics">아트</router-link></span>
                <span class="tap_button cur-pointer">Social</span>
            </section>
            <router-view></router-view> 
        </div>
    </div>
</template>

<style scoped>
@import url('@/assets/css/artist/artist-common.css');
.artist_content {
    margin: 0 auto;
    padding-bottom: 45px;
    font-size: 14px;
}
.artist_banner_section {
    position: relative;
    max-width: 975px;
    height: 180px;
    text-align: center;
    overflow-x: hidden;
}
.artist_banner_section img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 975px;
    height: 180px;
}
.artist_tap_section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 42px;
    background: var(--background-grey-color);
}
.artist_tap_section .tap_button {
    width: 100px;
    text-align: center;
    font-weight: bold;
}
.artist_tap_section .tap_button:hover {
    color: var(--main-color);
}
</style>