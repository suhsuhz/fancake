<template>
    <section class="artist_content_section">
        <!-- <div>아직 올린 콘텐츠가 없습니다.</div> 콘텐츠가 없을때 넣어줘야 함 -->
        <article :class="[$style.musics]">
            <div :class="[$style.item]">
                <img src=""/>
                <div :class="[$style.title]">
                    <div :class="[$style.title_text]">
                        제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3
                    </div>
                </div>
            </div>
            <div :class="[$style.item]">
                <img src=""/>
                <div :class="[$style.title]">
                    <div :class="[$style.title_text]">
                        제품 타이틀3제품
                    </div>
                </div>
            </div>
            <div :class="[$style.item]">
                <img src=""/>
                <div :class="[$style.title]">
                    <div :class="[$style.title_text]">
                        제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3
                    </div>
                </div>
            </div>
            <div :class="[$style.item]">
                <img src=""/>
                <div :class="[$style.title]">
                    <div :class="[$style.title_text]">
                        제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3
                    </div>
                </div>
            </div>
            <div :class="[$style.item]">
                <img src=""/>
                <div :class="[$style.title]">
                    <div :class="[$style.title_text]">
                        제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3제품 타이틀3
                    </div>
                </div>
            </div>
            <div :class="[$style.item]">
                <img src=""/>
                <div :class="[$style.title]">
                    <div :class="[$style.title_text]">
                        제품 타이틀3제품
                    </div>
                </div>
            </div>
            <div :class="[$style.item]">
                <img src=""/>
                <div :class="[$style.title]">
                    <div :class="[$style.title_text]">
                        제품 타이틀3제품
                    </div>
                </div>
            </div>
        </article>
        <article :class="[$style.follow]">
            <div :class="[$style.title]">아티스트 명</div>
            <div class="cur-pointer" :class="[$style.button]">Follow</div>
            <ul :class="[$style.follow_list]">
                <!-- 추후 정리해서 주실 예정. 아마도 프로필 이미지 + 닉네임 -->
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ul>
        </article>
    </section>
</template>

<script>
import { jsonStringfy } from "@/assets/js/common.js";

export default {
    computed: {
        actionGetError() {
            return (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : ""; 
        },
        actionArtistMusics() {
            return this.$store.state.musicList; 
        },
        actionArtistFollows() {
            return this.$store.state.followList; 
        }
    },
    created() {
        this.$autoLogout();
    },
    async mounted() {
        this.$showLoadingBar(true);
        await this.$store.dispatch('FETCH_PROFILE_USER');
        this.$showLoadingBar(false);
        
        this.profile.name = this.actionUserProfile.name;
        this.profile.email = this.actionUserProfile.email;
        this.nick = this.actionUserProfile.nick;
    },
    destroyed() {
        this.$loginTimeUpdate();
    },
    data() {
        return {
            
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
.artist_content_section {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
}
@media screen and (max-width:875px) {
    .artist_content_section {
        flex-direction: column;
    }
}
</style>
<style module>
.musics {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px 32px;
}
@media screen and (max-width:1100px) {
    .musics {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media screen and (max-width:640px) {
    .musics {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width:410px) {
    .musics {
        grid-template-columns: repeat(1, 1fr);
    }
}
.musics .item {
    margin: 0 auto;
    background: skyblue;
}
.musics .item {
    cursor: pointer;
}
.musics .item img {
    width: 166px;
    height: 166px;
}
.musics .item .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 166px;
    height: 48px;
    padding: 10px 5px;
    text-align: center;
}
.musics .item .title .title_text {
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
   overflow: hidden;
}
.follow {
    width: 190px;
}
@media screen and (max-width:875px) {
    .follow {
        width: 100%;
        margin-top: 35px;
    }
}
.follow .title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: bold;
}
.follow .button {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    color: var(--main-color);
    border: 1px solid var(--border-grey-color);
    border-radius: 5px;
}
.follow .follow_list {
    margin-top: 24px;
    text-align: right;
}
</style>