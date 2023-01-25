<template>
    <div class="artist_content">
        <section class="artist_banner_section">
            <img src="" alt="배너이미지"/>
        </section>
        <section class="artist_tap_section">
            <span class="tap_button">아트</span>
            <span class="tap_button">Social</span>
        </section>
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
                <div :class="[$style.button]">Follow</div>
                <ul :class="[$style.follow_list]">
                    <!-- 추후 정리해서 주실 예정. 아마도 프로필 이미지 + 닉네임 -->
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </article>
        </section>
    </div>
</template>

<style scoped>
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
.artist_tap_section .tap_button.on, .artist_tap_section .tap_button:hover {
    color: var(--main-color);
    cursor: pointer;
}
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
    background: violet;
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
.follow .button:hover {
    cursor: pointer;
}
.follow .follow_list {
    margin-top: 24px;
    text-align: right;
}
</style>