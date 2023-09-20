<template>
  <v-card color="indigo-lighten-1" class="mt-5" width="800">
    {{ materials }}
    <v-card-text class="pt-16">
      <!-- 黒 -->
      <v-row justify="center">
        <v-col cols="1">
          <v-chip><v-icon color="black">mdi-emoticon-devil</v-icon></v-chip>
        </v-col>
        <v-col v-for="n in 3" :key="n" cols="1">
          <v-chip label variant="elevated" color="grey-darken-3">
            <v-card
              v-show="true"
              :loading="materials.black >= n"
              height="15"
              width="15"
              :color="materials.black >= n ? 'black' : 'grey-darken-3'"
            ></v-card>
          </v-chip>
        </v-col>
      </v-row>
      <!-- 白 -->
      <v-row justify="center">
        <v-col cols="1">
          <v-chip><v-icon color="white">mdi-rabbit</v-icon></v-chip>
        </v-col>
        <v-col v-for="n in 4" :key="n" cols="1">
          <v-chip label variant="elevated" color="grey-lighten-1">
            <v-card
              v-show="true"
              :loading="materials.white >= n"
              height="15"
              width="15"
              :color="materials.white >= n ? 'white' : 'grey-lighten-1'"
            ></v-card>
          </v-chip>
        </v-col>
      </v-row>
      <!-- 赤 -->
      <v-row justify="center">
        <v-col cols="1">
          <v-chip><v-icon color="red">mdi-mushroom</v-icon></v-chip>
        </v-col>
        <v-col v-for="n in 9" :key="n" cols="1">
          <v-chip label variant="elevated" color="red-lighten-3">
            <v-card
              v-show="true"
              :loading="materials.red >= n"
              height="15"
              width="15"
              :color="materials.red >= n ? 'red' : 'red-lighten-3'"
            ></v-card>
          </v-chip>
        </v-col>
      </v-row>
      <!-- 青 -->
      <v-row justify="center">
        <v-col cols="1">
          <v-chip><v-icon color="blue">mdi-spider</v-icon></v-chip>
        </v-col>
        <v-col v-for="n in 9" :key="n" cols="1">
          <v-chip label variant="elevated" color="blue-lighten-3">
            <v-card
              v-show="true"
              :loading="materials.blue >= n"
              height="15"
              width="15"
              :color="materials.blue >= n ? 'blue' : 'blue-lighten-3'"
            ></v-card>
          </v-chip>
        </v-col>
      </v-row>
      <!-- 緑 -->
      <v-row justify="center">
        <v-col cols="1">
          <v-chip><font-awesome-icon :icon="['fas', 'frog']" style="color: green;"/></v-chip>
        </v-col>
        <v-col v-for="n in 9" :key="n" cols="1">
          <v-chip label variant="elevated" color="green-lighten-3">
            <v-card
              v-show="true"
              :loading="materials.green >= n"
              height="15"
              width="15"
              :color="materials.green >= n ? 'green' : 'green-lighten-3'"
            ></v-card>
          </v-chip>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "materialArea",
  props: {
    // 所持資材
    materials: { type: Object }
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