<template>
  <v-card>
    <v-card-title>
      生成資材
    </v-card-title>
    <v-card-text>
      {{ makeMaterials }}
      <v-row justify="center">
        <v-card
          v-for="n in makeMaterials.black" :key="n"
          loading
          :height="chipSize"
          :width="chipSize"
          :color="'black'"
        ></v-card>
        <v-card
          v-for="n in makeMaterials.white" :key="n"
          loading
          :height="chipSize"
          :width="chipSize"
          :color="'white'"
        ></v-card>
        <v-card
          v-for="n in makeMaterials.green" :key="n"
          loading
          :height="chipSize"
          :width="chipSize"
          :color="'green'"
        ></v-card>
        <v-card
          v-for="n in makeMaterials.red" :key="n"
          loading
          :height="chipSize"
          :width="chipSize"
          :color="'red'"
        ></v-card>
        <v-card
          v-for="n in makeMaterials.blue" :key="n"
          loading
          :height="chipSize"
          :width="chipSize"
          :color="'blue'"
        ></v-card>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MakeMaterials',
  props: {
    // 生成資材
    makeMaterials: { type: Object }
  },
  data () {
    return {
      chipSize: '15'
    }
  }
}
</script>

<style scoped>
</style>
