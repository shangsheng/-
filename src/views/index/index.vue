<template>
    <div>
    	 <!--dom渲染-->
        <!-- <Car /> -->
    	<!--地图-->
        <Map />
        <!--导航-->
        <Navbar />
        <!--会员 [showUser ? 'open user' : 'user']-->
        <div  :class="{'open':show}" class="user" id="children-view">
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
	    	document.addEventListener("mouseup",(e)=>{
				const userCon = document.getElementById("children-view");
				if(userCon && !userCon.contains(e.target)){
					this.$router.push({
						name:'Index'
					})
				}
			})
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
	@include webkit(transition, all .3s ease 0s);
    @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, .4));
	&.open{
		right: 0;	
	}
}

</style>