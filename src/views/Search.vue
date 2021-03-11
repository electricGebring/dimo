<template>
  <div>
    <sidebar />
    <FilterBar :Elements="Elements" @filter="setFilter" />
    <doclist :doclist="doclist" :filterlist="filterlist" />
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
      filterlist: [],
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
    },
  },
  mounted() {
    this.filteredList()
    this.match()
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
      const filteredArray = []
      this.Elements.map((obj) => {
        //let filteredObj = {};
        for (let key in obj) {
          //console.log(obj[key], 'obj[key]')
          if (checkedCategories.includes(obj[key])) {
            //console.log(filteredObj[key], 'filteredObj[key]')
            //console.log(obj[key].length >= 1)
            if (obj[key].length >= 1) {
              //filteredObj = obj[key];
              //console.log(filteredArray, 'this.filteredArray');
              //filteredArray.push(filteredObj);
              filteredArray.push(obj[key])
            }
          }
        }
        //filteredArray.push(filteredObj);
      })
      //console.log(filteredArray, "filteredArray");
      return filteredArray
    },
    match() {
      const arrayToDoclist = []
      const Elements = this.Elements
      const filtArr = this.setFilter
      this.doclist = Elements.foreach((i) => {
        filtArr.foreach((j) => {
          if (Elements[i].includes(this.doclist[j])) {
            console.log(Elements[i])
            arrayToDoclist.push(Elements[i])
          }
        })
      })
    },
  }
}
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
