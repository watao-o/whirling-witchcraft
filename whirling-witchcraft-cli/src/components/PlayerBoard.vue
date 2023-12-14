<template>
  <v-container class="mx-2 back-color">
    {{ 'playerBoad type:' + type }}
    <v-row class="border py-5">
      <v-col v-for="card in mixingCards" :key="card.cardId" cols="2" class="mx-3 px-0 py-1">
        <mixing-card
          ref="mixingCard"
          :card="getMixingCardData(card.cardId)"
          :materials="materials"
          @updateCardUsed="$emit('updateCardUsed', $event)"
          @alert="$emit('alert', $event)"
        />
      </v-col>
    </v-row>
    <v-row class="border">
      <v-col cols="6">
        <material-area
          ref="cards"
          :materials="materials"
        />
      </v-col>
      <v-col cols="2" class="mt-6">
        <card-witch/>
      </v-col>
      <v-col cols="2" class="mt-6">
        <v-img
          contain
          :src="require('@/assets/arcana.png')"
          max-height="400"
          max-width="220"
          alt="アルカナカード"
        />
      </v-col>
      <v-col cols="2" v-if="type === 'owner'">
        <make-materials
          :makeMaterials="makeMaterials"
        />
      </v-col>
    </v-row>
    <div v-if="handCards.length !== 0">
      <v-row class="border">
        <h1>手札置き場</h1>
      </v-row>
      <v-row class="border py-5">
        <v-col v-for="card in handCards" :key="card.cardId" cols="2" class="mx-3 px-0 py-1">
          <hand-card
            :card="getMixingCardData(card.cardId)"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import MaterialArea from './MaterialArea.vue'
import MixingCard from './MixingCard.vue'
import HandCard from './HandCard.vue'
import MakeMaterials from './MakeMaterials.vue'
import { getMixingCardData } from '@/utils/utils.js'
import CardWitch from '@/components/card/CardWitch'

export default {
  name: 'PlayerBoard',
  props: {
    // 設置済み調合法カード
    mixingCards: { type: Array },
    // 手札
    handCards: { type: Array, default: () => [] },
    // 所持資材
    materials: { type: Object },
    // 生成資材
    makeMaterials: { type: Object },
    type: { type: String }
  },
  components: {
    MixingCard,
    MaterialArea,
    HandCard,
    MakeMaterials,
    CardWitch
  },
  data () {
    return {
      getMixingCardData: getMixingCardData
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.border {
  border: 5px solid;
}

.back-color {
  background: linear-gradient(to bottom right, white, pink);
}
</style>
