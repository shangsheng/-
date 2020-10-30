<template>
    <div class="account">
        <userHeader :headerName="navName" />
        <div class="user-meta">
          <div class="points-details">
              <div class="pointsTotal">
                  <h6 class="fs-14">总积分</h6>
                  <strong>2000</strong>
              </div>
              <div class="pointsDetailed">
                  <div class="detailed-item">
                      <div class="detailed-title fs-14">首次注册</div>
                      <div class="detailed-num-time">
                          <span class="detailed-num fs-14">+50</span>
                          <span class="detailed-time fs-12">2020-12-12 12:00:00</span>
                      </div>
                  </div>
                  <div class="detailed-item">
                      <div class="detailed-title fs-14">充值 送积分</div>
                      <div class="detailed-num-time">
                          <span class="detailed-num fs-14">+50</span>
                          <span class="detailed-time fs-12">2020-12-12 12:00:00</span>
                      </div>
                  </div>
                  <div class="detailed-item">
                      <div class="detailed-title fs-14">充值 送积分</div>
                      <div class="detailed-num-time">
                          <span class="detailed-num fs-14">+50</span>
                          <span class="detailed-time fs-12">2020-12-12 12:00:00</span>
                      </div>
                  </div>
                  <div class="detailed-item">
                      <div class="detailed-title fs-14">充值 送积分</div>
                      <div class="detailed-num-time">
                          <span class="detailed-num fs-14">+50</span>
                          <span class="detailed-time fs-12">2020-12-12 12:00:00</span>
                      </div>
                  </div>
                  <div class="detailed-item">
                      <div class="detailed-title fs-14">充值 送积分</div>
                      <div class="detailed-num-time">
                          <span class="detailed-num fs-14">+50</span>
                          <span class="detailed-time fs-12">2020-12-12 12:00:00</span>
                      </div>
                  </div>
                  <div class="detailed-more fs-12">加载更多</div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'PointsDetails',
    data(){
        return{
            navName:'积分详情',
             
        }
    },
    methods: {
      
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
.points-details{
    width: 100%;
    .pointsTotal{
        padding-bottom: 30px;
        border-bottom: 1px solid rgba($color: #3e4349, $alpha: 0.5);
        h6{
            color: #ffffff;
            margin-bottom: 16px;
        }
        strong{
            color: #00a3ff;
            font-size: 48px;
        }
    }
    .pointsDetailed{
        width: 100%;
        .detailed-item{
            margin-top: 18px;
            padding-bottom:24px;
            border-bottom: 1px solid rgba($color: #3e4349, $alpha: 0.5);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .detailed-title{
                color: #ffffff;
            }
            .detailed-num-time{
                text-align: right;
                .detailed-num{
                    display: block;
                    color: #00a3ff;
                    margin-bottom: 15px;
                }
                .detailed-time{
                    color: rgba($color: #ffffff, $alpha: 0.2);
                }
            }
        }
        .detailed-more{
            width: 100px;
            height: 40px;
            line-height: 40px;
            color: rgba($color: #ffffff, $alpha:0.3);
            background-color:rgba(255,255,255,0.05);
            margin: 0 auto;
            margin-top: 36px;
            border-radius: 22px;
            text-align: center;
            cursor: pointer;
        }
    }
}
</style>