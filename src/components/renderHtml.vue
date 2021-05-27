<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
//import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'


export default {
  setup() {
    const store = useStore()
    const html = require('../assets/html/sbk-avfallsplan.html');
    // here we gonna check with the stor instead
    const id = '60931cf40a9b83f4cc0e5266'
    const comment = 'Hej jag heter Johan och jag är snäll, nu så startar jag hotel! <br> Elefanter är grå och inte blå, var snäll och ändra det i texten'

    // const documentComment = computed(() => {
    //  return store.state.documentComment
    // })
   

    window.onclick = function(event) {
      
      // See if clicked element is in array => push || filter
      const classes = event.target.className
        // if (documentComment.includes(targetEvent.className)) {
        //   store.dispatch("deleteDocumentComment", exampleIdForDocument, targetEvent.className, testComment)
        // } else {


          //console.log(exampleIdForDocument, 'exampleIdForDocument', targetEvent, 'targetEvent.className', testComment, 'testComment')
          //const editTodo = (todo, value) => store.dispatch('editTodo', { todo, value })
          store.dispatch("postDocumentComment", { id, classes, comment } )
          
        //}
      
      
      
      // Highligth DOM element
      // if (this.$store.state.documentComment.includes(targetEvent.className)) {
      //   targetEvent.style.background = "#AEFF14"
      // } else {
      //   targetEvent.style.background = "transparent"
      // }
      
    }
    return { html }
  }
}
</script>


<style>
  .iframe{
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