<template>
    <div class="certification">
        <userHeader :headerName="navName" />
        <div class="realNames">
            <ul>
                <li :class="{'active':activeTab==item.id}" :data-id="item.id" v-for="(item,keys) in realData" :key="keys" @click="tabClick($event)">{{item.name}}</li>
            </ul>
           <realName :certificates="activeTab" />
        </div>
    </div>
</template>
<script>
export default {
    name:'Certification',
    data(){
        return{
            navName:'实名认证',
            activeTab:'ID',
            realData:[{name:'身份证上传',id:'ID'},{name:'驾驶证上传',id:'drivers'}]
        }
    },
    methods:{
        tabClick(e){
            this.activeTab = e.target.dataset.id;
        }
    }
}
</script>
<style lang="scss" scoped>
.certification{
    padding: 0 30px;
    .realNames{
        margin-top: 80px;
        li{
            display: inline-block;
            padding-bottom: 12px;
            width: 50%;
            text-align: center;
            font-size: 14px;
            color: rgba($color: #fefefe, $alpha: 0.5);
            position: relative;
            cursor:pointer;
            &::before{
                content: '';
                width: 30px;
                height: 4px;
                border-radius: 4px;
                background-color: transparent;
                position: absolute;
                bottom: 0;
                left: 50%;
                margin-left: -15px;
                display: block;
            }
            &.active{
                 color: #fefefe;
                &::before{
                    background-color: #00a3ff;
                }
            }
        }
    }
}
</style>