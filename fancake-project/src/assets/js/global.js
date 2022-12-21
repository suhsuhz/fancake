import lottie from 'lottie-web';
import * as animationData from '@/assets/lottie/loading_dots.json';

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
        }
    }
}


export default {
    install(Vue) {
        Vue.prototype.$showLoadingBar = methods.loadingBar;
    }
}