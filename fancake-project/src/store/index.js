import Vue from 'vue';
import vuex from 'vuex';

import mutations from './mutaions.js';
import actions from './actions.js';

Vue.use(vuex);

const store = new vuex.Store({
    state: {
        errorData: {},
        userInfo: "",
        // user pforile
        profile: {
            imageLink: require('@/assets/images/common/default_profile.svg'),
            name: "",
            email: "",
            nick: "",
            emailVerified : false,
            artistRequested : false,
            requestDate : "",
            requestResult : "",
            teamName : "",
            requesterPhoneNumber : "",
            requester : ""
        },
        artist: {

        },
        team: {
            info: {
                profileImageLink: require('@/assets/images/common/default_profile.svg'),
                description : "", 
                followed : "",
                phoneNumber : "",
                requester : "",
                soldCount : "",
                teamName : ""
            },
            banner: {
                bannerImageLink: ""
            }
        },
        headerProfile: {
            email: "",
            artistRequested: ""
        },
        artistList: {

        },
        productList: {
            
        },
        hotProductList: {
            
        }
    },
    mutations,
    actions,
    getters: {

    }
});

export {
    store
}