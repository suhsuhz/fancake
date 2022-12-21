<template>
  <div class="account-area">
    <article class="article">
        <div class="title">이름</div>
        <div class="content">
            <input type="text" v-model="formData.name"/>
        </div>
        <div class="error-msg">{{ errorMsg.name }}</div>
    </article>
    <article class="article">
        <div class="title">이메일</div>
        <div class="content">
            <input type="email" autocomplete="chrome-off" v-model="formData.email"/>
        </div>
        <div class="error-msg">{{ errorMsg.email }}</div>
    </article>
    <article class="article">
        <div class="title">비밀번호</div>
        <div class="content">
            <input type="password" autocomplete="new-password" v-model="formData.password"/>
        </div>
        <div class="error-msg">{{ errorMsg.password }}</div>
    </article>
    <article class="article">
        <div class="title">비밀번호 확인</div>
        <div class="content">
            <input type="password" v-model="formData.passwordConfirmation"/>
        </div>
        <div class="error-msg">{{ errorMsg.passwordConfirmation }}</div>
    </article>
    <article class="article">
        <div class="content">
            <input type="checkbox" name="check" id="saveAgree" v-model="formData.termAgree"/><label class="cur-pointer" for="saveAgree"></label>
            <div class="checkbox-desc">
                <router-link to="/Policy/Terms" target="_blank" :class="[$style.link]">이용약관</router-link>과 <router-link to="/Policy/Privacy" target="_blank" :class="[$style.link]">개인정보처리방침</router-link> 모두동의합니다.
            </div>
        </div>
        <div class="error-msg">{{ errorMsg.termAgree }}</div>
    </article>
    <article class="article link">
        <div class="anchor-area">
            <router-link to="/Login" class="anchor cur-pointer">이미 회원가입을 했습니까?</router-link>
        </div>
        <span class="button bt-main cur-pointer" @click="goJoin">회원등록</span>
    </article>
  </div>
</template>

<script>
import { jsonStringfy } from '@/assets/js/common.js'

export default {
    computed: {
        actionGetError() {
            return (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : ""; 
        }
    },
    data() {
        return {
            formData: {
                email: "",
                name: "",
                password: "",
                passwordConfirmation: "",
                termAgree: false

            },
            errorMsg: {
                email: "",
                name: "",
                password: "",
                passwordConfirmation: "",
                termAgree: ""
            },
        }
    },
    methods: {
        /* ** 가입 버튼 눌렀을 때 ** */
        async goJoin() {
            for(let i=0; i<Object.keys(this.errorMsg).length; i++) {
                const keyValue = Object.keys(this.errorMsg)[i];
                this.errorMsg[keyValue] = "";
            }

            if(!this.formData.agree) { // 약관 동의 안하면 가입 불가
                this.errorMsg.agree = "이용 약관에 동의해 주세요.";
            }

            await this.$store.dispatch('POST_JOIN', this.renameKey(this.formData));

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) this.$router.replace('/Login'); // 에러가 없으면 종료

            if(error['name']) this.errorMsg.name = error['name'][0];
            if(error['email']) this.errorMsg.email = error['email'][0];
            if(error['password']) this.errorMsg.password = error['password'][0];
            if(error['password-confirmation']) this.errorMsg.passwordConfirmation = error['password-confirmation'][0];
            if(error['term-agree']) this.errorMsg.termAgree = error['term-agree'][0];
        },
        renameKey(data) {
            let obj = jsonStringfy(data);
            obj['password-confirmation'] = obj['passwordConfirmation'];
            delete obj['passwordConfirmation'];

            obj['term-agree'] = obj['termAgree'];
            delete obj['termAgree'];

            return obj;   
        }
    },
    created() {
        // 이미 로그인된 상태면 메인 페이지로 보내주기
    }
    
}
</script>

<style module>
.link {
    border-bottom: 1px solid grey;
}
</style>
<style scoped src="@/assets/css/account/login.css">
</style>