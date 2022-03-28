<template>
    <input type="text" v-model="word" v-on:keypress="checkWord">
</template>
<script>
export default {
    data(){
        return {
            word : ''
        }
    },
    methods : {
        checkWord : function(e){
           if(e.key == 'Enter'){
               this.$store.commit('checkWord')
           }
        }
    }
}
</script>
<style scoped>

</style>