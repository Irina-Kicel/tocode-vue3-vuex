<template>
  <Form />
  <List />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
import storage from '@/utils/storage.js'

export default {
  components: { Form, List },

  mounted() {
   this.getNotes()
  },
  // watch: {
  //   notes: {
  //     handler(updatedList) {
  //       localStorage.setItem('notes', JSON.stringify(updatedList))
  //     },
  //     deep: true
  //   }
  // },
  // watch: (() => {
  //   this.getNotes()
  // }),
  methods: {
    getNotes() {
      this.$store.dispatch('setLocalStorage', storage.get('notes'));
      }
    }
}
</script>
