<template>
    <div class="container">
      <Header />
      <Result />
      <Table />
      <Keyboard />
      <WordDataSet />
    </div>
</template>
<script>
import Header from './components/Header.vue'
import Result from './components/Result.vue'
import Table from './components/Table.vue'
import Keyboard from './components/Keyboard.vue'
import WordDataSet from './components/wordDataSet.vue'


export default {
  components : {
    Header,
    Result,
    Table,
    Keyboard,
    WordDataSet
  },
}
</script>
<style>
  @import url('../public/css/app.css');
</style>
