<script setup>
import UploadForm from "./components/UploadForm.vue";
import ResultCard from "./components/ResultCard.vue";

import { runAnalysis } from "./composables/useApi";
import { ref } from "vue";

const result = ref(null);
const loading = ref(false);

const handleFileUploaded = async (file) => {
  if (!file) return;

  loading.value = true;
  try {
    result.value = await runAnalysis(file); // runAnalysis(file) 호출
  } catch (err) {
    alert("분석 중 오류 발생");
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <main class="p-8 max-w-2xl mx-auto">
    <UploadForm @uploaded="handleFileUploaded" />

    <div v-if="loading" class="mt-6 text-gray-600">분석 중입니다...</div>

    <ResultCard
      v-if="result"
      class="mt-6"
      :summary="result.summary"
      :titles="result.titles"
      :keywords="result.keywords"
      :description="result.description"
    />
  </main>
</template>
