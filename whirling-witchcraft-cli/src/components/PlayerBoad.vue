<template>
  <v-container class="mx-2">
    <v-toolbar
      density="compact"
      :elevation="8"
      title="Player1"
    ></v-toolbar>
    <VRow justify="center">
      <v-col
        cols="12"
        sm="4"
        md="4"
      >
        <v-radio-group>
          <v-radio label="red" value="1"></v-radio>
          <v-radio label="blue" value="2"></v-radio>
        </v-radio-group>
      </v-col>
    </VRow>
    <v-row>
      <v-col v-for="card in cards" :key="card.id" cols="2" class="mx-3">
        <v-card width="200" color="blue">
          <v-card-item>
            <v-card-title>
              <v-chip><v-icon color="green">mdi-notebook-multiple</v-icon></v-chip>
              <v-chip><font-awesome-icon :icon="['fas', 'crow']" style="color: black;" /></v-chip>
              <v-chip><v-icon color="red">mdi-pot-steam</v-icon></v-chip>
            </v-card-title>
          </v-card-item>
          <v-card-text>
            <v-card color="rgb(243, 247, 204)">
              <v-card-title>
                {{card.name }}
              </v-card-title>
              <v-card-text color="white">
                <v-chip><v-icon color="black">mdi-emoticon-devil</v-icon></v-chip>
                <v-chip><v-icon color="white">mdi-rabbit</v-icon></v-chip>
                <v-chip><font-awesome-icon :icon="['fas', 'frog']" style="color: green;"/></v-chip>
                <v-chip><v-icon color="red">mdi-mushroom</v-icon></v-chip>
                <v-chip><v-icon color="blue">mdi-spider</v-icon></v-chip>
              </v-card-text>
              <v-card-text>
                <v-icon color="black">mdi-arrow-down-thick</v-icon>
                <v-icon color="black">mdi-swap-vertical</v-icon>
              </v-card-text>
              <v-card-text>
                <v-chip><v-icon color="black">mdi-emoticon-devil</v-icon></v-chip>
                <v-chip><v-icon color="white">mdi-rabbit</v-icon></v-chip>
                <v-chip><font-awesome-icon :icon="['fas', 'frog']" style="color: green;"/></v-chip>
                <v-chip><v-icon color="red">mdi-mushroom</v-icon></v-chip>
                <v-chip><v-icon color="blue">mdi-spider</v-icon></v-chip>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
      cards: [
        {id: "0001", name: '粉砕の呪文１'},
        {id: "0002", name: '粉砕の呪文２'},
        {id: "0003", name: '粉砕の呪文３'},
        {id: "0004", name: '粉砕の呪文４'},
        {id: "0005", name: '粉砕の呪文５'}
      ]
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
