<script setup>
import PageTitle from '@/components/PageTitle.vue';
import { useUserStore } from '@/stores/useUserStore';
import { required, validatePhoneNumber } from '@common/utils/validationRules';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const userStore = useUserStore();
const { name, phoneNumber } = storeToRefs(userStore);

const form = ref(null);

// TODO 各要素のバリデーションが問題ない場合に次遷移ボタンを活性化する
const formIsValid = ref(false);
</script>

<template>
  <v-app>
    <PageTitle pageTitle="お届け先入力画面" />
    <p class="text-body-1">お届け先の情報を入力してください。</p>
    <v-form ref="form">
      <v-text-field
        v-model="name"
        label="氏名"
        :rules="[required]"
        validate-on="blur"
      ></v-text-field>
      <v-text-field
        v-model="phoneNumber"
        label="携帯電話番号"
        :rules="[required, validatePhoneNumber]"
        validate-on="blur"
      ></v-text-field
    ></v-form>

    <v-container>
      <v-row>
        <v-col>
          <v-btn
            color="primary"
            block
            @click="
              () => {
                $router.push({ path: '/select' });
              }
            "
          >
            戻る
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            color="primary"
            block
            @click="
              () => {
                $router.push({ path: '/confirm' });
              }
            "
          >
            内容の確認に進む
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
