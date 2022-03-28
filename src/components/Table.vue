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
        <TableField v-for="i in 6" :key="i" @error="error"/>
    </div>
</template>
<script>
import TableField from './tableField.vue'
export default {
    data(){
        return {
            qtyLetters : false,
            invalidWord : false
        }
    },
    methods : {
        error(err){ 
            if(err=='qtyLetters'){
                this.qtyLetters = true
            }else 
            if(err=='invalidWord'){
                this.invalidWord = true
            }

            setTimeout(()=>{
                this.invalidWord = false
                this.qtyLetters = false
            }, 1500)
        }
    },
    components : {
        TableField
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
</style>