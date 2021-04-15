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
        class=""
        v-for="KFTargetArea in KFTargetAreaList"
        :key="KFTargetArea"
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
      <span
        class="categories"
        v-for="item in Images"
        :key="item"
      >
        <img v-bind:src="item" width="100" height="140"
      /></span>
      <span
        class="categories"
        v-for="(Thematic, index) in ThematicList"
        :key="index"
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
  methods: {
    circleSizing() {
      var div = 360 / 14;
      var radius = 220;
      var position = 300;
      let circles = document.getElementsByClassName("categories");
      for (let i = 0; i <= circles.length - 1; i++) {
        var y = Math.sin(div * i * (Math.PI / 180)) * radius;
        var x = Math.cos(div * i * (Math.PI / 180)) * radius;
        circles[i].style.top = (y + position).toString() + "px";
        circles[i].style.left = (x + position).toString() + "px";
      }
    },
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    },

    ThematicList() {
      const ThematicList = new Set();
      this.$store.state.Elements.forEach((item) =>
        ThematicList.add(item.Thematic.toLowerCase())
      );
      return Array.from(ThematicList);
    },

     Images() {
      const Images = new Set();
      this.$store.state.Elements.forEach((item) =>
        Images.add(item.Image)
      );
      return Array.from(Images);
    },

    KFTargetAreaList() {
      const KFTargetAreaList = new Set();
      this.$store.state.Elements.forEach((item) =>
        KFTargetAreaList.add(item.KFTargetArea)
      );
      return Array.from(KFTargetAreaList);
    },
  },
  mounted() {
    this.$store.dispatch("getDocuments");
    this.circleSizing();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.section {
  margin-top: 80px;
  width: 1170px;
  height: 519px;
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
  margin-top: 16px;
  margin-left: -70px;
}
.bubble {
  width: 25px;
  height: 25px;
  left: 372px;
  top: 435px;
  border-radius: 50%;
  margin-bottom: 19px;

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
  font-size: 12px;
  font-family: "Montserrat";
}

.wrapper {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  left: 40%;
  top: -15%;
}
.categories {
  text-align: center;
  margin: 20px;
  position: absolute;
}
.categories:hover {
}
.category-title {
  font-size: 13px;
  font-weight: bold;
  color: #adadad;

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
  top: 235px;
  left: 280px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
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
</style>
