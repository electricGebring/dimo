<template>
    <div class="navbarside" :class="{colapsed: colapsed.value }">
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
        <li class="menu-item">
          <img
            alt=""
            class="menu-item-navicon"
            src="../assets/svg/dummy-crash.svg"
          />
          <p class="menu-item-link">{{ menuLeftTwo }}</p>
        </li>
        <li class="menu-item">
          <img
            alt=""
            class="menu-item-navicon"
            src="../assets/svg/dummy-crash.svg"
          />
          <p class="menu-item-link">{{ menuLeftThree }}</p>
        </li>
        <li class="menu-item">
          <img
            alt=""
            class="menu-item-navicon"
            src="../assets/svg/dummy-crash.svg"
          />
          <p class="menu-item-link">{{ menuLeftFour }}</p>
        </li>
        <li class="menu-item">
          <img
            alt=""
            class="menu-item-navicon"
            src="../assets/svg/dummy-crash.svg"
          />
          <p class="menu-item-link">{{ menuLeftFive }}</p>
        </li>
        <div class="logout">
          <img
            alt=""
            class="logout-icon"
            src="https://static.overlay-tech.com/assets/be754bca-79cf-40f6-ac1b-acd5f5c70b97.svg"
          />
          <h5 class="logout-text">{{ menuLeftSix }}</h5>
        </div>
      </ul>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
export default {
  name: "Group226",
  props: {
    jordanValentinLane: {
      type: String,
      default: "Jordan Valentin Lane",
    },
    menuLeftTwo: { type: String, default: "Översikt" },
    menuLeftThree: { type: String, default: "Min sida" },
    menuLeftFour: { type: String, default: "Mallar" },
    menuLeftFive: {
      type: String,
      default: "Inställningar",
    },
    menuLeftSix: { type: String, default: "Logga ut" },
  },

  setup() {
    let colapsed = reactive({isColapsed: false})

    const route = useRoute()

    onMounted(() => {
      setTimeout(() => {
        route.params.Thematic ? colapsed.value = true : false;
      }, 10)
    })

    return { colapsed }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.navbarside {
  align-items: center;
  background-color: #f2f7ff;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  left: 0;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 300px;
  transition: all, .3s;
  z-index: 9999;
  

  &.colapsed {
    width: 90px;

    .navicon {
      display: none;
    } 
    
    .profilepicture {
      display: none;
    }

    .nametitle {
      display: none;
    }

    .menu {
      margin-top: 432px;

      .menu-item-link {
        display: none;
      }

      .menu-item-navicon {
        margin-left: 35px;
      }
    }
  }  
}
.navicon {
  margin-bottom: 25%;
  margin-top: 25%;
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
  position: relative;
}
.menu-item {
  border-radius: 30px 0px 0px 30px;
  color: #808080;
  list-style: none;
  margin-bottom: 20%;
  padding: 11px 106px 10px 26px;
  //width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  justify-content: space-between;

  &:hover {
    background-color: white;
    color: #00c0c0;
    transition: 0.6s;
  }
}
.logout {
  display: flex;
  align-items: center;

  .logout-icon {
    margin-right: 20%;
  }
}
.logout-text {
  width: 85px;
  color: black;
  text-align: center;
}

</style>
