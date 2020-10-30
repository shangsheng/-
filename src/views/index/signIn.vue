<template>
    <div class="singin" :hidden="closeBoolen">
        <div class="sigin-logon">
            <div class="sigin-title">
                <span>登录</span>
                <span class="close" @click="closeClick"></span>
            </div>
            <div class="sigin-logon-from">
                <div class="user-form-ui">
                        <el-form ref="form" :model="form">
                            <el-form-item>
                                <el-input v-model="form.cellphone" placeholder="手机号"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="form.password" placeholder="密码"></el-input>
                            </el-form-item>
                             <el-form-item>
                                <verificationCode />
                                <el-input v-model="form.code" placeholder="请输入手机验证码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">登录</el-button>
                            </el-form-item>
                        </el-form>  
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Sinin',
    data(){
        return{
            form: {
                cellphone:'',
                password: '',
                code:''
            },
            closeBoolen:false,
        }
    },
    methods:{
        onSubmit() {
                console.log('submit!');
            },
        closeClick(){
            this.closeBoolen = true;
        }
    }
}
</script>
<style lang="scss" scoped>
    .singin{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(52,57,63,0.6);
        z-index: 9999;
        .sigin-logon{
            width: 740px;
            height: 310px;
            padding: 30px 30px 80px 30px;
            position: absolute;
            top: 50%;
            left: 50%;   
            @include webkit(transform,translate(-50%,-50%));
            background-color: $color-main;
            border-radius: 8px;
            .sigin-title{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                span{
                    color: #fefefe;
                    font-size: 18px;
                }
                .close{
                    width: 14px;
                    height: 14px;
                    display: inline-block;
                    cursor: pointer;
                    position: relative;
                    @include webkit(transform,rotate(45deg));
                    &::before{
                        content: '';
                        width: 2px;
                        height: 20px;
                        background-color: #00a3ff;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        @include webkit(transform,translate(-50%,-50%));
                    }
                    &::after{
                        content: '';
                        width: 20px;
                        height: 2px;
                        
                        background-color: #00a3ff;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        @include webkit(transform,translate(-50%,-50%));
                    }
                }
            }
            .sigin-logon-from{
                margin: 0 auto;
                margin-top: 50px;
                width: 380px;
            }
        }
    }
</style>