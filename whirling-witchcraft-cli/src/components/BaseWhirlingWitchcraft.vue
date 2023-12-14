<template>
  <v-container align="center" class="mx-2 max-dimensions">
    <!-- アラート -->
    <v-alert
      v-if="showAlert"
      type="warning"
      :title="alertMsg"
      position="absolute"
    ></v-alert>
    <player-list
      :playerList="playerList"
    ></player-list>
    <VRow justify="center">
      <h2>{{ msg  }}</h2>
    </VRow>
    <!-- ゲーム開始ボタン（仮） -->
    <VRow justify="center" class="py-6">
      <VBtn @click="startGame" color="primary">start game</VBtn>
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
    <player-board
      ref="PlayerBoard"
      :mixingCards="playerInfo.placedMixingCards"
      :materials="playerInfo.materials"
      :makeMaterials="playerInfo.makeMaterials"
      :handCards="playerInfo.handCards"
      :type="'owner'"
      @updateCardUsed="updateCardUsed($event)"
      @alert="alert($event)"
    ></player-board>
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
            <player-board
              :ref="'PlayerBoard' + otherPlayer.num"
              :mixingCards="otherPlayer.placedMixingCards"
              :materials="otherPlayer.materials"
              :type="'other'"
              @updateCardUsed="updateCardUsed($event)"
              @alert="alert($event)"
            ></player-board>
        </v-col>
      </v-row>
    </v-card>
    <select-witch-dialog
      ref="selectWitchDialog"
      @select-witch="selectWitch($event)"
    ></select-witch-dialog>
  </v-container>
</template>

<script>
import { io } from 'socket.io-client'
import PlayerBoard from './PlayerBoard.vue'
import PlayerList from './PlayerList.vue'
import SelectWitchDialog from '@/components/dialog/SelectWitchDialog'
import data from '@/assets/data.json'
import { getMixingCardData, getRandomNum, getDecks, getWitchDecks, getWitchCardData } from '@/utils/utils.js'

export default {
  name: 'BaseWhirlingWitchcraft',
  props: {
  },
  components: {
    PlayerBoard,
    PlayerList,
    SelectWitchDialog
  },
  data () {
    return {
      socket: io('http://localhost:3000'),
      msg: '',
      playerName: 'oshi',
      // プレイヤー情報（サーバーで保持する予定）
      playerList: [
        { num: 1, name: 'ega', right: false, left: true },
        { num: 2, name: 'oshi', right: false, left: false },
        { num: 3, name: 'ta1', right: true, left: false },
        { num: 4, name: 'ikutoru', right: false, left: false },
        { num: 5, name: 'hamu', right: false, left: false }
      ],
      // 部屋情報
      room: {
        // 山札
        decks: [],
        // 魔女カード山札
        witchDecks: []
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
        // 生成資材
        makeMaterials: {
          black: 0,
          white: 0,
          red: 0,
          blue: 0,
          green: 0
        },
        // 設置済み調合法カード
        placedMixingCards: [
          // { cardId: 'card_0001' },
          // { cardId: 'card_0003' },
          // { cardId: 'card_0010' },
          // { cardId: 'card_0023' },
          // { cardId: 'card_0017' },
          // { cardId: 'card_0008' },
          // { cardId: 'card_0027' }
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
        handCards: [],
        // 初期選択魔女一覧
        selectableWitchs: []
      },
      // 他プレイヤー情報
      otherPlayerInfoList: [],
      showAlert: false,
      alertMsg: '',
      data: data
    }
  },
  created () {
    this.socket.on('connect', () => {
      console.log('connected')
    })

    // this.playerList.forEach(player => {
    //   // 自分以外のプレイヤーの情報を作成する
    //   if (player.name !== this.playerName) {
    //     const playerInfo = {
    //       ...this.playerInfo,
    //       num: player.num,
    //       name: player.name,
    //       right: player.right,
    //       left: player.left
    //     }
    //     this.otherPlayerInfoList.push(playerInfo)
    //   }
    // })
    // console.log('他プレイヤー情報:', JSON.stringify(this.otherPlayerInfoList, null, 2))
    // // 山札を作成（本番はサーバーでルーム作成時に実行予定）
    // // this.decks = data.cardList.map(card => card.cardId)
    // this.decks = getDecks()
    // console.log('山札：', this.decks)
    // // 手札を４枚配布
    // for (let i = 0; i < 4; i++) {
    //   const randomIndex = getRandomNum(0, this.decks.length - 1)
    //   console.log('randomIndex:', randomIndex)
    //   this.playerInfo.handCards.push({ cardId: this.decks[randomIndex] })
    //   // TODO:山札から除外
    // }
    // console.log('手札：', this.playerInfo.handCards)
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
     * ゲーム開始イベント（作成中）
     */
    startGame () {
      // 他プレイヤー情報の作成 TODO:サーバーに移行予定
      this.playerList.forEach(player => {
        // 自分以外のプレイヤーの情報を作成する
        if (player.name !== this.playerName) {
          const playerInfo = {
            ...this.playerInfo,
            num: player.num,
            name: player.name,
            right: player.right,
            left: player.left,
            handCards: [],
            selectableWitchs: []
          }
          this.otherPlayerInfoList.push(playerInfo)
        }
      })
      console.log('他プレイヤー情報:', this.otherPlayerInfoList)
      // 山札・魔女カード山札を作成 TODO:サーバーに移行予定
      this.room.decks = getDecks()
      this.room.witchDecks = getWitchDecks()

      // 自分の手札配布 TODO:（サーバーに移行予定）
      this.distributeCard(this.playerInfo.handCards, this.room.decks, 4, 'card')
      console.log('自分の手札：', JSON.stringify(this.playerInfo.handCards))
      // 他プレイヤーの手札配布 TODO:（サーバーに移行予定）
      this.otherPlayerInfoList.forEach(o => {
        this.distributeCard(o.handCards, this.room.decks, 4, 'card')
      })

      // 自分の魔女カードを配布 TODO:（サーバーに移行予定）
      this.distributeCard(this.playerInfo.selectableWitchs, this.room.witchDecks, 2, 'witch')
      console.log('魔女カード：', this.playerInfo.selectableWitchs)
      // 他プレイヤーの魔女カード配布 TODO:（サーバーに移行予定）
      this.otherPlayerInfoList.forEach(o => {
        this.distributeCard(o.selectableWitchs, this.room.witchDecks, 2, 'witch')
      })
      // 魔女選択ダイアログ
      this.$refs.selectWitchDialog.openDialog(this.playerInfo.selectableWitchs)
    },
    /**
     * 手札配布
     * @param {Array} handCards 手札情報
     * @param {Array} decks 山札情報
     * @param {Array} distributeNum 配る枚数
     * @param {Array} type 種類（調合法カード or 魔女カード）
     */
    distributeCard (handCards, decks, distributeNum, type) {
      // 手札を４枚配布
      for (let i = 0; i < distributeNum; i++) {
        const randomIndex = getRandomNum(0, decks.length - 1)
        // 調合法カード
        if (type === 'card') handCards.push({ cardId: decks[randomIndex] })
        // 魔女カード
        else handCards.push({ witchId: decks[randomIndex] })
        // 山札から除外
        decks.splice(randomIndex, 1)
      }
    },
    /**
     * 魔女選択
     * @param {String} witchId 魔女カードID
     */
    selectWitch (witchId) {
      console.log('選択した魔女カードID:', witchId)
      const witchData = getWitchCardData(witchId)
      // this.alert('選択した魔女カード:' + witchData.name)
      this.$toast.success('選択した魔女カード:' + witchData.name)
      this.playerInfo.witchCardId = witchId
      console.log(witchData)

      // 魔女カードに応じた資材を配る
      this.playerInfo.materials.black = witchData.initBlack
      this.playerInfo.materials.white = witchData.initWhite
      this.playerInfo.materials.red = witchData.initRed
      this.playerInfo.materials.blue = witchData.initBlue
      this.playerInfo.materials.green = witchData.initGreen
      console.log('初期資材：', JSON.stringify(this.playerInfo.materials))

      // 魔女カードの応じたアルカナを配る(TODO:アルカナのデータがないためデータ修正後に対応)

      // 使用カードを1枚選択
      this.$toast.info('使用するカードを１枚選んでください')

      // TODO:手札選択可能フラグをONにする
    },
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
      console.log('■BaseWhirlingWitchcraft.vue:updateCardUsed()')
      // カードを新しく使用する場合、資源を使用
      if (usedCard) {
        // 所持資材を消費
        this.playerInfo.materials.black -= card.upperBlack
        this.playerInfo.materials.white -= card.upperWhite
        this.playerInfo.materials.red -= card.upperRed
        this.playerInfo.materials.blue -= card.upperBlue
        this.playerInfo.materials.green -= card.upperGreen
        // 生成資材に追加
        this.playerInfo.makeMaterials.black += card.lowerBlack
        this.playerInfo.makeMaterials.white += card.lowerWhite
        this.playerInfo.makeMaterials.red += card.lowerRed
        this.playerInfo.makeMaterials.blue += card.lowerBlue
        this.playerInfo.makeMaterials.green += card.lowerGreen
      // カードの使用をやめる場合、使っている資源を追加
      } else {
        // 所持資材を元に戻す
        this.playerInfo.materials.black += card.upperBlack
        this.playerInfo.materials.white += card.upperWhite
        this.playerInfo.materials.red += card.upperRed
        this.playerInfo.materials.blue += card.upperBlue
        this.playerInfo.materials.green += card.upperGreen
        // 生成資材を元に戻す
        this.playerInfo.makeMaterials.black -= card.lowerBlack
        this.playerInfo.makeMaterials.white -= card.lowerWhite
        this.playerInfo.makeMaterials.red -= card.lowerRed
        this.playerInfo.makeMaterials.blue -= card.lowerBlue
        this.playerInfo.makeMaterials.green -= card.lowerGreen
      }
    },
    alert (msg) {
      if (!this.showAlert) {
        this.alertMsg = msg
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
          this.alertMsg = ''
        }, 5000)
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
