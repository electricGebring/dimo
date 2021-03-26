<template>
  <div class="searchbar">
    <Autocomplete
      @input="Elements"
      :results="myElements"
      :display-item="displayElement"
      :max="15"
      @onSelect="onSelected"
      :placeholder="placeholder"
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
      placeholder: "Some placeholder text"
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
        //console.log(data.URL)
        return hasProperty;
      });
    },

    displayElement(Element) {
      return Element.Label;
    },
    onSelected(data) {
      const url = data.URL;
      window.open(url, "_blank").focus();
    },
  },
  mounted() {
    this.$store.dispatch("getDocuments");
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

 .searchbar {
  margin-top: 50px;
 
 .vue3-autocomplete-container {
  display: flex;
  flex-direction: column;
  max-width: 920px;
  width: 100%;
  
  .vue3-input {
    border-radius: 30px;
    height: 45px;
    border: 1px solid #dddd;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
    
    &:focus {
      outline: none;
    }
  }
  .vue3-results-container {
    position: absolute;
    margin-top: 55px;
    z-index: 99;
    background: white;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #ddd;
    max-width: 900px;
    width: 100%;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  }
  .vue3-results-item {
    list-style-type: none;
    padding: 8px;
   
    &:hover {
      cursor: pointer;
       color: #ddd;
    }
  }
}
}
</style>
