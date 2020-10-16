<template>
    <div id="amap">
        <el-amap class="amap-demo" vid="amapDemo" :zoom="zoom" >
        </el-amap>
    </div>
</template>
<script>
export default {
    name:'Index',
    data(){
        return{
            zoom:16,
            //center:[116.397428, 39.90923]中心点:center="center"
        }
    }
}
</script>
<style lang="scss">
#amap{
    height: 100vh;
}
</style>