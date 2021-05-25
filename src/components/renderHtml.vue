<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
//import { ref } from '@vue/reactivity'

export default {
  setup() {
    const html = require('../assets/html/sbk-avfallsplan.html');

   //const iframe = ref(iframe)

    window.onclick = function(event) {
      event.target.style.background = "#AEFF14";
      console.log(event.target, 'event.target')
    }

    /*const iframeCont = ref(() => {
      let iframe = document.getElementById('ifrCnt')
      // let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      // return iframeDocument
      return iframe
    })*/
    

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
  .t.m0.x7.hb.y13.ff1.fs7.fc2.sc0.ls0.ws0 {
    background-color: green!important;
  }

</style>