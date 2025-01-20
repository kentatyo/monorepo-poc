import { createRouter, createWebHistory } from 'vue-router';
import CartConfirm from '@/views/CartConfirm/index.vue';
import CartSelect from '@/views/CartSelect/index.vue';
import CartSubmit from '@/views/CartSubmit/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/select',
      name: '資料選択画面',
      component: CartSelect,
    },
    {
      path: '/submit',
      name: 'お届け先入力画面',
      component: CartSubmit,
    },
    {
      path: '/confirm',
      name: '内容確認画面',
      component: CartConfirm,
    },
  ],
});

export default router;
