import lottie from 'lottie-web';
import * as animationData from '@/assets/lottie/loading_dots.json';
import { getLocalStorage, setLocalStorage, jsonStringfy } from '@/assets/js/common.js';

const methods = {
    setLoading() {
        const loadingElement = document.getElementById('loadingPlayer');
        this.anim = lottie.loadAnimation({
            container: loadingElement,
            renderer: "svg",
            loof: true,
            autoplay: true,
            animationData: animationData.default,
            path: '@/assets/lottie/loading_dots.json'
        });

        this.anim.play();
    },
    /**
     * 로딩화면 on /off
     * @param {boolean} bool true: 로딩on / false: 로딩off
     */
    loadingBar(bool) {
        const loadingElement = document.getElementById('loadingPlayer');
        //const loadingElement = this.$refs.loadingPlayer;
        if(bool && loadingElement) {
            methods.setLoading();
            document.body.style.overflowY = "hidden";
            loadingElement.classList.add('loading_section');
        } else {
            lottie.destroy();
            document.body.style.overflowY = "auto";
            loadingElement.classList.remove('loading_section');
            this.$loginTimeUpdate();
        }
    },

    // 로그인 시간 업데이트
    setLoginTimeStamp() {
        const userInfo = getLocalStorage('user');
        if(userInfo) setLocalStorage('loginTime', new Date().getTime());
    },
    
    // 로그인 시간 - 현재 시간 비교후 72시간 지났으면 로그아웃
    /**
     * 
     * @returns true : 로그아웃 해야함 , false : 아직 로그아웃할 때 가 안됨
     */
    autoLogout() {
        const nowTime = new Date().getTime();
        const loginTime = getLocalStorage('loginTime');
        if(!loginTime) return false; // 로그인이 안된 상태임
        const timeGapMin = ((nowTime - loginTime) / 1000) / 60;
        //console.log(timeGapMin);

        if(timeGapMin > (72 * 60)) this.logout();
    },

    // 로그아웃
    async logout() {
        await this.$store.dispatch('POST_LOGOUT');

        const error = (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : "";
        if(Object.keys(error).length < 1) {
            location.replace('/Main');
            return;
        }
        alert("로그아웃중 오류가 발생했습니다.");
    }
}

export default {
    install(Vue) {
        Vue.prototype.$showLoadingBar = methods.loadingBar;
        Vue.prototype.$loginTimeUpdate = methods.setLoginTimeStamp;
        Vue.prototype.$autoLogout = methods.autoLogout;
        Vue.prototype.$logout = methods.logout;
    }
}