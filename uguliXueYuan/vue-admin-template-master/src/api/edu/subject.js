import request from '@/utils/request'

const api_name = '/eduService/subject'

export default {

    //课程分类的查询
    listSubject() {
        return request({
            url: `${api_name}/listSubject`,
            method: 'get'
        })
    }
}