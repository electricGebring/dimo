<template>
  <div class="section">

    <div class="wrapper-list">
      <h2>Kommunfullmäktiges mål</h2>
      <ul class="bubble-list">
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
      </ul>
      <div
        v-for="KFTargetArea in KFTargetAreaList"
        :key="KFTargetArea"
        v-on:click="setTarget(KFTargetArea)"
      >
        <p class="targetarea-title">{{ KFTargetArea }}</p>
      </div>
    </div>

    <div class="wrapper">
      <div class="middle-circle">
        <router-link :to="{ name: 'Search', params: { Elements: Elements } }">
          <span class="show-all">Visa Alla</span>
        </router-link>
      </div>

      <span class="categories" v-for="item in Images" :key="item">
        <div class="test">
          <img v-bind:src="item" width="40" height="40" />
          </div>
      </span>

      <span
        class="categories"
        v-for="(Thematic, index) in ThematicList"
        :key="index"
        :class="{'targetActive' : targetAreaSet.includes(Thematic)}"
      >
        <router-link
          class="link"
          :to="{ name: 'Search', params: { Thematic: Thematic } }"
        >
          <p class="category-title">{{ Thematic }}</p>
        </router-link>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      targetAreaSet: [],
    };
  },
  mounted() {
    this.$store.dispatch("getDocuments");
    this.circleSizing();
  },
  updated() {
    this.circleSizing();
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    },

    ThematicList() {
      const ThematicList = new Set();
      this.$store.state.Elements.forEach((item) =>
        ThematicList.add(item.Thematic)
      );
      return Array.from(ThematicList);
    },

    Images() {
      const Images = new Set();
      this.$store.state.Elements.forEach((item) => Images.add(item.Image));
      return Array.from(Images);
    },

    KFTargetAreaList() {
      const KFTargetAreaList = new Set();
      this.$store.state.Elements.forEach((item) => {
        KFTargetAreaList.add(item.KFTargetArea);
      });
      return Array.from(KFTargetAreaList);
    },
  },
  methods: {
    circleSizing() {
      var div = 360 / 14;
      var radius = 15;
      //var position = 45;
      let circles = document.getElementsByClassName("categories");
      for (let i = 0; i <= circles.length - 1; i++) {
        var y = Math.sin(div * i * (Math.PI / 180)) * radius;
        var x = Math.cos(div * i * (Math.PI / 180)) * radius;
        circles[i].style.top = y.toString() + "vw";
        circles[i].style.left = x.toString() + "vw";
      }
    },
    setTarget(KFTargetArea) {
      console.log(KFTargetArea, 'KFTargetArea')
      this.targetAreaSet = []
      this.Elements.forEach((i) => {
        for (let j in i) {
          if (i[j].includes(KFTargetArea)) {
            //console.log(i[j], 'i[j]')
            this.targetAreaSet.push(i.Thematic);
            //return targetAreaSet
          }
          // if (condition) {

          // }
        }
      });
      console.log(this.targetAreaSet, 'targetAreaSet')
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.section {
  margin-top: 80px;
  width: 80vw;
  height: 40vw;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 275px;
  position: relative;
}

.wrapper-list {
  position: absolute;
  left: 15%;
  top: 15%;
}

.bubble-list {
  float: left;
  list-style: none;
  margin-top: 4px;
  margin-left: -70px;
}
.bubble {
  width: 25px;
  height: 25px;
  left: 372px;
  top: 435px;
  border-radius: 50%;
  margin-bottom: 18px;

  &:nth-child(1) {
    background-color: #d3d3df;
  }
  &:nth-child(2) {
    background-color: #d0d8e2;
  }
  &:nth-child(3) {
    background-color: #d3e0e4;
  }
  &:nth-child(4) {
    background-color: #cee3e3;
  }
  &:nth-child(5) {
    background-color: #d6ece5;
  }
  &:nth-child(6) {
    background-color: #d4ebdc;
  }
  &:nth-child(7) {
    background-color: #daf1d7;
  }
}

.targetarea-title {
  width: 257px;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  line-height: 2.6;
  padding-left: 10px;
  font-size: 11px;
  font-family: "Montserrat";
}

.wrapper {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  left: 57vw;
  top: 18vw;
}
.categories {
  text-align: center;
  position: absolute;
  z-index: 2;

  &.test {
    border: solid 1px grey;
  }
}

.category-title {
  font-size: 11px;
  font-weight: bold;
  color: #adadad;
  margin-top: 45px;
  margin-left: -70px;

  &:hover {
    color: #645f5f;
  }
}
.link {
  text-decoration: none;
  text-align: center;
  word-wrap: break-word;
  text-transform: capitalize;
  height: 117px;
  width: 117px;
  display: block;
  cursor: pointer;
}
.headbar {
  display: block;
  font-family: "Montserrat", sans-serif;
  margin-left: 40px;
  width: 90%;
}
.middle-circle {
  position: absolute;
  top: -7vw;
  left: -7vw;
  border-radius: 50%;
  width: 18vw;
  height: 18vw;
  background: #ecf0fd;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

a {
  text-decoration: none;
}

.show-all {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  width: 146.15px;
  height: 32px;
  border-radius: 10px;
  background-color: #b5b8f3;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

h2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #4f4f4f;
}

.targetActive {
  &::after {
    left: -20px;
    top: -26px;
    background-color: #ecf0fd;
    border-radius: 100%;
    content: " ";
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 1;
  }
}
</style>
