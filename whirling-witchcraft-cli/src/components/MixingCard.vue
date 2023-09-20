<template>
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
          {{ card.name }}
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
</template>

<script>
export default {
  name: "MixingCard",
  props: {
    card: { type: Object }
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
