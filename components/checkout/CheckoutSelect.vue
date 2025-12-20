<template>
  <div class="select checkout-shared" ref="selectRef">
    <button
      class="select-trigger"
      type="button"
      :disabled="disabled"
      :aria-expanded="open ? 'true' : 'false'"
      @click="toggle"
    >
      <span class="select-text" :class="{ placeholder: !value }">
        {{ label }}
      </span>
      <span class="select-icon" :class="{ open }"></span>
    </button>
    <div v-if="open" class="select-menu" role="listbox">
      <button
        v-for="opt in options"
        :key="opt.value"
        type="button"
        class="select-option"
        @click="select(opt.value)"
      >
        {{ opt.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  options: Array,
  value: String,
  disabled: Boolean,
  open: Boolean,
})

const emit = defineEmits(['update:open', 'select'])

const selectRef = ref(null)

const label = computed(() => {
  const found = props.options.find((o) => o.value === props.value)
  return found?.label || 'Please select'
})

const toggle = () => {
  if (props.disabled) return
  emit('update:open', !props.open)
}

const select = (val) => {
  emit('select', val)
  emit('update:open', false)
}

const onDocClick = (e) => {
  if (selectRef.value && !selectRef.value.contains(e.target)) {
    emit('update:open', false)
  }
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
})
</script>

<style scoped>
@import './checkout.css';

.select {
  width: 100%;
  position: relative;
}

.select-trigger {
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text-primary);
  outline: none;
}

.select-trigger:disabled {
  background: var(--color-bg-disabled);
  opacity: 0.5;
  cursor: not-allowed;
}

.select-text {
  width: 279px;
  height: 24px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-text.placeholder {
  color: var(--color-text-placeholder);
}

.select-icon {
  width: 24px;
  height: 24px;
  flex: none;
  background-image: url("/icons/chevron-down.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 14px 14px;
}

.select-icon.open {
  transform: rotate(180deg);
}

.select-menu {
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(55, 65, 81, 0.08);
  overflow: hidden;
  z-index: 20;
}

.select-option {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 0;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text-secondary);
  text-align: left;
}

.select-option:active {
  background: var(--color-bg-disabled);
}

@media (min-width: 1024px) {
  .select,
  .select-trigger,
  .select-menu {
    width: 100%;
  }
}
</style>
