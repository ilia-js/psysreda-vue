<template>
  <div class="tania-button" @click="emit('click')" :style="colorScheme">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
import { buttonColorSchemes } from '@/settings/colors'
import { computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  text: String,
  colorScheme: String
})

const colorScheme = computed(() => {
  if (buttonColorSchemes[props.colorScheme]) {
    return buttonColorSchemes[props.colorScheme]
  }

  return buttonColorSchemes.grey
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.tania-button {
  padding: 0 $px-10;
  height: 32px;
  cursor: pointer;
  border-radius: $px-5;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tania-button:hover {
  opacity: 0.8;
}
</style>
