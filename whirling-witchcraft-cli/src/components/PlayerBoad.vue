<template>
  <v-container class="mx-2">
    <v-row>
      <!-- <v-col v-for="card in cards" :key="card.id" cols="2" class="mx-3">
        <mixing-card
          ref="mixingCard"
          :card="card"
        />
      </v-col> -->
      <v-col v-for="card in data.cardList" :key="card.cardId" cols="2" class="mx-3 px-0 py-1">
        <mixing-card
          ref="mixingCard"
          :card="card"
          :materials="materials"
          @updateCardUsed="$emit('updateCardUsed', $event)"
          @alert="$emit('alert', $event)"
        />
      </v-col>
    </v-row>
    <material-area
      ref="materialArea"
      :materials="materials"
    />
  </v-container>
</template>

<script>
import MaterialArea from './MaterialArea.vue';
import MixingCard from './MixingCard.vue'

export default {
  name: "PlayerBoad",
  props: {
    data: { type: Object },
    // 所持資材
    materials: { type: Object }
  },
  components: {
    MixingCard,
    MaterialArea
  },
  data() {
    return {
      cards: [
        {id: "0001", name: '粉砕の呪文１'},
        {id: "0002", name: '粉砕の呪文２'},
        {id: "0003", name: '粉砕の呪文３'},
        {id: "0004", name: '粉砕の呪文４'},
        {id: "0005", name: '粉砕の呪文５'}
      ],
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateCardUsed ({usedCard, card}) {
      console.log('updateCardUsed')
      console.log('used:', usedCard, 'card:', card)
      this.$emit('updateCardUsed', )
    }
 },
};
</script>

<style scoped>
</style>
