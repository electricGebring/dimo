<template>
  <div class="container">
    <div class="main">
      <div class="main-header"></div>
      <div class="content-right">
      </div>
      <renderHtml />
    </div>
    <div class="sidebar-right"></div>
  </div>
</template>

<script>
import renderHtml from "../components/renderHtml.vue";

export default {
  name: "PageThree",
  components: {
    renderHtml
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
   
  },
};
</script>

<style>
.main {
  background: #fff;
}
.sidebar-right {
  background: #f9f9f9;
  width: 324px;
}
.main-header {
  background: #fff;
  height: 124px;
}
</style>
