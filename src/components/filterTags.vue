<template>
  <div class="filter-tags">
    <div
      class="filter-tag"
      v-for="index in checkedCategories"
      :key="index"
      @click="hideTag(index)"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
//import { watch } from '@vue/runtime-core';
export default {
  name: 'filterTags',
  emits: ['hideTag'],
  props: ['checkedCategories'],
  setup(props) {

    const checkedCategories = props.checkedCategories

    watch(checkedCategories, () =>{
      emit('hideTag', checkedCategories)
    })

    const hideTag = (e) => {
      checkedCategories = checkedCategories.filter(index => 
      index !== e);
    },
  },
};
</script>

<style lang="scss">
.filter-tags {
  height: 30px;
  margin-top: 150px;
  margin-left: 500px;
  width: 100%;
  position: absolute;

  .filter-tag {
    float: left;
    margin: 8px;
    width: fit-content;
    height: 28px;
    background: #ffffff;
    border-radius: 15px;
    font-size: 10px;
    color: #2c365a;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    line-height: 2.7;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>