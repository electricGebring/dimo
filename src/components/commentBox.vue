<template>
  <div>
    <textarea
      class="comment-box"
      v-if="show"
      v-model="comment"
      placeholder="Lämna en kommentar.."
    ></textarea>
  </div>
</template>
<script>
export default {
  props: ["show"],
  methods: {},
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
