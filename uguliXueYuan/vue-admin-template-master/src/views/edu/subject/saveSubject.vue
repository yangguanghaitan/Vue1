<template>
 <div class="app-container">
  <el-form label-width="120px">
    
    <el-form-item label="信息说明">
       <el-tag type="info">excel模板说明</el-tag>
       <el-tag>
        <i class="el-icon-download"/>
        <a :href="OSS_API+'/guLiXueYuan/subjectExcel/%E8%AF%BE%E7%A8%8B%E5%88%86%E7%B1%BB.xlsx'">点击下载模板</a>
       </el-tag>
     </el-form-item>

     <el-form-item label="选择Excel">
        <el-upload
        ref="upload"
        :auto-upload="false"
        :on-success="fileUploadSuccess"
        :on-error="fileUploadError"
        :disabled="importBtnDisabled"
        :limit="1"
        :action="BASE_API+'/eduService/subject/readSubjectExcelData'"
        name="excelDataFile"
        accept="application/vnd.ms-excel">
       <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
       <el-button
         :loading="loading"
         style="margin-left: 10px;"
         size="small"
         type="success"
         @click="submitUpload">{{ fileUploadBtnText }}</el-button>
        </el-upload>
     </el-form-item>
  </el-form>
 </div>
</template>

<script>
 export default {
   name:'',
   data () {
     return {
          BASE_API:process.env.BASE_API,
          OSS_API:process.env.OSS_API,
          fileUploadBtnText:'上传到服务器',
          importBtnDisabled:false,
          loading:false               
     }
   },
   computed:{
 
   },
   methods:{
      submitUpload(){
        this.fileUploadBtnText='正在上传',
        this.importBtnDisabled=true,
        this.loading=true,
        this.$refs.upload.submit()
      },
      fileUploadSuccess(ressponse){
        if(ressponse.code==20000){
          this.fileUploadBtnText='导入成功',
          this.loading=false,
          this.$message({
            type:'success',
            message:ressponse.message
          })
        }else{
          this.fileUploadError(ressponse)
        }
      },
      fileUploadError(ressponse){
        this.fileUploadBtnText = '导入失败'
        this.loading = false
        this.$message({
        type: 'error',
        message: '导入失败'
        })
      },
   },
   components: {
 
   },
 }
</script>

<style scoped>
 
</style>
