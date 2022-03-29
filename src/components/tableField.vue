<template>
    <div class="container tableField">
        <input type="text" class="fieldInput" v-model="word[0]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field0" + rowIndex'>
        <input type="text" class="fieldInput" v-model="word[1]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field1" + rowIndex'>
        <input type="text" class="fieldInput" v-model="word[2]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field2" + rowIndex'>
        <input type="text" class="fieldInput" v-model="word[3]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field3" + rowIndex'>
        <input type="text" class="fieldInput" v-model="word[4]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field4" + rowIndex'>
    </div>
</template>
<script>
export default {
    data(){
        return {
            word : [],
            stringifiedWord : '',
            isWord : false,
        }
    },
    props: ['rowIndex'],
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
            // checks if the word has met the requirements
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
            // calls function to validate word
            this.validation()
        },
        validation : function(){
            console.log(this.$store.state.dailyWord)
            for(let i in this.word){
                let field = this.$refs['field'+i+this.$store.state.chance]
                if(this.word[i] == this.$store.state.dailyWord[i]){
                   field.style.backgroundColor = 'rgb(18, 122, 18)'
                }else if(this.$store.state.dailyWord.indexOf(this.word[i]) != -1){
                    field.style.backgroundColor = 'rgb(195, 195, 4)'
                }else{
                    field.style.backgroundColor = 'black'
                }
            }
            this.$store.commit('oneLessChance')
        }
    }
}
</script>
<style scoped>
    @import url('../../public/css/tableField.css');
</style>