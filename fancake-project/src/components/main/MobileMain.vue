<template>
    <div class="content">
        <article :class="[$style.banner_section]">
            <div :class="[$style.banner_text]">
                <h3 :class="[$style.h3, $style.logo]" class="font-color-main">MYFANCAKE</h3>
                <h2 :class="[$style.h2]">놀라운 NFT 음악 작품을</h2>
                <h2 :class="[$style.h2]">탐색하고 수집하세요.</h2>
                <h2 :class="[$style.h2]">그리고 마이팬케이크에</h2>
                <h2 :class="[$style.h2]">판매하세요!</h2>
                <h3 :class="[$style.h3, $style.info]">마이팬케이크는 세계 최초<br/><span class="font-color-main">음악 NFT 전문 마켓플레이스</span> 입니다.</h3>
                <div :class="[$style.button_section]">
                    <span :class="[$style.go_product]" class="cur-pointer">작품 탐색하기</span>
                </div>
            </div>
            <!-- <img class="banner_img" src="@/assets/images/main/pc_banner.jpg" alt="메인배너"/> -->
        </article>
        <article :class="[$style.product_section]">
            <div :class="[$style.title]">
                <div :class="[$style.h3]">New NFT Music</div>
                <div :class="[$style.h2]">최근 등록된 NFT 음악</div>
            </div>
            <div :class="[$style.profile_container_mobile]">
                <div :class="[$style.no_profile_content]" v-if="(actionProductList.total == 0)">
                    등록된 콘텐츠가 없습니다.
                </div>
                <div :class="[$style.profile_container_mobile]" v-if="(actionProductList.total > 0)">
                <swiper class="swiper" :option="swiperOption">
                    <swiper-slide v-for="(item, index) in actionProductList.list" :key="index">
                            <div :class="[$style.profile_item]" >
                                <div :class="[$style.img_section]">
                                    <img :class="[$style.main_img]" :src="item.cover_image_link" alt="앨범이미지"/>
                                    <a :href="item.product_link" target="_blank"><img :class="[$style.outlink_img]" src="@/assets/images/main/out_link.png" alt="링크"/></a>
                                    <span :class="[$style.profile_img]">
                                        <img :src="item.artist.profile_image_link" alt="프로필이미지"/>
                                    </span>
                                </div>
                                <div :class="[$style.info_section]">
                                    <div :class="[$style.title]" class="break-wrap">{{ item.title }}</div>
                                    <div :class="[$style.name]">by <div class="font-color-main overflow-text-ellipsis">{{ item.artist.team_name }}</div></div>
                                </div>
                                <div :class="[$style.bottom_section]">
                                    <div :class="[$style.like]">
                                        <input :class="[$style.like]" name="like" :id="index" type="checkbox"/><label :for="index"></label>
                                        <span>{{ item.wanted }}</span>
                                    </div>
                                    <div :class="[$style.price]"><span :class="[$style.currency]">{{ item.currency }}</span>{{ item.price }}</div>
                                </div>
                            </div>
                    </swiper-slide>
                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                </swiper>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
//import Vue from "vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/css/swiper.css";

export default {
    components: { Swiper, SwiperSlide },
    computed: {
        actionProductList() {
            return this.$store.state.productList;
        }
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            }
        }
    },
    created() {
    },
    methods: {

    }
}

</script>
<style scoped>
.banner_img {
    width: 100%;
}
/* header css */
input[type="checkbox"][name='like'] + label {
    display: block;
    width: 18px;
    height: 17px;
    margin-right: 7px;
    background: url('@/assets/images/common/ic_heart_off.png') no-repeat 0 0px / contain;
}

input[type='checkbox'][name='like']:checked + label {
    background: url('@/assets/images/common/ic_heart_on.png') no-repeat 0 1px / contain;
}

input[type="checkbox"] {
    display: none;
}
</style>
<style module>
.h2 {
    font-size: 30px;
}
.h3 {
    font-size: 20px;
}
@media screen and (max-width:768px) {
    .h2 {
        font-size: 25px;
    }
    .h3 {
        font-size: 18px;
    }
}

.no_profile_content {
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
}
.banner_section {
    background: url(@/assets/images/main/pc_banner.jpg) no-repeat center 0;
    height: 874px;
    margin-bottom: 95px;
}
.banner_text {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding-top: 100px;
    max-width: 1280px;
}
.banner_text .h2 {
    margin-bottom: 10px;
}
.banner_text .h3.logo {
    margin-bottom: 50px;
}
.banner_text .h3.info {
    margin-top: 65px;
}
.button_section {
    margin-top: 30px;
}
.button_section .go_product {
    display: inline-block;
    width: 222px;
    height: 62px;
    line-height: 58px;
    margin-right: 14px;
    text-align: center;
    border: 2px solid var(--main-color);
    border-radius: 15px;
    background-color: #f8f8f8;
    color: var(--main-color);
    font-size: 20px;
}
.profile_container_mobile {
    width: 106%;
    margin-left: -3%;
    margin-bottom: 50px;
    padding: 0 6%;
}

.product_section .title {
    margin-bottom: 54px;
    text-align: center;
}
.product_section .h3 {
    margin-bottom: 12px;
    color: var(--main-color);
}
.profile_item {
    color: #363636;
}
.profile_item .img_section {
    position: relative;
    height: 80vw;
}
.profile_item .img_section .outlink_img {
    position: absolute;
    top: 20px;
    right: 16px;
    width: 36px;
    cursor: pointer;
}
.profile_item .img_section .main_img {
    width: 100%;
    height: 100%;
    border-top: 1px solid var(--background-grey-color);
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
    border-radius: 15px 15px 0 0;
}
.profile_item .img_section .profile_img {
    position: absolute;
    left: 50%;
    bottom: -41px;
    width: 82px;
    height: 82px;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 1px solid var(--background-grey-color);
    overflow: hidden;
}
.profile_item .img_section .profile_img img {
    width: 100%;
    height: auto;
}
.profile_item .info_section {
    display: flex;
    flex-direction: column;
    height: 114px;
    padding: 48.5px 5px 0 5px;
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
}
.profile_item .info_section .title {
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
}
.profile_item .info_section .name {
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #898989;
    font-weight: 300;
}
.profile_item .info_section .name div {
    margin-left: 2px;
}
.bottom_section {
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 10px 18px;
    background-color: #f5f5f5;
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
    border-bottom: 1px solid var(--background-grey-color);
    border-radius: 0 0 15px 15px;
    font-size: 15px;
}
.bottom_section .like {
    display: flex;
}
.bottom_section .price {
    background-color: #f5f5f5;
}
.bottom_section .currency {
    margin-right: 7px;
    font-weight: bold;
}
</style>
<style scoped>
</style>
