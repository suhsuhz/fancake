import { setPathUrl, clearLocalStorage, clearSessionStorage, setUserLoginStorage } from '@/assets/js/common.js';

export default {
    SET_ERROR(state, error) {
        // 개발자 모드일때만 에러 표시
        if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) console.log(error);

        // 데이터가 잘못된 에러가 아니라면 떠야하는 에러메세지
        if (error.response.status != process.env.VUE_APP_BAD_ENTITY) {
            alert("error");
        }

        state.errorData = error.response.data.error;
    },
    SET_LOGIN_ERROR(state, error) {
        // 개발자 모드일때만 에러 표시
        if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) console.log(error);

        if(error.response.data.error) state.errorData = error.response.data.error;
    },
    CLEAR_ERROR(state) {
        state.errorData = {};
    },
    /* *** USER TOKEN *** */
    SET_LOGIN(state, data) {
        /* ** 로그인 정보 local storage에 저장 ** */
        const obj = {
            access_token: data.access_token,
            user_name: data.user_name,
            user_email: data.user_email
        }
        setUserLoginStorage(obj);
    },
    SET_LOGOUT() {
        clearLocalStorage();
        clearSessionStorage();
    },
    /* *** USER PROFILE *** */
    SET_PROFILE_IMAGE(state, profileImage) {
        state.profile.imageLink = setPathUrl(profileImage);
    },
    SET_USER_PROFILE(state, profileData) { // state로 값을 넘기려면 state를 무조건 인자로 넣어야 함
        if(profileData.profile_image_link) state.profile.imageLink = setPathUrl(profileData.profile_image_link);
        state.profile.name = profileData.name;
        state.profile.email = profileData.email;
        state.profile.nick = profileData.nick;
        state.profile.emailVerified = profileData.email_verified;
        state.profile.artistRequested = profileData.artist_requested;
        state.profile.requestDate = profileData.request_date;
        state.profile.requestResult = profileData.request_result;
        state.profile.teamName = profileData.team_name;
        state.profile.requesterPhoneNumber = profileData.requester_phone_number;
        state.profile.requester = profileData.requester;
    },
    FETCH_PROFILE_FOR_HEADER(state, profileData) { // 헤더 메뉴를 위해 프로필 정보 중 이메일, 아티스트 여부만 가져옴
        state.headerProfile.email = profileData.email;
        state.headerProfile.artistRequested = profileData.artist_requested;
    },
    SET_TEAM_INFO(state, data) {
        if(data.profile_image_link) state.team.info.profileImageLink = setPathUrl(data.profile_image_link);
        state.team.info.description = data.description;
        state.team.info.followed = data.followed;
        state.team.info.phoneNumber = data.phone_number;
        state.team.info.requester = data.requester;
        state.team.info.soldCount = data.sold_count;
        state.team.info.teamName = data.team_name;

        if(data.banner_image_link) state.team.banner.bannerImageLink = setPathUrl(data.banner_image_link);
    },
    SET_ARTIST_IMAGE(state, image) {
        state.team.info.profileImageLink = setPathUrl(image);
    },
    SET_ARTIST_BANNER(state, image) {
        state.team.banner.bannerImageLink = setPathUrl(image);
    },
    SET_PRODUCT_LIST(state, data) {
        switch(data.sort) {
            case 'hot' : 
                state.hotProductList = data;
            break;
            default : 
                state.productList = data;
            break;
        }
    },
    /* *** artist product *** */
    SET_ARTIST_MUSICS(state, data) {
        state.musicList = data;
    },
    SET_ARTIST_FOLLOWS(state, data) {
        state.followList = data;
    }
        
}