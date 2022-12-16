import axios from "axios";
import { getUserInfo } from "@/assets/js/common.js";

// Http request & response, token 관련 설정
const config = {
    baseUrl: process.env.VUE_APP_URL,
    headers: {
        //"Access-Control-Allow-Origin": "*",
        //"Access-Control-Request-Method": "POST",
        //"Access-Control-Request-Headers": "Content-Type",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    fileHeaders: {
        'Content-Type': 'multipart/form-data; boundary=boundary',
        'Accept': 'application/json',
        //'Authorization': 'Bearer ', //+ token
    }
}

// API 함수 정리
function login(formData) {
    console.log(`${config.baseUrl}${process.env.VUE_APP_URL_SET_LOGIN}`);
    //return axios.get(`${config.baseUrl}login`, params: data, config.headers)
    return axios({
        method:'post',
        url:`${config.baseUrl}${process.env.VUE_APP_URL_SET_LOGIN}`,
        data: formData,
        headers: config.headers
    });
}

/* ** get ** */
function axiosGet(url) {
    //return axios.get(`${config.baseUrl}login`, params: data, config.headers)
    const loginUserData = getUserInfo();
    if (loginUserData) config.headers.Authorization = `Bearer ${loginUserData.access_token}`;
    return axios({
        method:'get',
        url:`${config.baseUrl}${url}`,
        headers: config.headers
    });
}

/* ** post ** */
function axiosPost(data, url) {
    //return axios.get(`${config.baseUrl}login`, params: data, config.headers)
    const loginUserData = getUserInfo();
    if (loginUserData) config.headers.Authorization = `Bearer ${loginUserData.access_token}`;

    return axios({
        method:'post',
        url:`${config.baseUrl}${url}`,
        data: data,
        headers: config.headers
    });
}
function axiosfileSubmit(data,url) {
    const loginUserData = getUserInfo();
    if (loginUserData) config.fileHeaders.Authorization = `Bearer ${loginUserData.access_token}`;

    return axios({
        method:'post',
        url:`${config.baseUrl}${url}`,
        data: data,
        headers: config.fileHeaders
    });
}

/* ** delete ** */
function axiosDelete(data, url) {
    const loginUserData = getUserInfo();
    if (loginUserData) this.config.headers.Authorization = `Bearer ${loginUserData.access_token}`;
    return axios({
        method:'post',
        url:`${config.baseUrl}${url}`,
        params: data,
        headers: config.headers
    });
}

export {
    login,
    axiosGet,
    axiosPost,
    axiosDelete,
    axiosfileSubmit
}