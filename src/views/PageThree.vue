<template>
  <commentBox :show="show" />
  <renderHtml @showCommentBox="showCommentBox" />
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

<style></style>
