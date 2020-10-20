<template>
	<div class="index-cars">
		<div class="cars-p">
			<div class="rotation">
				<swiper ref="mySwiper" :options="swiperOptions" class="cars ul">
					<swiper-slide class="li">
						<div class="car-list">
								<header class="car-header"><div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div> <div class="pull-right"><span class="car-type">新能源汽车  5座</span></div></header>
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
								<footer class="car-footer">
									<div class="pull-left">
										<span class="car-parkingLot">某某停车场</span>
									</div>
									<div class="pull-right">
										<img src="../../assets/images/carImg/car-arrow.png">
									</div>
								</footer>
							</div>
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<header class="car-header"><div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div> <div class="pull-right"><span class="car-type">新能源汽车  5座</span></div></header>
								<section class="car-section">
									<div class="car-plate">
										<div class="plate-name">粤 B745N8</div>
										<div class="plate-quantity">
											<ul class="quantity">
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
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
								<footer class="car-footer">
									<div class="pull-left">
										<span class="car-parkingLot">某某停车场</span>
									</div>
									<div class="pull-right">
										<img src="../../assets/images/carImg/car-arrow.png">
									</div>
								</footer>
							</div>
						</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<header class="car-header"><div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div> <div class="pull-right"><span class="car-type">新能源汽车  5座</span></div></header>
								<section class="car-section">
									<div class="car-plate">
										<div class="plate-name">粤 B745N8</div>
										<div class="plate-quantity">
											<ul class="quantity">
												<li v-for="(num,quan) in electric" :key="quan" :class="{quantityColor:num<electriCavailable}"></li>
											</ul>
											<div class="quntity-percentage"><sub>约</sub><i>600</i><sub>KM</sub></div>
										</div>
									</div>
									<div class="car-img">
										<img src="../../assets/images/carImg/car-imgs.png">
									</div>
								</section>
								<footer class="car-footer">
									<div class="pull-left">
										<span class="car-parkingLot">某某停车场</span>
									</div>
									<div class="pull-right">
										<img src="../../assets/images/carImg/car-arrow.png">
									</div>
								</footer>
							</div>
					</swiper-slide>
						<swiper-slide class="li">
						<div class="car-list">
								<header class="car-header"><div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div> <div class="pull-right"><span class="car-type">新能源汽车  5座</span></div></header>
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
								<footer class="car-footer">
									<div class="pull-left">
										<span class="car-parkingLot">某某停车场</span>
									</div>
									<div class="pull-right">
										<img src="../../assets/images/carImg/car-arrow.png">
									</div>
								</footer>
							</div>
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<header class="car-header"><div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div> <div class="pull-right"><span class="car-type">新能源汽车  5座</span></div></header>
								<section class="car-section">
									<div class="car-plate">
										<div class="plate-name">粤 B745N8</div>
										<div class="plate-quantity">
											<ul class="quantity">
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
												<li class="quantityColor"></li>
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
								<footer class="car-footer">
									<div class="pull-left">
										<span class="car-parkingLot">某某停车场</span>
									</div>
									<div class="pull-right">
										<img src="../../assets/images/carImg/car-arrow.png">
									</div>
								</footer>
							</div>
						</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<header class="car-header"><div class="pull-left"><img src="../../assets/images/carImg/car-logo.png" class="car-logo"><span class="clar-name">Mustang 2019款</span></div> <div class="pull-right"><span class="car-type">新能源汽车  5座</span></div></header>
								<section class="car-section">
									<div class="car-plate">
										<div class="plate-name">粤 B745N8</div>
										<div class="plate-quantity">
											<ul class="quantity">
												<li v-for="(num,quan) in electric" :key="quan" :class="{quantityColor:num<electriCavailable}"></li>
											</ul>
											<div class="quntity-percentage"><sub>约</sub><i>600</i><sub>KM</sub></div>
										</div>
									</div>
									<div class="car-img">
										<img src="../../assets/images/carImg/car-imgs.png">
									</div>
								</section>
								<footer class="car-footer">
									<div class="pull-left">
										<span class="car-parkingLot">某某停车场</span>
									</div>
									<div class="pull-right">
										<img src="../../assets/images/carImg/car-arrow.png">
									</div>
								</footer>
							</div>
					</swiper-slide>
					
			</swiper>
			
			</div>
			<div class=" cars-arrow prev-arrow car-prev " @click="prev" :class="{'car-prev-active':prevArrow}">
				<!-- <a href="javascript:void(0);" class="cars-prev prevNext"></a> -->
			</div>
			<div class=" cars-arrow next-arrow  car-next " @click="next" :class="{'car-next-active':nextArrow}">
				<!-- <a href="javascript:void(0);" class="car-next prevNext"></a> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    name:'indexCars',
//  components:{},
    data(){
		const that = this;
        return{
			electric:10,
			electriCavailable:7,
			swiperOptions: {
				
				 //设置点击箭头
                navigation: {
                    nextEl: '.prev-arrow', 
					prevEl: '.next-arrow',
					hideOnClick: true,
                },
				// Some Swiper option/callback...
				slidesPerView: 3,
				 on: {
					slideChangeTransitionEnd: function(){
						
						if(this.activeIndex === 0){
							that.prevArrow = false;
						}else if(this.activeIndex === 3){
							that.nextArrow = false;
						}else{
							that.nextArrow = true;
							that.prevArrow = true;
						}
					},
				},
			},
			prevArrow:false,
			nextArrow:true,
          }
	   },
	   computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper
		}
		},
		mounted() {
		console.log('Current Swiper instance object', this.swiper)
		// this.swiper.slideTo(3, 1000, false)
		},
	    methods:{
	    	prev () {
				this.$refs.mySwiper.$swiper.slidePrev()
			},
			next () {
			this.$refs.mySwiper.$swiper.slideNext()
			}
	    }
  }
</script>

<style lang="scss" scoped>
@import './index.scss';

</style>