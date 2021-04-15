let url_config = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'http://www.zjcoldcloud.com/managesystem/public/index.php'
}else{
    // 生产环境
    url_config = 'http://www.zjcoldcloud.com/managesystem/public/index.php'
}

export default url_config