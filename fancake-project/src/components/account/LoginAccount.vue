<template>
    <div class="account-area">
        <article class="article">
            <div class="title">이메일</div>
            <div class="content">
                <input type="email" v-model="formData.email" />
            </div>
            <div class="error-msg">{{ errorMsg.email }}</div>
        </article>
        <article class="article">
            <div class="title">비밀번호</div>
            <div class="content">
                <input type="password" v-model="formData.password" @keyup.enter="goLogin" />
            </div>
            <div class="error-msg">{{ errorMsg.password }}</div>
        </article>
        <article class="article">
            <div class="content">
                <input type="checkbox" name="check" id="saveLogin" v-model="isSaveLogin"/><label class="cur-pointer" for="saveLogin"></label>
                <span class="checkbox-desc cur-pointer">로그인 상태 유지</span>
            </div>
        </article>
        <article class="article link">
            <div class="anchor-area">
                <router-link to="/register" class="anchor cur-pointer">회원등록</router-link>
                <router-link to="/reset" class="anchor cur-pointer">비밀번호를 잊었습니까?</router-link>
            </div>
            <span class="button bt-main cur-pointer" @click="goLogin">로그인</span>
        </article>
    </div>
</template>

<script>
import { jsonStringfy, setLocalStorage } from '@/assets/js/common.js';
import { isLogin } from '@/assets/js/common.js';

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from;
        });
    },
    computed: {
        actionGetError() {
            return (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : ""; 
        },
        preveRoutePath() {
            return this.prevRoute;
        }
    },
    data() {
        return {
            formData: {
                email: "",
                password: ""
            },
            isSaveLogin: false,
            errorMsg: {
                email: "",
                password: ""
            }
        }
    },
    created() {
        if (isLogin()) {
            this.$router.replace('/main');
        }
    },
    mounted() {
    },
    methods: {
        /* ** 로그인 버튼 눌렀을 때 ** */
        async goLogin() {
            this.$showLoadingBar(true);
            for(let i=0;i<this.formData.length;i++) {
                this.formData[i].val = "";
            }

            setLocalStorage('isSaveLogin', this.isSaveLogin);
            await this.$store.dispatch('POST_LOGIN', jsonStringfy(this.formData));
            this.$showLoadingBar(false);

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) { // 에러가 없으면 로그인 처리된 것
                if(this.preveRoutePath) {
                    this.$router.push(this.preveRoutePath.fullPath);
                } else {
                    if(Object.keys(error).length < 1) this.$router.go(-1);
                }
            } 
                    
            if (error['email']) this.errorMsg.email = error.email[0];
            if (error['password']) this.errorMsg.password = error.password[0];
        }
    }
}
</script>

<style scoped src="@/assets/css/account/login.css">

</style>