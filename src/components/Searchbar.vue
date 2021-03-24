<template>
  <div class="searchbar">
    <Autocomplete
      @input="Elements"
      :results="myElements"
      :display-item="displayElement"
    ></Autocomplete>
  </div>
</template>
<script>
import Autocomplete from 'vue3-autocomplete'
import 'vue3-autocomplete/dist/vue3-autocomplete.css'

export default {
  name: 'SearchBar',
  components: {
    Autocomplete,
  },
  data() {
    return {
      myElements: [],
    }
  },
  methods: {
    Elements() {
      this.myElements = this.$store.state.Elements
    },
    displayElement(Element) {
      return Element.Label
    },
  },
  mounted() {
    this.$store.dispatch('getDocuments')
  },
}
</script>
<style scoped>
.searchbar {
  margin-left: 50%;
}
</style>
