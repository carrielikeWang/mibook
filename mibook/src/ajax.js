// import Vue from 'vue' 
//用 import 会报错 Cannot assign to read only property 'exports' of object '#<Object>'
var Vue = require('vue');

module.exports =  (params) => {
    Vue.default.http.options.headers = {
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8;',
        'Access-Control-Allow-Origin': 'http://dushu.xiaomi.com'
    }
    Vue.default.http.options.credentials = true;
    
    Vue.default.http.options.xhr = {
      withCredentials: true
    }
    //如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。启用该选项后，请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。    
    Vue.default.http.options.emulateJSON = true; 
    
    Vue.default.http({
        url: params.url,
        method: params.method,
        data:params.data || {}
    }).then((response) => {
        let data = response.data;
        params.successCallback(data);
    },(error) => {
        params.errorCallback(data);
        console.log(error);
    }).catch((response) => {
        console.log(response)
    });
}

// module.exports = function (url, callback) {
//     for (let i = 0 ,length = arguments.length; i < length ; i++) {
//         let item = arguments[i];
//         // logUtils.logObject(item);
//     }
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         credentials: 'include', //这个参数不加，后台取不到Cookie
//         mode : 'cors'  //实现跨域   默认是 same-origin , no-core ,core
//         // headers: form.getHeaders()
//     }).then(function(res){
//         //logUtils.logFetchResponse(res);
//         // logUtils.logObject(res);
//         let results = res.json();
//         return results;
//     }).then(function(data){
//         //logUtils.logFetchDate(data);
//         // logUtils.logObject(data);
//         callback(data);
//     }).catch(function(e){
//         console.log(e);
//     });
// }

