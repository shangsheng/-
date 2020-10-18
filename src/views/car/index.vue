<template>
	<div class="index-cars"><span @click="userClick">汽车列表</span></div>
</template>

<script>
	export default {
    name:'indexCars',
//  components:{},
    data(){
        return{
          }
       },
       mounted(){
	    	
	    },
	    cumputed:{
	    	
	    },
	    methods:{
	    	userClick(){
	    		this.$router.push({
	    			name:'User'
	    		})
	    	}
	    }
  }
</script>

<style lang="scss">
	.index-cars{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: transparent;
		z-index: 100;
	}
</style>