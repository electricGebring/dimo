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
        <p class="targetarea-title">{{ KFTargetArea }}<img v-if="showCheckIcon" class="check-icon" src="/img/checkicon.svg" alt=""/></p>
      </div>
    </div>

    <div class="wrapper">
      <div class="middle-circle">
        <router-link :to="{ name: 'Search', params: { Elements: Elements } }">
          <span class="show-all">Visa Alla</span>
        </router-link>
      </div>
      <span class="categories" v-for="(item, index) in Images" :key="index">
        <img class="icon" v-bind:src="item" />
      </span>
      <span
        class="categories"
        v-for="(Thematic, index) in ThematicList"
        :key="index"
      >
        <router-link
          class="link"
          :to="{ name: 'Search', params: { Thematic: Thematic } }"
          :class="{ targetActive: targetAreaSet.includes(Thematic) }"
        >
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
      showCheckIcon: false
    };
  },
  mounted() {
    //this.$store.dispatch("getDocuments");
    this.circleSizing();
  },
  updated() {
    this.circleSizing();
    // this.imageSizing();
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
      this.showCheckIcon = true
      this.targetAreaSet = [];
      this.Elements.forEach((i) => {
        for (let j in i) {
          if (i[j].includes(KFTargetArea)) {
            this.targetAreaSet.push(i.Thematic);
          }
        }
      });
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
  top: 50%;
  margin-top: -189px;
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

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
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
  border-radius: 50%;
  content: " ";
  position: absolute;
  z-index: 0;
  cursor: pointer;
  width: 78px;
  height: 78px;

  &:hover {
    border: solid 3px #b5b8f3;
    border-style: dotted;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
}
.icon {
  z-index: 2;
  width: 40px;
  height: auto;
  margin-top: 11px;
  margin-left: 2px;
}

.link {
  text-decoration: none;
  text-align: center;
  word-wrap: break-word;
  text-transform: capitalize;
  height: 60px;
  width: 60px;
  display: block;
  cursor: pointer;
  display: block;
  cursor: pointer;
  z-index: 2;
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

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
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
  border: solid 3px #b5b8f3;
  border-radius: 50%;
  cursor: pointer;
  width: 78px;
  height: 78px;
  margin-left: -2px;
   margin-top: -2px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: background-color 1.5s;
  -moz-transition: background-color 1.5s;
  -o-transition: background-color 1.5s;
  transition: background-color 1.5s;
  transition-timing-function: linear;
&:hover {
    border: none;
      box-shadow: none;
  }

}
</style>
