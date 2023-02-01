<template>
    <div>
        <section class="title_area">
            <h1>아티스트 프로필</h1>
        </section>
        <section class="content_area">
            <article class="article"> <!-- 아티스트 프로필 -->
                <section class="subject">
                    <h1 class="subject_title">아티스트 프로필</h1>
                    <div class="subject_description">아티스트의 정보를 변경합니다.</div>
                </section>
                <section class="substance">
                    <div class="substance_box width-pc70-mo100">
                        <h2 class="substance_title">프로필 이미지</h2>
                        <span class="profile_img"><img :src="actionTeamProfile.profileImageLink" alt="기본 프로필 이미지"/></span>
                        <div class="profile_buutton">
                            <input type="file" id="artistImageTag" class="display-none" accept="image/png, image/jpg, image/PNG, image/JPG, image/jpeg" @change="changeArtistFile"/>
                            <span class="bt-white button_white cur-pointer fit-content" @click="openArtistFile">새 프로필 이미지 선택</span>
                            <!-- <span class="bt-white button_white cur-pointer fit-content">프로필 이미지 삭제</span> -->
                        </div>
                        <div class="error-msg">{{ errorMsg.artistImage }}</div>
                    </div>
                    <div class="substance_box width-pc70-mo100">
                        <h2 class="substance_title">팀명</h2>
                        <div class="substance_content">
                            <input name="teamName" class="width-100per" type="text" @input="setArtistInfo($event)" :value="actionTeamProfile.teamName"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.artist.teamName }}</div>
                    </div>
                    <div class="substance_box width-pc70-mo100">
                        <h2 class="substance_title">전화번호</h2>
                        <div class="substance_content">
                            <input name="phoneNumber" class="width-100per" type="number" @input="setArtistInfo($event)" :value="actionTeamProfile.phoneNumber" placeholder="예시) 01012341234"/>
                        </div>
                        <div class="error-msg">{{ errorMsg.artist.phoneNumber }}</div>
                    </div>
                    <div class="substance_box width-pc70-mo100">
                        <h2 class="substance_title">팀 설명</h2>
                        <div class="substance_content">
                            <textarea name="description" class="width-100per height-250" @input="setArtistInfo($event)" :value="actionTeamProfile.description"></textarea>
                        </div>
                        <div class="error-msg">{{ errorMsg.artist.description }}</div>
                    </div>
                    <div class="substance_bottom">
                        <span class="bt-main cur-pointer" @click="setArtist">저장</span>
                    </div>
                </section>
            </article>
            <article class="article"> <!-- 배너 이미지 -->
                <section class="subject">
                    <h2 class="subject_title">배너 이미지</h2>
                    <div class="subject_description">아티스트의 배너 이미지를 변경합니다.</div>
                </section>
                <section class="substance">
                    <div class="substance_box width-pc70-mo100">
                        <h2 class="substance_title">배너 이미지</h2>
                        <div class="substance_content">
                            <input type="file" id="artistBannerTag" class="display-none" accept="image/png, image/jpg, image/PNG, image/JPG, image/jpeg" @change="addBannerFile"/>
                            <div class="select_banner_img width-100per cur-pointer" 
                                @click="openBannerFile"
                                @dragenter="onDragenter"
                                @dragover="onDragover"
                                @dragleave="onDragleave"
                                @drop="onDrop"
                            >
                                <img src="@/assets/images/common/ic_circle.png" alt="원"/>
                                <p>Select or drag a file | JPEG, PNG</p>
                            </div>
                        </div>
                        <img class="banner_img" :src="banner.previewBanner" alt="배너이미지" v-if="banner.previewBanner"/>
                    </div>
                    <div class="substance_bottom">
                        <span class="bt-main cur-pointer" @click="this.saveBannerFile">저장</span>
                    </div>
                </section>
            </article>
        </section>
    </div>
</template>

<script>
import { jsonStringfy, getFileWidthHeight } from "@/assets/js/common.js";

export default {
    computed: {
        actionGetError() {
            return (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : ""; 
        },
        actionTeamProfile() {
            return this.$store.state.team.info;
        },
        actionBannerInfo() {
            return this.$store.state.team.banner;
        }
    },
    async mounted() {
        this.$showLoadingBar(true);
        await this.$store.dispatch('FETCH_TEAM_INFO');
        this.$showLoadingBar(false);

        const error = this.actionGetError;
        if(Object.keys(error).length > 0) {
            alert("아티스트 등록을 먼저 진행해주세요.");
            this.$router.go(-1);
        }

        this.artist.teamName = this.actionTeamProfile.teamName;
        this.artist.phoneNumber = this.actionTeamProfile.phoneNumber;
        this.artist.description = this.actionTeamProfile.description;
        this.banner.previewBanner = this.actionBannerInfo.bannerImageLink;
    },
    destroyed() {
        this.$loginTimeUpdate();
    },
    data() {
        return {
            isDragged: false,
            artistImage: "",
            artist: {
                teamName: "",
                phoneNumber: "",
                description: ""
            },
            banner: {
                previewBanner: "",
                files: "",
                ev: ""
            },
            errorMsg: {
                artist: {
                    teamName: "",
                    phoneNumber: "",
                    description: ""
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
        setArtistInfo(event) {
            const result = this.getNameAndValue(event)
            this.artist[result.name] = result.value;
        },
        // 프로필파일 변경 버튼 클릭
        openArtistFile() {
            const fileTag = document.getElementById("artistImageTag");
            fileTag.click();
        },
        // drag and drop
        onDragenter() {
            // class 넣기
            this.isDragged = true;
        },
        onDragleave() {
            // class 삭제
            this.isDragged = false;
        },
        onDragover(event) {
            // 드롭을 허용하도록 prevetDefault() 호출
            event.preventDefault();
        },
        onDrop(event) {
            // 기본 액션을 막음 (링크 열기같은 것들)
            event.preventDefault();
            this.isDragged = false;
            //console.log(event.target.files[0]);
            this.banner.files = event.dataTransfer.files;
            this.banner.ev = event;
            //this.changeBannerFile(event, files[0]);
            this.previewFile(this.banner.files[0]);
        },
        saveBannerFile() {
            this.changeBannerFile(this.banner.ev, this.banner.files[0]);
        },
        // 배너 변경 버튼 클릭
        openBannerFile() {
            const fileTag = document.getElementById("artistBannerTag");
            fileTag.click();
        },
        // 아티스트 프로필 이미지 수정
        // 프로필 파일 변경
        async changeArtistFile(e) {
            const file = e.target.files[0];
            const errorMessage = await this.fileValidation(file);
            if(errorMessage) {
                alert(errorMessage);
                e.target.value = "";
                return false;
            }
            
            const formData = new FormData();
            formData.append('image', file, file.name);

            await this.$store.dispatch('POST_ARTIST_IMAGE', formData);

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) return; // 에러가 없으면 종료
            
            if(error['image']) this.errorMsg.artistImage = error['image'][0];
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
        // 배너이미지 변경
        addBannerFile(e) {
            /* const file = e.target.files[0];
            this.changeBannerFile(e, file); */
            this.banner.files = e.target.files;
            this.banner.ev = e;
            this.previewFile(this.banner.files[0]);
        },
        async changeBannerFile(e, file) {
            //const file = e.target.files[0];
            this.$showLoadingBar(true);
            const errorMessage = await this.bannerValidation(file);
            if(errorMessage) {
                alert(errorMessage);
                e.value = "";
                this.$showLoadingBar(false);
                return false;
            }
            
            const formData = new FormData();
            formData.append('image', file, file.name);

            await this.$store.dispatch('POST_ARTIST_BANNER', formData);
            this.$showLoadingBar(false);

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) return; // 에러가 없으면 종료
            
            if(error['image']) this.errorMsg.artistImage = error['image'][0];
        },
        // 프로필파일 validation
        async bannerValidation(file) {
            let message = "";

            if(file.length > 0) {
                message = "파일은 하나만 첨부 가능합니다.";
                return message;
            }

            if(file.size > process.env.VUE_APP_PROFILE_BANNER_SIZE) { // 파일 사이즈
                message = "파일 사이즈는 1MB 이하로 가능합니다.";
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
            const accpetWidth = process.env.VUE_APP_PROFILE_BANNER_PIXEL_WIDTH;
            const accpetHeight = process.env.VUE_APP_PROFILE_BANNER_PIXEL_HEIGHT;
            if(fileWidthHeight.width > accpetWidth ||  fileWidthHeight.height > accpetHeight) { // 파일 가로세로 pixel
                message = "파일은 가로 2048 pixel, 세로 1024 pixel 이하로 가능합니다.";
                return message;
            }

            return message;
        },
        // 이미지 미리보기
        previewFile(file) {
            const fileData = (data) => {
                this.banner.previewBanner = data;
                // this.preview = data
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", function() {
                fileData(reader.result);
            }, false);
        },
        // 계정정보 수정 (팀명, 전화번호, 팀설명)
        async setArtist() {
            this.$showLoadingBar(true);
            for(let i=0; i<Object.keys(this.errorMsg.artist).length; i++) {
                const keyValue = Object.keys(this.errorMsg.artist)[i];
                this.errorMsg.artist[keyValue] = "";
            }

            const obj = {
                "team-name" : this.artist.teamName,
                "phone-number" : this.artist.phoneNumber,   
                "requester" : this.actionTeamProfile.requester,
                "description" : this.artist.description
            }

            await this.$store.dispatch('POST_TEAM_INFO', obj);
            this.$showLoadingBar(false);

            const error = this.actionGetError;
            if(Object.keys(error).length < 1) return; // 에러가 없으면 종료

            if(error['team-name']) this.errorMsg.artist.teamName = error['team-name'][0];
            if(error['phone-number']) this.errorMsg.artist.phoneNumber = error['phone-number'][0];
            if(error['description']) this.errorMsg.artist.description = error['description'][0];
        },

    }
}
</script>

<style module>
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
.substance_box .banner_img {
    margin-top: 10px;
    width: 100%;
    height: auto;
}
</style>