<script setup>
import { ref, watch } from 'vue';
import { stackHandler } from '@/js/stack'

const { items, push, pop, peek, isEmpty } = stackHandler();
const pushedItem = ref();

const pushStack = (item) => {
  push(item);
  pushedItem.value = undefined;
}

const popStack = () => {
  const result = pop();
  if (!result) {
    alert('Stack이 비어있습니다.');
    return;
  }
}

const peekStack = () => {
  const result = peek();
  if (!result) {
    alert('Stack이 비어있습니다.');
    return;
  }
  alert(`peek 결과는 ${result}입니다.`);
}

const isEmptyStack = () => {
  const result = isEmpty();
  if (result) {
    alert('Stack이 비어 있습니다.');
    return;
  } else {
    alert('Stack이 비어 있지 않습니다.');
    return;
  }
}

const stackOverflow = () => {
  try {
    stackOverflow();
  } catch(e) {
    console.error("stackOverflow >>>", e);
  }
}

watch(
  () => items.value,
  () => {
    if (items.value.length > 10) {
      items.value = [];
      throw new Error('stack overflow 발생');
    }
  }, 
  { deep: true}
)

</script>

<template>
  <div class="container">
    <h1>🌀Stack 구현하기🌀</h1>
    <div class="enter"></div>
    <input v-model="pushedItem" type="text" placeholder="저장할 값 입력" />
    <button @click="pushStack(pushedItem)">push</button>
    <div class="enter"></div>
    <button @click="popStack">pop</button>
    <button @click="peekStack">peek</button>
    <button @click="isEmptyStack">isEmpty</button>
    <button @click="stackOverflow">stackOverflow</button>
    <div class="enter"></div>
    <h2>----- Stack 상태 -----</h2>
    <div class="stack-container">
      <div class="stack-item" v-for="(s, index) in items" :key="index">
        {{ s }}
      </div>
    </div>

  </div>
</template>

<style>
.container {
  text-align: center;
  color: #ffffff;
}

button {
  margin-left: 4px;
}

.enter {
  margin-bottom: 20px;
}

.stack-container {
  display: flex;
  flex-direction: column-reverse;
  max-width: 200px;
  margin: auto;
}

.stack-item {
  padding: 5px;
  background-color: #1c3182;
  margin-top: 8px;
}
</style>
