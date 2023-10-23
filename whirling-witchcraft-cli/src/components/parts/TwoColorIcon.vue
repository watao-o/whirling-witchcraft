<template>
  <v-row v-if="Object.keys(doubleObj).length !== 0" justify="center">
    <v-col v-for="n in doubleObj.num" :key="n" style="position:relative;" cols="3">
      <v-chip label variant="elevated" :class="getClassLeft(doubleObj.color)">
        <v-icon :color="getIconColorLeft(doubleObj.color)">{{ getIconLeft(doubleObj.color) }}</v-icon>
      </v-chip>
      <v-chip label variant="elevated" :class="getClassRight(doubleObj.color)">
        <v-icon v-if="!doubleObj.color.green" :color="getIconColorRight(doubleObj.color)">{{ getIconRight(doubleObj.color) }}</v-icon>
        <font-awesome-icon v-if="doubleObj.color.green" :icon="['fas', 'frog']" style="color: green;"/>
      </v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TwoColorIcon',
  props: {
    doubleObj: { type: Object, default: () => {} }
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    getClassLeft (colorObj) {
      if (colorObj.red) return 'two-color-left-top-red'
      if (colorObj.blue) return 'two-color-left-top-blue'
    },
    getIconColorLeft (colorObj) {
      if (colorObj.red) return 'red'
      if (colorObj.blue) return 'blue'
    },
    getIconLeft (colorObj) {
      if (colorObj.red) return 'mdi-mushroom'
      if (colorObj.blue) return 'mdi-spider'
    },
    getClassRight (colorObj) {
      if (colorObj.red && colorObj.blue) return 'two-color-right-bottom-blue'
      if (colorObj.green) return 'two-color-right-bottom-green'
    },
    getIconColorRight (colorObj) {
      if (colorObj.red && colorObj.blue) return 'blue'
      if (colorObj.green) return 'green'
    },
    getIconRight (colorObj) {
      if (colorObj.red && colorObj.blue) return 'mdi-spider'
      if (colorObj.green) return 'mdi-frog'
    }
  }
}
</script>
<style scoped>
/* 左上赤*/
.two-color-left-top-red{
  position: absolute;
  left: 0;
  width: 60px;
  background-color: #EF9A9A;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  z-index: 0;
}
/* 左上青*/
.two-color-left-top-blue{
  position: absolute;
  left: 0;
  width: 60px;
  background-color: #90CAF9;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}
/* 右下青 */
.two-color-right-bottom-blue{
  position: absolute;
  left: 0;
  width: 60px;
  background-color: #90CAF9;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
/* 右下緑 */
.two-color-right-bottom-green{
  position: absolute;
  left: 0;
  width: 60px;
  background-color: #A5D6A7;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
</style>
