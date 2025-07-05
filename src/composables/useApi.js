// src/composables/useApi.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function runAnalysis(file) {
  try {
    const formData = new FormData();
    formData.append("video", file);

    // 1. STT: 음성 텍스트 추출 (buffer 방식)
    const sttRes = await axios.post(`${BASE_URL}/stt`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const text = sttRes.data.text;

    // 2. 요약 생성
    const summaryRes = await axios.post(`${BASE_URL}/summarize`, { text });
    const summary = summaryRes.data.summary;

    // 3. 제목 생성
    const titleRes = await axios.post(`${BASE_URL}/generate/title`, {
      summary,
    });
    const titles = titleRes.data.titles;

    // 4. 키워드 추출
    const keywordRes = await axios.post(`${BASE_URL}/generate/keywords`, {
      summary,
    });
    const keywords = keywordRes.data.keywords;

    // 5. 설명문 생성
    const descRes = await axios.post(`${BASE_URL}/generate/description`, {
      summary,
    });
    const description = descRes.data.description;

    return {
      text,
      summary,
      titles,
      keywords,
      description,
    };
  } catch (err) {
    console.error("[API 오류]", err?.response?.data || err);
    throw err;
  }
}
