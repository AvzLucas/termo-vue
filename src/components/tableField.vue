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
            if(e.key=='ArrowRight'){
               if(!e.target.nextElementSibling) return
               e.target.nextElementSibling.focus()
            }else
            if(!e.target.value.length > 0  || e.key == 'ArrowLeft'){
                if(!e.target.previousElementSibling) return
                e.target.previousElementSibling.focus()
            }else{
                if(!e.target.nextElementSibling) return
                e.target.nextElementSibling.focus()
            }
        },
        checkWord : function(e){
            console.log(e.target.disabled)
            for(let i in this.word){
                this.word[i].toUpperCase()
            }
            if(this.word.length < 5){
                this.$emit('error', 'qtyLetters')
                return
            } 
            this.stringifiedWord = this.word.join('')
            for(let i in this.$store.state.wordSet){
                if(this.stringifiedWord == this.$store.state.wordSet[i]) this.isWord = true
            }
            if(!this.isWord){
                this.$emit('error', 'invalidWord')
                return
            }
            this.validation()
        },
        validation : function(){
            for(let i in word){
                if(word[i] == this.$store.state.dailyWord[i]){
                    
                }
            }
        }
    }
}
</script>
<style scoped>
    @import url('../../public/css/tableField.css');
</style>