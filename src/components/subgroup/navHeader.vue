<template>
    <div class="userHeader">
        <div class="header"><i></i>{{headerName}}</div>
    </div>
</template>
<script>
export default {
    name:'Userheader',
    data(){
        return{}
    },
    props:['headerName']
}
</script>
<style lang="scss" scoped>
    .userHeader{
        padding-top: 20px;
        .header{
            height: 40px;
            font-size:16px;
            color: #ffffff;
            position: relative;
            padding-left: 34px;
            line-height: 40px;
             i{
                content: '';
                width: 18px;
                height: 18px;
                border-left: 2px solid #00a3ff;
                border-top: 2px solid #00a3ff;
                position: absolute;
                top:50%;
                left: 0;
                margin-top: -9px;
                @include webkit(transform,rotate(-45deg));
                @include webkit(box-sizing, border-box);
                cursor: pointer;
            }
        }
    }
</style>