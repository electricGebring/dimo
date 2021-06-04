<template>
  <div>
    <form class="comment-box" v-if="show" @submit.prevent>
      <textarea v-model="comment" placeholder="Lämna en kommentar.."></textarea>
      <button @click="submitComment()">send</button>
    </form>
    <!--<span class="comment" @click="deleteComment()" v-if="showComment"> {{ comment }} </span>-->
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useStore } from "vuex"
export default {
  props: ['id', 'show', 'classes'],
  setup(props) {
    
    const store = useStore()
    const comment = ref("")
    const classes = ref(props.classes)
    //let showComment =  false
      
    const submitComment = () => {
        const id = props.id
        // const classes = props.classes
         console.log(this.props.classes, 'props.classes')
        //showComment = true
        store.dispatch("postDocumentComment", { id, classes, comment: comment.value })
      /* deleteComment() {
        const id = this.id;
        const comment = this.comment;
        const classes = this.classes;
        this.showComment == false
        this.$store.dispatch("deleteDocumentComment", { id, classes, comment });
      },*/
    }
    return {submitComment, comment}
  },
}
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.comment-box {
  border-radius: 10px;
  float: right;
  width: 171px;
  height: 74.4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
