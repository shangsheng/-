<template>
    <div class="user-index">
        <userHeader :headerName="navName" />
        <div class="bankCardbound">
            <bankCardbound />
        </div>
        <div class="Binding-card">
            <router-link to="/bankCard" tag="a" class="bankCard"><span><i class="icon"></i>添加银行卡</span></router-link>
        </div>
    </div>
</template>
<script>
export default {
      name:'BindingCard',
//  components:{},
    data(){
        return{
            navName:'绑定银行卡',
            form: {
                phone: '',
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
<style lang="scss" scoped>
.user-index{
    padding: 0 30px;
    .Binding-card{
        width: 100%;
        margin-top: 30px;
        .bankCard{
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #00a3ff;
            border: 1px solid #00a3ff;
            color: #ffffff;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
            width: 100%;
            span{
                i{
                    width: 14px;
                    height: 14px;
                    background-color: #fff;
                    border-radius: 50%;
                    margin-right: 4px;
                    position: relative;
                    vertical-align: middle;
                    &::before{
                        content: '';
                        width: 2px;
                        height: 10px;
                        background: $color-main;
                        border-radius: 2px;
                        display: block;
                        position: absolute;
                        top: 50%;
                        margin-top: -5px;
                        left: 50%;
                        margin-left: -1px;
                    }
                    &::after{
                        content: '';
                        width: 10px;
                        height: 2px;
                        background: $color-main;
                        border-radius: 2px;
                        display: block;
                        position: absolute;
                         top: 50%;
                        margin-top: -1px;
                        left: 50%;
                        margin-left: -5px;
                    }
                }
            }
        }
    }
}
</style>