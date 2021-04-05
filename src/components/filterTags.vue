<template>
  <div class="filter-tags">
    <div
      class="filter-tag"
      v-for="(tag, index) in checkedCategories"
      :key="index"
      @click="hideTag(tag)"
    >
    
      <p>{{ tag }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  
  
  props: ['checkedCategories'],
  setup(props) {
    
    //console.log(props.taggedCategories, 'props.taggedCategories')

  },
};
</script>

<style lang="scss">
.filter-tags {
  height: 30px;
  top: 150px;
  left: 500px;
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