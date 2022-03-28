<template>
    <div class="container tableField">
        <input type="text" class="fieldInput" v-model="word[0]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord">
        <input type="text" class="fieldInput" v-model="word[1]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord">
        <input type="text" class="fieldInput" v-model="word[2]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord">
        <input type="text" class="fieldInput" v-model="word[3]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord">
        <input type="text" class="fieldInput" v-model="word[4]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord">
    </div>
</template>
<script>
export default {
    data(){
        return {
            word : [],
            stringifiedWord : '',
            isWord : false
        }
    },
    methods : {
        focusField : function(e){
            if(!e.target.value.length > 0){
                if(!e.target.previousElementSibling) return
                e.target.previousElementSibling.focus()
            }else{
                if(!e.target.nextElementSibling) return
                e.target.nextElementSibling.focus()
            }
        },
        checkWord : function(e){
               if(this.word.length < 5){
                   this.$emit('error', 'notEnoughChars')
                   return
               } 
               this.stringifiedWord = this.word.toString()
               
               for(let i in this.$store.state.wordSet){
                   if(this.stringifiedWord == this.$store.state.wordSet[i]) isWord = true
               }
               if(isWord){
                   
               }else{
                   this.$emit('error', 'invalidWord')
               }

        }
    }
}
</script>
<style scoped>
    @import url('../../public/css/tableField.css');
</style>