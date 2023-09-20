<template>
  <v-container align="center" class="mx-2 max-dimensions">
    <VRow justify="center">
      <h1>Sample Page</h1>
    </VRow>
    <VRow justify="center" class="py-6">
      <VBtn @click="sampleEvent" color="primary">sample</VBtn>
    </VRow>
    <VRow justify="center">
      <h2>{{ msg  }}</h2>
    </VRow>
    <!-- プレイヤーボード -->
    <PlayerBoad
      ref="playerBoad"
      :materials="materials"
    ></PlayerBoad>
    <v-footer app border height="50" color="cyan-accent-3"></v-footer>
  </v-container>
</template>


<script>
import { io } from "socket.io-client";
import PlayerBoad from "./PlayerBoad.vue";

export default {
  name: "WhirlingWitchcraft",
  props: {
  },
  components: {
    PlayerBoad
  },
  data() {
    return {
      socket: io('http://localhost:3000'),
      msg: "",
      // 所持資材
      materials: {
        black: 0,
        white: 1,
        red: 4,
        blue: 4,
        green: 4
      },
      // 配置カード
      cards: [],
      // 手札
      handCards: []
    };
  },
  created() {
    this.socket.on("connect", () => {
      console.log("connected");
    });
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    // サーバーからのイベント受信
    this.socket.on("recieveSampleEvent", (param) => {
      console.log('success!!')
      // 受け取ったパラメータを設定
      this.msg = param
    });
  },
  methods: {
    /**
     * sampleボタンクリックでサーバー呼び出し
     */
    sampleEvent() {
      console.log("callsampleEvent");
      this.socket.emit("sampleEvent")
    },
  },
};
</script>

<style scoped>
</style>
