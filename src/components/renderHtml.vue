<template>
  <div>
    <commentBox :show="show" :id="id" :classes="classes" />
    <div v-html="html" v-on:click="handleClick($event)"></div>
  </div>
</template>

<script>
import { onMounted, watch, computed, ref} from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import commentBox from "../components/commentBox.vue";

export default {
   components: {
    commentBox,
  },
  
  setup() {
    const show = ref(false);
    const store = useStore();
    const html = require("../assets/html/sbk-avfallsplan.html");
    const showComment = ref(false);
    const route = useRoute();
    const id = route.params.Id;
    let classes = []

    onMounted(() => {
      store.dispatch("getComments", id);
    });

    const commentData = computed(() => store.state.documentComment);

    watch(commentData, () => highlight(commentData._value));

    const handleClick = (event) => {
      show.value = ref(true);
      //console.log(event.target, 'event.target')
      classes.push(event.target.classList.value)
      console.log(classes, 'classes')
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
    return { html, commentData, highlight, showComment, handleClick, show, id, classes};
  },
};
</script>

<style lang="scss" scoped>
.iframe {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 100%;
  z-index: -3;
}
</style>
