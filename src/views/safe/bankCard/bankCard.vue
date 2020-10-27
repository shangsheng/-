<template>
	<div class="user-index">
    <userHeader :headerName="navName" />
    <div class="user-meta">
      <div class="user-form-ui">
          <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.name" placeholder="开户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="form.card" placeholder="请选择开户银行">
                    <el-option v-for="(item,keys) in form.cardOption" :key="keys" :label="item.lable" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.phone" placeholder="预留手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <verificationCode />
                    <el-input v-model="form.code" placeholder="手机验证码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                </el-form-item>
            </el-form>
           
      </div>
    </div>
	</div>
</template>
<script>
	export default {
    name:'BankCard',
//  components:{},
    data(){
        return{
            navName:'添加银行卡',
            form: {
                name:'',
                phone: '',
                code:'',
                card:'',
                cardOption:[{lable:'中国工商银行',value:'zhongguogongshangyinhang'},{lable:'中国建设银行',value:'zhongguojiansheyinhang'},{lable:'中国邮政储蓄银行',value:'zhongguoyouzhengchuxuyinhang'},
                {lable:'中国银行',value:'zhongguoyinhang'},{lable:'招商银行',value:'zhaoshengyinhang'},{lable:'交通银行',value:'jiaotongyinhang'},{lable:'中信银行',value:'zhongxinyinhang'}]
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
}
</style>