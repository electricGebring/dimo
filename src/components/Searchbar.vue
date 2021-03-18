<template>
  <div class="searchbar">
    <Autocomplete @input="Elements" :result="Elements">{{ Elements.Label }}</Autocomplete>
  </div>
</template>
<script>
import Autocomplete from 'vue3-autocomplete'
import 'vue3-autocomplete/dist/vue3-autocomplete.css'

export default {
  name: 'Searchbar',
  components: {
    Autocomplete,
  },
  mounted() {
    this.$store.dispatch('getDocuments')
  },
  computed: {
    Elements() {
      return this.$store.state.Elements
    },
  },
}
</script>
<style scoped>
.searchbar {
  margin-left: 20%;
}
</style>
