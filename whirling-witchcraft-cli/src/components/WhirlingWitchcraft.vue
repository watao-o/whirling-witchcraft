<template>
  <v-container align="center" class="mx-2 background-image max-dimensions">
    <VRow justify="center">
      <h1>Sample Page</h1>
    </VRow>
    <VRow justify="center">
      <VCol cols="2" class="border">sapmle1</VCol>
      <VCol cols="2" class="border">sapmle2</VCol>
      <VCol cols="2" class="border">sapmle3</VCol>
      <VCol cols="2" class="border">sapmle4</VCol>
    </VRow>
    <VRow justify="center">
      <VCol cols="2" class="border">sapmle5</VCol>
      <VCol cols="2" class="border">sapmle6</VCol>
      <VCol cols="2" class="border">sapmle7</VCol>
      <VCol cols="2" class="border">sapmle8</VCol>
    </VRow>
    <VRow justify="center" class="py-6">
      <VBtn @click="sampleEvent" color="primary">sample</VBtn>
    </VRow>
    <VRow justify="center">
      <h2>{{ msg  }}</h2>
    </VRow>
    <!-- プレイヤーボード -->
    <PlayerBoad></PlayerBoad>
  </v-container>
</template>


<script>
import { io } from "socket.io-client";
import PlayerBoad from "./PlayerBoad.vue";

export default {
  name: "WhirlingWitchcraft",
  props: {
  },
  components: {
    PlayerBoad
  },
  data() {
    return {
      socket: io('http://localhost:3000'),
      msg: ""
    };
  },
  created() {
    this.socket.on("connect", () => {
      console.log("connected");
    });
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    // サーバーからのイベント受信
    this.socket.on("recieveSampleEvent", (param) => {
      console.log('success!!')
      // 受け取ったパラメータを設定
      this.msg = param
    });
  },
  methods: {
    /**
     * sampleボタンクリックでサーバー呼び出し
     */
    sampleEvent() {
      console.log("callsampleEvent");
      this.socket.emit("sampleEvent")
    },
  },
};
</script>

<style scoped>
</style>
