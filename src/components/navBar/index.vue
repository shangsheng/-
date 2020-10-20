<template>
	<div id="navBar">
		<div class="nav-bar">
			<ul>
				<li><i class="icon icon-help"></i></li>
				<li><i class="icon icon-search"></i></li>
				<li>
					<a href="javascript:viod(0);" class="select-car-btn">选择车辆</a>
				</li>
				<li><i class="icon icon-location"></i></li>
				<li @click="userClick" :class="{'disabled':disabledBoolen}"><i class="icon icon-user"></i></li>
				
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			disabledBoolen:false,
		}
	},
	methods:{
	    userClick(){
			this.$router.push({
    			name:'User'
			})
			this.disabledBoolen = true;
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