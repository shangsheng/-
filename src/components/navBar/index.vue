<template>
	<div id="navBar">
		<div class="nav-bar">
			<ul>
				<li><i class="icon icon-help icon-width-44"></i></li>
				<li><i class="icon icon-search icon-width-44"></i></li>
				<li>
					<a href="javascript:viod(0);" class="select-car-btn">选择车辆</a>
				</li>
				<li><i class="icon icon-location icon-width-44"></i></li>
				<li @click="userClick"><i class="icon icon-user icon-width-44"></i></li>
				
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
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

<style lang="scss" scoped>
	.nav-bar{
		position: fixed;
		left: 0;
		right: 0;
		text-align: center;
		bottom: 86px;
		z-index: 10;
		li{
			display: inline-block;
			.select-car-btn{
				width: 240px;
				height: 84px;
				display: block;
				border-radius: 40px;
				background-color: $color-main;
				text-align: center;
				line-height: 84px;
				color: #fefefe;
				font-size: 26px;
				
			}
		}
		.icon{
			vertical-align: middle;
			cursor: pointer;
			margin: 0 17px;
		}
	}
	.disabled { pointer-events: none; }
</style>