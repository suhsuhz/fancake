<template>
    <div class="content">
        <div :class="[$style.profile_container_mobile]">
            <swiper class="swiper" :option="swiperOption">
                <swiper-slide>
                    <div :class="[$style.profile_item]">
                        <div :class="[$style.img_section]">
                            <img :class="[$style.main_img]" src="" alt="앨범이미지" />
                            <img :class="[$style.profile_img]" alt="프로필이미지" />
                        </div>
                        <div :class="[$style.info_section]">
                            <div :class="[$style.title]" class="overflow-text-ellipsis">
                                아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노
                            </div>
                            <div :class="[$style.name]">by <div class="font-color-main overflow-text-ellipsis">
                                    10cm10cm10cm10cm10cm10cm10cm10cm10cm10cm10cm10cm10cm</div>
                            </div>
                        </div>
                        <div :class="[$style.bottom_section]">
                            <div :class="[$style.like]">
                                <img src="" alt="하트" />
                                <span>106</span>
                            </div>
                            <div :class="[$style.price]">35 ETH</div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </swiper>
        </div>
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
<style module>
.profile_container_mobile {
    width: 106%;
    margin-left: -3%;
    padding: 0 6%;
}

.profile_item .img_section {
    position: relative;
    height: 220px;
    background: rgb(241, 175, 241);
    border-top: 1px solid var(--background-grey-color);
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
    border-radius: 20px 20px 0 0;
}

.profile_item .img_section .main_img {
    width: 100%;
    height: 70%;
}

.profile_item .img_section .profile_img {
    background: orange;
    position: absolute;
    left: 50%;
    bottom: -40px;
    width: 80px;
    height: 80px;
    transform: translate(-50%, 0);
    border-radius: 50%;
}

.profile_item .info_section {
    display: flex;
    flex-direction: column;
    height: 140px;
    padding: 45px 5px;
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
}

.profile_item .info_section .title {
    margin-bottom: 1em;
    text-align: center;
}

.profile_item .info_section .name {
    display: flex;
    justify-content: center;
}

.bottom_section {
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f5f5f5;
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
    border-bottom: 1px solid var(--background-grey-color);
    border-radius: 0 0 20px 20px;
}

.bottom_section .like {
    display: flex;
}

.bottom_section .price {
    background-color: #f5f5f5;
}
</style>
<style scoped>
.swiper-slide {
    height: 400px;
}
</style>
