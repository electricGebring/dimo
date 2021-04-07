<template>
  <div class="filter-tags">
    <div
      v-for="(tag, index) in checkedCategories"
      :key="index"
      @click="handleClick(tag)"
    >
      <p class="filter-tag">{{ tag }} X</p>
    </div>
    <button class="reset-filter" @click="resetFilter()" v-if="show">
      Rensa filter
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["checkedCategories", "show"],
  emits: ["clickedTag"],

  setup(props, context) {
    const showResetButton = ref(true);
    const handleClick = (tag) => {
      context.emit("clickedTag", tag);
    };
    const resetFilter = () => {
      context.emit("resetFilter", showResetButton);
    };
    return { handleClick, resetFilter, showResetButton };
  },
};
</script>

<style lang="scss">
.filter-tags {
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  padding: 0 60px;

  // .filter-tag {
  //   //float: left;
  //   //margin: 8px;
  //   // width: fit-content;
  //   // height: 28px;
  //   // background: #ffffff;
  //   // border-radius: 15px;
  //   // font-size: 10px;
  //   // color: #2c365a;
  //   // font-family: "Montserrat", sans-serif;
  //   // text-align: center;
  //   // line-height: 2.7;
  //   // padding: 10px;
  // }
  .filter-tag {
    background: #ffffff;
    border-radius: 15px;
    color: #2c365a;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    margin: 0 10px 0 0;
    padding: 10px;
  }
  .reset-filter {
    width: 72px;
    height: 30px;
    background: #c0c7d9;
    color: #2c365a;
    border: 1px solid #2c365a;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    font-weight: bold;
    margin-left: 12px;

    &:hover {
      background: #2c365a;
      color: #fff;
    }
  }
}
</style>
