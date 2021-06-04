<template>
  <div>
    <commentBox :show="show" :id="id" :classes="classes" />
    <div v-html="html" v-on:click="handleClick($event)"></div>
  </div>
</template>

<script>
import { onMounted, watch, computed, ref, onUpdated, reactive} from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import commentBox from "../components/commentBox.vue";

export default {
   components: {
    commentBox,
  },
  
  setup() {
    const show = ref(false)
    const store = useStore()
    const html = require("../assets/html/sbk-avfallsplan.html")
    const showComment = ref(false)
    const route = useRoute()
    const id = route.params.Id
    let classes = reactive({})

    onMounted(() => {
      store.dispatch("getComments", id)
    });

    const commentData = computed(() => store.state.documentComment)

    watch(commentData, () => commentCheck(commentData._value))

    const handleClick = (event) => {
      show.value = ref(true);
      console.log(classes.value === event.target.classList.value, 'classes.value == event.target.classList.value')
      if (classes.value === event.target.classList.value) {
        deHighlight(event.target)
        classes.value = ''
      } else {
        classes.value = event.target.classList.value
        highlight(event.target)
      } 
    };

    // Highligth DOM element
    const commentCheck = (commentData) => {
      commentData.forEach((element) => {
        const elementToHighlight = document.getElementsByClassName(
          element.classes
        );
        highlight(elementToHighlight[0])
      });
    };

    const highlight = (classes) => {
      classes.style.background = "#AEFF14"
    
    }
    const deHighlight = (classes) => {
      classes.style.background = "transparent"
    }


    return { html, commentData, commentCheck, showComment, handleClick, show, id, classes};
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
