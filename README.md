# 🖥️ Vue 프론트엔드 – AI 영상 SEO 자동화 도구

영상 파일 업로드 후 자동으로 텍스트 추출, 요약, 제목/키워드/설명 생성 결과를 확인할 수 있는 간단한 웹 UI입니다.

## 📦 기술 스택

- Vue 3 + Vite
- Composition API
- Axios – API 요청
- Tailwind CSS (적용 전)
- Netlify – 배포 플랫폼

## 🛠️ 프로젝트 구조

src/  
├── components/  
│ ├── UploadForm.vue # 영상 업로드 및 전송  
│ └── ResultCard.vue # 결과 요약/제목/키워드/설명 표시  
├── composables/  
│ └── useApi.js # 백엔드 API 호출 함수  
├── App.vue  
├── main.js

## 🔄 작동 흐름

1. 사용자가 영상 파일 선택 후 업로드
2. 백엔드 서버로 파일 전송 (/upload)
3. 파일 경로를 기반으로 /stt → /summarize → /generate/... 순차 요청
4. 결과 데이터를 화면에 출력

## 🔐 환경 변수 설정 (.env)

```
VITE_API_BASE_URL=주소!!!
```

## 🚀 배포 (Netlify 기준)

1. Netlify 가입 후 GitHub 저장소 연결
2. "New site from Git" 클릭 → 배포할 프로젝트 선택
3. 배포 설정:

   | 항목                  | 값                     |
   | --------------------- | ---------------------- |
   | Build Command         | npm run build          |
   | Publish Directory     | dist                   |
   | Environment Variables | VITE_API_BASE_URL=주소 |

4. 설정 완료 후 자동 배포 → 생성된 URL 접속

## ✅ 체크리스트

- 백엔드 주소는 .env로 분리
- 파일 업로드 후 분석 결과 자동 출력
- 버튼 클릭 시 결과 복사 기능 포함
- GitHub에 .env는 업로드 금지
- Netlify 환경변수 설정 후 재배포
