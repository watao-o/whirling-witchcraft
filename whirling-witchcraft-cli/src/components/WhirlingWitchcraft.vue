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
import { getMixingCardData } from '@/utils/utils.js'

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
      // プレイヤー情報（サーバーで保持する予定）
      playerInfo: {
        // プレイヤーNo
        num: 1,
        // 名前
        name: 'hoge',
        // 所持資材
        materials: {
          black: 0,
          white: 1,
          red: 4,
          blue: 4,
          green: 4 
        },
        // 設置済み調合法カード
        placedMixingCard: [
          {cardId: 'card_0001'}
        ],
        // 魔女カードID
        witchCardId: 'witch_0001',
        // アルカナ
        arcana: {
          // 魔術書
          magicBook: 0,
          // カラス
          crow: 0,
          // 秘薬
          nostrum: 0
        },
        // 手札情報
        handCards: [
          {cardId: 'card_0002'},
          {cardId: 'card_0003'},
          {cardId: 'card_0004'},
          {cardId: 'card_0005'}
        ]
      },
      // 所持資材（サーバーで保持する予定）
      materials: {
        black: 0,
        white: 1,
        red: 4,
        blue: 4,
        green: 4
      },
      // 配置カード（サーバーで保持する予定）
      cards: [],
      // 手札（サーバーで保持する予定）
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
      console.log('カードデータ取得')
      console.log('取得：',getMixingCardData('card_0002'))
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
