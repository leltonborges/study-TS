<template>
  <div id="app">
    <Contador :valorInicial="10" />
    <ContadorClass :valorIncical="100"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Contador from "./components/Contador.vue";
import ContadorClass from "./components/ContadorClass.vue";

@Component({
  components: {
    Contador,
    ContadorClass,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
