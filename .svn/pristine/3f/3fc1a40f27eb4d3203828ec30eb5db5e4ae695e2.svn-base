import service from './service'

const api = new service()
export default {
    async cases(val = {}) {
        // console.log("案例接口", val);
        // 案例接口
        return await api.commonApi({
            url: "/tcase/list",
            data: val,
            // method默认为post
        })
    },
    async addCustDemand(val = {}) {
        // 咨询表单
        return await api.commonApi({
            url: "/tsolution/addCustDemand",
            data: val,
            // method默认为post
        })
    },
    async getCasesInfo(val = {}) {
        return await api.commonApi({
            url: '/tcase/info?id=' + val.id,
            method: 'get',
            // method默认为post
        })
    }
}
