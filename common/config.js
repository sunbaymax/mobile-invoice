let url_config = ""

if(process.env.NODE_ENV === 'development'){
	console.log("开发环境")
    // 开发环境
    url_config = 'http://www.zjcoldcloud.com/managesystem_back/public/index.php'
}else{
	console.log("生产环境")
    // 生产环境
    url_config = 'http://www.zjcoldcloud.com/managesystem_back/public/index.php'
}

export default url_config