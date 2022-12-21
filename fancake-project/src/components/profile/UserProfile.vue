<template>
    <div>
        <section class="title_area">
            <h1>프로필</h1>
        </section>
        <section class="content_area">
            <article class="article"> <!-- 계정정보 -->
                <section class="subject">
                    <h1 class="subject_title">계정정보</h1>
                    <div class="subject_description">계정 정보와 이메일 주소를 변경합니다.</div>
                </section>
                <section class="substance">
                    <div class="substance_box">
                        <h2 class="substance_title">프로필 이미지</h2>
                        <span class="profile_img"><img :src="actionUserProfile.imageLink" alt="기본 프로필 이미지"/></span>
                        <input type="file" id="profileImageTag" class="display-none" accept="image/png, image/jpg, image/PNG, image/JPG, image/jpeg" @change="changeProfileFile"/>
                        <span class="bt-white button_white cur-pointer fit-content" @click="openProfileFile">새 프로필 이미지 선택</span>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">이름</h2>
                        <div class="substance_content">
                            <input name="name" class="width-pc70-mo100" type="text"  @input="setProfileInfo($event)" :value="actionUserProfile.name"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.profile.name }}</div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">이메일</h2>
                        <div class="substance_content">
                            <input name="email" autocomplete="chrome-off" class="width-pc70-mo100" type="email" @input="setProfileInfo($event)" :value="actionUserProfile.email"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.profile.email }}</div>
                        <div :class="[$style.error_msg]">이메일 인증이 완료되지 않았습니다. <span class="cur-pointer call_email">인증 이메일 재전송 요청</span></div>
                    </div>
                    <div class="substance_bottom">
                        <span class="bt-main cur-pointer" @click="setProfile">저장</span>
                    </div>
                </section>
            </article>
            <article class="article"> <!-- 닉네임 변경 -->
                <section class="subject">
                    <h2 class="subject_title">닉네임 변경</h2>
                    <div class="subject_description">닉네임을 변경합니다.</div>
                </section>
                <section class="substance">
                    <div class="substance_box">
                        <h2 class="substance_title">닉네임</h2>
                        <div class="substance_content">
                            <input name="nick" class="width-pc70-mo100" type="text" @input="setNickInfo($event)" :value="actionUserProfile.nick"/>
                        </div>
                    </div>
                    <div class="substance_bottom">
                        <span class="bt-main cur-pointer" @click="setNick">저장</span>
                    </div>
                </section>
            </article>
            <article class="article"> <!-- 비밀번호 변경 -->
                <section class="subject">
                    <h2 class="subject_title">비밀번호 변경</h2>
                    <div class="subject_description">보안을 위해 길고, 추측하기 어려운 비밀번호를 사용해주세요.</div>
                </section>
                <section class="substance">
                    <div class="substance_box">
                        <h2 class="substance_title">현재 비밀번호</h2>
                        <div class="substance_content">
                            <input name="oldPassword" class="width-pc70-mo100" type="password"  @input="setPasswordInfo($event)"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.password.oldPassword }}</div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">새로운 비밀번호</h2>
                        <div class="substance_content">
                            <input name="password" autocomplete="new-password" class="width-pc70-mo100" type="password"  @input="setPasswordInfo($event)"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.password.password }}</div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">비밀번호 확인</h2>
                        <div class="substance_content">
                            <input name="passwordConfirmation" autocomplete="new-password" class="width-pc70-mo100" type="password"  @input="setPasswordInfo($event)" @keyup.enter="setPassword"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.password.passwordConfirmation }}</div>
                    </div>
                    <div class="substance_bottom">
                        <span class="bt-main cur-pointer" @click="setPassword">저장</span>
                    </div>
                </section>
            </article>
            <article class="article" v-if="actionUserProfile.artistRequested==false"> <!-- 아티스트 자격 요청 -->
                <section class="subject">
                    <h2 class="subject_title">아티스트 자격 요청</h2>
                    <div class="subject_description">아티스트로 활동할 자격을 요청합니다.</div>
                </section>
                <section class="substance">
                    <div class="substance_box">
                        <h2 class="substance_title">아티스트명</h2>
                        <div class="substance_content">
                            <input name="teamName" class="width-pc70-mo100" type="text" @input="setArtistInfo($event)">
                        </div>
                        <div class="error-msg">{{ errorMsg.artist.teamName }}</div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">연락 받으실 전화번호</h2>
                        <div class="substance_content">
                            <input name="requesterPhoneNumber" class="width-pc70-mo100" type="number" @input="setArtistInfo($event)" placeholder="예시) 01012341234"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.artist.phoneNumber }}</div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">신청자명</h2>
                        <div class="substance_content">
                            <input name="requester" class="width-pc70-mo100" type="text" @input="setArtistInfo($event)" @keyup.enter="setArtist"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.artist.requester }}</div>
                    </div>
                    <div class="substance_bottom">
                        <span class="bt-main cur-pointer" @click="setArtist">저장</span>
                    </div>
                </section>
            </article>
            <article class="article" v-if="actionUserProfile.artistRequested==true"> <!-- 아티스트 자격 요청 이후 -->
                <section class="subject">
                    <h2 class="subject_title">아티스트 자격 정보</h2>
                    <div class="subject_description">아티스트 자격 정보입니다.</div>
                </section>
                <section class="substance">
                    <div class="substance_box">
                        <h2 class="substance_title">승인여부</h2>
                        <div class="substance_content">
                            <div :class="[$style.info_text]"> {{ (actionUserProfile.requestResult == 'waiting') ? "대기중" : "승인완료" }} / 신청일 : {{ actionUserProfile.requestDate }} </div>
                        </div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">아티스트명</h2>
                        <div class="substance_content">
                            <div :class="[$style.info_text]">{{ actionUserProfile.teamName }}</div>
                        </div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">연락 받으실 전화번호</h2>
                        <div class="substance_content">
                            <div :class="[$style.info_text]">{{ actionUserProfile.requesterPhoneNumber }}</div>
                        </div>
                    </div>
                    <div class="substance_box">
                        <h2 class="substance_title">신청자명</h2>
                        <div class="substance_content">
                            <div :class="[$style.info_text]">{{ actionUserProfile.requester }}</div>
                        </div>
                    </div>
                    <div class="substance_bottom" :class="[$style.substance_bottom_white]">
                    </div>
                </section>
            </article>
            <article class="article"> <!-- 계정 삭제 -->
                <section class="subject">
                    <h2 class="subject_title">계정 삭제</h2>
                    <div class="subject_description">계정을 영구적으로 삭제합니다.</div>
                </section>
                <section class="info">
                    <div class="info_box">
                        <div class="info_description">계정을 삭제하면 계정에 속한 모든 정보도 같이 영구히 삭제됩니다. 계정 삭제 하기 전에, 필요한 데이터와 정보를 보관하시길 바랍니다.</div>
                        <span class="bt-red fit-content cur-pointer">계정 삭제</span>
                    </div>
                </section>
            </article>
        </section>
    </div>
</template>

<script>
import { mapGetters  } from 'vuex';
import { getFileWidthHeight, jsonStringfy } from "@/assets/js/common.js";

export default {
    computed: {
        ...mapGetters([
            'FETCH_PROFILE_USER'
        ]),
        actionGetError() {
            return (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : ""; 
        },
        actionUserProfile() {
            return this.$store.state.profile; 
        }
    },
    async mounted() {
        this.$showLoadingBar(true);
        await this.$store.dispatch('FETCH_PROFILE_USER');
        this.$showLoadingBar(false);
        this.profile.name = this.actionUserProfile.name;
        this.profile.email = this.actionUserProfile.email;
        this.nick = this.actionUserProfile.nick;
    },
    data() {
        return {
            profileImage: "",
            profile: {
                name: "",
                email: "",
            },
            nick: "",
            password: {
                oldPassword: "",
                password: "",
                passwordConfirmation: ""
            },
            artist: {
                requestDate : "",
                requestResult : "",
                teamName : "",
                requesterPhoneNumber : "",
                requester : ""
            },
            errorMsg: {
                profileImage: "",
                profile: {
                    name: "",
                    email: ""
                },
                nick: "",
                password: {
                    oldPassword: "",
                    password: "",
                    passwordConfirmation: ""
                },
                artist: {
                    teamName: "",
                    phoneNumber: "",
                    requester: ""
                }
            }
        }
    },
    methods: {
        getNameAndValue(event) {
            const name = event.target.name;
            const value = event.target.value;
            return {name, value}
        },
        // 프로필 기본 정보 값 변경
        setProfileInfo(event) {
            const result = this.getNameAndValue(event)
            this.profile[result.name] = result.value;
        },
        // 닉네임 정보 값 변경
        setNickInfo(event) {
            const result = this.getNameAndValue(event)
<<<<<<< HEAD
            this.nick = result.value;
=======
            this.nick[result.name] = result.value;
>>>>>>> 909cbd124ccdd95d389d143fdba8a2bb396f02f6
        },
        // 아티스트 기본정보 값 변경
        setArtistInfo(event) {
            const result = this.getNameAndValue(event)
            this.artist[result.name] = result.value;
        },
        // 비밀번호 값 변경
        setPasswordInfo(event) {
            const result = this.getNameAndValue(event)
            this.password[result.name] = result.value;
        },
        // 프로필파일 변경 버튼 클릭
        openProfileFile() {
            const fileTag = document.getElementById("profileImageTag");
            fileTag.click();
        },
        // 프로필 파일 변경
        async changeProfileFile(e) {
            this.$showLoadingBar(true);
            const file = e.target.files[0];
            const errorMessage = await this.fileValidation(file);
            if(errorMessage) {
                alert(errorMessage);
                e.target.value = "";
                this.$showLoadingBar(false);
                return false;
            }
            
            const formData = new FormData();
            formData.append('image', file, file.name);

            await this.$store.dispatch('POST_PROFILE_IMAGE', formData);
            this.$showLoadingBar(false);

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) return; // 에러가 없으면 종료
            
            if(error['image']) this.errorMsg.profileImage = error['image'][0];
        },
        // 프로필파일 validation
        async fileValidation(file) {
            let message = "";

            if(file.length > 0) {
                message = "파일은 하나만 첨부 가능합니다.";
                return message;
            }

            if(file.size > process.env.VUE_APP_PROFILE_IMAGE_SIZE) { // 파일 사이즈
                message = "파일 사이즈는 200kb 이하로 가능합니다.";
                return message;
            }

            const fileRegexp = /png|jpg|jpeg/gi;
            const isMatchFileType = file.type.match(fileRegexp);

            if(!isMatchFileType) { // 파일 형식
                message = "파일 형식은 jpg, png만 가능합니다.";
                return message;
            } 
            // 파일타입이 이미지일 때만 실행하기 때문에 항상 isMathFileType 이후에 실행
            const fileWidthHeight = await getFileWidthHeight(file);
            if(fileWidthHeight.width > process.env.VUE_APP_PROFILE_IMAGE_PIXEL ||  fileWidthHeight.height > process.env.VUE_APP_PROFILE_IMAGE_PIXEL) { // 파일 가로세로 pixel
                message = "파일은 가로, 세로 1024 pixel 이하로 가능합니다.";
                return message;
            }

            return message;
        },
        // 계정정보 수정 (이름, 이메일)
        async setProfile() {
            this.$showLoadingBar(true);
            for(let i=0; i<Object.keys(this.errorMsg.profile).length; i++) {
                const keyValue = Object.keys(this.errorMsg.profile)[i];
                this.errorMsg.profile[keyValue] = "";
            }

            const obj = {
                "email" : this.profile.email,
                "name" : this.profile.name
            }
            await this.$store.dispatch('POST_PROFILE_INFO', obj);
            this.$showLoadingBar(false);

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) return; // 에러가 없으면 종료

            if(error['email']) this.errorMsg.profile.email = error['email'][0];
            if(error['name']) this.errorMsg.profile.name = error['name'][0];
        },
        // 닉네임 변경
        async setNick() {
            this.$showLoadingBar(true);
            this.errorMsg.nick = "";

            const obj = {
                nick : this.nick,
            }

            await this.$store.dispatch('POST_USER_NICK', obj);
            this.$showLoadingBar(false);
            
            const error = this.actionGetError;
            if(Object.keys(error).length < 1) return; // 에러가 없으면 종료
            if(error['nick']) this.errorMsg.nick = error['nick'][0];
        },
        // 비밀번호 변경
        async setPassword() {
            for(let i=0; i<Object.keys(this.errorMsg.password).length; i++) {
                const keyValue = Object.keys(this.errorMsg.password)[i];
                this.errorMsg.password[keyValue] = "";
            }

            if(!confirm("비밀번호를 변경하시겠습니까?")) return false;
            this.$showLoadingBar(true);
            const passwordObj = {
                "old-password" : this.password.oldPassword,
                "password" : this.password.password,
                "password-confirmation" : this.password.passwordConfirmation
            }

            await this.$store.dispatch('POST_PASSWORD', passwordObj);
            this.$showLoadingBar(false);

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) {
                alert("변경되었습니다.");
                return; // 에러가 없으면 종료
            } 

            if(error['old-password']) this.errorMsg.password.oldPassword = error['old-password'][0];
            if(error['password']) this.errorMsg.password.password = error['password'][0];
            if(error['password-confirmation']) this.errorMsg.password.passwordConfirmation = error['password-confirmation'][0];
        },
        // 아티스트 자격요청
        async setArtist() {
            this.$showLoadingBar(true);
            for(let i=0; i<Object.keys(this.errorMsg.artist).length; i++) {
                const keyValue = Object.keys(this.errorMsg.artist)[i];
                this.errorMsg.artist[keyValue] = "";
            }

            const artistObj = {
                'team-name': this.artist.teamName,
                'phone-number': this.artist.requesterPhoneNumber,
                'requester': this.artist.requester,
            }

            await this.$store.dispatch('POST_PROFILE_ARTIST', artistObj);
            this.$showLoadingBar(false);

            const error = this.actionGetError;
<<<<<<< HEAD
            if(Object.keys(error).length < 1) this.$router.go(); // 에러가 없으면 종료
=======
            if(Object.keys(error).length < 1) return; // 에러가 없으면 종료
>>>>>>> 909cbd124ccdd95d389d143fdba8a2bb396f02f6
            
            if(error['team-name']) this.errorMsg.artist.teamName = error['team-name'][0];
            if(error['phone-number']) this.errorMsg.artist.phoneNumber = error['phone-number'][0];
            if(error['requester']) this.errorMsg.artist.requester = error['requester'][0];
        }
    }
}
</script>

<style module>
.substance_bottom_white {
    margin-top: 0 !important;
    background-color: #fff !important;
}
.info_text {
    color: var(--font-grey-color);
}
.error_msg {
    margin-top: 10px;
}
</style>
<style scoped>
.call_email {
    line-height: 15px;
    border-bottom: 1px solid var(--font-grey-color);
}
.profile_container .content_area .article .substance .profile_img {
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
    overflow: hidden;
    border-radius: 50%;
}
.profile_container .content_area .article .substance .profile_img img {
    width: 100%;
    height: 100%;
}
</style>