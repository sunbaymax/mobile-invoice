//http.js
const baseUrl = 'http://www.zjcoldcloud.com/managesystem_back/public/index.php';  //请求地址
//get请求封装
function gets(url, data) {
	var promise = new Promise((resolve, reject) => {
		var postData = data;
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: 'GET',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				"accept": "*/*",
			},
			success: function(res) {
				if (res.data.code === 200 && res.data.code == 0) {
					resolve(res.data);
				} else {
					resolve(res.data)
				}
			},
			error: function(e) {
				reject('网络出错');
			}
		})
	});
	return promise;
}
//post请求封装
function post(url, data) {
	var promise = new Promise((resolve, reject) => {
		var postData = data;
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
			},
			success: function(res) {
				if (res.data.code === 200 && res.data.code == 0) {
					resolve(res.data);
				} else {
					resolve(res.data)
				}
			},
			error: function(e) {
				reject('网络出错');
			}
		})
	});
	return promise;
}
export default {
	baseUrl,
	gets,
	post,
}