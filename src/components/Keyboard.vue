<template>
    <div class="keyboardContainer">
      <div class="row">
        <div class="key" v-on:click="write">Q</div>
        <div class="key" v-on:click="write">W</div>
        <div class="key" v-on:click="write">E</div>
        <div class="key" v-on:click="write">R</div>
        <div class="key" v-on:click="write">T</div>
        <div class="key" v-on:click="write">Y</div>
        <div class="key" v-on:click="write">U</div>
        <div class="key" v-on:click="write">I</div>
        <div class="key" v-on:click="write">O</div>
        <div class="key" v-on:click="write">P</div>
      </div>
      <div class="row">
        <div class="key" v-on:click="write">A</div>
        <div class="key" v-on:click="write">S</div>
        <div class="key" v-on:click="write">D</div>
        <div class="key" v-on:click="write">F</div>
        <div class="key" v-on:click="write">G</div>
        <div class="key" v-on:click="write">H</div>
        <div class="key" v-on:click="write">J</div>
        <div class="key" v-on:click="write">K</div>
        <div class="key" v-on:click="write">L</div>
        <div class="key" id="delKey" v-on:click="del">Delete</div>
      </div>
      <div class="row">
        <div class="key" v-on:click="write">Z</div>
        <div class="key" v-on:click="write">X</div>
        <div class="key" v-on:click="write">C</div>
        <div class="key" v-on:click="write">V</div>
        <div class="key" v-on:click="write">B</div>
        <div class="key" v-on:click="write">N</div>
        <div class="key" v-on:click="write">M</div>
        <div class="key" id="enterKey" v-on:click="confirm">Enter</div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods : {
        write : function(e){
           this.emitter.emit('type', e.target.innerText)
        },
        confirm : function(){
         this.emitter.emit('confirm')
        },
        del : function(){
          this.emitter.emit('del')
        }
    }
}
</script>
<style scoped>
    @import url('../../public/css/keyboard.css');
</style>