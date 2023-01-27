<template>
    <div class="main-container">
        <section :class="[$style.main, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.title]">
                    <div :class="[$style.big_line]"><hr/></div>
                    <div :class="[$style.text]">아티스트를 위한 Fancake</div>
                    <div :class="[$style.big_line]"><hr/></div>
                </div>
                <div :class="[$style.desc]">
                    아티스트는 음악시장의 기반인 음악을 생산하는 생산 주체이며, 음악시장의 뿌리입니다.<br/>
                    아티스트의 음악 자원을 소중히 사용될수 있도록 Fancake 서비스는 아래와 같은 주요 기능을 제공합니다.
                </div>
            </div>
        </section>
        <section :class="[$style.sub1, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.small_line]"><hr/></div>
                <div :class="[$style.sub_title]">아티스트를 위한 Fancake</div>
                <div :class="[$style.title]">당신의 모든 것을 NFT로 판매하세요</div>
                <div :class="[$style.image_section]">
                    <div :class="[$style.icon]">
                        <img :class="[$style.icon]" :src="iconImage.music" alt="음원" @mouseover="changeIcon('music', false)" @mouseleave="changeIcon('music', true)"/>
                        <span>음원</span>
                    </div>
                    <div :class="[$style.icon]">
                        <img :class="[$style.icon]" :src="iconImage.ticket" alt="티켓" @mouseover="changeIcon('ticket', false)" @mouseleave="changeIcon('ticket', true)"/>
                        <span>콘서트 티켓</span>
                    </div>
                    <div :class="[$style.icon]">
                        <img :class="[$style.icon]" :src="iconImage.image" alt="이미지" @mouseover="changeIcon('image', false)" @mouseleave="changeIcon('image', true)"/>
                        <span>이미지</span>
                    </div>
                    <div :class="[$style.icon]">
                        <img :class="[$style.icon]" :src="iconImage.video" alt="영상" @mouseover="changeIcon('video', false)" @mouseleave="changeIcon('video', true)"/>
                        <span>영상</span>
                    </div>
                </div>
                <div :class="[$style.desc]">
                    디지털로 만든 모든 것들을 NFT 상품으로 만들어 판매할 수 있습니다.<br />
                    마이팬케이크는 당신의 상품을 더 많은 팬들이 만날 수 있도록 돕습니다.
                </div>
            </div>
        </section>
        <section :class="[$style.sub2, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.small_line]"><hr/></div>
                <div :class="[$style.sub_title]">아티스트를 위한 Fancake</div>
                <div :class="[$style.title]">NFT는 한때의 유행이 아닙니다</div>
                <div :class="[$style.desc]">
                    <article :class="[$style.content]">
                        <div><img src="@/assets/images/intro/sub2_01.png" alt="뮤지션 이미지" /></div>
                        <div :class="[$style.subject]">3LAU</div>
                        <div>
                            NFT 경매에 올린 특전:<br />
                            리워드, 미공개 곡에 대한 접근권, 3LAU와 함께 신곡 제작 기획, 해당 앨범의 한정판 LP판 등등<br />
                            $11,684,101<br />
                            (한화 약 140억 3000만 원)<br />
                        </div>
                    </article>
                    <article :class="[$style.content]">
                        <div><img src="@/assets/images/intro/sub2_02.png" alt="뮤지션 이미지" /></div>
                        <div :class="[$style.subject]">킹스 오브 리온</div>
                        <div>
                            지난해 3월 신규 앨범을<br />
                            블록체인 기반의 스트리밍 플랫폼 <br />
                            옐로우 하트를 통해 <br />
                            최초로 NFT 기반 앨범을 선보임<br />
                            $2,000,000<br />
                            (한화 약 22억 3,300만 원)<br />
                        </div>
                    </article>
                    <article :class="[$style.content]">
                        <div><img src="@/assets/images/intro/sub2_03.jpg" alt="뮤지션 이미지" /></div>
                        <div :class="[$style.subject]">선미</div>
                        <div>
                            여성 아티스트로는<br />
                            국내 처음으로 시도하는 NFT(PFP)프로젝트<br />
                            클레이튼 기반으로 총 1만 개 PFP 발행<br />
                            라이브 팬미팅, 쇼케이스 초대권,<br />
                            월드투어 VIP 초대권,<br />
                            2022년 송년 파티 초대권 등<br />
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <section :class="[$style.sub3, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.small_line]"><hr/></div>
                <div :class="[$style.sub_title]">아티스트를 위한 Fancake</div>
                <div :class="[$style.title]">뮤지션이 주도하는 음악시장</div>
                <div :class="[$style.desc]">
                    <article>
                        <div :class="[$style.desc_title]">기존 음악시장</div>
                        <div :class="[$style.desc_image]"><img src="@/assets/images/intro/melon.jpg" alt="메론" /></div>
                        <div :class="[$style.desc_text]">
                            제작관련자 총 수입(제작료 + 저작권 + 실연수익)<br />
                            약 56.7%<br />
                        </div>
                    </article>
                    <article>
                        <div :class="[$style.desc_icon]"><img src="@/assets/images/intro/ic_arrow.svg" alt="NFT" /></div>
                    </article>
                    <article>
                        <div :class="[$style.desc_title]">NFT 마켓</div>
                        <div :class="[$style.desc_image]"><img src="@/assets/images/intro/nft.jpg" alt="NFT" /></div>
                        <div :class="[$style.desc_text]">
                            제작관련자 총 수입(제작료 + 저작권 + 실연수익)<br />
                            약 80% 이상<br />
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <section :class="[$style.sub4, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.small_line]"><hr/></div>
                <div :class="[$style.sub_title]">아티스트를 위한 Fancake</div>
                <div :class="[$style.title]">주요 서비스</div>
                <div :class="[$style.desc]">
                    <article :class="[$style.content]">
                        <div :class="[$style.desc_title]">01</div>
                        <div :class="[$style.desc_sub_title]">NFT 민팅&리스팅 서비스</div>
                        <div :class="[$style.desc_sub_text]">뮤지션의 디지털 자산을 NFT로</div>
                        <div :class="[$style.desc_text]">
                            뮤지션이 보유한 디지털 자산을 적정한 가격과 적절한 수량으로 민팅할 수 있게 해 드리며, 민팅된 NFT상품은 글로벌 NFT 마켓플레이스를 통해 거래될 수 있도록 도와 드립니다.
                        </div>
                    </article>
                    <article :class="[$style.content]">
                        <div :class="[$style.desc_title]">02</div>
                        <div :class="[$style.desc_sub_title]">수익정산</div>
                        <div :class="[$style.desc_sub_text]">판매 & 재판매 수익 정산</div>
                        <div :class="[$style.desc_text]">
                            NFT는 최초 판매 뿐만 아니라 거래소 회원들간의 거래에서도 수익이 발생합니다. 이렇게 발생된 수익은 뮤지션에게 자동으로 정산됩니다.
                        </div>
                    </article>
                    <article :class="[$style.content]">
                        <div :class="[$style.desc_title]">03</div>
                        <div :class="[$style.desc_sub_title]">NFT 팬 페이지 운영</div>
                        <div :class="[$style.desc_sub_text]">거래 활성화</div>
                        <div :class="[$style.desc_text]">
                            해당 뮤지션 전용의 NFT 팬 페이지를 생성해 드리며, 이를 통해 해당 뮤지션의 NFT에 관심이 많은 팬들이 구매와 함께 재판매도 활성화 될 수 있게 해드립니다.
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <!-- <section :class="[$style.sub5, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.small_line]"><hr/></div>
                <div :class="[$style.sub_title]">아티스트를 위한 Fancake</div>
                <div :class="[$style.title]">프로세스</div>
                <div :class="[$style.image_section]"><img src="@/assets/images/intro/process.png" alt="프로세스"/></div>
            </div>
        </section> -->
        <section :class="[$style.sub5, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.small_line]"><hr/></div>
                <div :class="[$style.sub_title]">아티스트를 위한 Fancake</div>
                <div :class="[$style.title]">프로세스</div>
                <div :class="[$style.image_section]">
                    <div :class="[$style.bundle]">
                        <div :class="[$style.top]">
                            <div :class="[$style.circle]">
                                <img src="" alt="악수"/>
                            </div>
                        </div>
                        <div :class="[$style.line]">
                            <span :class="[$style.dot]"></span>
                        </div>
                        <div :class="[$style.text]">
                            <div :class="[$style.title]">계약</div>
                            <div :class="[$style.desc]">
                                계약조건 Exclusive<br/>
                                composite<br/>
                                MG 방식 등 협의
                            </div>
                        </div>
                    </div>
                    <div :class="[$style.bundle]">
                        <div :class="[$style.top]">
                            <div :class="[$style.circle]">
                                <img src="" alt="메모"/>
                            </div>
                        </div>
                        <div :class="[$style.line]">
                            <span :class="[$style.dot]"></span>
                        </div>
                        <div :class="[$style.text]">
                            <div :class="[$style.title]">준비</div>
                            <div :class="[$style.desc]">
                                팬케이크 계정 생성<br/>
                                및 NFT지갑 생성
                            </div>
                        </div>
                    </div>
                    <div :class="[$style.bundle]">
                        <div :class="[$style.top]">
                            <div :class="[$style.circle]">
                                <img src="" alt="NFT"/>
                            </div>
                        </div>
                        <div :class="[$style.line]">
                            <span :class="[$style.dot]"></span>
                        </div>
                        <div :class="[$style.text]">
                            <div :class="[$style.title]">NFT 상품생성</div>
                            <div :class="[$style.desc]">
                                NFT 상품화 대상<br/>
                                협의 및 민팅 작업
                            </div>
                        </div>
                    </div>
                    <div :class="[$style.bundle]">
                        <div :class="[$style.top]">
                            <div :class="[$style.circle]">
                                <img src="" alt="카트"/>
                            </div>
                        </div>
                        <div :class="[$style.line]">
                            <span :class="[$style.dot]"></span>
                        </div>
                        <div :class="[$style.text]">
                            <div :class="[$style.title]">거래 개시</div>
                            <div :class="[$style.desc]">
                                거래소 상장
                            </div>
                        </div>
                    </div>
                    <div :class="[$style.bundle]">
                        <div :class="[$style.top]">
                            <div :class="[$style.circle]">
                                <img src="" alt="수익"/>
                            </div>
                        </div>
                        <div :class="[$style.line]">
                            <span :class="[$style.dot]"></span>
                        </div>
                        <div :class="[$style.text]">
                            <div :class="[$style.title]">수익 정산</div>
                            <div :class="[$style.desc]">
                                수익금<br/>
                                주기별 정산
                            </div>
                        </div>
                    </div>
                    <div :class="[$style.bundle]">
                        <div :class="[$style.top]">
                        </div>
                        <div :class="[$style.line]">
                            <span :class="[$style.dot]"></span>
                        </div>
                        <div :class="[$style.text]">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section :class="[$style.sub6, $style.box]">
            <div :class="[$style.width_90per, $style.item]">
                <div :class="[$style.small_line]"><hr/></div>
                <div :class="[$style.sub_title]">아티스트를 위한 Fancake</div>
                <div :class="[$style.title]">계약형태</div>
                <div :class="[$style.desc]">
                    <article :class="[$style.content]">
                        <div :class="[$style.desc_image]"><img src="@/assets/images/intro/sub6_01.png" alt="exclusive" /></div>
                        <div :class="[$style.desc_line]"><hr/></div>
                        <div :class="[$style.desc_text]">
                            뮤지션이 NFT용 독점 디지털 자산(음원 등)을 제작해 유통하는 형태입니다. 뮤지션에게 부여되는 수익률이 가장 높은 계약 형태입니다.
                        </div>
                    </article>
                    <article :class="[$style.content]">
                        <div :class="[$style.desc_image]"><img src="@/assets/images/intro/sub6_02.png" alt="composite" /></div>
                        <div :class="[$style.desc_line]"><hr/></div>
                        <div :class="[$style.desc_text]">
                            뮤지션이 NFT용 독점 디지털 자산과 함께 기존 자산도 함께 NFT로 유통하는 계약 방식입니다. 초기에 다수의 NFT상품을 출시할 수 있습니다.
                        </div>
                    </article>
                    <article :class="[$style.content]">
                        <div :class="[$style.desc_image]"><img src="@/assets/images/intro/sub6_03.png" alt="mg" /></div>
                        <div :class="[$style.desc_line]"><hr/></div>
                        <div :class="[$style.desc_text]">
                            뮤지션이 일정한 금액을 선지급 받고 계약 조건에 따라 NFT상품을 출시하는 방식입니다. 판매수익금의 정산은 MG금액이 선정산된 후 지급됩니다.
                        </div>
                    </article>
                </div>
            </div>
        </section>
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
            iconImage: {
                music: require("../../assets/images/intro/ic_music_on.svg"),
                ticket: require("../../assets/images/intro/ic_ticket_on.svg"),
                image: require("../../assets/images/intro/ic_image_on.svg"),
                video: require("../../assets/images/intro/ic_video_on.svg")
            }
        }
    },
    methods: {
        changeIcon(type, status) {
            switch(type) {
                case 'music':
                    if (status) this.iconImage.music = require("../../assets/images/intro/ic_music_on.svg");
                    else this.iconImage.music = require("../../assets/images/intro/ic_music_off.svg");
                    break;
                case 'ticket':
                    if (status) this.iconImage.ticket = require("../../assets/images/intro/ic_ticket_on.svg");
                    else this.iconImage.ticket = require("../../assets/images/intro/ic_ticket_off.svg");
                    break;
                case 'image':
                    if (status) this.iconImage.image = require("../../assets/images/intro/ic_image_on.svg");
                    else this.iconImage.image = require("../../assets/images/intro/ic_image_off.svg");
                    break;
                case 'video':
                    if (status) this.iconImage.video = require("../../assets/images/intro/ic_video_on.svg");
                    else this.iconImage.video = require("../../assets/images/intro/ic_video_off.svg");
                    break;
                default:
                    break;
            }
        }
    },
}
</script>

<style module>
/* common */
hr {
    display: block; 
    height: 1px;
    border: 0; 
    margin: 1em 0; 
    padding: 0;
}
.width_90per {
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
}
.big_line {
    width: 30%;
}
.big_line hr {
    width: 100%;
    border-top: 5px solid #8b8b8b;
}
.small_line hr {
    width: 62.5px;
    border-top: 3px solid #8b8b8b;
}

/* common box */
.box {
    line-height: 1.4;
}
.box:nth-child(even) {
    background: var(--main-color);
    color: #fff;
}
.box .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 36px 0 130px 0;
}
@media screen and (max-width:768px) {
    .box:first-child .item {
        padding-top: 0;
    }
}
.box .small_line {
    display: flex;
    justify-content: center;
}
.box .title {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    text-align: center;
    font-size: 36px;
    font-weight: 600;
}
.box .sub_title {
    display: flex;
    justify-content: center;
    margin: 10px 0 20px 0;
    font-size: 18px;
}
.box .desc {
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-align: center;
}
.box .subject {
    font-size: 26px;
    font-weight: 700;
}

/* main */
.main {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
@media screen and (max-width:768px) {
    .main {
        margin-top: 0;
    }
}
.main .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/* sub */
.sub1 .image_section {
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
}
.sub1 .image_section .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
}
.sub1 .image_section .icon img {
    width: 49px;
    height: 49px;
    margin-bottom: 15px;
}
.sub2 .desc {
    display: flex;
    justify-content: space-between;
}
.sub2 .desc .content {
    width: 30%;
}
.sub2 .desc .content .subject {
    margin: 27px 0;
}
@media screen and (max-width:768px) {
    .sub2 .desc .content .subject {
        margin: 10px 0;
    }
}
.sub2 .desc .content img {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    height: auto;
}
.sub3 .desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sub3 .desc .desc_title {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
}
.sub3 .desc .desc_icon {
    margin: 0 50px;
}
.sub3 .desc .desc_icon img {
    width: 80px;
}
.sub3 .desc .desc_text {
    margin-top: 30px;
}
.sub3 .desc .desc_image img {
    width: 100%;
    max-width: 500px;
    height: auto;
}
.sub4 .desc {
    display: flex;
    justify-content: space-between;
}
.sub4 .desc .content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 27%;
    padding: 15px 25px 15px 25px;
    border: 2px solid var(--main-color);
    border-radius: 10px;
    text-align: left;
    box-shadow: 5px 2.5px 2.5px rgba(205,188,175,0.7);
    /* box-shadow: 5px 2.5px 2.5px #ece9e2; */
}
.sub4 .desc .desc_title {
    margin-top: 10px;
    font-size: 34px;
    font-weight: 700;
}
.sub4 .desc .desc_sub_title {
    margin: 25px 0 10px 0;
    font-weight: 700;
}
.sub4 .desc .desc_sub_text {
    margin-bottom: 25px;
    font-size: 16px;
}
.sub4 .desc .desc_text {
    font-size: 16px;
    line-height: 1.7;
}
.sub5 {
    display: flex;
    justify-content: center;
    /*background: #ece9e2 !important;
    color: var(--font-black-color) !important; */
    overflow: hidden;
}
/*

.sub5 .title {
    margin-bottom: 0;
}
.sub5 .image_section img {
    width: 100%;
}
*/



.sub5 .item .image_section {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
}
.sub5 .item .image_section .bundle {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 19.5%;
}
.sub5 .item .image_section .bundle .top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
}
.sub5 .item .image_section .bundle .top .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    aspect-ratio: auto 1/1;
    background-color: #fff;
    color: #fff;
    border-radius: 50%;
}
.sub5 .item .image_section .bundle .top .circle img {
    width: 50%;
    aspect-ratio: auto 1/1;
    background: blue;
}
.sub5 .item .image_section .bundle:last-child {
    width: 2.5%;
}
.sub5 .item .image_section .bundle .line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3px;
    margin: 30px;
    background-color: #fff;
}
.sub5 .item .image_section .bundle:last-child .line {
    margin-top: 13px;
    border-top: 20px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 25px solid #fff;
    background-color: transparent;
}
.sub5 .item .image_section .bundle .line .dot {
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
}

.sub5 .item .image_section .bundle .text .title {
    margin-bottom: 20px;
    font-size: 26px;
}
@media screen and (max-width:768px) {
    .sub5 .item .image_section {
        flex-direction: column;
    }
    .sub5 .item .image_section .bundle {
        width: 100%;
        margin-top: 25px;
    }
    .sub5 .item .image_section .bundle:last-child {
        display: none;
    }
    .sub5 .item .image_section .bundle .top { 
        height: 200px;   
    }
    .sub5 .item .image_section .bundle .top .circle {
        width: 50%;
    }
    .sub5 .item .image_section .bundle .line {
        width: 3px;
        height: 30px;
        margin: 0;
    }
}




.sub6 .desc {
    display: flex;
    justify-content: space-between;
}
.sub6 .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
}
.sub6 .desc .desc_image img {
    width: 208px;
    height: 208px;
}
.sub6 .desc .desc_line {
    margin: 15px 0 70px 0;
}
.sub6 .desc .desc_line hr {
    width: 118px;
    border-top: 3px solid var(--main-color);
}
.sub6 .desc .desc_text {
    font-size: 16px;
}

@media screen and (max-width:1260px) {
    /* common */
    .big_line {
        width: 100%;
    }

    /* main */
    .main .title {
        justify-content: center;
        flex-direction: column;
    }
}
@media screen and (max-width:768px) {
    /* sub common */
    .desc {
        display: flex;
        flex-direction: column;
    }
    .desc .content {
        width: 100% !important;
        margin-bottom: 50px;
    }
    .desc .content:last-child {
        margin-bottom: 0;
    }
    .sub6 .desc .desc_line {
        margin: 8px 0;
    }
    
    /* sub */
    .sub3 .desc .desc_icon {
        margin: 20px 0;
        transform: rotate( 90deg );
    }
}
</style>