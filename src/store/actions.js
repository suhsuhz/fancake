import { getUserInfo } from '@/assets/js/common.js';
import { axiosGet, axiosPost, axiosfileSubmit } from '@/api/index.js'

export default {
    // ******************* //
    // ****** user ******  //
    // ******************* //
    FETCH_USER_TOKEN({ commit }) {
        commit('SET_USER_INFO', getUserInfo());
    },

    /* * JOIN * */
    POST_JOIN({ commit }, data) {
        return axiosPost(data, process.env.VUE_APP_URL_SET_JOIN)
        .then(res => {
            if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) console.log(res);
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },

    /* * PROFILE * */
    FETCH_PROFILE_USER({ commit }) {
        return axiosGet(process.env.VUE_APP_URL_GET_USER_PROFILE)
        .then(res => {
            if(res.data) {
                const profileData = res.data;
                // 계정정보
                commit('SET_USER_PROFILE', profileData);
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    POST_PROFILE_IMAGE({ commit }, formData) {
        return axiosfileSubmit(formData, process.env.VUE_APP_URL_SET_PROFILE_IMAGE)
            .then(res => {
                if (res.data.image_link) {
                    const imageLink = res.data.image_link;
                    commit('SET_PROFILE_IMAGE', imageLink);
                    commit('CLEAR_ERROR');
                }
            })
            .catch(error => {
                commit('SET_ERROR', error);
            });
    },
    POST_PROFILE_INFO({ commit }, data) {
        return axiosPost(data, process.env.VUE_APP_URL_SET_USER_PROFILE)
        .then(res => {
            if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) console.log(res);
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    POST_USER_NICK({ commit }, data) {
        return axiosPost(data, process.env.VUE_APP_URL_SET_USER_NICK)
        .then(res => {
            if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) console.log(res);
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    POST_PASSWORD({ commit }, data) {
        return axiosPost(data, process.env.VUE_APP_URL_SET_PASSWORD)
        .then(() => {
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    POST_PROFILE_ARTIST({ commit }, data) {
        return axiosPost(data, process.env.VUE_APP_URL_SET_REQ_ARTIST)
        .then(() => {
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },

    // ******************* //
    // ****** team ******* //
    // ******************* //
    FETCH_TEAM_INFO ({ commit }) {
        return axiosGet(process.env.VUE_APP_URL_GET_ARTIST)
        .then(res => {
            if(res.data) {
                const data = res.data;
                // 아티스트 정보
                commit('SET_TEAM_INFO', data);
            }
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    POST_TEAM_INFO({commit}, data) {
        return axiosPost(data, process.env.VUE_APP_URL_SET_ARTIST_INFO)
        .then(res => {
            if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) 
            console.log(res);
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    }, 
    POST_ARTIST_IMAGE({commit}, data) {
        return axiosfileSubmit(data, process.env.VUE_APP_URL_SET_ARTIST_IMAGE)
        .then(res => {
            if (res.data.image_link) {
                const imageLink = res.data.image_link;
                commit('SET_ARTIST_IMAGE', imageLink);
                commit('CLEAR_ERROR');
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        });
    },
    POST_ARTIST_BANNER({commit}, data) {
        return axiosfileSubmit(data, process.env.VUE_APP_URL_SET_ARTIST_BANNER)
        .then(res => {
            if (res.data.image_link) {
                const imageLink = res.data.image_link;
                commit('SET_ARTIST_BANNER', imageLink);
                commit('CLEAR_ERROR');
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        });
    },

    // ******************* //
    // ****** main ******* //
    // ******************* //
    FETCH_ARTIST_LIST({ commit }) {
        return axiosGet(process.env.VUE_APP_URL_GET_ARTIST_LIST)
        .then(res => {
            if(res.data) {
                const data = res.data;
                // 계정정보
                commit('SET_ARTIST_LIST', data);
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    FETCH_PRODUCT_LIST({ commit }, info) {
        return axiosGet(`${process.env.VUE_APP_URL_GET_PRODUCT_LIST}?sort=${info.sort}&offset=${info.offset}&limit=${info.limit}`)
        .then(res => {
            if(res.data) {
                const data = res.data.data;
                // 계정정보
                commit('SET_PRODUCT_LIST', data);
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },

}