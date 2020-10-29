<template>
    <div class="account">
        <userHeader :headerName="navName" />
        <div class="user-meta">
          <div class="membership">

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
             
        }
    },
    methods: {
      
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';

</style>