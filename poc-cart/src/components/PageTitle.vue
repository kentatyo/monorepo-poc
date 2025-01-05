// このコンポーネントではvuetifyを使用せず、cssを記述する例です。
<script setup>
defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="page-title-div">
    <h4>POCアプリ</h4>
    <h3>{{ pageTitle }}</h3>
  </div>
</template>

// TODO: 共通的なスタイルを作成し、それを読み込むよう変更
//scopedを使用して、このコンポーネント内でのみ有効なスタイルを記述することができます。
//ただし親要素のスタイルの影響は受けることに注意する必要があります。
<style scoped>
.page-title-div {
  margin-bottom: 1rem;
}
h4 {
  font-size: 1rem;
  color: rgb(var(--v-theme-primary));
}
</style>
