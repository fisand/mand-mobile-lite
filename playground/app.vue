<script lang="ts" setup>
import { ref } from 'vue'
import { Toast, Button, Popup } from '../components'

function handleClick() {
  Toast.succeed('Click')
}

const show = ref(false)
const showHandler = () => {
  show.value = true
}
</script>

<template>
  <div class="pt-4 px-6 flex flex-col max-w-375px m-auto gap-2">
    <h3 class="mb-4 font-bold text-6">Mand mobile less</h3>
    <Button type="primary" @click="handleClick">Click</Button>

    <Button type="primary" plain @click="showHandler">Show Popup</Button>
    <Popup v-model="show" position="bottom">
      <div class="bg-#fff py-4 px-8 text-base">弹窗内容</div>
    </Popup>
  </div>
</template>
