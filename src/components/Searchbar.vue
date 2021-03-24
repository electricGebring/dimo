<template>
  <div class="searchbar">
    <Autocomplete @input="Elements" :result="Elements"></Autocomplete>
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
    this.anna()
  },
  computed: {
    Elements() {
      return this.$store.state.Elements
    },
  },
  methods: {
    anna() {
      console.log(this.result)
    },
  },
}
</script>
<style scoped>
.searchbar {
  margin-left: 50%;
}
</style>
