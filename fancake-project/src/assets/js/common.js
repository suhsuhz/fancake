function setLocalStorage(name, obj) {
    const objString = JSON.stringify(obj);
    //objString.timestamp = new Date().getTime();
    //console.log(objString);
    window.localStorage.setItem(name, objString);
}

function setUserLocalStorage(obj) {
    setLocalStorage('user', obj);
}

function getUserInfo() {
    return getLocalStorage('user');
}

function getLocalStorage(name) {
    const objString = window.localStorage.getItem(name);
    return JSON.parse(objString);
}

function clearLocalStorage() {
    window.localStorage.clear();
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
    setUserLocalStorage,
    getUserInfo,
    jsonStringfy,
    checkMathFileType,
    getFileWidthHeight,
    setPathUrl,
    clearLocalStorage
}