<template>
    <div>
        <article :class="[$style.product_section]">
            <div :class="[$style.no_profile_content]" v-if="(actionProductList.total == 0)">
                등록된 콘텐츠가 없습니다.
            </div>
            <div :class="[$style.profile_container_pc]" v-if="(actionProductList.total > 0)">
                <div :class="[$style.profile_item]" v-for="(item, index) in actionProductList.list" :key="index">
                    <div :class="[$style.img_section]">
                        <div :class="[$style.main_img_section]">
                            <img :class="[$style.main_img]" :src="item.cover_image_link" alt="앨범이미지"/>
                        </div>
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
                    <div class="cur-pointer" :class="[$style.bottom_section]">
                        <a :href="item.product_link" target="_blank" :class="[$style.text]">BUY NOW</a>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import { jsonStringfy } from "@/assets/js/common.js";

export default {

  computed: {
        actionGetError() {
            return (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : ""; 
        },
        actionProductList() {
            return this.$store.state.productList; // test 용. 아티스트 전용 product list로 바껴야 함
        }
    },
    async created() {
        await this.$store.dispatch('FETCH_PRODUCT_LIST',this.productPageInfo); // test 용. 아티스트 전용 product list로 바껴야 함
    },
    data() {
        return {
            productPageInfo: { // test 용. 아티스트 전용 product list로 바껴야 함
                sort: 'new',
                offset: 0,
                limit: 8,
            }
        }
    },
    
    methods: {

    },
}
</script>

<style scoped>
input[type="checkbox"][name='like'] + label {
    display: block;
    width: 18px;
    height: 17px;
    margin-right: 2px;
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

/* content */
.no_profile_content {
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
}
.profile_container_pc {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 54px 2px;
    width: 1280px;
    /* max-width: 1280px; */
    margin: 0 auto;
    padding: 0 30px;
}
@media screen and (max-width:1100px) {
    .profile_container_pc {
        width: auto;
        grid-template-columns: 1fr 1fr;
        grid-gap: 54px 50px;
    }
}
.product_section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 120px;
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
    width: 290px;
    height: 440px;
    color: #363636;
}
@media screen and (max-width:1100px) {
    .profile_item {
        width: 300px;
        height: inherit;
    }
}
.profile_item .img_section {
    position: relative;
    height: 300px;
}
@media screen and (max-width:1100px) {
    .profile_item .img_section {
        /*height: calc( 80vw / 2 ); */
        height: 310px;
    }
}
.profile_item .img_section .outlink_img {
    position: absolute;
    top: 20px;
    right: 16px;
    width: 36px;
    cursor: pointer;
}
.profile_item .img_section .main_img_section {
    width: 100%;
    height: 100%;
    border-top: 1px solid var(--background-grey-color);
    border-left: 1px solid var(--background-grey-color);
    border-right: 1px solid var(--background-grey-color);
    border-radius: 15px 15px 0 0;
    overflow: hidden;
}
.profile_item .img_section .main_img {
    width: 100%;
    height: 100%;
}
.profile_item .img_section .main_img:hover {
    transform: scale(1.1);
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
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
.profile_item .info_section .title:hover {
    cursor: pointer;
    text-decoration: underline;
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
