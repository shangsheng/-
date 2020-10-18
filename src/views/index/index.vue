<template>
    <div>
    	 <!--dom渲染-->
        <Car />
    	<!--地图-->
        <Map />
        <!--导航-->
        <Navbar />
        <!--会员 [showUser ? 'open user' : 'user']-->
        <div :class="{'open':show}" class="user">
        	<router-view />
        </div>
    </div>
</template>
<script>
	import Map from '../amap/index';
	import Car from '../car/index';
	import Navbar from '@c/navBar/index';
export default {
    name:'Index',
    components:{Map,Car,Navbar},
    data(){
        return{
          }
       },
       mounted(){
	    	
	    },
	    computed:{
	    	show(){
	    		const router = this.$route;
	    		console.log(router)
	    		return  router.name === 'Index' ? false : true;
	    	}
	    },
	    watch:{
	    	
	    }
  }
</script>
<style lang="scss" >
.user{
	width:410px;
	height: 100%;
	position: fixed;
	top: 0;
	right: -600px;
	z-index: 101;
	background-color: #34393f;
	transition: all .3s ease 0s;
	-webkit-transition: all .3s ease 0s;
	-moz-transition: all .3s ease 0s;
	-ms-transition: all .3s ease 0s;
	-o-transition: all .3s ease 0s;
	&.open{
		right: 0;	
	}
}

</style>