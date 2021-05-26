<template>
  <div>
    <div v-html="html" v-on:click="handleClick()"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["showCommentBox"],
  setup(props, context) {
    const html = require("../assets/html/sbk-avfallsplan.html");
    let markedArray = [];
    const showComment = ref(false);
    const handleClick = () => {
      context.emit("showCommentBox", showComment);
    };

    window.onclick = function(event) {
      if (markedArray.includes(event.target.className)) {
        markedArray = markedArray.filter((classes) => {
          console.log(classes, "classes");
          return classes !== event.target.className;
        });
      } else {
        markedArray.push(event.target.className);
      }

      if (markedArray.includes(event.target.className)) {
        event.target.style.background = "#AEFF14";
      } else {
        event.target.style.background = "transparent";
      }
    };

    return { html, showComment, handleClick };
  },
};
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
/* .t.m0.x7.hb.y13.ff1.fs7.fc2.sc0.ls0.ws0 {
    background-color: green!important;
  } */
</style>
