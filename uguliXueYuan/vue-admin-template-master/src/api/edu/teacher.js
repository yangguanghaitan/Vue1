import request from '@/utils/request'


export default{
    
    //讲师分页条件模糊查询
    getPageTeacherCondition(current,limit,teacherQuery){
        return request({
            url: `/eduservice/teacher/getPageTeacherCondition/${current}/${limit}`,
            method: 'post',
            data: teacherQuery
        })
    },
    //根据Id删除讲师
    deleteById(id){
        return request({
            url: `/eduservice/teacher/deleteById/${id}`,
            method: 'get',
        })
    },

    //讲师新增
    addTeacher(teacher){
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
        })
    },
    //根据id查询讲师
    getTeacherById(id){
          return request({
              url:`/eduservice/teacher/getTeacherById/${id}`,
              method: 'get',
          })
    },
    //修改讲师
    updateTeacherbyId(teacher){
        return request({
            url: `/eduservice/teacher/updateTeacherbyId`,
            method: 'post',
            data: teacher
        })
    }
    


}

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }