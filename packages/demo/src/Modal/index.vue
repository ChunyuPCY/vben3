<script lang="ts" setup>
import { ref } from 'vue';

let alertInfo = ref('这个模态框本质是一个弹出的遮罩层,在遮罩层里你可以定义任意类型的 Card, Dialog, 或者不定义😶‍🌫️, Vben并没有封装默认的类型,所以你可以根据自己的实际业务定制😋')
let defaultModalShow = ref(false)
let isModalShow = ref(false)
let dialogModalShow = ref(false)
const cTitle = ref('这个模态框里装了一个卡片📇')
const cContent = ref('🚧山重水复疑无路🚧')
const aTitle = ref('Card类型的Modal')
const bTitle = ref("默认的Modal")
const dTitle = ref('Dialog类型的Modal')
const dialogTitle = ref('Dialog类型的Modal的标题')
const dialogContent = ref('你确认?')
const dialogPositiveText = ref('确认')
const dialogNegativeText = ref('算了')

//关闭 dialogModalShow
function CloseDialog() {
  dialogModalShow.value = !dialogModalShow.value
}

</script>


<template>
  <div class="m-2 grid grid-cols-12 gap-4">
    <div class="col-start-1 col-span-8">
      <VbenAlert type="info" :bordered="false">{{ alertInfo }}</VbenAlert>
    </div>
    <div class="col-start-1 col-span-3">
      <VbenCard :title="bTitle">
        <VbenButton @click="defaultModalShow = true">点我</VbenButton>
      </VbenCard>
    </div>
    <div class="col-start-4 col-span-3">
      <VbenCard :title="aTitle">
        <VbenButton @click="isModalShow = true">点我</VbenButton>
      </VbenCard>
    </div>

    <div class="col-start-7 col-span-3">
      <VbenCard :title="dTitle">
        <VbenButton @click="dialogModalShow = true">点我</VbenButton>
      </VbenCard>
    </div>

    <VbenModal :show="defaultModalShow" @maskClick="() => defaultModalShow = !defaultModalShow">
      <p>这是默认的样式,没有任何样式,会弹出一个遮罩层,你可以自己定义🥸</p>
    </VbenModal>

    <VbenModal :show="isModalShow" @maskClick="() => isModalShow = !isModalShow">
      <VbenCard class="w-1/2" :title="cTitle" role="dialog">{{ cContent }}</VbenCard>
    </VbenModal>

    <VbenModal v-model:show="dialogModalShow" @PositiveClick="CloseDialog" :title="dialogTitle" @maskClick="CloseDialog"
      @NegativeClick="CloseDialog" :content="dialogContent" :positive-text="dialogPositiveText"
      :negative-text="dialogNegativeText" preset="dialog">
    </VbenModal>

  </div>
</template>

<style lang="less" scoped></style>
