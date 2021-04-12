<template>
  <span class="" @click="changeView()"><img src="/img/view-line.svg" alt=""/></span>

  <div id="all" class="doclist-container">
    <div class="titlesection" v-for="item in doclist" :key="item.Label" :item="item">
      <div
        v-if="
          item.Thematic === $route.params.Thematic ? $route.params.Thematic : $route.params.Elements
        "
      >
        <div id="section" class="" @click.stop="goto(item.URL)">
          <div class="img-container">
            <img v-bind:src="item.CoverImg" width="100" height="140" />
          </div>
          <div
            class="title"
            :style="[
              item.Status == 'Gällande'
                ? {background: '#385B94'}
                : item.Status == 'Under revidering'
                ? {background: '#A95F90'}
                : item.Status == 'Under framtagande'
                ? {background: '#002065'}
                : item.Status == 'Utgått'
                ? {background: '#FD7F94'}
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
  props: ['doclist'],
  components: {},
  computed: {},
  mounted() {},
  methods: {
    goto(url) {
      window.open(url, '_blank').focus()
    },
    changeView() {
      let view = document.getElementById('all')
      view.classList.toggle('mystyle')
      console.log(this.changeView)
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
//// VIEW CHANGE CSS ////
.mystyle {
  #section {
    background-color: black;
    width: 873px;
    max-width: 873px;
    height: 56px;
    max-height: 56px;
    padding: 0;
    border-radius: 10px;
  }
  .doclist-container {
    display: inline-block;
  }
  img {
    height: 36px;
    width: 25px;
    margin-left: 20px;
  }
  .img-container {
    float: left;
  }
  .type {
    display: flex;
    width: 150px;
    height: 30px;
    border-radius: 10px;
    background-color: #8996b1;
    margin: 30px;
    margin-left: 50%;
    align-items: center;
    align-self: center;
  }
  .title {
    font-size: 16px;
    height: 0px;
    margin: 10px;
    padding: 0;
    margin-left: 100px;
    color: black;
    text-align: left;
  }
  .labelTitle {
    word-break: break-word;
  }
}
//// VIEW CHANGE CSS END ////

.doclist-container {
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 40px;
  margin-top: 80px;
  // max-height: 540px; //// scroll in content
  // overflow: hidden;
  // overflow-y: scroll;
}
#section {
  position: relative;
  display: table;
  margin: 0 20px 20px 20px;
  width: 210px;
  max-width: 210px;
  height: 190px;
  max-height: 190px;
  background-color: #faf9f9 !important;
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
