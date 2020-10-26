<template>
	<div class="user-index">
    <userHeader :headerName="navName" />
    <div class="user-meta">
      <div class="user-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.originalPassword" placeholder="原始密码"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-input v-model="form.newPassword" placeholder="新密码"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-input v-model="form.confirmPassword" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <button class="code-button">验证码</button>
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确定</el-button>
                </el-form-item>
            </el-form>  
      </div>
    </div>
    <div class="sign-out">退出</div>
	</div>
</template>
<script>
	export default {
    name:'User',
//  components:{},
    data(){
        return{
            navName:'修改登录密码',
            form: {
                originalPassword: '',
                newPassword: '',
                confirmPassword: '',
                code:''
            }
          }
       },
       mounted(){
	    	
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
  }
</script>

<style lang="scss">
  .user-index{
    padding: 0 30px;
    .sign-out{
        width: 164px;
        height: 60px;
        background-color: #2d3339;
        font-size: 18px;
        color: #ffffff;
        position: absolute;
        bottom: 62px;
        left: 50%;
        margin-left: -82px;
        cursor: pointer;
        text-align: center;
        line-height: 60px;
        border-radius: 30px;
    }
}
</style>