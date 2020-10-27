<template>
    <div class="realName">
         <div class="user-form-ui">
             <el-form ref="form" :model="form">
                <el-upload
                    class="avatar-uploader"
                    :action="form.positive"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <p class="tips">正面</p>
                </el-upload>
              <el-upload
                    class="avatar-uploader"
                    :action="form.positive"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <p class="tips">反面</p>
                </el-upload>
                 <el-upload
                    class="avatar-uploader"
                    :action="form.positive"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload" v-if="certificates === 'ID'">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <p class="tips">手持免冠</p>
                </el-upload>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交身份认证</el-button>
                </el-form-item>
            </el-form>  
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imageUrl: '',
            form:{
                positive:'https://jsonplaceholder.typicode.com/posts/',
                verso:'https://jsonplaceholder.typicode.com/posts/',
                bareheaded:'https://jsonplaceholder.typicode.com/posts/'
            }
        }
    }, 
    props:{
        certificates:{
			type:String,
			default:'ID',
		}
    },
    methods:{
        onSubmit() {
            console.log('submit!');
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
     }
}
</script>
<style lang="scss" scoped>

  .realName{
      width: 100%;
    .avatar-uploader{
        width: 100%;
        margin-top: 40px;
        .avatar-uploader-icon {
            font-size: 28px;
            color: #2a2f34;
            width: 348px;
            height: 148px;
            line-height: 148px;
            text-align: center;
            background: #32373d;
            border: 1px dashed #34393f;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover {
                border-color: #409EFF;
            }
        }
        .avatar {
            width: 348px;
            height: 148px;
            display: block;
        }
        .tips{
            text-align: center;
            font-size: 14px;
            color: rgba($color: #fefefe, $alpha: 0.4);
            margin-top: 20px;
        }
    }
    
    .el-form-item{
        position: absolute;
        bottom: 10px;
        left: 50%;
        width: 350px;
        margin-left: -175px;
         .el-button--primary{
             border-radius: 24px;
         }
    }
  }
  
</style>