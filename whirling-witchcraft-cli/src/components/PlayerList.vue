<template>
  <v-simple-table class="bordered-table">
    <template v-slot:default>
      <thead/>
      <tbody>
        <tr
          v-for="player in playerList"
          :key="player.num"
        >
          <td v-if="player.left">
            左隣
          </td>
          <td v-else-if="player.right">
            右隣
          </td>
          <td v-else/>
          <td>{{ player.num }}</td>
          <td v-if="player.num == '1'">
            {{ player.name }}
            <font-awesome-icon :icon="['fas', 'frog']" style="color: green;" bounce />
          </td>
          <td v-else-if="player.num == '2'">
            {{ player.name }}
            <v-icon color="black">mdi-emoticon-devil</v-icon>
          </td>
          <td v-else-if="player.num == '3'">
            {{ player.name }}
            <v-icon color="white">mdi-rabbit</v-icon>
          </td>
          <td v-else-if="player.num == '4'">
            {{ player.name }}
            <v-icon color="red">mdi-mushroom</v-icon>
          </td>
          <td v-else-if="player.num == '5'">
            {{ player.name }}
            <font-awesome-icon :icon="['fas', 'spider']" style="color: blue;" bounce />
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "PlayerList",
  props: {
    loginUser: {
      type: String,
      default: 'oshi',
      required: true
    }
  },
  components: {
  },
  data() {
    return {
      playerList: [
      {num: 1, name: "ega", right: false, left: true},
      {num: 2, name: "oshi", right: false, left: false},
      {num: 3, name: "ta1", right: true, left: false},
      {num: 4, name: "ikutoru", right: false, left: false},
      {num: 5, name: "hamu", right: false, left: false}]
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

<style>
.bordered-table {
  border-collapse: collapse; /* セルの境界線を合体させる */
  background-color: rgb(92, 107, 192)
}

.bordered-table td, .bordered-table th {
  border: 1px solid #e0e0e0; /* セルの境界線を表示 */
  padding: 8px; /* セル内の余白を設定（必要に応じて調整） */
  color: white;
}
</style>