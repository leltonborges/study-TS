<template>
  <div>
    <h1>Contador (Class)</h1>
    <h2>{{ getValue() }}</h2>
    <h3>{{ getParOuImpar() }}</h3>
    <button @click="setValor(-1)">Des</button>
    <button @click="setValor(1)">Inc</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ContadorClass extends Vue {
  @Prop(Number)
  private readonly valorIncical?: number;

  private valor = this.valorIncical || 0;

  public setValor(delta: number) {
    this.valor += delta;
  }

  public getParOuImpar(): string {
    return this.valor % 2 === 0 ? "Par" : "Impar";
  }
  public getValue(): number {
    return this.valor;
  }
}
</script>

<style></style>
