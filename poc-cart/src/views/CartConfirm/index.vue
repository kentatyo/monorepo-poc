<script setup>
import PageTitle from '@/components/PageTitle.vue';
import { useCartStore } from '@/stores/useCartStore';
import { useUserStore } from '@/stores/useUserStore';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const cartStore = useCartStore();
const { name, phoneNumber } = storeToRefs(userStore);
const { items } = storeToRefs(cartStore);
const selectedItems = computed(
  () => items.value?.filter((item) => item.selected) ?? [],
);
</script>

<template>
  <v-app>
    <PageTitle pageTitle="内容確認画面" />
    <p class="text-body-1">入力内容を確認してください。</p>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          請求するパンフレット
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list-item v-for="item in selectedItems" :key="item.id">
            <p>
              {{ item.title }}
            </p>
          </v-list-item>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title> お届け先の情報 </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-container>
            <v-row>
              <v-col> 氏名 </v-col>
              <v-col>
                {{ name }}
              </v-col>
            </v-row>
            <v-row>
              <v-col> 電話番号 </v-col>
              <v-col>
                {{ phoneNumber }}
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container>
      <v-row>
        <v-col>
          <v-btn
            color="primary"
            block
            @click="
              () => {
                $router.push({ path: '/submit' });
              }
            "
          >
            戻る
          </v-btn>
        </v-col>
        <v-col>
          <v-btn color="primary" block> 請求する </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
