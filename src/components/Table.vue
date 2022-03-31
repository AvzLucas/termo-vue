<template>
    <div class="containerTable">
        <transition name="errorMsg">
            <div class="errorMsg" v-if="qtyLetters">
                <h2>Somente palavras de 5 letras!</h2>
            </div>
        </transition>
        <transition name="errorMsg">
            <div class="errorMsg" v-if="invalidWord">
                <h2>Palavra inválida</h2>
            </div>
        </transition>
        <transition name="wordReveal">
            <div class="wordReveal" v-if=" this.$store.state.chance == 7">
                <h2>Palavra correta : {{this.$store.state.dailyWord}}</h2>
            </div>
        </transition>
        <transition name="success">
            <div class="success" v-if="success">
                Correto!
            </div>
        </transition>
        <TableField v-for="i in 6" :key="i" :rowIndex="i" :class="{disabled : this.$store.state.chance != i}" @error="error" />
        <Keyboard />
    </div>
</template>
<script>
import Keyboard from './Keyboard.vue'
import TableField from './tableField.vue'
export default {
    data(){
        return {
            qtyLetters : false,
            invalidWord : false,
            chance : this.$store.state.chance,
            chances : this.$store.state.chances,
            dailyWord : this.$store.state.dailyWord,
            success : false
        }
    },
    methods : {
        error(err){ 
            if(err=='qtyLetters'){
                this.qtyLetters = true
            }else 
            if(err=='invalidWord'){
                this.invalidWord = true
            }else if(err=="success"){
                this.success=true
            }

            setTimeout(()=>{
                this.invalidWord = false
                this.qtyLetters = false
            }, 1500)
        },
    },
    components : {
        TableField,
        Keyboard,
    }
}
</script>
<style scoped>
    @import url('../../public/css/table.css');
    .errorMsg-enter, .errorMsg-leave-active {
        transition: opacity .5s;
    }
    .errorMsg-enter, .errorMsg-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .wordReveal-enter, .wordReveal-leave-active {
        transition: opacity .5s;
    }
    .wordReveal-enter, .wordReveal-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .wordReveal{
        color: white;
        background-color: rgb(192, 80, 80);
        padding: 10px;
        border-radius:8px;
        margin-bottom:10px;
        box-shadow:1px 0px 5px white inset;
        width:max-content;
    }
     .success-enter, .success-leave-active {
        transition: opacity .5s;
    }
    .success-enter, .success-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .success{
        background-color:rgb(33, 174, 33);
        padding: 15px;
        color: white;
        border-radius:8px;
        box-shadow:1px 1px 10px white;
        margin-bottom:5px;
    }
    .disabled{
        pointer-events: none;
    }
</style>