<template>
  <div>
    <sidebar />
    <FilterBar :Elements="Elements" @filter="setFilter" />
    <doclist :doclist="doclist" />
  </div>
  <div v-for="item in checkBoxCategories" :key="item">
    <p>{{ item.Label }}ewonfoewnoifnwoein</p>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Doclist from "../components/Doclist.vue";
import FilterBar from "../components/filterBar.vue";

export default {
  data() {
    return {
      doclist: [],
      checkBoxCategories: [],
    };
  },
  components: {
    Sidebar,
    Doclist,
    FilterBar,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    }
  },
  mounted() {
    this.setFilter();
    this.setCheckboxCategories()
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

    setCheckboxCategories() {
      // console.log(this.Elements)
      //const newArr = new Set()
      const checkBoxCategories = []
      const globalGoals = 'GlobalGoal'
      const kFTargetArea = 'KFTargetArea'
      const documentType = 'Documenttype'
      const thematic = 'Thematic'

      this.Elements.forEach(object => {
        for (let key in object) {
          //console.log(item)
          if (key === globalGoals || kFTargetArea || documentType || thematic) {
            this.checkBoxCategories = checkBoxCategories.push(object)    
          }
        }
        //console.log(this.checkBoxCategories, 'checkBoxCategories')
      })

      const set1 = new Set()
      // const set2 = new Set()
      checkBoxCategories.forEach(item => {
        //console.log(item, 'item')
        for (let key in item) {
          //console.log(item[key], 'key')
          if (key === globalGoals || kFTargetArea || documentType || thematic) {
            //const Thematic = {item[key]}
            set1.add(item[key])
            console.log(set1)
          }
        }
        
        
        // if (item === Thematic) {
        //   set1.add(Thematic)
        //   console.log(set1, 'set1')    
        // }
      })
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
.section {
  position: relative;
  display: table;
  float: left;
  margin: 10px;
  width: 200px;
  height: 190px;
  background-color: #faf9f9 !important;
  border: solid 1px lightgrey;
  padding: 10px 0 0 0;
  border-radius: 0px 0px 10px 10px;
  margin-top: 30px;
  margin-left: 3%;
  &:hover {
    background-color: #fff !important;
  }
}
.type {
  position: absolute;
  width: 50%;
  height: 25px;
  background: #bebdb9;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: bold;
  vertical-align: middle;
  border-radius: 0px 0px 10px 0px;
  top: 0;
}
.type span {
  display: inline-block;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: bold;
  margin: 5px auto;
}
.title {
  height: 50px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: bold;
  align-self: center;
  vertical-align: middle;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.img-container {
  text-align: center;
  margin: 30px;
}
img {
  display: inline-block;
  border: solid 1px lightgrey;
  margin-top: 20px;
  margin-bottom: -20px;
}
.hej {
  width: 100%;
  margin-left: 15%;
}
.labelTitle {
  padding: 10px;
}
</style>
