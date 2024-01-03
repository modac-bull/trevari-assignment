# 환경설정
- next.js 13 (pages 디렉토리) + typescript
- twin.macro (emotion + tailwind.css)
- react-query 사용하여 서버 상태 관리

# 실행 방법
```bash
npm install

// 개발 버전 실행
npm run dev

// 배포 버전 
npm run build
npm run start
```
nvm v16.17.1 에서 최적화되어 있습니다.
localhost:3000 에서 확인가능합니다.


# 폴더 구성
```plain
📁src
├──📁apis // api 파일
├──📁components // 컴포넌트 관련 파일
├──📁data // 데이터 관련 파일
├──📁pages // url pages 
├──📁utils // 유틸 파일
...
```


# url 구성
|페이지|url|components|
|------|---|---|
|홈|/|src/components/pages/home|
|책 상세|/book/[bc_id]|src/components/pages/book/detail|


# 요구 기능 명세
- 검색 기능 (or, not) 연산자 활용
- 무한 스크롤

## 검색 기능 apis/search
검색 조건은 크게 '단일', '또는', '제외' 3가지 조건으로 나누어 개발하였습니다.
첫번째 입력란만 검색할 경우엔 '단일' 키워드로 검색되며, 두번째 입력란까지 입력 후 옵션 선택에 따라 '또는(OR)', '제외(NOT)' 조건이 되도록 처리하였습니다.
1. 검색 조건에 따라 쿼리 파라미터가 적용됩니다.
   ```js
    // 1. 단일 검색 (예: 키워드1 : 사과)
    ?q=사과

    // 2. OR 검색 (예: 키워드1 : 사과, 키워드2 : 키위)
    ?q=사과|키위

    // 3. NOT 검색 (예: 키워드1 : 사과, 키워드2 : 키위)
    ?=사과-키위
   ```
2. 적용된 쿼리파라미터에 의해 조건에 맞는 데이터 리스트를 호출합니다.
  
   쿼리 파라미터를 파싱하여 검색 조건에 맞게 api를 호출하여 리스트를 갱신합니다.

## 무한 스크롤

'react-query'의 useInfinityQuery 훅을 사용하여 무한 스크롤 기능을 구현하였습니다. 스크롤을 내려 하단에 닿으면 다음 페이지 번호의 도서 정보를 불러와 리스트가 추가됩니다.