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
          <v-col cols="6" class="mt-6">
            <card-witch/>
          </v-col>
          <v-col cols="6" class="mt-6">
            <card-witch/>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import CardWitch from '@/components/card/CardWitch'

export default {
  name: 'SelectWitchDialog',
  props: {
  },
  components: {
    CardWitch
  },
  data () {
    return {
      isShowFlg: false,
      usedCard: false,
      returnFlg: false,
      fontStyle: {
        fontSize: '12pt',
        fontFamily: '游明朝',
        color: 'olive'
      },
      cardWidth: 250,
      chipSize: '15'
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  methods: {
    openDialog () {
      console.log('SelectWitchDialog:Open')
      this.isShowFlg = true
    }
  }
}
</script>

<style scoped>
.custom-height {
  height: 95px;
}
.custom-height-arcana{
  height: 30px;
}
</style>
