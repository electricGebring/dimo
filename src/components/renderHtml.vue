<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
import { onMounted, watch, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
// import { mapState } from 'vuex';

export default {
  setup() {
    const store = useStore();
    //let commentData = reactive(store.state.documentComment)
    const html = require("../assets/html/sbk-avfallsplan.html");

    // const comment = 'Hej jag heter Johan och jag är snäll, nu så startar jag hotel! <br> Elefanter är grå och inte blå, var snäll och ändra det i texten'

    onMounted(async () => {
      const id = "60931cf40a9b83f4cc0e5266";
      await store.dispatch("getComments", id);
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
    return { html, commentData, highlight };
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
</style>
