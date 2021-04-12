<template>
  <div>
    <span class="backbtn" @click="goBack"><img src="/img/gobackicon.svg" alt=""/></span>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.backbtn img {
  cursor: pointer;
  color: #2c365a;
  width: 11.78px;
  height: 20px;
  position: absolute;
}
</style>
