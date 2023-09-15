<template>
  <v-container align="center" class="mx-2 background-image max-dimensions">
    <VRow justify="center">
      <h1>Sample Page</h1>
    </VRow>
    <VRow justify="center">
      <VCol cols="2" class="border">sapmle1</VCol>
      <VCol cols="2" class="border">sapmle2</VCol>
      <VCol cols="2" class="border">sapmle3</VCol>
      <VCol cols="2" class="border">sapmle4</VCol>
    </VRow>
    <VRow justify="center">
      <VCol cols="2" class="border">sapmle5</VCol>
      <VCol cols="2" class="border">sapmle6</VCol>
      <VCol cols="2" class="border">sapmle7</VCol>
      <VCol cols="2" class="border">sapmle8</VCol>
    </VRow>
    <VRow justify="center" class="py-6">
      <VBtn @click="sampleEvent" color="primary">sample</VBtn>
    </VRow>
    <VRow justify="center">
      <h2>{{ msg  }}</h2>
    </VRow>
  </v-container>
</template>


<script>

export default {
  name: "PlayerBoad",
  props: {
  },
  components: {
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
 },
};
</script>

<style scoped>
</style>
