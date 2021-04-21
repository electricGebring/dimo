<template>
  <div class="navbarside" :class="{colapsed: colapsed.value}">
    <img
      alt=""
      class="navicon"
      src="https://static.overlay-tech.com/assets/7fce7eb4-a06f-4afc-8541-c4f29a2d2f50.png"
    />
    <img
      alt=""
      class="profilepicture"
      src="https://static.overlay-tech.com/assets/d2c2a69c-a110-4807-9526-69e2f595d152.png"
    />
    <h5 class="nametitle">
      {{ jordanValentinLane }}
    </h5>
    <ul class="menu">
      <li class="menu-item active">
        <img alt="" class="menu-item-navicon" src="../assets/svg/dummy-crash.svg" />
        <p class="menu-item-link">{{ menuLeftTwo }}</p>
      </li>
      <li class="menu-item">
        <img alt="" class="menu-item-navicon" src="../assets/svg/dummy-crash.svg" />
        <p class="menu-item-link">{{ menuLeftThree }}</p>
      </li>
      <li class="menu-item">
        <img alt="" class="menu-item-navicon" src="../assets/svg/dummy-crash.svg" />
        <p class="menu-item-link">{{ menuLeftFour }}</p>
      </li>
      <li class="menu-item">
        <img alt="" class="menu-item-navicon" src="../assets/svg/dummy-crash.svg" />
        <p class="menu-item-link">{{ menuLeftFive }}</p>
      </li>
      <li class="menu-item logout">
        <img
          alt=""
          class="menu-item-navicon"
          src="https://static.overlay-tech.com/assets/be754bca-79cf-40f6-ac1b-acd5f5c70b97.svg"
        />
        <p class="menu-item-link">{{ menuLeftSix }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {reactive} from '@vue/reactivity'
import {watch} from 'vue'
import {useRoute} from 'vue-router'
export default {
  name: 'Group226',
  props: {
    jordanValentinLane: {
      type: String,
      default: 'Jordan Valentin Lane',
    },
    menuLeftTwo: {type: String, default: 'Översikt'},
    menuLeftThree: {type: String, default: 'Min sida'},
    menuLeftFour: {type: String, default: 'Mallar'},
    menuLeftFive: {
      type: String,
      default: 'Inställningar',
    },
    menuLeftSix: {type: String, default: 'Logga ut'},
  },

  setup() {
    let colapsed = reactive({isColapsed: false})

    const route = useRoute()

    watch(route, () => {
      setTimeout(() => {
        if (route.params.Thematic) {
          colapsed.value = true
        } else {
          colapsed.value = false
        }
      }, 10)
    })

    return {colapsed}
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.navbarside {
  align-items: center;
  background-color: #f2f7ff;
  display: flex;
  flex-direction: column;
  float: left;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  transition: width, 0.3s;
  z-index: 9999;
  &.colapsed {
    position: sticky;
    top: 0;
    height: 100vh;
  }

  .menu-item-navicon {
    margin-right: 30px;
  }

  .menu-item {
    border-radius: 30px 0px 0px 30px;
    color: #808080;
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    padding: 11px 65px 10px 26px;
    margin-left: 46px;

    &:nth-child(3) {
      margin-bottom: 100px;
    }

    &:hover {
      background-color: white;
      color: #00c0c0;
      transition: 0.6s;
    }

    &.active {
      background-color: white;
      color: #00c0c0;
      transition: 0.6s;
    }
  }

  &.colapsed {
    .menu-item {
      margin-left: 15px;
      padding: 30px 0px;
    }

    .navicon,
    .profilepicture,
    .nametitle,
    .menu-item-link {
      display: none;
    }

    .menu {
      margin-top: 300px;

      .menu-item-navicon {
        margin-left: 20px;
      }
    }
  }
}
.navicon {
  margin-bottom: 72px;
  margin-top: 72px;
}
.profilepicture {
  margin-bottom: 14px;
  border-radius: 50%;
  box-shadow: 0px 1px 2px 1px rgb(205, 203, 203);
}
.nametitle {
  color: #000;
  text-align: right;
  margin-bottom: 53px;
}
.menu {
  padding: 0;
  margin: 0;
}
</style>
