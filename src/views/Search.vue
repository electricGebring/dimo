<template>
  <div class="search">
    <Sidebar />
    <FilterBar :Elements="Elements" @filter="setFilter" />
    <doclist :doclist="doclist" />
  </div>  
</template>

<script>
import Doclist from "../components/Doclist.vue";
import FilterBar from "../components/filterBar.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  data() {
    return {
      doclist: [],
      checkBoxCategories: [],
    };
  },
  components: {
    Doclist,
    FilterBar,
    Sidebar,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    }
  },
  mounted() {
    this.setFilter();
  },
  methods: {
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
                arrayToDoclist.push(i); //kan man sätta en include här istället????
              }
            }
          });
        });
        this.doclist = arrayToDoclist
        checkedCategories = []
        this.$route.params = {Elements: this.Elements}
      } else {
        this.filteredList();
      }
    },    
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.search {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
}
</style>
