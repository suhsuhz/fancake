import { axiosGet, axiosPost, axiosfileSubmit, login, logout } from '@/api/index.js'

export default {

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
    /* * LOGIN * */
    POST_LOGIN({ commit }, data) {
        return login(data)
        .then(res => {
            if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) console.log(res);
            commit('SET_LOGIN', res.data);// 로그인 설정
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_LOGIN_ERROR', error);
        })
    },
    POST_LOGOUT({ commit }) {
        return logout()
        .then(res => {
            if(process.env.NODE_ENV === process.env.VUE_APP_MODE_DEV) console.log(res);
            commit('SET_LOGOUT');// 로그아웃 설정
            commit('CLEAR_ERROR');
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    /* POST_LOGOUT({ commit }) {
        commit('SET_LOGOUT');// 로그아웃 설정
    }, */
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
    FETCH_PROFILE_FOR_HEADER({ commit }) {
        return axiosGet(process.env.VUE_APP_URL_GET_USER_PROFILE)
        .then(res => {
            if(res.data) {
                const profileData = res.data;
                // 계정정보
                commit('FETCH_PROFILE_FOR_HEADER', profileData);
            }
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
    FETCH_PRODUCT_LIST({ commit }, info) { // 전체중에 조건에 따라 제품목록 가져오기
        return axiosGet(`${process.env.VUE_APP_URL_GET_PRODUCT_LIST}?sort=${info.sort}&offset=${info.offset}&limit=${info.limit}`)
        .then(res => {
            if(res.data) {
                const data = res.data.data;
                data.sort = info.sort;
                // 계정정보
                commit('SET_PRODUCT_LIST', data);
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },

    // ***************************** //
    // ****** artist product ******* //
    // ***************************** //
    FETCH_ARTIST_MUSICS({ commit }) { // 해당 아티스트의 제품 목록 불러오기
        return axiosGet(process.env.VUE_APP_URL_ARTIST_MUSICS)
        .then(res => {
            if(res.data) {
                // 계정정보
                //commit('SET_ARTIST_MUSICS', data);
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    },
    FETCH_ARTIST_FOLOWS({ commit }) { // 해당 아티스트의 팔로워 불러오기
        return axiosGet(process.env.VUE_APP_URL_ARTIST_FOLLOWS)
        .then(res => {
            if(res.data) {
                // 계정정보
                //commit('SET_ARTIST_FOLLOWS', data);
            }
        })
        .catch(error => {
            commit('SET_ERROR', error);
        })
    }

}