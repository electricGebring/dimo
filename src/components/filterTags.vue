<template>
  <div class="filter-tags">
    <div
      v-for="(tag, index) in checkedCategories"
      :key="index"
      @click="handleClick(tag)"
    >
      <p class="filter-tag">{{ tag }} X</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['checkedCategories'],
  emits: ['clickedTag'],
  setup(props, context) {
    const handleClick = (tag) => {
      context.emit('clickedTag', tag)
    }
    return { handleClick }
  },
};
</script>

<style lang="scss">
.filter-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
  padding: 0 60px;
  
  .filter-tag {
    background: #ffffff;
    border-radius: 15px;
    color: #2c365a;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    margin: 0 10px 10px 0;
    padding: 10px;
  }  
}
</style>