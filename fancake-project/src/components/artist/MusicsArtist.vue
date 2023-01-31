<template>
    <div class="content">
        <section class="title_area">
            <h1>아티스트</h1>
        </section>
        <section :class="[$style.profile_section]">
            <section :class="[$style.profile]">
                <span :class="[$style.image]"><img src="" alt="프로필"/></span>
                <div :class="[$style.title]">
                    <div :class="[$style.name]">Missing MucilleMissing MucilleMissing 닥스훈트 MucilleMissing Mucille<img src="" alt="체크"/></div>
                    <div class="cur-pointer" :class="[$style.button]">+ Follow</div>
                </div>
            </section>
            <section :class="[$style.intro]">
                강원도 롹커의 농장을 운영하는 건강하지 않은 농장주 Original Blues Rock Band Since 2004 강원도 
            </section>
            <ul :class="[$style.icon]">
                <li>
                    <span :class="[$style.title]">items</span>
                    <span :class="[$style.number]">152</span> <!-- 숫자 많아지면 .k 이런식으로 표시하는거 필요 -->
                </li>
                <li>
                    <span :class="[$style.title]">owners</span>
                    <span :class="[$style.number]">108</span>
                </li>
                <li>
                    <span :class="[$style.title]">floor price</span>
                    <span :class="[$style.number]">0.049</span>
                </li>
                <li>
                    <span :class="[$style.title]">volume traded</span>
                    <span :class="[$style.number]">33.8</span>
                </li>
            </ul>
        </section>
        <section :class="[$style.tap_section]">
            <router-link 
            class="cur-pointer" 
            :class="[$style.button]" 
            to="/artist/musics" >아트</router-link>
            <span class="cur-pointer" :class="[$style.button]">Social</span>
        </section>
        <div class="pc-layout">
            <musics-pc></musics-pc>
        </div>
        <div class="mobile-layout">
            <musics-mobile></musics-mobile>
        </div>
    </div>
</template>

<script>
import MusicsPc from './MusicsPc.vue';
import MusicsMobile from './MusicsMobile.vue';

export default {
  components: { MusicsPc, MusicsMobile }
}
</script>

<style scoped>
.content .router-link-active {
    background-color: var(--main-color) !important;
    color: #fff;
}
</style>
<style module>
.profile_section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 524px;
    margin: 0 auto;
}
@media screen and (max-width:768px) {
    .profile_section {
        width: 90%;
        max-width: 1280px;
        margin: 0 auto;
    }

}
/* profile */
.profile_section .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.profile_section .profile .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 131px;
    height: 131px;
    border: 5px solid var(--main-color);
    border-radius: 50%;
    overflow: hidden;
}
.profile_section .profile .image img {
    width: 100%;
    height: auto;
}
.profile_section .profile .title {
    display: flex;
    position: relative;
    font-size: 20px;
    line-height: 1.2;
}
.profile_section .profile .title .name {
    margin-right: 20px;
    font-size: 45px;
    font-weight: 500;
    text-align: center;
}
.profile_section .profile .title .button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 100%;
    width: 161px;
    height: 52px;
    margin-left: 10%;
    border: 1px solid var(--main-color);
    border-radius: 12px;
    font-size: 20px;
    color: var(--main-color);
    text-align: center;
}
@media screen and (max-width:1100px) {
    .profile_section .profile .title {
        flex-direction: column;
    }
    .profile_section .profile .title .button {
        position: inherit;
        left: 0;
        margin: 20px auto 0 auto;
    }
}
@media screen and (max-width:768px) {
    .profile_section .profile .title .name {
        font-size: 35px;
    }
}
.profile_section .intro {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 18px;
    line-height: 1.667em;
    text-align: center;
}
.profile_section .icon {
    display: inline-flex;
    justify-content: space-between;
    margin-top: 32px;
    padding: 6px 0;
    border: 1px solid #d1d3d4;
    border-radius: 12px;
}
.profile_section .icon li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25%;
    height: 77px;
    font-size: 15px;
    font-weight: 300;
    color: #363636;
}
.profile_section .icon li:not(:last-child) {
    border-right: 2px solid #e4e5e6;
}
.profile_section .icon li .number {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
    color: #363636;
}
.tap_section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 95px 0;
    border-top: 1px solid var(--background-grey-color);
    border-bottom: 1px solid var(--background-grey-color);
}
.tap_section .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    font-size: 25px;
    font-weight: 500;
}
@media screen and (max-width:768px) {
    .tap_section {
        margin: 50px 0;
    }
    .tap_section .button {
        font-size: 20px;
    }
}
</style>