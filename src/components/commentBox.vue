<template>
  <div>
    <form class="comment-box" v-if="show" @submit.prevent>
      <textarea v-model="comment" placeholder="Lämna en kommentar.."></textarea>
      <button @click="submitComment()">send</button>
    </form>
    <div
      class="comment"
      v-for="item in commentList"
      :item="item"
      :key="item"
      @click="deleteComment(item.docId, item.classes)"
    >
      <span>{{ item.comment }} </span>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: ["id", "classes", "show"],
  methods: {
    deleteComment(id, classes) {
      this.$store.dispatch("deleteDocumentComment", { id, classes });
    },
  },
  setup(props) {
    const store = useStore();
    const comment = ref("");
    const showComment = ref(false);

    const submitComment = () => {
      const id = props.id;
      const classes = props.classes.value;
      showComment.value = ref(true);

      store.dispatch("postDocumentComment", {
        id,
        classes,
        comment: comment.value,
      });
      store.dispatch("getComments", {
        id,
        classes,
        comment: comment.value,
      });
    };
    return {
      submitComment,
      comment,
      showComment,
      commentList: computed(() => store.state.documentComment),
    };
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
