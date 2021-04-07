<template>
  <div class="container">
    <FilterBar @filter="check" :resetCheck="checkedCategories" />
      <div class="main">
      <Searchbar />
      <filter-tags @clickedTag="hideTag" @resetFilter="resetFilter" :checkedCategories="checkedCategories"/>
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
  },
  methods: {
    hideTag(tag) {
      this.checkedCategories = this.checkedCategories.filter(index => {
        return index !== tag
      })
      this.setFilter(this.checkedCategories)
    },

     resetFilter(show) {
      this.checkedCategories = []
      this.setFilter(this.checkedCategories)
       show.value = false;
    },

    check(e) {
      if (e) {
        if (!this.checkedCategories.includes(e.target.value)) {
         
          this.checkedCategories.push(e.target.value);
        } else {
          this.checkedCategories = this.checkedCategories.filter((i) => {
            return i !== e.target.value;
          });
        }
      } else {
        this.checkedCategories.push(this.$route.params.Thematic);
      }
      this.setFilter(this.checkedCategories)
       
    },
    
    goto(url) {
      window.open(url, "_blank").focus();
    },
    filteredList() {
      this.doclist = this.Elements.filter((i) => {
        return i.Thematic === i.Thematic;
      });
    },

    setFilter(checkedCategories) {
      if (checkedCategories) {
        let arrayToDoclist = [];        
        checkedCategories.forEach((j) => {
          this.Elements.forEach((i) => {
            for (let k in i) {
              if (j === i[k]) {
                arrayToDoclist.push(i);
              }
            }
          });
        });
         
        this.doclist = arrayToDoclist
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
  padding-top: 90px;
}

body {
  margin: 0;
  padding: 0;
}

</style>
