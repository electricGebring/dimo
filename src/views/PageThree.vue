<template>
  <div class="container">
    <div class="main">
      <div class="main-header"></div>
      <div class="content-right">
        <commentBox :show="show" />
      </div>
      <renderHtml @showCommentBox="showCommentBox" />
    </div>
    <div class="sidebar-right"></div>
  </div>
</template>

<script>
import renderHtml from "../components/renderHtml.vue";
import commentBox from "../components/commentBox.vue";
export default {
  name: "PageThree",
  components: {
    renderHtml,
    commentBox,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showCommentBox(showComment) {
      showComment.value = this.show;
      this.show = true;
    },
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
