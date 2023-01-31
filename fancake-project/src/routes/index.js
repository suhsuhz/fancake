import Vue from 'vue';
import VueRouter from 'vue-router';

/* ** view 페이지 ** */
import PageNotFound from '../views/PageNotFound.vue';
import AccountView from '../views/AccountView.vue';
import PolicyView from '../views/PolicyView.vue';
import ProfileView from '../views/ProfileView.vue';
import MainView from '../views/MainView.vue';
import ProductView from '../views/ProductView.vue';
import AboutView from '../views/AboutView.vue';
import IntroView from '../views/IntroView.vue';
import ArtistView from '../views/ArtistView.vue';

/* ** components ** */
// Account
import Login from '@/components/account/LoginAccount.vue';
import Join from '@/components/account/JoinAccount.vue';
import Reset from '@/components/account/ResetAccount.vue';
// Policy
import Terms from '@/components/policy/TermsPolicy.vue';
import Privacy from '@/components/policy/PrivacyPolicy.vue';
// Profile
import User from '@/components/profile/UserProfile.vue';
import Artist from '@/components/profile/ArtistProfile.vue';
// artist
import Musics from '@/components/artist/MusicsArtist.vue';
// product 
import ProductDetail from '@/components/product/DetailProduct.vue';

Vue.use(VueRouter);

// router 인스턴스
export const router = new VueRouter({
    mode: 'history',
    routes: [
        // 404
        { path: '*', component: PageNotFound },
        {
            path: '/',
            component: MainView,
            children: [
                { path: '/', component: MainView }, // 기본
            ]

        },
        // main
        {   path: '/main', 
            component: MainView,
            children: [
                { path: '/', component: MainView }, // 기본
            ]
        },
        // index
        {   path: '/', 
            component: AccountView,
            children: [
                { path: '/', component: MainView }, // 기본
                { path: 'login', component: Login }, // 로그인
                { path: 'register', component: Join }, // 회원가입
                { path: 'reset', component: Reset }, // 비밀번호 변경
            ]
        },
        // 약관
        {   path: '/policy', 
            component: PolicyView,
            children: [
                { path: '/', component: Terms },
                { path: 'terms', component: Terms }, // 약관
                { path: 'privacy', component: Privacy } // 개인정보 처리방침
            ]
        },
        // 마이페이지
        {
            path: '/profile',
            component: ProfileView,
            children: [
                { path: 'user', component: User },
                { path: 'artist', component: Artist }
            ]
        },
        // 프로덕트 페이지
        {
            path: '/product',
            component: ProductView,
            children: [
                //{ path: 'list', component:  productList }, // 제품 목록
                { path: 'detail', component:  ProductDetail }, // 제품 상세
            ]
        },
        // about 페이지
        {
            path: '/about',
            component: AboutView,
        },
        // for artist 페이지
        {
            path: '/intro',
            component: IntroView,
        },
        // artist product 페이지
        {
            path: '/artist',
            component: ArtistView,
            children: [
                { path: 'musics', component:  Musics }, // 아티스트 제품 목록
            ]
        },
    ]
});