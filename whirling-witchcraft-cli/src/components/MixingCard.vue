<template>
  <v-container class="pa-0">
    <v-card max-height="25" max-width="200" color="deep-purple-lighten-4">
      <VRow>
      <v-col cols="3" class="py-0"/>
      <v-col cols="6" class="py-0">
        <!-- <v-btn
          color="deep-purple-lighten-3"
          @click="useCard"
        >
          カード使用
        </v-btn> -->
        <v-checkbox
          v-model="usedCard"
          justify="center"
          label="useCard"
          class="ma-0"
          density="comfortable"
          @click="onChkBox()"
        />
      </v-col>
      <v-col cols="3" class="py-0"/>
    </VRow>
    </v-card>
        
    <v-card width="200" color="blue">
      <v-card-item>
        <v-card-title class="custom-height-arcana">
          <!-- 魔術書 -->
          <v-chip v-for="n in card.arcanaMagicBook" :key="n">
            <v-icon color="green">mdi-notebook-multiple</v-icon>
          </v-chip>
          <!-- カラス -->
          <v-chip v-for="n in card.arcanaCrow" :key="n">
            <font-awesome-icon :icon="['fas', 'crow']" style="color: black;" />
          </v-chip>
          <!-- 秘薬 -->
          <v-chip v-for="n in card.arcanaNostrum" :key="n">
            <v-icon color="red">mdi-pot-steam</v-icon>
          </v-chip>
        </v-card-title>
      </v-card-item>
      <v-card-text>
        <v-card color="lime-lighten-5">
          <v-card-title>
            {{ card.name }}
          </v-card-title>
          <v-card-text color="white" class="custom-height">
            <!-- 黒 -->
            <v-chip label variant="elevated" color="grey-darken-3" v-for="n in card.upperBlack" :key="n">
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
            <!-- カード使用をONにしたときに表示 -->
            <VRow v-if="usedCard" justify="center" class="mt-1">
              <v-card
                v-for="n in card.upperBlack" :key="n"
                loading
                height="15"
                width="15"
                :color="'black'"
              ></v-card>
              <v-card
                v-for="n in card.upperWhite" :key="n"
                loading
                height="15"
                width="15"
                :color="'white'"
              ></v-card>
              <v-card
                v-for="n in card.upperGreen" :key="n"
                loading
                height="15"
                width="15"
                :color="'green'"
              ></v-card>
              <v-card
                v-for="n in card.upperRed" :key="n"
                loading
                height="15"
                width="15"
                :color="'red'"
              ></v-card>
              <v-card
                v-for="n in card.upperBlue" :key="n"
                loading
                height="15"
                width="15"
                :color="'blue'"
              ></v-card>
            </VRow>
          </v-card-text>
          <v-card-text>
            <v-icon v-if="!card.reversable" color="black">mdi-arrow-down-thick</v-icon>
            <v-icon v-if="card.reversable" color="black">mdi-swap-vertical</v-icon>
          </v-card-text>
          <!-- 下段 -->
          <v-card-text class="custom-height">
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
            <!-- カード使用をONにしたときに表示 -->
            <VRow v-if="usedCard" justify="center" class="mt-1">
              <v-card
                v-for="n in card.lowerBlack" :key="n"
                loading
                height="15"
                width="15"
                :color="'black'"
              ></v-card>
              <v-card
                v-for="n in card.lowerWhite" :key="n"
                loading
                height="15"
                width="15"
                :color="'white'"
              ></v-card>
              <v-card
                v-for="n in card.lowerGreen" :key="n"
                loading
                height="15"
                width="15"
                :color="'green'"
              ></v-card>
              <v-card
                v-for="n in card.lowerRed" :key="n"
                loading
                height="15"
                width="15"
                :color="'red'"
              ></v-card>
              <v-card
                v-for="n in card.lowerBlue" :key="n"
                loading
                height="15"
                width="15"
                :color="'blue'"
              ></v-card>
            </VRow>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MixingCard",
  props: {
    card: { type: Object },
    // 所持資材
    materials: { type: Object }
  },
  components: {
  },
  data() {
    return {
      usedCard: false,
      returnFlg: false
    };
  },
  created() {
  },
  mounted() {
  },
  watch: {
    usedCard(newVal) {
      console.log('watchです！！')
      // 設置可能チェック
      // カードを使用した場合
      if (newVal) {
        if (this.materials.black >= this.card.upperBlack &&
            this.materials.white >= this.card.upperWhite &&
            this.materials.red >= this.card.upperRed &&
            this.materials.blue >= this.card.upperBlue &&
            this.materials.green >= this.card.upperGreen) {
            this.$emit('updateCardUsed', { usedCard: newVal, card: this.card })      
        } else {
          // console.log('設置不可です!!!')
          this.$emit('alert', '設置不可です！！！')
          this.returnFlg = true
          this.usedCard = false
        }
      // カードの使用を解除した場合
      } else {
        if (!this.returnFlg) {
          this.$emit('updateCardUsed', { usedCard: newVal, card: this.card })
        } else {
          this.returnFlg = false
        }
      }
    }
  },
  methods: {
    useCard () {
      console.log('カード使用：', this.card.name)
    },
    onChkBox () {
      // console.log('------onChkBox:')
      // console.log('onChkBox:', this.usedCard)
      // // 設置可能チェック
      // // カードを使用した場合
      // if (!this.usedCard) {
      //   if (this.materials.black >= this.card.upperBlack &&
      //       this.materials.white >= this.card.upperWhite &&
      //       this.materials.red >= this.card.upperRed &&
      //       this.materials.blue >= this.card.upperBlue &&
      //       this.materials.green >= this.card.upperGreen) {
      //       this.$emit('updateCardUsed', { usedCard: this.usedCard, card: this.card })      
      //   } else {
      //     console.log('設置不可です!!!')
      //     this.usedCard = true
      //   }
      // // カードの使用を解除した場合
      // } else {
      //   this.$emit('updateCardUsed', { usedCard: this.usedCard, card: this.card })
      // }
    }
 },
};
</script>

<style scoped>
.custom-height {
  height: 95px;
}
.custom-height-arcana{
  height: 30px;
}
</style>