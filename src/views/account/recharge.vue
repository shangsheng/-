<template>
    <div class="account">
        <userHeader :headerName="navName" />
        <div class="user-meta">
           <div class="account-recharge">
               <div class="user-form-ui">
                   <el-form ref="form" :model="form">
                       <ul class="amount">
                           <li class="amount-item">100</li>
                           <li class="amount-item">200</li>
                           <li class="amount-item active">400</li>
                           <li class="amount-item">500</li>
                           <li class="amount-item amount-icon"> <i class="icon-activity">首冲</i> 1000 <span class="activity">送100</span></li>
                           <li class="amount-item">2000</li>
                       </ul>
                        <el-form-item>
                            <el-input v-model="form.money" placeholder="请输入充值金额"></el-input>
                        </el-form-item>
                       
                      
                        <el-form-item label="支付类型">
                            <el-radio-group v-model="form.resource">
                            <el-radio :label="1">微信</el-radio>
                            <el-radio :label="2">支付宝</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        
                        <el-form-item class="recharge-paction">
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            
                        </el-form-item>
                    </el-form>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Recharge',
    data(){
        return{
            navName:'充值',
             form: {
                money: '',
                resource: 1,
            }
        }
    },
    methods: {
      onSubmit(e) {
          console.log(e)
        console.log('submit!');
      }
    }
}
</script>
<style lang="scss" >
@import './index.scss';
// 充值
.account-recharge{
    width: 100%;
    .amount{
        width: 100%;
       .amount-item{
            width: 100px;
            height: 50px;
            border: 1px solid #4a4f54;
            text-align: center;
            line-height: 50px;
            border-radius: 10px;
            font-size: 24px;
            color: #ffffff;
            margin-bottom: 18px;
            display: inline-block;
            margin-right: 18px;
            cursor: pointer;
            &:nth-child(3n){
                margin-right: 0;
            }
            &.amount-icon{
                position: relative;
                .icon-activity{
                    position: absolute;
                    font-size: 8px;
                    color: #ffffff;
                    top: 0;
                    left: 0;
                    @include webkit(transform,rotate(-45deg));
                    line-height: 14px;
                    &::before{
                        content: '';
                        width: 34px;
                        height: 30px;
                        background: url(~@/assets/images/icon/icon-amout.png) no-repeat;
                        display: block;
                        position: absolute;
                        top: 0;
                        left: -6px;
                        @include webkit(transform,rotate(45deg));
                        z-index: -1;
                    }
                }
                .activity{
                    font-size: 12px;
                    color: rgba($color: #ffffff, $alpha: 0.5);
                    display: inline-block;
                    width: 18px;
                    text-align: center;
                    line-height: 14px;
                    position: absolute;
                    top: 10px;
                    right: 4px;
                }
            }
            &.active{
                background-color: #00a3ff;
                color: #ffffff;
            }
       }
    }
    .recharge-paction{
        position: absolute;
        left: 50%;
        margin-left: -175px;
        bottom: 60px;
        width: 350px;
    }
    .el-form-item__label{
        color: rgba($color: #ffffff, $alpha: 0.5);
        display: block;
    }
    .el-input__inner{
        text-align: center;
        margin-bottom: 60px;
    }
    .el-radio-group{
        display: block;
        margin-top: 60px;
        text-align: left;
        .el-radio{
            display: block;
            margin-top: 20px;
            margin-right: 0;
            @extend %clearfix; 
            .el-radio__label{
                float: left;
                font-size: 16px;
                color: #ffffff;
            }
            .el-radio__input{
                float:right;
                font-size: 16px;
                color: #ffffff;
                &.is-checked .el-radio__inner{
                    background-position: 0 -40px;
                }
            }
            .el-radio__inner{
                width: 18px;
                height: 18px;
                border:none;
                background: url(~@/assets/images/icon/icon-select.png) no-repeat 0 0;
                &::after{
                    display: none;
                }
            }
        }
    }
}
</style>