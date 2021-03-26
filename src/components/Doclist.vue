<template>
  <div class="doclist-container">
    <div v-for="item in doclist" :key="item.Label" :item="item">
      <div
        v-if="
          item.Thematic === $route.params.Thematic ? $route.params.Thematic : $route.params.Elements
        "
      >
        <div class="section">
          <div class="img-container" @click.stop="goto(item.URL)">
            <img v-bind:src="item.CoverImg" width="100" height="140" />
          </div>
          <div
            class="title"
            :style="[
              item.Status == 'Gällande'
                ? {background: '#87BDC9'}
                : item.Status == 'Remiss'
                ? {background: '#E9A15F'}
                : item.Status == 'Under framtagande'
                ? {background: '#5F8C9A'}
                : {background: '#C45941'},
            ]"
          >
            <span class="labelTitle">
              {{ item.Label }}
            </span>
            <div class="type">
              <span>{{ item.Documenttype }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['doclist', 'filterlist'],
  components: {},
  computed: {},
  methods: {
    goto(url) {
      window.open(url, '_blank').focus()
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.doclist-container {
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 40px;
  margin-top: 80px;
}
.section {
  position: relative;
  display: table;
  margin: 0 20px 20px 20px;
  width: 210px;
  max-width: 210px;
  height: 190px;
  max-height: 190px;
  background-color: #faf9f9 !important;
  border: solid 1px lightgrey;
  padding: 10px 0 0 0;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    transition: 0.4s;
    background-color: #fff !important;
    cursor: pointer;
  }
}
.type {
  position: absolute;
  width: 50%;
  height: 25px;
  background: #bebdb9;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  vertical-align: middle;
  border-radius: 0px 0px 10px 0px;
  top: 0;
  text-align: center;
}
.type span {
  display: inline-block;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: bold;
  margin: 5px auto;
}
.title {
  height: 50px;
  color: #fff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  align-self: center;
  vertical-align: middle;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.img-container {
  text-align: center;
  margin: 5px 0px 30px 0px;
}
img {
  display: inline-block;
  border: solid 1px lightgrey;
  margin-top: 20px;
  margin-bottom: -20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
.labelTitle {
  padding: 10px;
  word-break: break-word;
}
</style>
