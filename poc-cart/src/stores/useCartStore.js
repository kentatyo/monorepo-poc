import { defineStore } from 'pinia';
import { ref } from 'vue';
import { CartItem } from '../types/documentCart';

export const useCartStore = defineStore('cart', () => {
  /** @type {CartItem[]} */
  const items = ref(null);

  /**
   * カートアイテムを設定する
   * @param {CartItem[]} newItems
   */
  function setItems(newItems) {
    items.value = newItems.map((item) => ({
      ...item,
      selected: true,
    }));
  }

  /**
   * アイテムの選択状態を反転する
   * @param {number} id - 更新するアイテムのID
   * @param {boolean} selected - 新しい選択状態
   */
  function updateItemSelection(id) {
    const item = items.value.find((item) => item.id === id);
    if (item) {
      item.selected = !item.selected;
    }
  }

  return {
    items,
    setItems,
    updateItemSelection,
  };
});
