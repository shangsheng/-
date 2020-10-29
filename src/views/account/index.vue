<template>
    <div class="account">
        <userHeader :headerName="navName" />
        <div class="user-meta">
            <div class="account-content">
                <div class="membership account-bgc1">
                    <div class="account-grade" @click="gradeLevel">
                        <i class="icon icon-account-grade icon-with-29"></i>
                        <i class="grade">LV.2</i>
                        会员
                    </div>
                    <span class="account-help icon-help2 icon-with-22"></span>
                    <h3 class="account-label">个性先锋</h3>
                    <p class="account-effective">会员有效期至 2020/07/01</p>
                </div>
                <div class="account-li account-balance">
                    <div class="account-name">当前余额 <i class="icon icon-with-22 icon-help3"></i></div>
                    <div class="balance clearfix account-m">
                        <span class="pull-left balance-num"><sub>￥</sub>6216.00</span>
                         <router-link to="/recharge" tag="a" class="pull-right recharge">去充值</router-link>
                    </div>
                </div>
                 <div class="account-li account-mileage">
                    <div class="account-name">我的里程</div>
                    <div class="mileage account-m">
                        <span class="mileage-num">30000公里</span>
                    </div>
                </div>
                <div class="account-li account-violation">
                    <div class="account-name">违章信息</div>
                    <div class="violation account-m meta-ul">
                        <router-link to="aa" tag="a" class="arrow clearfix">
                            <span class="pull-left">待处理违章</span>
                            <span class="pull-right">10单</span>
                        </router-link>
                        <router-link to="aa" tag="a" class="arrow clearfix">
                            <span class="pull-left">违章预存金</span>
                            <span class="pull-right">￥200</span>
                        </router-link>
                    </div>
                </div>
                 <div class="account-li account-invoice">
                    <div class="account-name">发票</div>
                    <div class="invoice account-m meta-ul">
                        <router-link to="aa" tag="a" class="arrow clearfix">
                            <span class="pull-left">可开发票总额</span>
                            <span class="pull-right">￥200</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Account',
    data(){
        return{
            navName:'基本信息'
        }
    },
    methods:{
        gradeLevel(){
            this.$router.push({
                name:'Membership'
            })
        }
    }
}
</script>
<style lang="scss">
@import './index.scss';
</style>