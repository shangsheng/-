<template>
    <div id="amap">
        <el-amap class="amap-demo"   :events="events"  vid="amapDemo" >
        </el-amap>
    </div>
</template>
<script>
	import { AMapManager , lazyAMapApiLoaderInstance} from 'vue-amap';
export default {
    name:'Amap',
    data(){
        return{
            zoom:16,
            map:null,
          center:[],//中心点,:amap-manager="amapManager"  :center="center" :zoom="zoom"
//          amapManager,
            events: {}
          }
       },
       created(){
        
       },
       mounted(){
	    	lazyAMapApiLoaderInstance.load().then(() => {
                
			  // your code ...
			  this.map = new AMap.Map('amapDemo', {
			    zoom:this.zoom, //初始化地图层级
	        	center: [113.597279,34.744646] //初始化地图中心点
              })
             
			})
        },
        methods:{
            
         
        }
  }
</script>
<style lang="scss">
#amap{
    height: 100vh;
}
</style>