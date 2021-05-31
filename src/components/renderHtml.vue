<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex'


export default {
  setup() {
    
    const store = useStore()
    //let commentData = store.state.documentComment
    const html = require('../assets/html/sbk-avfallsplan.html');
    // here we gonna check with the stor instead
    
    // const comment = 'Hej jag heter Johan och jag är snäll, nu så startar jag hotel! <br> Elefanter är grå och inte blå, var snäll och ändra det i texten'

    onMounted(async() => {
      const id = '60931cf40a9b83f4cc0e5266'
      await store.dispatch("getComments", id);
      setTimeout(() => {
        highlight()
      }, 10)
    })
   
    // const commentData = computed(() => {
    //  return store.state.documentComment
    // })

    // watch(commentData, () => {
    //   console.log('watch')
    //   highlight()
    // })

    
   
    window.onclick = function(event) {
      console.log(event.target.className)
      event.target.style.background = "#AEFF14"
      // const classes = event.target.className
      // if (commentData.includes(classes)) {
      //   store.dispatch("deleteDocumentComment", id, classes, comment)
      // } else {
      //   store.dispatch("postDocumentComment", { id, classes, comment } )  
      // }
    }

    // Highligth DOM element
    const highlight = () => {    
      store.state.documentComment.forEach((element) => {
          const elementToHighlight = document.getElementsByClassName(element.classes);
          console.log(elementToHighlight, 'elementToHighlight')
          elementToHighlight[0].style.background = "#AEFF14"
         
        // else {
        //   element.classes.style.background = "transparent"
        // }
      })
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