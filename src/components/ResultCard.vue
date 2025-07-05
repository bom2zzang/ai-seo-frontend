<script setup>
import { useClipboard } from "../composables/clipboard";
const { copyText: copySummary, copied: copiedSummary } = useClipboard();
const { copyText: copyDescription, copied: copiedDesc } = useClipboard();
defineProps({
  summary: String,
  titles: Array,
  keywords: Array,
  description: String,
});
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow space-y-6">
    <section>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold">🎯 요약</h2>
        <button
          @click="copySummary(summary)"
          class="text-sm text-blue-600 hover:underline"
        >
          {{ copiedSummary ? "✅ 복사됨" : "복사" }}
        </button>
      </div>
      <p class="text-gray-700">{{ summary }}</p>
    </section>

    <section>
      <h2 class="text-lg font-bold mb-1">📌 제목 추천</h2>
      <ul class="list-disc list-inside text-gray-800 space-y-1">
        <li v-for="title in titles" :key="title">{{ title }}</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg font-bold mb-1">🏷️ 키워드</h2>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="keyword in keywords"
          :key="keyword"
          class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
        >
          {{ keyword }}
        </span>
      </div>
    </section>

    <section>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold">📝 설명문</h2>
        <button
          @click="copyDescription(description)"
          class="text-sm text-blue-600 hover:underline"
        >
          {{ copiedDesc ? "✅ 복사됨" : "복사" }}
        </button>
      </div>
      <p class="text-gray-700 whitespace-pre-line">{{ description }}</p>
    </section>
  </div>
</template>
