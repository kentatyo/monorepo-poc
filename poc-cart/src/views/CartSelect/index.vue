<script setup>
import PageTitle from '@/components/PageTitle.vue';
import { useCartStore } from '@/stores/useCartStore';
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';

// ユーザのカート状態を取得する
// まずstoreから情報を取得する
const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

// TODO: API呼び出し処理を切り出す
const loading = ref(false);
const error = ref(null);
//storeにデータがなければ外部APIから取得し、storeに保存する
// 商品情報を取得するAPIを呼び出す
async function getCartInfomation() {
  loading.value = true;
  error.value = null;
  try {
    // storeにデータがあるかないかを判断
    if (items.value === null) {
      const response = await axios.get(
        'http://localhost:8080/selected-documents?userId=iste',
      );
      cartStore.setItems(response.data.items);
    }
  } catch (error) {
    //TODO: エラーハンドリングを追加する
    console.error('Failed to fetch cart information:', error);
    error.value = 'カート情報の取得に失敗しました。';
  } finally {
    loading.value = false;
  }
}

//選択されているアイテムが1個以上あるかどうかを判断する
const isFormValid = computed(() => {
  return items.value?.some((item) => item.selected) ?? false;
});

onMounted(() => {
  getCartInfomation();
});
</script>

<template>
  <v-app>
    <PageTitle pageTitle="資料選択画面" />
    <p class="text-body-1">請求したいパンフレットを選択してください。</p>

    <v-list-item v-for="item in items" :key="item.id">
      <v-checkbox
        :model-value="item.selected"
        @update:model-value="cartStore.updateItemSelection(item.id)"
        :label="item.title"
        hide-details
      ></v-checkbox>

      <div class="text-body-2 text-grey-darken-1">
        {{ item.description }}
      </div>
    </v-list-item>
    <v-container class="d-flex justify-center">
      <v-btn
        color="primary"
        max-width="300"
        :disabled="!isFormValid || isLoading"
        @click="() => $router.push({ path: '/submit' })"
      >
        お届け先の入力に進む
      </v-btn>
    </v-container>
  </v-app>
</template>
