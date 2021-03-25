<template>
  <div class="searchbar">
    <Autocomplete
      @input="Elements"
      :results="myElements"
      :display-item="displayElement"
      :max="15"
    ></Autocomplete>
  </div>
</template>
<script>
import Autocomplete from "vue3-autocomplete";
// import 'vue3-autocomplete/dist/vue3-autocomplete.css'

export default {
  name: "SearchBar",
  components: {
    Autocomplete,
  },
  data() {
    return {
      myElements: [],
    };
  },
  methods: {
    Elements(value) {

    
      
      this.myElements = this.$store.state.Elements.filter((data) => {
        let hasProperty = false;
        Object.values(data).forEach((item) => {
          if (item.toLowerCase().includes(value.toLowerCase())) {
            hasProperty = true;
          }
        });
        return hasProperty;
      });
    },

    displayElement(Element) {
      return Element.Label;
    },
   /* onSelected() {
      alert("hej");
    },*/
  },
  mounted() {
    this.$store.dispatch("getDocuments");
  },
};
</script>
<style scoped>
.searchbar {
  margin-left: 30%;
}
</style>
