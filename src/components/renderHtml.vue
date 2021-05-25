<template>
  <div>
    <div v-html="html"></div>
    <!-- <iframe id="ifrCnt" class="iframe" :src="html"></iframe> -->
  </div>
  <!-- <div>{{iframeCont}}</div> -->
</template>

<script>
// import html from 
import { ref } from '@vue/reactivity'
// import { ref } from '@vue/reactivity'
export default {
  setup() {
    // const html = 'https://en.wikipedia.org/wiki/Main_Page'
    const html = '../assets/html/sbk-avfallsplan.html'
    // const html = 'http://gebring.se/sbk.html'

    const iframe = ref(iframe)

    window.onclick = function(event) {
      console.log(event.target, 'event.target')
      //console.log(this.iframeCont(), 'iframeCont')
    }

    const iframeCont = ref(() => {
      let iframe = document.getElementById('ifrCnt')
      // let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      // return iframeDocument
      return iframe
    })
    

    return { html, iframeCont}
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