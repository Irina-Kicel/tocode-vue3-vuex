<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type ur note" />
      <TagsList :class="hasActive" @on-item-click="handleTagClick" :items="tags" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      tagsRes: [],
      active: false
    }
  },
  computed: {
    hasActive(){
      return this.active ? 'isActive' : ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addNotes', {title: this.value, tags: this.tagsRes})
      this.value = '',
      this.tagsRes = []
    },
    handleTagClick({tag, i}) {
      this.tags.filter((t, ind) => {
        if(i === ind && t == tag){
          this.active = true
        }
        // else{
        //   this.active = false
        // }
      })
      this.tagsRes.push(tag)
     }
  },
  updated() {
    this.active = false
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
  .isActive {
    background-color: #444ce0;
    color: #fff;
  }
}
</style>
