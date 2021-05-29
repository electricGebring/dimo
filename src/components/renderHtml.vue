<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
import { onMounted, watch } from '@vue/runtime-core';
import { useStore } from 'vuex'


export default {
  setup() {
    let commentData = store.state.documentComment
    const store = useStore()
    const html = require('../assets/html/sbk-avfallsplan.html');
    // here we gonna check with the stor instead
    // const id = '60931cf40a9b83f4cc0e5266'
    // const comment = 'Hej jag heter Johan och jag är snäll, nu så startar jag hotel! <br> Elefanter är grå och inte blå, var snäll och ändra det i texten'

    onMounted(() => {
      store.dispatch("getComments");
      //console.log(store.state.documentComment, 'store.state.documentComment')
    })
   
    // const documentComment = computed(() => {
    //  return store.state.documentComment
    // })

    watch(store.state.documentComment, () => {
      commentData = store.state.documentComment
    })
   
    window.onclick = function(event) {
      // console.log(documentComment, 'documentComment')
      
      // See if clicked element is in array => push || filter
      // console.log(documentComment, 'documentComment')
      const classes = event.target.className
      if (commentData.includes(classes)) {
        store.dispatch("deleteDocumentComment", id, classes, comment)
      } else {
        store.dispatch("postDocumentComment", { id, classes, comment } )  
      }
      
      // Highligth DOM element
      if (commentData.includes(classes)) {
        classes.style.background = "#AEFF14"
      } else {
        classes.style.background = "transparent"
      }
      
    }
    return { html }
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
/* .t.m0.x7.hb.y13.ff1.fs7.fc2.sc0.ls0.ws0 {
    background-color: green!important;
  } */
</style>