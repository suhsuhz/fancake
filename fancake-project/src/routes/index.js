import Vue from 'vue';
import VueRouter from 'vue-router';

/* ** view 페이지 ** */
import PageNotFound from '../views/PageNotFound.vue';
import AccountView from '../views/AccountView.vue';
import PolicyView from '../views/PolicyView.vue';
import ProfileView from '../views/ProfileView.vue';
import MainView from '../views/MainView.vue';
import ProductView from '../views/ProductView.vue';

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
// product 

Vue.use(VueRouter);

// router 인스턴스
export const router = new VueRouter({
    mode: 'history',
    routes: [
        // 404
        { path: '*', component: PageNotFound },
        // main
        {   path: '/Main', 
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
                { path: 'Login', component: Login }, // 로그인
                { path: 'Register', component: Join }, // 회원가입
                { path: 'Reset', component: Reset }, // 비밀번호 변경
            ]
        },
        // 약관
        {   path: '/Policy', 
            component: PolicyView,
            children: [
                { path: '/', component: Terms },
                { path: 'Terms', component: Terms }, // 약관
                { path: 'Privacy', component: Privacy } // 개인정보 처리방침
            ]
        },
        // 마이페이지
        {
            path: '/Profile',
            component: ProfileView,
            children: [
                { path: 'User', component: User },
                { path: 'Artist', component: Artist }
            ]
        },
        // 프로덕트 페이지
        {
            path: '/Product',
            component: ProductView,
        }
    ]
});