import { ref } from 'vue';

export function stackHandler() {
  const items = ref([]);

  const push = (item) => {
      items.value.push(item);
  };

  const pop = () => {
    if (items.value.length === 0) {
      return null;
    }
    // return items.pop();
    const splicedItems = items.value.splice(-1, 1);
    return splicedItems[0];
  };

  const peek = () => {
    if (items.value.length === 0) {
        return null;
    }
    return items.value[items.value.length - 1];
  };

  const isEmpty = () => {
    return items.value.length === 0;
  };

  return { items, push, pop, peek, isEmpty };
}