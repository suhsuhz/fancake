function setLocalStorage(name, obj) {
    window.localStorage.setItem(name, obj);
}
function getLocalStorage(name) {
    const objString = window.localStorage.getItem(name);
    return JSON.parse(objString);
}
function clearLocalStorage() {
    window.localStorage.clear();
}

function setSessionStorage(name, obj) {
    window.sessionStorage.setItem(name, obj);
}
function getSessionStorage(name) {
    const objString = window.sessionStorage.getItem(name);
    return JSON.parse(objString);
}
function clearSessionStorage() {
    window.sessionStorage.clear();
}


function setUserLoginStorage(obj) {
    const nowTime = new Date().getTime();
    obj.time_stamp = nowTime;
    const objString = JSON.stringify(obj);

    if(getLocalStorage('isSaveLogin') == true) { // 로그인 유지 선택했을 때만 local에 값 저장
        setLocalStorage('user', objString);
        setLocalStorage('loginTime', nowTime);
    }
    
    setSessionStorage('user',objString);
}

function getUserInfo() {
    return getSessionStorage('user');
}

// 로그인 여부
function isLogin() {
    const localUserInfo = getLocalStorage('user');
    const userInfo = getSessionStorage('user');

    if(localUserInfo && localUserInfo.access_token && !userInfo) {
        setSessionStorage('user', JSON.stringify(localUserInfo)); // local에 정보가 저장되어 있으면 로그인 유지하는 상태임
        return true;
    }

    if(userInfo && userInfo.access_token) return true;
    return false;
}

// json 파싱
function jsonStringfy(data) {
    return JSON.parse(JSON.stringify(data));
}

// url에서 path만 가져와서 지정 도메인 적용하기
function setPathUrl(link) {
    let url = new URL(link);
    return process.env.VUE_APP_DOMAIN + url.pathname;
}

// 파일 타입 가져오기 (file.type은 edge에서 제공안해줄 수 있음)
function checkMathFileType() {

}

// 이미지 width, height 가져오기
async function getFileWidthHeight(file) {
    const reader = new FileReader();
    //Read the contents of Image File.
    reader.readAsDataURL(file);

    const promise = await getUploadFileInfo(reader);
    
    return promise;
}

async function getUploadFileInfo(reader) {
    //let imageInfo = {'width':0,'height':0};
    const promise = new Promise((resolve) => {
        reader.onload = (e) => {
            //Initiate the JavaScript Image object.
            var image = new Image();
    
            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;
    
            //Validate the File Height and Width.
            image.onload = () => {
                let width = image.naturalHeight;
                let height = image.naturalWidth;

                resolve({width, height});
            };
        };
    });

    return promise;
}

export {
    setLocalStorage,
    setUserLoginStorage,
    getSessionStorage,
    clearSessionStorage,
    getUserInfo,
    getLocalStorage,
    jsonStringfy,
    checkMathFileType,
    getFileWidthHeight,
    setPathUrl,
    clearLocalStorage,
    isLogin
}