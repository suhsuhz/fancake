<template>
    <div>
        <!-- pc -->
        <div :class="[$style.header_container_pc]">
            <article :class="[$style.logo]">
                <img src="@/assets/images/common/head_logo.png" alt="myfancake 로고" />
            </article>
            <article :class="$style['menu']">
                <ul :class="$style['list']">
                    <li>
                        <router-link to="/Main" class="cur-pointer">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/Main" class="cur-pointer">About</router-link>
                    </li>
                    <li>
                        <router-link to="/Main" class="cur-pointer">Product</router-link>
                    </li>
                </ul>
                <div :class="[$style.menu_list]">
                    <div :class="[$style.search]">
                        <input type="search" placeholder="Search" />
                        <img src="@/assets/images/common/ic_search.png" alt="돋보기" />
                    </div>
                    <div :class="$style['division']">
                        <img src="@/assets/images/common/ic_line.png" alt="구분선" />
                    </div>
                    <div id="pcMenu" class="cur-pointer" :class="[$style.my]" @mouseover="openPcMenu" @mouseleave="closePcMenu">
                        <span>계정</span><!--<img data-v-5caa0b1c="" src="" alt="화살표">-->
                        <ul class="pc_menu" :class="[$style.my_list, pcMenuCss]">
                            <li>내용1</li>
                            <li>내용2</li>
                            <li>내용3</li>
                            <li :class="[$style.border]"></li>
                            <li>내용4</li>
                            <li>내용5</li>
                            <li class="cur-pointer">로그아웃</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
        <!-- mobile -->
        <div :class="[$style.header_container_mobile]">
            <section :class="[$style.top]"> <!-- top -->
                <article :class="[$style.logo]">
                    <img src="@/assets/images/common/head_logo.png" alt="myfancake 로고"/>
                </article>
                <article :class="[$style.mobile_menu]" @click="openMobileMenu">
                    <img src="@/assets/images/common/ic_mobile_menu.png" alt="메뉴"/>
                </article>
            </section>
            <section class="mobile_menu_background" :class="mobileBackgroundCss" @click="closeMobileMenu">
            </section>
            <section :class="[$style.menu, mobileMenuCss]"> <!-- menu -->
                <div :class="[$style.list]">
                    <article :class="[$style.head]">
                        <img :class="[$style.list_logo]" src="@/assets/images/common/head_logo.png" alt="myfancake 로고" />
                        <img :class="[$style.close]" src="@/assets/images/common/ic_close.png" alt="닫기" @click="closeMobileMenu"/>
                    </article>
                    <article :class="[$style.sub]">
                        <span class="bt-white" :class="[$style.button]">로그인</span>
                        <span class="bt-white" :class="[$style.button]">마이메뉴</span>
                    </article>
                    <article :class="[$style.content]">
                        <div :class="[$style.depth1]">menu1</div>
                        <div :class="[$style.depth2]">sub-menu1-1</div>
                        <div :class="[$style.depth2]">sub-menu1-2</div>
                        <div :class="[$style.line]"></div>
                        <div :class="[$style.depth1]">menu2</div>
                        <div :class="[$style.depth2]">sub-menu2-1</div>
                        <div :class="[$style.depth2]">sub-menu2-2</div>
                        <div :class="[$style.depth2]">sub-menu3-2</div>
                        <div :class="[$style.line]"></div>
                        <div :class="[$style.depth1]">menu3</div>
                        <div :class="[$style.line]"></div>
                        <div :class="[$style.depth1]">menu4</div>
                    </article>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
//import { useCssModule } from 'vue';
//const $style = useCssModule();
export default {
    data() {
        return {
           //$style: useCssModule(),
           mobileMenuCss: "mobile_menu_remove",
           mobileBackgroundCss: "",
           pcMenuCss: "off"
        }
    },
    methods: {
        closeMobileMenu: function() {
            this.mobileMenuCss = "slide_out_animation mobile_menu_remove";
            this.mobileBackgroundCss = "";
        },
        openMobileMenu: function() {
            this.mobileMenuCss = "slide_in_animation mobile_menu_on";
            this.mobileBackgroundCss = "on";
        },
        openPcMenu: function() {
            this.pcMenuCss = "on";
        },
        closePcMenu: function(e) {
            console.log(e.target.id);
            this.pcMenuCss = "off";
        }
    }
}
</script>
<style scoped>
.slide_in_animation {
    animation-duration: 0.5s;
    animation-name: slidein;
    animation-iteration-count: 1;
    left: 10%;
}
.slide_out_animation {
    animation-duration: 0.5s;
    animation-name: slideout;
    animation-iteration-count: 1;
    left: 100%;
}
.mobile_menu_remove {
    left: 100%;
}
.mobile_menu_on {
    left: 10%;
}
@keyframes slidein {
    from {
        left: 100%;
    }
    to {
        left: 10%;
    }
}
@keyframes slideout {
    from {
        left: 10%;
    }
    to {
        left: 100%;
    }
}
.mobile_menu_background {
    display: flex;
    width: 100%;
    height: 100vh;
    left: 100%;
    background-color: rgba(113, 113, 113, 0.7);
    position: absolute;
    z-index: 8;
}
.mobile_menu_background.on {
    left: 0%;
}
.pc_menu.on {
    display: block !important; 
}
.pc_menu.off {
    display: none !important;
}

</style>
<style module>
.backrgound {
    position: relative;
}
/* pc / mobile 메뉴 나누기 */
.header_container_mobile {
    display: none !important;
}
.header_container_pc {
    display: flex !important;
}
@media screen and (max-width:992px) {
    .header_container_pc {
        display: none !important;
    }
    .header_container_mobile {
        display: flex !important;
    }
}
/* *** mobile, tablet *** */
.display_none {
    display: none;
}
.header_container_mobile .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 20px 0;
}
.header_container_mobile .top .logo img {
    width: 220px;
}
.header_container_mobile .top .mobile_menu img {
    width: 45px;
    padding: 5px;
}
.header_container_mobile .menu {
    width: 90%;
    height: 100vh;
    background: #fff;
    position: absolute;
    z-index: 8;
}
.header_container_mobile .menu .list {
    margin: 20px 30px;
    height: 80%;
}
.header_container_mobile .menu .list .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}
.header_container_mobile .menu .list .head .list_logo {
    width: 200px;
}
.header_container_mobile .menu .list .head .close {
    width: 40px;
    padding: 5px;
}
.header_container_mobile .menu .list .sub {
    display: flex;
    justify-content: center;
    margin: 30px 0;
}
.header_container_mobile .menu .list .button {
    width: calc(50% - 15px); /* 50% - margin */
    max-width: 250px;
    margin-right: 15px;
    padding: 15px 0;
    text-align: center;
}
.header_container_mobile .menu .list .button:last-child {
    margin-right: 0;
}
.header_container_mobile .menu .list .content {
    margin-top: 10px;
    height: 100%;
    overflow-y: auto;
}
.header_container_mobile .menu .list .content .depth1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0 5px;
}
.header_container_mobile .menu .list .content .depth2 {
    font-size: 20px;
    margin: 20px 15px 0 15px;
}
.header_container_mobile .menu .list .content .line {
    width: 100%;
    margin: 20px 0;
    border-bottom: 1px solid var(--border-grey-color);
}

/* *** pc *** */
.header_container_pc {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 45px 0;
}
.header_container_pc .logo img {
    width: 220px;
}

.header_container_pc .menu {
    display: flex;
    align-items: center;
}

.header_container_pc .menu .list {
    display: flex;
    align-items: center;
    font-size: 20px;
}
.header_container_pc .menu .list li {
    margin-right: 15px;
}

.header_container_pc .menu .menu_list {
    display: flex;
    align-items: center;
}

.header_container_pc .menu .menu_list .search {
    position: relative;
}
.header_container_pc .menu .menu_list .search input[type='search'] {
    padding: 10px 35px 10px 15px;
    border: 1px solid var(--border-grey-color);
    border-radius: 5px;
}

.header_container_pc .menu .menu_list .search img {
    width: 25px;
    height: auto;
    position: absolute;
    right: 10px;
    top: 10px;
}
.header_container_pc .menu .menu_list .division img {
    transform: rotate(90deg);
}
.header_container_pc .menu .menu_list .my {
    position: relative;
    font-size: 20px;
}
.header_container_pc .menu .menu_list .my .my_list {
    display: block;
    position: absolute;
    width: 80px;
    top: 25px;
    padding: 20px 8px;
    background: var(--background-grey-color);
    font-size: 15px;
}
.header_container_pc .menu .menu_list .my .my_list .border {
    width: 100%;
    border-bottom: 1px solid var(--main-grey-color);
}
.header_container_pc .menu .menu_list .my .my_list li {
    margin-bottom: 5px;
}
</style>