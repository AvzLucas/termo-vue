<template>
  <div class="container header" >
    <header v-bind:class="{containerAnimationOut : !headerView}" >
      <h1>termo</h1>
      <i class="fa fa-info-circle" aria-hidden="true"></i>
    </header>
  </div>
</template>
<script>
export default ({
  setup() {
    
  },
  computed : {
    headerView(){
      return this.$store.state.headerView
    }
  },
  created : function(){
           console.log('something is happening')
        }
})
</script>
<style scoped>
  @import url('../../public/css/header.css')
</style>