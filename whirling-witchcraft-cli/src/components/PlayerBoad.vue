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
            <v-card color="lime-lighten-5">
              <v-card-title>
                {{card.name }}
              </v-card-title>
              <v-card-text color="white">
                <v-chip label variant="elevated" color="grey-darken-3"><v-icon color="black">mdi-emoticon-devil</v-icon></v-chip>
                <v-chip label variant="elevated" color="grey-lighten-3"><v-icon color="white">mdi-rabbit</v-icon></v-chip>
                <v-chip label variant="elevated" color="green-lighten-3"><font-awesome-icon :icon="['fas', 'frog']" style="color: green;"/></v-chip>
                <v-chip label variant="elevated" color="red-lighten-3"><v-icon color="red">mdi-mushroom</v-icon></v-chip>
                <v-chip label variant="elevated" color="blue-lighten-3"><v-icon color="blue">mdi-spider</v-icon></v-chip>
              </v-card-text>
              <v-card-text>
                <v-icon color="black">mdi-arrow-down-thick</v-icon>
                <v-icon color="black">mdi-swap-vertical</v-icon>
              </v-card-text>
              <v-card-text>
                <v-chip label variant="elevated" color="grey-darken-3"><v-icon color="black">mdi-emoticon-devil</v-icon></v-chip>
                <v-chip label variant="elevated" color="grey-lighten-3"><v-icon color="white">mdi-rabbit</v-icon></v-chip>
                <v-chip label variant="elevated" color="green-lighten-3"><font-awesome-icon :icon="['fas', 'frog']" style="color: green;"/></v-chip>
                <v-chip label variant="elevated" color="red-lighten-3"><v-icon color="red">mdi-mushroom</v-icon></v-chip>
                <v-chip label variant="elevated" color="blue-lighten-3"><v-icon color="blue">mdi-spider</v-icon></v-chip>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card color="indigo-lighten-1" class="mt-5" width="800">
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
                height="15"
                width="15"
                color="black"
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
            <v-chip label variant="elevated" color="grey-lighten-3">
              <v-card
                v-show="true"
                height="15"
                width="15"
                color="white"
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
                height="15"
                width="15"
                color="red"
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
                height="15"
                width="15"
                color="blue"
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
                height="15"
                width="15"
                color="green"
              ></v-card>
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
