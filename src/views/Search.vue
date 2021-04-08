<template>
  <div class="container">
    <div class="navbar"></div>
    <goBack />
    <FilterBar :Elements="Elements" @filter="setFilter" />
    <div class="main">
      <Searchbar />
      <doclist :doclist="doclist" />
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue'
import Doclist from '../components/Doclist.vue'
import FilterBar from '../components/filterBar.vue'
import goBack from '../components/goBack.vue'

export default {
  data() {
    return {
      doclist: [],
      checkBoxCategories: [],
    }
  },
  components: {
    Searchbar,
    Doclist,
    FilterBar,
    goBack,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements
    },
  },
  mounted() {
    this.setFilter()
  },
  methods: {
    goto(url) {
      window.open(url, '_blank').focus()
    },
    filteredList() {
      this.doclist = this.Elements.filter((i) => {
        return i.Thematic === i.Thematic
      })
    },

    setFilter(checkedCategories) {
      if (checkedCategories) {
        let arrayToDoclist = []
        checkedCategories.forEach((j) => {
          this.Elements.forEach((i) => {
            for (let k in i) {
              if (j === i[k]) {
                arrayToDoclist.push(i) //kan man sätta en include här istället????
              }
            }
          })
        })

        this.doclist = arrayToDoclist
        checkedCategories = []
        this.$route.params = {Elements: this.Elements}
      } else {
        this.filteredList()
      }
    },
  },
}
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
