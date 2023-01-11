<template>
    <div :class="[$style.footer_section]">
        <article :class="[$style.info]">
            <div :class="[$style.footer_content]">
                <section>
                    <img :class="[$style.logo]" src="@/assets/images/common/head_logo.png" alt="myfancake 로고"/>
                    <div :class="[$style.text]">
                        주식회사 마이팬케이크<br />
                        대표자 | 고민규 사업자번호 | 343-88-02242<br />
                        주소 | 인천광역시 부평구 부평대로 283, A동 B115-17호<br />
                        이메일 | contact@myfancake.com<br />
                    </div>
                </section>
            </div>
        </article>
        <article :class="[$style.copyright]">
            Copyright ⓒ2022 MyFANCAKE, Inc
        </article>
    </div>
</template>

<script>
</script>
<style module>
.footer_section {
    padding: 75px 0 85px 0;
    background-color: #363636;
    color: #fff;
    font-weight: 200;
}
.footer_section .info {
    display: flex;
    align-items: center;
    margin: 20px auto 30px auto;
    height: 260px;
    background-color: #3f3f3f;
}
@media screen and (max-width:992px) {
    .footer_section .info {
        height: 100px;
    }
}
.footer_section .info .footer_content {
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
}
.footer_section .info .footer_content section{
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer_section .info .footer_content section .text {
    line-height: 22px;
}

.footer_section .info .logo {
    width: 300px;
}
@media screen and (max-width:992px) {
    .footer_section .info .logo {
        width: 100%;
        max-width: 220px;
    }
}
.footer_section .copyright {
    text-align: center;
}
</style>