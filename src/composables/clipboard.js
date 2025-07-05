// src/composables/useClipboard.js
import { ref } from "vue";

export function useClipboard() {
  const copied = ref(false);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => (copied.value = false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return {
    copyText,
    copied,
  };
}
