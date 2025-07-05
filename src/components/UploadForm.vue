<script setup>
import { ref } from "vue";

const emit = defineEmits(["uploaded"]);

const selectedFile = ref(null);
const loading = ref(false);
const error = ref(null);

const onFileChange = (e) => {
  selectedFile.value = e.target.files[0];
};

const handleUpload = async () => {
  if (!selectedFile.value) return;

  error.value = null;
  loading.value = true;

  try {
    // ✔️ 별도 업로드 API 호출 없이 바로 부모로 emit
    emit("uploaded", selectedFile.value);
  } catch (err) {
    error.value = "파일 처리 실패: " + err.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="handleUpload" class="space-y-4">
    <label class="block">
      <span class="text-sm font-semibold">영상 파일 업로드</span>
      <input
        type="file"
        accept="video/*"
        @change="onFileChange"
        class="mt-1 block w-full"
      />
    </label>

    <button
      type="submit"
      :disabled="!selectedFile || loading"
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {{ loading ? "전송 중..." : "AI 분석 시작" }}
    </button>

    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
  </form>
</template>

<style scoped>
input[type="file"] {
  border: 1px solid #ccc;
  padding: 0.5em;
  border-radius: 4px;
}
</style>
