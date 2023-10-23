<template>
  <v-card :width="cardWidth" :max-height="cardWidth * 1.5" class="pa-0" @click="console.log('手札クリック')">
    <v-img
      contain
      :src="require('@/assets/mixing_card.png')"
      :max-height="cardWidth * 1.5"
      :max-width="cardWidth"
      alt="カードの外側"
    >
    <v-card-item class="pt-3">
      <v-card-title class="custom-height-arcana py-0">
        <!-- 魔術書 -->
        <v-chip v-for="n in card.arcanaMagicBook" :key="n" class="mt-1 px-2">
          <v-icon color="green">mdi-notebook-multiple</v-icon>
        </v-chip>
        <!-- カラス -->
        <v-chip v-for="n in card.arcanaCrow" :key="n" class="mt-1 px-2">
          <font-awesome-icon :icon="['fas', 'crow']" style="color: black;" />
        </v-chip>
        <!-- 秘薬 -->
        <v-chip v-for="n in card.arcanaNostrum" :key="n" class="mt-1 px-2">
          <v-icon color="red">mdi-pot-steam</v-icon>
        </v-chip>
      </v-card-title>
    </v-card-item>
    <v-card-text>
      <v-card color="rgb(0, 0, 0, 0)">
        <v-card-title :style="fontStyle" class="pt-5">
          {{ card.name }}
        </v-card-title>
        <v-card-text class="custom-height py-0 px-10">
          <!-- 黒 -->
          <v-chip
            label
            variant="elevated"
            color="grey-darken-3"
            class="small-chip"
            max-width="10px"
            v-for="n in card.upperBlack"
            :key="n"
          >
            <v-icon color="black">mdi-emoticon-devil</v-icon>
          </v-chip>
          <!-- 白 -->
          <v-chip label variant="elevated" color="grey-lighten-3" v-for="n in card.upperWhite" :key="n">
            <v-icon color="white">mdi-rabbit</v-icon>
          </v-chip>
          <!-- 緑 -->
          <v-chip label variant="elevated" color="green-lighten-3" v-for="n in card.upperGreen" :key="n">
            <font-awesome-icon :icon="['fas', 'frog']" style="color: green;"/>
          </v-chip>
          <!-- 赤 -->
          <v-chip label variant="elevated" color="red-lighten-3" v-for="n in card.upperRed" :key="n">
            <v-icon color="red">mdi-mushroom</v-icon>
          </v-chip>
          <!-- 青 -->
          <v-chip label variant="elevated" color="blue-lighten-3" v-for="n in card.upperBlue" :key="n">
            <v-icon color="blue">mdi-spider</v-icon>
          </v-chip>
        </v-card-text>
        <v-card-text class="py-0">
          <v-icon v-if="!card.reversable" color="black">mdi-arrow-down-thick</v-icon>
          <v-icon v-if="card.reversable" color="black">mdi-swap-vertical</v-icon>
        </v-card-text>
        <!-- 下段 -->
        <v-card-text class="custom-height py-0 px-10">
          <!-- 黒 -->
          <v-chip label variant="elevated" color="grey-darken-3" v-for="n in card.lowerBlack" :key="n">
            <v-icon color="black">mdi-emoticon-devil</v-icon>
          </v-chip>
          <!-- 白 -->
          <v-chip label variant="elevated" color="grey-lighten-3" v-for="n in card.lowerWhite" :key="n">
            <v-icon color="white">mdi-rabbit</v-icon>
          </v-chip>
          <!-- 緑 -->
          <v-chip label variant="elevated" color="green-lighten-3" v-for="n in card.lowerGreen" :key="n">
            <font-awesome-icon :icon="['fas', 'frog']" style="color: green;"/>
          </v-chip>
          <!-- 赤 -->
          <v-chip label variant="elevated" color="red-lighten-3" v-for="n in card.lowerRed" :key="n">
            <v-icon color="red">mdi-mushroom</v-icon>
          </v-chip>
          <!-- 青 -->
          <v-chip label variant="elevated" color="blue-lighten-3" v-for="n in card.lowerBlue" :key="n">
            <v-icon color="blue">mdi-spider</v-icon>
          </v-chip>
        </v-card-text>
      </v-card>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'HandCard',
  props: {
    card: { type: Object },
    // 所持資材
    materials: { type: Object }
  },
  components: {
  },
  data () {
    return {
      fontStyle: {
        fontSize: '12pt',
        fontFamily: '游明朝',
        color: 'olive'
      },
      cardWidth: 250
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  methods: {
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
