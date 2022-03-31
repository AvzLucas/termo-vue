<template>
    <div class="container tableField">
        <input type="text" class="fieldInput" v-model="word[0]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field0" + rowIndex' id="field0"  style="text-transform:uppercase" @click="selectField(0)">
        <input type="text" class="fieldInput" v-model="word[1]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field1" + rowIndex' id="field1" style="text-transform:uppercase" @click="selectField(1)" >
        <input type="text" class="fieldInput" v-model="word[2]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field2" + rowIndex' id="field2"  style="text-transform:uppercase" @click="selectField(2)">
        <input type="text" class="fieldInput" v-model="word[3]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field3" + rowIndex' id="field3"  style="text-transform:uppercase" @click="selectField(3)"> 
        <input type="text" class="fieldInput" v-model="word[4]" maxlength="1" v-on:keyup="focusField" v-on:keypress.enter="checkWord"
         :ref='"field4" + rowIndex' id="field4"  style="text-transform:uppercase" @click="selectField(4)">
    </div>
</template>
<script>

export default {
    data(){
        return {
            word : ['','','','',''],
            stringifiedWord : '',
            isWord : false,
            selectedField : null,
            backSpace : 0,
            chance : this.$store.state.chance
        }
    },
    watch : {
        '$store.state.chance':function(){
            // console.log('mudou em')
            if(this.$refs['field0'+this.$store.state.chance]){
                console.log(this.$refs['field0'+this.$store.state.chance])
                console.log('here i am')
                this.$refs['field0'+this.$store.state.chance].focus()
            } 
        }
    }
    ,
    props: ['rowIndex', 'wordIndex'],
    methods : {
        selectField : function(p){
            this.selectedField = p
        },
        focusField : function(e){
            if(e.key=='Enter') return
            if(e.target.value && e.key.length == 1){
                e.target.value = e.key
            }
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
            if(this.word.length < 5){
                this.$emit('error', 'qtyLetters')
                return
            } 
            this.stringifiedWord = this.word.join('').toUpperCase()
            let count = 0
            for(let i in this.$store.state.wordSet){
                    if(this.stringifiedWord == this.$store.state.wordSet[i]){
                        this.isWord = true
                        break
                    }
                count++     
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
                if(this.stringifiedWord[i] == this.$store.state.dailyWord[i]){
                   field.style.backgroundColor = 'rgb(18, 122, 18)'
                }else if(this.$store.state.dailyWord.indexOf(this.stringifiedWord[i]) != -1){
                    field.style.backgroundColor = 'rgb(195, 195, 4)'
                }else{
                    field.style.backgroundColor = 'black'
                }
            }
            if(this.stringifiedWord == this.$store.state.dailyWord){
                this.$emit('error', 'success')
                return
            }
            this.$store.commit('oneLessChance')
        }
    },
    mounted(){
        this.emitter.on('type', data =>{
            if(this.selectedField != null){
                this.word[this.selectedField] = data
                if(this.selectedField < 6){
                    this.selectedField++
                }
            }else{
                for(let i in this.word){
                if(this.$refs['field'+i+this.$store.state.chance]  && !this.word[i]){
                    this.$refs['field'+i+this.$store.state.chance].focus()
                    this.word[i] = data
                    break
                }
              }
            }
        }),
        this.emitter.on('confirm', ()=>{
            if(this.$refs['field0'+ this.$store.state.chance] && this.word[0] != ''){
                this.checkWord()
            }
        })
        this.emitter.on('del', ()=>{
            if(this.selectedField != null){
                this.word[this.selectedField] = ''
                if(this.selectedField > 0){
                    this.selectedField--
                }
            }else{
                if(this.$refs['field0'+this.$store.state.chance]){
                for(let i = 4; i >= 0 ;i-- ){
                    if(this.word[i]){
                        this.word[i] = ''
                        break
                    }
                }
            }
            }
        })

    }
}
</script>
<style scoped>
    @import url('../../public/css/tableField.css');
</style>