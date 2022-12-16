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
                <input type="checkbox" name="check" id="saveLogin" /><label class="cur-pointer" for="saveLogin"></label>
                <span class="checkbox-desc cur-pointer">로그인 상태 유지</span>
            </div>
        </article>
        <article class="article link">
            <div class="anchor-area">
                <router-link to="/Register" class="anchor cur-pointer">회원등록</router-link>
                <router-link to="/Reset" class="anchor cur-pointer">비밀번호를 잊었습니까?</router-link>
            </div>
            <span class="button bt-main cur-pointer" @click="goLogin">로그인</span>
        </article>
    </div>
</template>

<script>
import { login } from '@/api/index.js';
import { jsonStringfy, setUserLocalStorage } from '@/assets/js/common.js'

export default {
    data() {
        return {
            formData: {
                email: "",
                password: ""
            },
            errorMsg: {
                email: "",
                password: ""
            }
        }
    },
    created() {

    },
    methods: {
        /* ** 로그인 버튼 눌렀을 때 ** */
        goLogin() {
            for(let i=0;i<this.formData.length;i++) {
                this.formData[i].val = "";
            }

            login(jsonStringfy(this.formData))
                .then(res => {
                    const data = res.data;
                    if (data.result) { // 응답 성공
                        this.setLoginInfo(data);
                        this.$router.go(-1);
                    }
                })
                .catch(e => {
                    console.log(e);
                    if (e.response.status != process.env.VUE_APP_BAD_ENTITY) {
                        alert("error");
                        return false;
                    }

                    const errorData = e.response.data.error;
                    
                    if (errorData.email) this.errorMsg.email = errorData.email[0];
                    if (errorData.password) this.errorMsg.password = errorData.password[0];
                })
        },
        /* ** 로그인 정보 local storage에 저장 ** */
        setLoginInfo(data) {
            const obj = {
                access_token: data.access_token,
                user_name: data.user_name,
                user_email: data.user_email
            }
            setUserLocalStorage(obj);
        }
    }
}
</script>

<style scoped src="@/assets/css/account/login.css">

</style>