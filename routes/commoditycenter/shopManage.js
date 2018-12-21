let express = require('express');
let router = express.Router();
let shopManage = require('../../service/shopManage/index.js');

//获取平台列表
router.get('/getAllPlatform', (req, res, next) => {
    shopManage.getAllPlatform(req, res, next);
});
//获取店铺sku列表
router.get('/getShopSkuInfoList', (req, res, next) => {
    shopManage.getShopSkuInfoList(req, res, next);
});
//根据内部Sku编码绑定内部sku
router.post('/mapInnerSku', (req, res, next) => {
    shopManage.mapInnerSku(req, res, next);
});

module.exports = router;