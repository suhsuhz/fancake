<template>
    <div class="content">
        <article :class="[$style.product_section]">
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
                                </div>
                                <div :class="[$style.info_section]">
                                    <div :class="[$style.title]" class="break-wrap">{{ item.title }}</div>
                                    <div :class="[$style.option]">
                                        <div :class="[$style.like]">
                                            <input :class="[$style.like]" name="like" :id="index" type="checkbox"/><label :for="index"></label>
                                            <span>{{ item.wanted }}</span>
                                        </div>
                                        <div :class="[$style.price]"><span :class="[$style.currency]">{{ item.currency }}</span>{{ item.price }}</div>
                                    </div>
                                </div>
                                <div :class="[$style.bottom_section]">
                                    <a :href="item.product_link" target="_blank" :class="[$style.text]">BUY NOW</a>
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
        },
        actionHotProductList() {
            return this.$store.state.hotProductList;
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
.no_profile_content {
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
}
.profile_container_mobile {
    /*width: 106%;
    width: 580px;
    margin-left: -3%; */
    width: 100%;
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
    /*height: 80vw;*/
    aspect-ratio: 2.9 / 3; /* 16:9 비율 지정 */
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
    padding: 20px 5px 10px 5px;
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
}
.profile_item .info_section .title {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}
.profile_item .info_section .name {
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: #898989;
    font-weight: 300;
}
.profile_item .info_section .name div {
    margin-left: 2px;
}
.profile_item .info_section .option {
    display: flex;
    justify-content: space-between;
    padding: 10px 18px;
}
.profile_item .info_section .option .like {
    display: flex;
}
.profile_item .info_section .option .currency {
    margin-right: 7px;
    font-weight: bold;
}

.bottom_section {
    display: flex;
    justify-content: center;
    padding: 15px 18px;
    background-color: #f5f5f5;
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
    border-bottom: 1px solid var(--background-grey-color);
    border-radius: 0 0 15px 15px;
    font-size: 15px;
}
.bottom_section .text {
    font-size: 20px;
    font-weight: 500;
    color: var(--main-color);
}
</style>
<style scoped>
</style>

