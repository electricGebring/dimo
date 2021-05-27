 <template>
  <div>
   <textarea class="comment-box" v-if="show" v-model="comment" placeholder="kommentera.."></textarea>
  </div>
</template>
<script>

export default {
  props: ['show'],
  methods: {
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
.comment-box {
}
</style>
