<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>

export default {
  setup() {
    const html = require('../assets/html/sbk-avfallsplan.html');
    // here we gonna check with the stor instead
    const exampleIdForDocument = '60931cf40a9b83f4cc0e5266'

    window.onclick = function(event) {
      // See if clicked element is in array => push || filter
      const targetEvent = event.target
      if (this.$store.state.documentComment.includes(targetEvent.className)) {
        this.$store.dispatch("deleteDocumentComment", exampleIdForDocument, targetEvent.className)
      } else {
        this.$store.dispatch("postDocumentComment", exampleIdForDocument, targetEvent.className)
      }
      
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