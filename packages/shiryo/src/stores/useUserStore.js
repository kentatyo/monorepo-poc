import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userInfo', () => {
  const phoneNumber = ref('');
  const name = ref('');
  function updateUserInfo({ userName, userPhoneNumber }) {
    name.value = userName;
    phoneNumber.value = userPhoneNumber;
  }
  return {
    name,
    phoneNumber,
    updateUserInfo,
  };
});
