<template>
    <div class="app-container">
        讲师列表
        <!--查询表单-->

        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-input v-model="teacherQuery.name" placeholder="讲师名" />
            </el-form-item>

            <el-form-item>
                <el-select v-model="teacherQuery.level" clearable placeholder="讲师头衔">
                    <el-option :value="1" label="高级讲师" />
                    <el-option :value="2" label="首席讲师" />
                </el-select>
            </el-form-item>

            <el-form-item label="添加时间">
                <el-date-picker v-model="teacherQuery.begin" type="datetime" placeholder="选择开始时间"
                    value-format="yyyy-MM-dd HH:mm:ss" default-time="00:00:00" />
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="teacherQuery.end" type="datetime" placeholder="选择截止时间"
                    value-format="yyyy-MM-dd HH:mm:ss" default-time="00:00:00" />
            </el-form-item>
            <el-button type="primary" icon="el-icon-search" v-on:click="getTeacherList()">查询</el-button>
            <el-button type="default" @click="resetData()">清空</el-button>
        </el-form>


        <!-- 表格 -->
        <el-table :data="listTeacher" border fit highlight-current-row>

            <el-table-column label="序号" width="70" align="center">
                <template slot-scope="scope">
                    {{ (page - 1) * pageSize + scope.$index + 1 }}
                </template>
            </el-table-column>

            <el-table-column prop="name" label="名称" width="80" />
            <el-table-column label="一句话" width="80">
                <template slot-scope="scope">
                    {{ scope.row.career }}
                </template>
            </el-table-column>

            <el-table-column label="头衔" width="80">
                <template slot-scope="scope">
                    {{ scope.row.level===1?'高级讲师':'首席讲师' }}
                </template>
            </el-table-column>

            <el-table-column prop="intro" label="资历简介" />
            <el-table-column prop="gmtCreate" label="添加时间" width="160" />
            <el-table-column prop="sort" label="排序" width="60" />

            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">

                    <router-link :to="'/teacher/edit/'+scope.row.id">
                        <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
                    </router-link>

                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteById(scope.row.id)">删除
                    </el-button>

                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->

        <el-pagination :current-page="page" :page-size="pageSize" :total="total"
            style="padding: 30px 0; text-align: center;" layout="total, prev, pager, next, jumper"
            @current-change="getTeacherList" />
    </div>
</template>

<script>
    import teacher from '@/api/edu/teacher'

    export default {
        data() {
            return {
                listTeacher: null,//接受查询结果
                page: 1,
                pageSize: 5,
                total: null,
                teacherQuery: {}
            }
        },
        created() {
            this.getTeacherList()
        },
        methods: {
            //查询包含模糊查询讲师列表
            getTeacherList(page = 1) {
                console.log("查询讲师列表")
                this.page = page
                teacher.getPageTeacherCondition(this.page, this.pageSize, this.teacherQuery)
                    .then(response => {
                        this.listTeacher = response.data.records
                        this.total = response.data.total
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            //清空讲师模糊查询
            resetData() {
                this.teacherQuery = {}
                this.getTeacherList()
            },
            //根据Id删除讲师
            deleteById(teacherId) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    teacher.deleteById(teacherId)
                    .then(respone => {
                        this.getTeacherList()    
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除99'
                    });
                });


               

            }
        }
    }
</script>