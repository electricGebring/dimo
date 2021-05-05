<template>
  <div class="result-title">{{ doclist.length }} Sökresultat</div>
  <div class="listicon">
    <img
      class="view-box"
      src="/img/view-box.svg"
      alt=""
      @click="changeViewBox()"
    />
    <img
      class="view-line"
      src="/img/view-line.svg"
      alt=""
      @click="changeViewLine()"
    />
  </div>
  <div id="all" class="doclist-container">
    <div
      class="titlesection"
      v-for="(item, index) in doclist"
      :key="index"
      :item="item"
    >
      <div id="section" class="" @click.stop="goto(item.URL, item)">
        <div class="img-container">
          <img
            class="imgcard"
            v-bind:src="item.CoverImg"
            width="100"
            height="140"
          />
        </div>
        <div
          class="title"
          :style="[
            item.Status == 'Gällande'
              ? { background: '#4066A6' }
              : item.Status == 'Under revidering'
              ? { background: '#A95F90' }
              : item.Status == 'Under framtagande'
              ? { background: '#002065' }
              : item.Status == 'Utgått'
              ? { background: '#FD7F94' }
              : { background: '#C45941' },
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
            <span class="" v-on:click.stop="handleSave(item)" >
              <img class="save" :class="{ saveActive: savedDocuments.includes(item) }" width="300" height="150"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["doclist"],
  data() {
    return {
      //saveActive: false,
      targetArea: [],
    };
  },
  components: {},
  computed: {
     savedDocuments() {
      return this.$store.state.savedDocuments
    }, 
     recentlyViewed() {
      return this.$store.state.recentlyViewed
    },
  },
  methods: {
 
    goto(url, item) {
      window.open(url, "_blank").focus();
      if (!this.recentlyViewed.includes(item)) {
       this.recentlyViewed.push(item);
        }
           console.log(this.recentlyViewed, "iii")
    },
    changeViewLine() {
      let view = document.getElementById("all");
      view.classList.add("mystyle");
    },
    changeViewBox() {
      let view = document.getElementById("all");
      view.classList.remove("mystyle");
    },
    handleSave(item) {
      //this.saveActive = item;
      //this.$store.dispatch("postSavedDocuments", id);
     if (!this.savedDocuments.includes(item)) {
       this.savedDocuments.push(item);
        }
        else {
       this.savedDocuments.pop(item);
        }
        console.log(this.savedDocuments, "eee")
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.listicon {
  display: block;
  background: none;
  color: inherit;
  outline: none;
  border: none;
  cursor: pointer;
  float: right;
}
img{border:0;}

//// VIEW CHANGE CSS ////
.mystyle {
  #section {
    display: flex;
    justify-content: flex-start;
    background-color: black;
    padding: 0;
    margin-left: 10px;
    width: 100%;
    max-width: 980px;
    height: 85px;
    max-height: 85px;
    border-radius: 10px;
  }
  #section:hover {
    transform: scale(1.0048);
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
    margin-top: 30px;
    margin-left: 59%;
    align-items: center;
    background: none;
  }
  .type span {
    color: #8996b1;
    font-size: 12px;
    font-weight: bolder;
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
    color: #8996b1;
  }
  .labelTitle {
    word-break: break-word;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .titlesection {
    margin: 8px;
    width: 100%;
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
  margin-top: 10px;
  // max-height: 540px; //// scroll in content
  // overflow: hidden;
  // overflow-y: scroll;
}
#section {
  position: relative;
  display: table;
  width: 210px;
  max-width: 210px;
  height: 190px;
  max-height: 190px;
  background-color: #faf9f9 !important;
  padding: 10px 0 0 0;
  margin-left: 20px;
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
  font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: bold;
  margin: 5px auto;
}
.title {
  height: 51px;
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
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
.result-title {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size: 14px;
  line-height: 17px;
  color: #2c365a;
  margin-left: 60px;
}

.view-box {
  margin-right: 10px;
}

.save {
  background-image: url('/img/star.svg');
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
}
.saveActive {
  background-image: url('https://i.ibb.co/4Z5npdf/star.png');
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
}
</style>
