<template>
    <div :class="[$style.footer_section]">
        <article :class="[$style.info]">
            <section>
                <img :class="[$style.logo]" src="@/assets/images/common/head_logo.png" alt="myfancake 로고"/>
            </section>
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
    margin-top: 120px;
    padding: 75px 0 85px 0;
    background-color: #363636;
    color: #fff;
}
.footer_section .info section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px 0 30px;
    padding: 62px 5% 0 5%;
    height: 260px;
    background-color: #3f3f3f;
}
.footer_section .info .logo {
    width: 300px;
}
.footer_section .copyright {
    text-align: center;
}
</style>