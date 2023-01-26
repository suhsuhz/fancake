<template>
    <div class="main-container">
        <div class="content-area">
            <section :class="[$style.main_section]">
                <div :class="[$style.intro, $style.width_90per]">
                    <h1 :class="[$style.h1]">모든 아티스트가</h1>
                    <h1 :class="[$style.h1]">행복한.</h1>
                    <h1 :class="[$style.h1]">음악 생활을 할 수 있도록</h1>
                    <div :class="[$style.text_section]">나의 첫 NFT MyFANCAKE</div>
                    <div :class="[$style.button_section]">
                        <span :class="[$style.button]" class="cur-pointer">
                            <router-link to="/profile/user">아티스트 등록하기</router-link>
                        </span>
                    </div>
                </div>
            </section>
            <section :class="[$style.content_section, $style.width_90per]">
                <h2 :class="[$style.subject, $style.h2]">
                    <span :class="[$style.color_main]">'MyFANCAKE'</span>에서 팬들과 소통하고<br/> 
                    내 음악을 손쉽게 NFT로 판매해 보세요
                </h2>
                <article :class="[$style.content, $style.top]">
                    <div :class="[$style.text]">
                        <div :class="[$style.title]">NFT 민팅, 판매, 마케팅 시작하기</div>
                        <div :class="[$style.text]">
                            NFT, 많이 들어봤지만 어떻게 해야할 지 잘 모르시겠다구요? <br />
                            걱정마세요, ‘MyFANCAKE’에서 다 알아서 해드립니다.<br />
                            아티스트와의 협의를 통해 판매방식, 수수료 등을 결정하고<br />
                            민팅부터 판매, 마케팅, 정산까지 원스톱으로!<br />
                        </div>
                    </div>
                    <div :class="[$style.image]">
                        <img src="@/assets/images/about/img_sub1.png" alt="등록 이미지" />
                    </div>
                </article>
            </section>
            <section :class="[$style.content_section, $style.width_90per]">
                <article :class="[$style.content]">
                    <div :class="[$style.text]">
                        <div :class="[$style.title]">팬(Fan)</div>
                        <div :class="[$style.sub_title]">소중한 고객이자 후견인</div>
                        <div :class="[$style.description]">
                            “아티스트의 소중한 고객은 어떤 사용자일까요? MyFANCAKE가 주목한 것은 Fan(팬)이 될 수 있는 사용자입니다. 팬은 아티스트의 음악을 직접적으로 구매해주는 소중한 고객이며,  자신의 아티스트를 다른 사람들에게 추천해줄 수 있는 소중한 후견인입니다.”<br/> 팬들은 아티스트가 음악 생활을 지속하게 할 수 있는 원동력이자 팬과의 소통방법은 공연, 팬미팅, SNS 등 여러가지가 있겠지만, ‘MyFANCAKE’는 좀 더 편리한 소통방법을 위해 뉴스피드, 아티스트 정보 공유하기, 음악재생 등 의 기능을 기본 제공하며, 보다 합리적인 사용자 추천시스템을 제공합니다. <br/>‘MyFANCAKE’는 팬들이 자신이 좋아하는 아티스트의 음악상품을 보다 쉽게 구매할 수 있도록 웹 서비스 및 앱을 제공하고 보다 자유롭게 음악을 향유할 수 있도록 기능을 개발하였습니다.<br/> ‘MyFANCAKE’는 대부분의 음악 사이트에서 제공하는 랭킹정보를 제공하지 않습니다. 랭킹으로 인하여 아티스트가 소외되는 것을 최대한 차단하고자 합니다. 대신 사용자의 취향에 맞춘 신뢰도 있는 아티스트 추천시스템을 통하여 더 많은 팬이 아티스트를 Follow할 수 있기를 바랍니다.
                        </div>
                        <div :class="[$style.button_section]">
                            <router-link to="/register"><span class="cur-pointer" :class="[$style.button]">회원가입</span></router-link>
                        </div>
                    </div>
                    <div :class="[$style.image]">
                        <img src="@/assets/images/about/img_nft.png" alt="NFT 이미지"/>
                    </div>
                </article>
                <article :class="[$style.content]">
                    <div :class="[$style.text]">
                        <div :class="[$style.title]">아티스트의 팬이 되세요</div>
                        <div :class="[$style.sub_title]">나의 아티스트를 위한 다양한 활동을 시작할 수 있습니다</div>
                        <div :class="[$style.description]">한 명의 팬이 자신의 지인에게 아티스트를 추천하고,  추천 받은 음악이 다시 새로운 팬을 만들기를 바랍니다. 아티스트에게 팬은 큰 힘이됩니다. 아티스트 페이지를 Follow하고, 아티스트의 음악과 최신소식을 ‘MyFANCAKE’에서 만나요.<br/>아티스트와 팬이 지속적인 소통이 가능하도록 ‘MyFANCAKE’ 가 함께합니다. 충분한 마케팅 비용이 없어도 아티스트의 음악이 더 많이 알려질 수 있기를 바랍니다.  현실적인 한계만 탓하기엔 우리의 열정과 팬들의 기대가 너무나 큽니다. 우리는 팬들과 함께 아티스트의 잠재력을 끌어낼 수 있기를 바랍니다.</div>
                        <div :class="[$style.button_section]">
                            <router-link to="/register"><span class="cur-pointer" :class="[$style.button]">회원가입</span></router-link>
                        </div>
                    </div>
                    <div :class="[$style.image]">
                        <img src="@/assets/images/about/img_artist.png" alt="ARTIST 이미지"/>
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
       
    },
    created() {
    },
    data() {
       return {

       }
    },
    
    methods: {

    },
}
</script>

<style module>
/* common */
.width_90per {
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
}
.h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    font-style: normal;
}
.h2 {
    font-size: 36px;
    line-height: 1.5;
}
.color_main {
    color: var(--main-color);
}
/* main */
.main_section {
    background-image: url('@/assets/images/about/img_back.jpg');
    background-position: 50% 0;
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 22px;
    color: rgb(255, 255, 255);
    line-height: 1.7;
}
.main_section .intro {
    padding: 200px 15px;
}
.main_section .intro .text_section {
    padding-top: 20px;
    padding-bottom: 10px;
    font-weight: normal;
}
.main_section .intro .button_section {
    margin: 60px 0;
}
.main_section .intro .button_section .button {
    padding: 15px 30px;
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
}
.main_section .intro .button_section .button:hover {
    background-color: #fff;
    color: #000;
}

/* sub */
.content_section {
    margin-top: 100px;
}
.content_section .subject {
    margin-bottom: 100px;
}
.content_section .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
}
.content_section .content.top {
    justify-content: flex-start;
}
.content_section .content .text {
    width: 60%;
}
.content_section .content .title {
    margin-bottom: 24px;
    font-size: 26px;
    font-weight: 700;
    color: var(--main-color);
}
.content_section .content .sub_title {
    margin-bottom: 24px;
    font-size: 20px;
}
.content_section .content .text {
    font-size: 18px;
    line-height: 1.4;
}
.content_section .content .image img {
    width: auto;
    height: 252px;
}
.content_section .content.top .image img {
    width: 400px;
    height: auto;
}
.content_section .content .button_section {
    display: flex;
    margin-top: 50px;
}
.content_section .content .button {
    padding: 10px 100px;
    border: 1px solid var(--main-color);
    border-radius: 7px;
    color: var(--main-color);
}
.content_section .content .button:hover {
    background: var(--main-color);
    color: #fff;
}

@media screen and (max-width:992px) {
    .content_section .subject {
        text-align: center;
    }
    .content_section .content {
        flex-direction: column;
        text-align: center;
    }
    .content_section .content .text {
        width: 100%;
    }
    .content_section .content .button_section {
        margin-bottom: 50px;
    }
    .content_section .content .button_section a {
        width: 100%;
    }
    .content_section .content .button_section .button {
        display: inline-block;
        width: 100%;
    }
}
</style>