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
    <VRow justify="center" class="py-6">
      <VBtn @click="materials.black++" color="black">add black</VBtn>
      <VBtn @click="materials.black--" color="black">dec black</VBtn>
      <VBtn @click="materials.white++" color="white">add white</VBtn>
      <VBtn @click="materials.white--" color="white">dec white</VBtn>
      <VBtn @click="materials.red++" color="red">add red</VBtn>
      <VBtn @click="materials.red--" color="red">dec red</VBtn>
      <VBtn @click="materials.blue++" color="blue">add blue</VBtn>
      <VBtn @click="materials.blue--" color="blue">dec blue</VBtn>
      <VBtn @click="materials.green++" color="green">add green</VBtn>
      <VBtn @click="materials.green--" color="green">dec green</VBtn>
    </VRow>
    <!-- プレイヤーボード -->
    <PlayerBoad
      ref="playerBoad"
      :data="data"
      :materials="materials"
      @updateCardUsed="updateCardUsed($event)"
      @alert="alert($event)"
    ></PlayerBoad>
    <v-footer app border height="60">
      <!-- アラート -->
      <v-alert
        v-if="showAlert"
        type="warning"
        :title="alertMsg"
      ></v-alert>
    </v-footer>
  </v-container>
</template>


<script>
import { io } from "socket.io-client";
import PlayerBoad from "./PlayerBoad.vue";
import data from "@/assets/data.json"

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
      handCards: [],
      showAlert: false,
      alertMsg: '',
      data: data
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
    /**
     * カード使用イベント
     */
    updateCardUsed ({usedCard, card}) {
      // console.log('updateCardUsed')
      // console.log('used:', usedCard, 'card:', card)
      // カードを新しく使用する場合、資源を使用
      if (usedCard) {
        this.materials.black -= card.upperBlack
        this.materials.white -= card.upperWhite
        this.materials.red -= card.upperRed
        this.materials.blue -= card.upperBlue
        this.materials.green -= card.upperGreen
      // カードの使用をやめる場合、使っている資源を追加
      } else {
        this.materials.black += card.upperBlack
        this.materials.white += card.upperWhite
        this.materials.red += card.upperRed
        this.materials.blue += card.upperBlue
        this.materials.green += card.upperGreen
      }
    },
    alert (msg) {
      console.log('アラート：', msg)
      if (!this.showAlert) {
        this.alertMsg = msg
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
          this.alertMsg = ''
        }, 1000)
      }
    }
  },
};
</script>

<style scoped>
</style>
