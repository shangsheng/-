<template>
    <div class="account">
        <userHeader :headerName="navName" />
        <div class="user-meta">
          <div class="membership">
              <div class="membership-grade">
                  <header>
                          <span class="grade-name pull-left fs-16">总积分</span>
                          <router-link to="/pointsDetails" tag="a" class="grade-details pull-right fs-14">积分详细</router-link>
                  </header>
                  <div class="grade-progress">
                      <div class="grade-speed" :style="{width:gradeWidth}"></div>
                  </div>
                  <footer class="fs-12">
                      <span class="pull-left">Lv.1会员 100分</span>
                      <span class="pull-right">Lv.2会员 200分</span>
                  </footer>
              </div>
              <div class="grade-car-option">
                  <h6 class="fs-14">可用车型</h6>
                  <ul class="car-option">
                      <li>
                          <img src="../../assets/images/carImg/car-membership.png">
                          <div class="car-opacity"></div>
                      </li>
                      <li class="active">
                          <img src="../../assets/images/carImg/car-membership.png">
                          <div class="car-opacity"></div>
                      </li>
                      <li>
                          <img src="../../assets/images/carImg/car-membership.png">
                          <div class="car-opacity"></div>
                      </li>
                      <li>
                          <img src="../../assets/images/carImg/car-membership.png">
                          <div class="car-opacity"></div>
                      </li>
                      <li>
                          <img src="../../assets/images/carImg/car-membership.png">
                          <div class="car-opacity"></div>
                      </li>
                      <li>
                          <img src="../../assets/images/carImg/car-membership.png">
                          <div class="car-opacity"></div>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Membership',
    data(){
        return{
            navName:'会员等级',
            gradeWidth:'20px'
             
        }
    },
    methods: {
      
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
.membership{
    width: 100%;
    .membership-grade{
        margin-bottom: 70px;
        header{
            margin-bottom: 16px;
            .grade-name{
                color: #ffffff;
            }
            .grade-details{
                color: rgba($color: #ffffff, $alpha: 0.5);
            }
        }
        .grade-progress{
            width: 100%;
            height: 8px;
            border-radius: 4px;
            background-color: #202429;
            position: relative;
            .grade-speed{
                width: 10%;
                height: 8px;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 4px;
                background-color:$color-quantityColor;
            }
        }
        footer{
            margin-top: 8px;
            span{
                color: rgba($color: #ffffff, $alpha: 0.5);
            }
        }
    }
    .grade-car-option{
        width: 100%;
        h6{
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 10px;
        }
        .car-option{
            margin-top: 30px;
            li{
                display: inline-block;
                width: 90px;
                position: relative;
                margin-bottom: 30px;
                margin-right: 30px;
                &:nth-child(3n){
                    margin-right: 0;
                }
                .car-opacity{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color:rgba(52,57,63,0.5);
                }
                &.active{
                    .car-opacity{
                        background-color:rgba(52,57,63,0) ;
                    }
                }
            }
        }
    }
}
</style>