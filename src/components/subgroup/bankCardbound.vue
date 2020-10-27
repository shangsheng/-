<template>
    <div class="card-bound">
        <ul>
            <li class="bound-icon icon-width-348 icon-BOC">
                <h5 class="name">中国银行</h5>
                <h6 class="cardNumber">3568 **** **** 8888</h6>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Cardbound',
    data(){
        return{}
    }    
}
</script>
<style lang="scss" scoped>
    .card-bound{
        width: 100%;
        margin-top: 90px;
        .bound-icon{
            padding: 30px 40px 40px 30px;
            @include webkitA(box-sizing,border-box);
            .name{
                font-size: 18px;
                color: #ffffff;
            }
            .cardNumber{
                font-size: 30px;
                color: #ffffff;
                margin-top: 70px;
            }
        }
    }
</style>