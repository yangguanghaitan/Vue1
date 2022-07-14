<template>
  <div class="app-container">
    添加讲师
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name" />
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" :min="0" />
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--

         数据类型一定要和取出的json中的一致，否则没法回填

         因此，这里value使用动态绑定的值，保证其数据类型是number

       -->
          <el-option :value="1" label="高级讲师" />
          <el-option :value="2" label="首席讲师" />
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career" />
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea" />
      </el-form-item>
      <!-- 讲师头像：TODO -->
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import teacher from '@/api/edu/teacher'

  const defaultForm = {
    name: '',
    sort: '',
    level: '',
    career: '默认的一句话的事业',
    intro: '',
    avatar: ''
  }

  export default {
    data() {
      return {
        teacher: defaultForm,
        saveBtnDisabled: false
      }
    },
    created() {
      this.init()
    },
    //监听器
    watch: {
      $route(to, from) {
        console.log("to==from" + to + "==" + from)
        this.init()
      }
    },
    methods: {
      //新增讲师
      saveOrUpdate() {
        //修改
        debugger
        if (this.teacher.id) {
          this.updateTeacherbyId(this.teacher)
        } else {
          //新增
          this.addTeacher()
        }
      },
      //新增讲师
      addTeacher() {
        teacher.addTeacher(this.teacher)
          .then(response => {

            //路由跳转
            this.$router.push({ path: "/teacher/list" })

            this.$message({
              type: 'success',
              message: '保存成功!'
            });
          })
      },

      //修改讲师数据回显
      getTeacherById(id) {
        teacher.getTeacherById(id)
          .then(response => {
            this.teacher = response.data
          })
          .catch(respponse => {
            this.$message({
              type: 'error',
              message: '修改讲师时数据回显失败'
            })
          })
      },
      //更新讲师
      updateTeacherbyId(teach) {
        debugger
        teacher.updateTeacherbyId(teach)
          .then(response => {
            this.$router.push({ path: "/teacher/list" })
          })
      },
      //监听器调用
      init() {
        if (this.$route.params && this.$route.params.idd) {
          const id = this.$route.params.idd
          this.getTeacherById(id)
        } else {
          // this.teacher = defaultForm//这种是引用，不行
        // 使用对象拓展运算符，拷贝对象，而不是引用，
        // 否则新增一条记录后，defaultForm就变成了之前新增的teacher的值
          this.teacher = {...defaultForm}
        }
      }
    }
  }
</script>