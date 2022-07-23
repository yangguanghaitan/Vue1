<template>
    <div class="app-container">
        课程分类列表
        <el-input v-model="filterText" placeholder="输入搜索关键字" style="margin-bottom:30px;" />

        <!-- default-expanded-keys="[1548641105577263105,1548641105703092225]"   default-expand-all-->
        <el-tree ref="subjectTree" 
                 :data="subjectList" 
                 :props="defaultProps" 
                 :filter-node-method="filterNode" 
                 class="filter-tree"
                 node-key="id"/>
    </div>
</template>

<script>
    import subject from '@/api/edu/subject'

    export default {
        data() {
            return {
                filterText: '',
                subjectList: [],
                defaultProps: {
                    children: 'children',
                    label: 'title'
                }
            }
        },
        created() {
            //获取课程分类节点数据
            this.listSubject()
        },
        watch: {
            filterText(val) {
                this.$refs.subjectTree.filter(val)
            }
        },
        methods: {

            //获取课程分类节点数据
            listSubject() {
               subject.listSubject()
               .then(response=>{
                  this.subjectList=response.data
               })
               .catch(error=>{
                console.log(error)
               })
            },
           
            filterNode(value, data) {
                if (!value) return true
                //关键字查询字段修改lable->title
                return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
            }
        }
    }
</script>