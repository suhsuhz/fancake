<template>
    <div class="product-container">
        <article class="container-align-center" :class="[$style.content]">
            <section :class="[$style.info]">
                <div :class="[$style.product_image]"><img src="" alt="작품이미지"/></div>
                <div :class="[$style.desc]">
                    <div :class="[$style.title]">작품 설명</div>
                    <div class="scrollbar1"  :class="[$style.text]">
                        Created by 하쿠나마타타
                        "I'm Spottie" is the debut album from the best (only)
                        CryptoPunk rapper alive, Spottie WiFi. Owners of NFTs from
                        the "I'm Spottie" The Album collection have a limited non
                        -exclusive copyright license to the music and artwork that
                        comprise the NFTs they own
                        (please visit www.SpottieLicense.com for complete terms
                    </div>
                </div>
            </section>
            <section :class="[$style.detail]">
                <div :class="[$style.name]">Rio De Janeiro</div>
            </section>
        </article>
        <article :class="[$style.line]"></article>
        <article class="container-align-center" :class="[$style.side]">
            <div :class="[$style.title]">이 NFT음악과 비슷한 작품</div>
            <div :class="[$style.content]"></div>
        </article>
    </div> 
</template>
<script>
</script>
<style scoped>

</style>
<style module>
.content {
    display: flex;
    justify-content: space-between;
}
.content .info {
    display: flex;
    flex-direction: column;
    width: 45%;
    max-width: 511px;
    margin-right: 20px;
}
.content .info .product_image {
    max-width: 491px;
    margin-bottom: 11px;
    aspect-ratio: 2.9 / 3; /* 비율 지정 */
    overflow: hidden;
    border: 1px solid #d1d3d4;
    border-radius: 13px;
    overflow: hidden;
    background: red;
}
.content .info .product_image img {
    width: 100%;
    height: auto;
}
.content .info .desc {
    max-width: 491px;
    padding: 22px 37px 30px;
    border: 1px solid #d1d3d4;
    border-radius: 13px;
}
.content .info .desc .title {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #e6e8e8;
    color: #444041;
    font-size: 18px;
    font-weight: 300;
}
.content .info .desc .text {
    max-height: 196px;
    padding-right: 9px;
    color: #444041;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.867em;
    white-space: pre-wrap;
    overflow-y: auto;
}

.content .detail {
    width: 50%;
}
.content .detail .name {
    margin-bottom: 25px;
    font-size: 45px;
    font-weight: 500;
    color: #363636;
}
.line {
    width: 100%;
    border: 1px solid var(--background-grey-color);
    margin: 65px 0;
}
</style>
