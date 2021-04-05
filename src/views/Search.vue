<template>
  <div class="container">
    <FilterBar :Elements="Elements" @filter="setFilter" />
      <div class="main">
      <Searchbar />
      <filter-tags :checkedCategories="checkedCategories"/>
      <doclist :doclist="doclist" />
    </div>
  </div>  
</template>

<script>
import Searchbar from '../components/Searchbar.vue'
import filterTags from '../components/filterTags.vue'
import Doclist from "../components/Doclist.vue";
import FilterBar from "../components/filterBar.vue";

export default {
  data() {
    return {
      doclist: [],
      //checkBoxCategories: [],
      checkedCategories: [],
    };
  },
  components: {
    Searchbar,
    Doclist,
    FilterBar,
    filterTags,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    }
  },
  mounted() {
    //this.setFilter();
  },
  methods: {
    // handleHideTag(checkedCategories) {
    //   this.checkBoxCategories = checkedCategories
    // },
    goto(url) {
      window.open(url, "_blank").focus();
    },
    filteredList() {
      this.doclist = this.Elements.filter((i) => {
        return i.Thematic === i.Thematic;
      });
    },

    setFilter(checkedCategories) {
      this.checkedCategories = checkedCategories
      console.log(this.checkedCategories, 'checkedCategories')
      if (checkedCategories) {
        let arrayToDoclist = [];        
        checkedCategories.forEach((j) => {
          this.Elements.forEach((i) => {
            for (let k in i) {
              if (j === i[k]) {
                arrayToDoclist.push(i); //kan man sätta en include här istället????
              }
            }
          });
        });
         
        this.doclist = arrayToDoclist
        //this.checkedCategories = []
        this.$route.params = {Elements: this.Elements}
      } else {
        this.filteredList() 
      }
    },   
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.main {
  width: 80%;
  padding: 0 5% 0 5%;
}

body {
  margin: 0;
  padding: 0;
}

</style>
