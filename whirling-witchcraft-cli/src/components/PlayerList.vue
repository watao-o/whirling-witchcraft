<template>
  <v-card :style="playerListStyle" color="purple-lighten-4">
    <v-card-title>
      プレイヤーリスト
    </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th style="width: 50px;">隣人</th>
              <th style="width: 50px;">No</th>
              <th style="width: 200px;">name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in playerList" :key="player.num">
              <td :class="getTableBodyClass(player)">
                {{ player.right ? '右隣' : player.left ? '左隣' : '' }}
              </td>
              <td :class="getTableBodyClass(player)">{{ player.num }}</td>
              <td :class="getTableBodyClass(player)">{{ player.name }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: "PlayerList",
  props: {
    // プレイヤーリスト
    playerList: { type: Array , default: () => [] }
  },
  components: {
  },
  data() {
    return {
      playerListStyle: {
        position: 'fixed',
        top: '20px', // 画面上部からの距離（適宜調整）
        right: '20px', // 画面右側からの距離（適宜調整）
      },
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getTableBodyClass (player) {
      return player.right ? 'table-body-right' :
             player.left ? 'table-body-left' :
             'table-body'
    },
  },
};
</script>

<style scoped>
/* プレイヤーリストテーブルレイアウト設定 */
th,td {
  border: solid 1px;  /* 枠線指定 */
  padding: 3px;      /* 余白指定 */
}
table {
  border-collapse:  collapse; /* セルの線を重ねる */
}
thead {
  background-color: lightblue;
}
.table-body {
  background-color: white;
}
.table-body-right {
  background-color: orange;
}
.table-body-left {
  background-color: yellow;
}
</style>