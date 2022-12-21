<template>
    <div class="account-area">
      <article class="article">
        비밀번호가 기억나지 않습니까? 로그인 시 사용하는 이메일 주소를 입력해주세요.
      </article>
      <article class="article">
          <div class="title">이메일</div>
          <div class="content">
              <input type="email"/>
          </div>
      </article>
      <article class="article link">
          <span class="button bt-main cur-pointer">비밀번호 재설정 이메일 발송</span>
      </article>
    </div>
  </template>
  
  <script>
  import { login } from '@/api/index.js';
  
  export default {
      data() {
          return {
              email: "",
              password: ""
          }
      },
      created() {
          login()
          .then(function(response) {
              console.log(response);
          })
          .catch(function(error) {
              console.log(error);
          })
      }
  }
  </script>
  
  <style scoped src="@/assets/css/account/login.css">
  </style>