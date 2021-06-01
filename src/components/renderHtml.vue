<template>
  <div>
    <div v-html="html" v-on:click="handleClick()"></div>
  </div>
</template>

<script>
import { onMounted, watch, computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  emits: ["showCommentBox"],
  setup(props, context) {
    const store = useStore();
    const html = require("../assets/html/sbk-avfallsplan.html");
    const showComment = ref(false);
    const handleClick = () => {
      context.emit("showCommentBox", showComment);
    };
    const route = useRoute();

    onMounted(async () => {
      // const id = "60931cf40a9b83f4cc0e5266";
      console.log(route.params, 'route.params')
      await store.dispatch("getComments", route.params.id);
    });

     const commentData = computed(() => store.state.documentComment);
     watch(commentData, () => 
     highlight(commentData._value)
     )

    window.onclick = function(event) {
      console.log(event.target.className);
      event.target.style.background = "#AEFF14";
    };

    // Highligth DOM element
    const highlight = (commentData) => {
      commentData.forEach((element) => {
        const elementToHighlight = document.getElementsByClassName(
          element.classes
        );
        elementToHighlight[0].style.background = "#AEFF14";
      }); 
    };
    return { html, commentData, highlight, showComment, handleClick }
  }
}
</script>

<style>
.iframe {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 100%;
  z-index: -3;
}
</style>
