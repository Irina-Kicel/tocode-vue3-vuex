<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, i) in notes" :key="i">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer;" @click="this.$store.dispatch('remove', i)">
          &#10005;
        </p>
      </div>
      <div class="note-footer">
        <TagsList
          isPreview
          v-if="note.tags && note.tags.length > 0"
          :items="note.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'

export default {
  components: { TagsList },
  data() {
    return {
      notes: []
    }
   },
  computed: {
    getNotesAll() {
      return this.$store.getters.getAllNotes
    }
  },
  methods: {
    getNotes() {
      this.notes = this.getNotesAll
      }
    },
  mounted() {
      this.getNotes()
    }
}
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
