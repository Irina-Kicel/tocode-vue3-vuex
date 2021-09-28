<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="item, i in items"
      :key="i"
      @click="onItemClick($event, i)"
      :class="{ isPreview: isPreview, isActive: isActive }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      reqired: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onItemClick($event, i) {
      let tag = this.items.filter((t) => {
      if(t == $event.target.textContent)
      return t })
      tag = tag.join('')
      // tag ? this.isActive = true : this.isActive = false
      //this.$emit('isActive', this.isActive)
      this.$emit('onItemClick', {tag, i})
    }
  }
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
