<template>
	<div class="carDetails" :class="{'showCar':showDetails}" :hidden="!showDetails">
		<div class="particulars">
			<div class="parkingLot">
				<span>某某停车场</span>
				<i class="cancel pull-right" @click="cancel">X</i>
			</div>
			<header class="car-header"><div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div> <div class="pull-right"><span class="car-type">新能源汽车  5座</span></div></header>
			<section class="car-section">
				<div class="car-imgs">
					<img src="../../assets/images/carImg/car-imgs.png"/>
				</div>
				<div class="car-information">
					<div class="car-plate">
						<div class="plate pull-left">粤B745N8</div>
						<div class="kilometre pull-right">
							<sub>约</sub>
							<strong>600</strong>
							<sub>KM</sub>
						</div>
					</div>
					<div class="car-electric">
						<div class="electric">
							<div class="electric-active" style="width: 70%;"></div>
						</div>
					</div>
					
				</div>
				<div class="carRule">
					<div class="car-rule">
						<p>取车约支付12.0元停车费，实际补贴12.0元</p>
					</div>
					<div class="car-rental-rules">
						<ul>
							<li class="rules-active">
								<span class="pull-left">日租车</span>
								<span class="pull-right">￥300/1天</span>
							</li>
							<li>
								<span class="pull-left">3日租车</span>
								<span class="pull-right">￥499.00/1天</span>
							</li>
							<li>
								<span class="pull-left">5日租车</span>
								<span class="pull-right">￥799.00/1天</span>
							</li>
							<li>
								<span class="pull-left">小时租车</span>
								<span class="pull-right">￥99.00/1天</span>
							</li>
						</ul>
						<div class="car-ordination">
							<div class="ordination pull-left"><a href="#">参保《全面保障服务》用车更放心</a></div>
							<div class="choice pull-right " @click="choice" :class="{'choice-active':choiceBoolean}"></div>
						</div>
					</div>
				</div>
			</section>
			<div class="appointment">
				预约用车
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				choiceBoolean:false,
				showDetails:false,
			}
		},
		props:['carShow'],
		created(){
			console.log(this.carShow)
			this.showDetails = this.carShow;
		},
		computed:{
			
		},
		methods:{
			choice(){
				this.choiceBoolean = !this.choiceBoolean;
			},
			cancel(){
				console.log(this.carShow)
				this.$emit('details',false);
				this.showDetails = false;
			}
		},
		watch:{
	    	
	    }
	}
</script>

<style lang="scss" scoped>
	.particulars{
		position: absolute;
		bottom: 0;
		left: 0px;
		width: 444px;
		padding: 30px;
		background-color: #fff;
		border-radius: 16px;
		z-index: 999;
		@include webkit(box-shadow, 0 0 18px rgba(0,0,0,0.2))
		.parkingLot{
			margin-bottom: 20px;
			span{
				font-size: 20px;
				color: #6e7174;
			}
			.cancel{
				font-size: 20px;
				color: #999c9f;
				cursor: pointer;
			}
		}
		.car-header{
		    /*margin-bottom: 10px;*/
		    .clar-name{
	            font-size: 16px;
	            color: #34393f;
		        vertical-align: middle;
		    }
		    .car-type{
	            font-size: 14px;
	            color: #b3b5b6;
		        margin-top: 4px;
		        display: inline-block;
		    }
	        .car-logo{
	            display: inline-block;
		        margin-right: 12px;
		        vertical-align: middle;
		    }
	    }
		.car-section{
			display: block;
			.car-imgs{
				width: 440px;
				img{
					width: 440px;
				}
			}
			.car-information{
				/*margin-top: 10px;*/
				.car-plate{
					margin-bottom: 20px;
					@extend %clearfix;
					.plate{
						font-size: 24px;
						color: #34393f;
					}
				}
				.kilometre{
					color: #34393f;
					sub{
						font-size: 12px;
						position:relative;
						bottom:0; 
						&:first-child{
							opacity: 0.8;
						};
						
					}
					strong{
						font-size: 22px;
						margin: 0 5px;
					}
					
				}
				.car-electric{
					padding: 15px 10px;
					border-radius: 16px;
					@include webkit(box-shadow, 0 0 10px rgba(0,0,0,0.1))
					.electric{
						height: 8px;
						border-radius: 4px;
						background-color: #e1e1e1;
						.electric-active{
							height: 8px;
							border-radius: 4px;
							background-color: $color-quantityColor;
						}
					}
				}
				
			}
			.carRule{
				margin-top: 30px;
				.car-rule{
					margin-bottom:24px;
					p{
						font-size: 14px;
						color: #929496;
						text-align: center;
					}
				}
				.car-rental-rules{
					ul{
						margin-bottom: 10px;
						li{
							padding: 0 20px;
							height: 48px;
							border: 2px solid transparent;
							border-radius: 8px;
							background-color: #f3f3f3;
							margin-bottom: 15px;
							cursor: pointer;
							@extend %clearfix;
							span{
								font-size: 16px;
								color: #34393f;
								transform: translateY(16px);
							}
							
							&.rules-active{
								border-color: $color-quantityColor;
							}
						}
					}
					.car-ordination{
						margin-bottom: 50px;
						@extend %clearfix;
						.ordination{
							font-size: 16px;
							color: #34393f;
							a{
								color: #34393f;
							}
						}
						.choice{
							width: 20px;
							height: 20px;
							position: relative;
							border-radius:50%; 
							cursor:pointer;  
							&:before{
								content: '';
								width: 20px;
								height: 20px;
								background-image: url(~@/assets/images/carImg/car-choice.png);
								background-repeat: no-repeat;
								background-position: -26px 0;
								position: absolute;
								top: 0;
								left: 0;
								display: block;
							}
							&.choice-active:before{
								background-position: 0 0;
							}
						}
						
					}
				}
			}
		}
		.appointment{
			position: absolute;
			bottom: -43px;
			left: 50%;
			width: 240px;
			height: 86px;
			margin-left: -120px;
			line-height: 86px;
			text-align: center;
			font-size: 26px;
			color: #fefefe;
			background-color: #383d42;
			border-radius: 40px;
			cursor:pointer;
		}
	}
</style>