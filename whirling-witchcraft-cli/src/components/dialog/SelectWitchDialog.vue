<template>
  <v-dialog
    v-model="isShowFlg"
  >
    <v-card max-width="800">
      <v-card-title>
        魔女カードを選択してください
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="witch in selectableWitchs"
            :key="witch.witchId"
            cols="6"
            class="mt-6">
            {{ 'カード名：' + getWitchCardData(witch.witchId).name }} <br>
            {{ '効果：' + getWitchCardData(witch.witchId).effectExplain }}
            <card-witch
              :witch-id="witch.witchId"
              @click-witch="selectWitch(witch.witchId)"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import CardWitch from '@/components/card/CardWitch'
import { getWitchCardData } from '@/utils/utils.js'

export default {
  name: 'SelectWitchDialog',
  props: {
  },
  components: {
    CardWitch
  },
  data () {
    return {
      isShowFlg: false
    }
  },
  methods: {
    /**
     *  共通部品魔女カードデータ取得
     */
    getWitchCardData: getWitchCardData,
    /**
     * ダイアログ起動
     */
    openDialog (selectableWitchs) {
      console.log('SelectWitchDialog:Open')
      this.isShowFlg = true
      this.selectableWitchs = selectableWitchs
    },
    /**
     * 魔女カード選択
     * @param {String} witchId 魔女カードID
     */
    selectWitch (witchId) {
      this.$emit('selectWitch', witchId)
      this.isShowFlg = false
    }

  }
}
</script>

<style scoped>
</style>
