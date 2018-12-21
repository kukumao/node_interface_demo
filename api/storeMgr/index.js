let apiHost = require('../../common/config.js').basePath;

const api = {
    //平台列表
    getAllPlatform: apiHost + 'commoditycenter/shopManage/getAllPlatform',
    //店铺列表
    getAllShopByPlatformId: apiHost + 'commoditycenter/shopManage/getAllShopByPlatformId',
    //店铺sku列表
    getShopSkuInfoList: apiHost + 'commoditycenter/shopManage/getShopSkuInfoList',
    //根据内部Sku编码绑定内部sku
    mapInnerSku: apiHost + 'commoditycenter/shopManage/mapInnerSku',
    //根据内部Sku编码取消绑定内部sku
    unBindSku: apiHost + 'commoditycenter/shopManage/unBindSku',
    //同步
    synSpecPlatform: apiHost + 'commoditycenter/shopManage/synSpecPlatform',
    //内部sku列表查询
    getSkuDetailList: apiHost + 'commoditycenter/itemManage/getSkuDetailList',
    //查看关联商品
    getSkuDetail: apiHost + 'commoditycenter/shopManage/getSkuDetail',
    //添加外部商品
    addOuterSku: apiHost + 'commoditycenter/shopManage/addOuterSku',
    //获取商品关联日志
    getMappingLog: apiHost + 'commoditycenter/shopManage/getMappingLog'
}
module.exports = api