<template>
  <div>
    <form class="comment-box" v-if="show" @submit.prevent>
      <textarea v-model="comment" placeholder="Lämna en kommentar.."></textarea>
      <button @click="submitComment()">send</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["show", "id"],

  data() {
    return {
      comment: "",
    };
  },
  methods: {
    submitComment() {
      const id = this.id;
      const comment = this.comment;
      const classes = "hej";
      this.$store.dispatch("postDocumentComment", { id, classes, comment });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.comment-box {
  border-radius: 10px;
  float: right;
  width: 171px;
  height: 74.4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
