<template>
    <div class="container result">
        <div class="controls headerToggle" >
            <i class="fa fa-angle-down" @click="toggleHeader" v-if="!headerView" aria-hidden="true"></i>
            <i class="fa fa-angle-up" @click="toggleHeader" v-if="headerView" aria-hidden="true"></i>
            <i class="fa fa-question" aria-hidden="true"></i>
        </div>
        <h1>TERMO</h1>
        <div class="options">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            <i class="fa fa-cog" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
export default {
   computed : {
    headerView(){
      return this.$store.state.headerView
    }
  },
    methods : {
        toggleHeader : function(){
            this.$store.commit('headerToggle')
        }
    }
}
</script>
<style scoped>
    @import url('../../public/css/result.css');
</style>