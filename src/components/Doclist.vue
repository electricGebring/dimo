<template>
  <button class="listicon" @click="changeView()"><img src="/img/view-line.svg" alt="" /></button>

  <div id="all" class="doclist-container">
    <div class="titlesection" v-for="item in doclist" :key="item.Label" :item="item">
      <div
        v-if="
          item.Thematic === $route.params.Thematic ? $route.params.Thematic : $route.params.Elements
        "
      >
        <div id="section" class="" @click.stop="goto(item.URL)">
          <div class="img-container">
            <img class="imgcard" v-bind:src="item.CoverImg" width="100" height="140" />
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
            <div class="icons">
              <span class=""><img src="/img/view-eye.svg" alt=""/></span>
              <span class=""><img src="/img/star-save.svg" alt=""/></span>
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
.listicon {
  display: flex;
  justify-content: flex-end;
  background: none;
  color: inherit;
  outline: none;
  border: none;
  margin-left: auto;
  cursor: pointer;
}

//// VIEW CHANGE CSS ////
.mystyle {
  #section {
    display: flex;
    justify-content: flex-start;
    background-color: black;
    padding: 0;
    margin: 0;
    width: 1000px;
    max-width: 1000px;
    height: 85px;
    max-height: 85px;
    border-radius: 10px;
  }
  .doclist-container {
  }
  .imgcard {
    height: 36px;
    width: 25px;
    margin-left: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-style: none;
  }
  .img-container {
    height: 36px;
    width: 25px;
    margin-left: 20px;
  }
  .type {
    display: flex;
    width: 150px;
    height: 30px;
    border-radius: 10px;
    background-color: #8996b1;
    margin-top: 30px;
    margin-left: 59%;
    align-items: center;
  }
  .title {
    align-self: flex-end;
    font-size: 14px;
    padding: 0;
    margin-left: 70px;
    color: black;
    text-align: left;
    background: none !important;
    box-shadow: none;
    border-style: none;
  }
  .labelTitle {
    word-break: break-word;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .titlesection {
    margin: 8px;
  }
  .icons {
    margin-top: 30px;
    margin-right: 40px;
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
.imgcard {
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
.icons {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  margin-left: 10px;
  span {
    margin: 5px;
    padding: 1px;
  }
}
</style>
