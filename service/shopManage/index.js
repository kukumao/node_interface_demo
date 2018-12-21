let Api = require('../../api/storeMgr/index.js');
let axios = require('axios');

module.exports = {
    //获取平台列表
    getAllPlatform(req, res, next) {
        //请求后端接口       
        axios.get(Api.getAllPlatform).then(function(response) {
            // 以json形式，把操作结果返回给前端 
            res.json(response.data);
        })
    },
    //获取店铺sku列表
    getShopSkuInfoList(req, res, next) {
        let params = req.query;
        axios({
            url: Api.getShopSkuInfoList,
            method: "get",
            params: params
        }).then(function(response) {
            res.json(response.data);
        })
    },
    //根据内部Sku编码绑定内部sku
    mapInnerSku(req, res, next) {
        // let params = req.body;
        // axios({
        //     url: Api.mapInnerSku,
        //     method: "post",
        //     params: params
        // }).then(function(response) {
        //     res.json(response.data);
        // })
        let data = { error: null, content: "匹配SKU成功", status: true }
        res.json(data);
    }
};