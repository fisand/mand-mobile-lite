<script lang="ts" setup>
import Toast from '../components/toast/index'
import Button from '../components/button/index.vue'

function handleClick() {
  Toast.succeed('Click')
}
</script>

<template>
  <div class="pt-4 flex flex-col max-w-375px m-auto">
    <h3 class="mb-4 font-bold text-6">Mand mobile less</h3>
    <Button type="primary" @click="handleClick">Click</Button>
  </div>
</template>
