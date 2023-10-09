<template>
  <v-container align="center" class="mx-2 max-dimensions">
    <player-list
      :playerList="playerList"
    ></player-list>
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
      <VBtn @click="playerInfo.materials.black++" color="black">add black</VBtn>
      <VBtn @click="playerInfo.materials.black--" color="black">dec black</VBtn>
      <VBtn @click="playerInfo.materials.white++" color="white">add white</VBtn>
      <VBtn @click="playerInfo.materials.white--" color="white">dec white</VBtn>
      <VBtn @click="playerInfo.materials.red++" color="red">add red</VBtn>
      <VBtn @click="playerInfo.materials.red--" color="red">dec red</VBtn>
      <VBtn @click="playerInfo.materials.blue++" color="blue">add blue</VBtn>
      <VBtn @click="playerInfo.materials.blue--" color="blue">dec blue</VBtn>
      <VBtn @click="playerInfo.materials.green++" color="green">add green</VBtn>
      <VBtn @click="playerInfo.materials.green--" color="green">dec green</VBtn>
    </VRow>
    <!-- プレイヤーボード -->
    <player-boad
      ref="playerBoad"
      :mixingCards="playerInfo.placedMixingCards"
      :materials="playerInfo.materials"
      :handCards="playerInfo.handCards"
      @updateCardUsed="updateCardUsed($event)"
      @alert="alert($event)"
    ></player-boad>
    <!-- 他プレイヤー情報 -->
    <v-card color="blue">
      <h1>他プレイヤー情報</h1>
    </v-card>
    <v-card border>
      <v-row>
        <v-col cols="6" v-for="otherPlayer in otherPlayerInfoList" :key="otherPlayer.num" class="border">
        <v-card :color="otherPlayer.right ? 'orange' : otherPlayer.left ? 'yellow' : 'purple-lighten-4'">
          <h2>
            <div v-if="otherPlayer.right">右隣：{{ otherPlayer.name }}</div>
            <div v-else-if="otherPlayer.left">左隣：{{ otherPlayer.name }}</div>
            <div v-else>{{ otherPlayer.name }}</div>
          </h2>
        </v-card>
            <player-boad
              :ref="'playerBoad' + otherPlayer.num"
              :mixingCards="otherPlayer.placedMixingCards"
              :materials="otherPlayer.materials"
              @updateCardUsed="updateCardUsed($event)"
              @alert="alert($event)"
            ></player-boad>
          <!-- {{ otherPlayer }} -->
        </v-col>
      </v-row>
    </v-card>
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
import PlayerList from "./PlayerList.vue"
import data from "@/assets/data.json"
import { getMixingCardData, getRandomNum } from '@/utils/utils.js'

export default {
  name: 'WhirlingWitchcraft',
  props: {
  },
  components: {
    PlayerBoad,
    PlayerList
  },
  data () {
    return {
      socket: io('http://localhost:3000'),
      msg: "",
      playerName: 'oshi',
      // プレイヤー情報（サーバーで保持する予定）
      playerList: [
        {num: 1, name: "ega", right: false, left: true},
        {num: 2, name: "oshi", right: false, left: false},
        {num: 3, name: "ta1", right: true, left: false},
        {num: 4, name: "ikutoru", right: false, left: false},
        {num: 5, name: "hamu", right: false, left: false}
      ],
      // 部屋情報
      room: {
        // 山札
        decks: []
      },
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
        placedMixingCards: [
          {cardId: 'card_0001'},
          {cardId: 'card_0003'},
          {cardId: 'card_0010'},
          {cardId: 'card_0011'},
          {cardId: 'card_0017'},
          {cardId: 'card_0008'},
          {cardId: 'card_0027'}
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
          // {cardId: 'card_0002'},
          // {cardId: 'card_0003'},
          // {cardId: 'card_0004'},
          // {cardId: 'card_0005'}
        ]
      },
      // 他プレイヤー情報
      otherPlayerInfoList: [],
      showAlert: false,
      alertMsg: '',
      data: data,
    };
  },
  created() {
    this.socket.on("connect", () => {
      console.log("connected");
    });

    this.playerList.forEach(player => {
      // 自分以外のプレイヤーの情報を作成する
      if (player.name !== this.playerName) {
        const playerInfo = {
          ...this.playerInfo,
          num: player.num,
          name: player.name,
          right: player.right,
          left: player.left 
        }
        this.otherPlayerInfoList.push(playerInfo)
      }
    });
    console.log('他プレイヤー情報:', this.otherPlayerInfoList)
    // 山札を作成（本番はサーバーでルーム作成時に実行予定）
    this.decks = data.cardList.map(card => card.cardId)
    console.log('山札：', this.decks)
    // 手札を４枚配布
    for(let i = 0; i < 4; i++) {
      const randomIndex = getRandomNum(0, this.decks.length - 1)
      console.log('randomIndex:', randomIndex)
      this.playerInfo.handCards.push({cardId: this.decks[randomIndex]})
      // TODO:山札から除外
    }
    console.log('手札：', this.playerInfo.handCards)
  },
  watch: {
  },
  mounted () {
    // サーバーからのイベント受信
    this.socket.on('recieveSampleEvent', (param) => {
      console.log('success!!')
      // 受け取ったパラメータを設定
      this.msg = param
    })
  },
  methods: {
    /**
     * sampleボタンクリックでサーバー呼び出し
     */
    sampleEvent () {
      console.log('callsampleEvent')
      this.socket.emit('sampleEvent')
      console.log('カードデータ取得')
      console.log('取得：', getMixingCardData('card_0002'))
    },
    /**
     * カード使用イベント
     */
    updateCardUsed ({ usedCard, card }) {
      // カードを新しく使用する場合、資源を使用
      if (usedCard) {
        this.playerInfo.materials.black -= card.upperBlack
        this.playerInfo.materials.white -= card.upperWhite
        this.playerInfo.materials.red -= card.upperRed
        this.playerInfo.materials.blue -= card.upperBlue
        this.playerInfo.materials.green -= card.upperGreen
      // カードの使用をやめる場合、使っている資源を追加
      } else {
        this.playerInfo.materials.black += card.upperBlack
        this.playerInfo.materials.white += card.upperWhite
        this.playerInfo.materials.red += card.upperRed
        this.playerInfo.materials.blue += card.upperBlue
        this.playerInfo.materials.green += card.upperGreen
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
  }
}
</script>

<style scoped>
.border{
  border: 1px solid;
}
</style>
