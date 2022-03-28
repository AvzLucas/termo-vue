<template>
    <div class="containerTable">
        <transition name="errorMsg">
            <div class="errorMsg" v-if="hasError">
                <h2>Somente palavras de 5 letras!</h2>
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
            hasError : false
        }
    },
    methods : {
        error(){
            this.hasError=true
            setTimeout(()=>{
                this.hasError = false
            }, 3000)
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