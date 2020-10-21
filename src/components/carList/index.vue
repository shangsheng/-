<template>
	<div v-if="showCar">
		<header class="car-header">
			<div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div>
			<div class="pull-right"><span class="car-type">新能源汽车  5座</span></div>
		</header>
		<section class="car-section">
			<div class="car-plate">
				<div class="plate-name">粤 B745N8</div>
				<div class="plate-quantity">
					<ul class="quantity active-li-7">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<div class="quntity-percentage"><sub>约</sub><i>600</i><sub>KM</sub></div>
				</div>
			</div>
			<div class="car-img">
				<img src="../../assets/images/carImg/car-imgs.png">
			</div>
		</section>
		<footer class="car-footer" @click="listDetails">
			<div class="pull-left">
				<span class="car-parkingLot">某某停车场</span>
			</div>
			<div class="pull-right">
				<img src="../../assets/images/carImg/car-arrow.png">
			</div>
		</footer>
	</div>
	<div v-else>
		<carDetails :carShow="!showCar" @details="parentDetails" />
	</div>
</template>

<script>
	import carDetails from '@c/carDetails/index';
	export default{
		data(){
			return{
				showCar:true,
			}
		},
		props:{
			hideDetails:{
				type:Boolean,
				default:true,
			}
		},
		components:{carDetails},
		created(){
			
		},
		methods:{
			listDetails(){
				
				this.showCar = false;
			},
			parentDetails(hide){
				
				this.showCar = !hide;
			}
		},
		watch:{
	    	hideDetails(val){
	    		console.log(val)
	    	}
	    }
	}
</script>

<style lang="scss" scoped>
	.car-header {
		margin-bottom: 10px;
		.clar-name {
			font-size: 16px;
			color: #34393f;
			vertical-align: middle;
		}
		.car-type {
			font-size: 14px;
			color: #b3b5b6;
			margin-top: 4px;
			display: inline-block;
		}
		.car-logo {
			display: inline-block;
			margin-right: 12px;
			vertical-align: middle;
		}
	}
	
	.car-section {
		height: 120px;
		.car-plate {
			align-self: center;
			.plate-name {
				font-size: 18px;
				color: #34393f;
				margin-bottom: 10px;
			}
			.plate-quantity {
				margin-right: 10px;
			}
			ul.quantity {
				margin-left: 0;
				width: 120px;
				margin-right: 12px;
				display: inline-block;
				vertical-align: bottom;
				li {
					display: inline-block;
					width: 8px;
					height: 24px;
					margin-right: 4px;
					background-color: #e1e1e1;
					border-radius: 2px;
				}
				@for $i from 1 through 10 {
					&.active-li-#{$i} {
						li:nth-child(-n+#{$i}) {
							@include webkitA(background, linear-gradient(#11a4f7, #0b8bd9))
						}
					}
				}
				.quantityColor {
					@include webkitA(background, linear-gradient(#11a4f7, #0b8bd9))
				}
			}
			.quntity-percentage {
				font-size: 12px;
				color: #86898b;
				display: inline-block;
				i {
					color: #34393f;
					font-size: 22px;
					font-weight: bold;
					vertical-align: bottom;
					display: inline-block;
					margin: 0 4px;
					position: relative;
					top: 5px;
				}
				sub {
					color: #34393f;
					&:nth-child(1) {
						opacity: 0.8;
					}
				}
			}
		}
		.car-img {
			align-self: center;
			img {
				width: 220px;
			}
		}
	}
	
	.car-footer {
		border-top: 1px solid #e1e1e1;
		padding-top: 20px;
		cursor: pointer;
		.car-parkingLot {
			font-size: 14px;
			color: #34393f;
			opacity: 0.8;
		}
	}
</style>