<template>
	<div class="index-cars">
		<div class="cars-p">
			<div class="rotation">
				
				<swiper ref="mySwiper" :options="swiperOptions" class="cars ul">
					<swiper-slide class="li">
						<div class="car-list">
								<carList :detailsHide="hideCar"/><!--hideCar-->
								
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList  :detailsHide="hideCar"/>
								
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList />
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList />
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList />
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList />
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList />
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList />
							</div>
							
					</swiper-slide>
					<swiper-slide class="li">
						<div class="car-list">
								<carList />
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
	import carList from '@c/carList/index';
	
	export default {
    name:'indexCars',
    components:{carList},
    data(){
		const that = this;
        return{
        	carDataNum:9,
        	hideCar:false,
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
				//中间显示
				//centeredSlides : true,
				 on: {
					slideChangeTransitionEnd: function(){
						
						if(this.activeIndex === 0){
							that.prevArrow = false;
						}else if(this.activeIndex === that.carDataNum-3){
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
			},
			
	    }
  }
</script>

<style lang="scss" scoped>
@import './index.scss';

</style>