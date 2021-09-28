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

  methods: {
    getNotes() {
      this.$store.dispatch('setLocalStorage', storage.get('notes'));
      }
    },
  created() {
      this.getNotes()
    }
}
</script>
