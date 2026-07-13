# aroundstory

음악창작, 예술교육, 음악치료와 프로젝트 기획을 연결하는 `aroundstory` 공식 웹사이트입니다.

## 공개 주소

GitHub Pages: <https://kmlee8403-source.github.io/aroundstory/>

`main` 브랜치에 변경 사항을 올리면 `.github/workflows/deploy-pages.yml`이 정적 사이트를 빌드해 자동으로 배포합니다.

## 주로 수정하는 파일

- `app/page.tsx`: 화면 문구와 콘텐츠
- `app/globals.css`: 색상, 레이아웃, 카드와 반응형 디자인
- `public/`: 캐릭터와 공유 이미지 등 공개 자산
- `app/layout.tsx`: 검색·SNS 공유용 제목과 설명

브랜드 이름은 모든 텍스트에서 소문자 붙여쓰기 `aroundstory`로 표기합니다.

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm ci
npm run dev
```

검증 명령:

```bash
npm run build
```

GitHub Pages용 정적 빌드는 배포 워크플로에서 자동 실행됩니다. 정적 결과물은 `out/`에 생성됩니다.
