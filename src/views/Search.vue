<template>
  <div class="container">
    <goBack />
    <FilterBar @filter="check" :resetCheck="checkedCategories" />
    <div class="main">
      <Searchbar />
      <filter-tags
        @clickedTag="hideTag"
        @resetFilter="resetFilter"
        :checkedCategories="checkedCategories"
        :show="show"
      />
      <doclist :doclist="doclist" />
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue'
import Doclist from '../components/Doclist.vue'
import FilterBar from '../components/filterBar.vue'
import goBack from '../components/goBack.vue'
import filterTags from '../components/filterTags.vue'
/// Litet test att importera funktion som ska posta doclist vidare till backend


export default {
  data() {
    return {
      doclist: [],
      checkedCategories: [],
      show: false,
    }
  },
  components: {
    Searchbar,
    Doclist,
    FilterBar,
    goBack,
    filterTags,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements
    },
  },
  mounted() {
    this.check()
  },
  methods: {
    hideTag(tag) {
      this.checkedCategories = this.checkedCategories.filter((index) => {
        return index !== tag
      })
      this.setFilter(this.checkedCategories)
      if (!this.checkedCategories.length) {
        this.show = false
      }
    },

    resetFilter(showResetButton) {
      this.checkedCategories = []
      this.setFilter(this.checkedCategories)
      showResetButton.value = this.show
      this.show = false
    },

    check(e) {
      this.show = true
      if (e) {
        if (!this.checkedCategories.includes(e.target.value)) {
          this.checkedCategories.push(e.target.value)
        } else {
          this.checkedCategories = this.checkedCategories.filter((i) => {
            return i !== e.target.value
          })
        }
      } else {
        this.checkedCategories.push(this.$route.params.Thematic)
      }
      if (this.checkedCategories.length === 0) {
        this.hideTag()
      }
       console.log(this.checkedCategories)
      this.setFilter(this.checkedCategories)
    },

    goto(url) {
      window.open(url, '_blank').focus()
    },
  
    setFilter(checkedCategories) {
     
      if (this.$route.params.Thematic) {
        let arrayToDoclist = []
        checkedCategories.forEach((j) => {
          this.Elements.forEach((i) => {
            for (let k in i) {
              if (j === i[k]) {
                arrayToDoclist.push(i)
              }
            }
          })
        })
        
        this.doclist = arrayToDoclist
        //postElements(this.doclist)
      } else {
        
        this.checkedCategories = []
        this.doclist = this.Elements
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 5% 5% 0 5%;
}

.main {
  width: 80%;
}

body {
  margin: 0;
  padding: 0;
}
</style>
