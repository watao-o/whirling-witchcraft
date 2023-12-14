<template>
  <v-img
    contain
    :src="require('@/assets/witch.png')"
    max-height="400"
    max-width="220"
    alt="魔女カード"
    @click="$emit('clickWitch')"
  />
</template>

<script>
export default {
  name: 'SelectWitchDialog',
  props: {
    // 魔女カードID
    witchId: String
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
