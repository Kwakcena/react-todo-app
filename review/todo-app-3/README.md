# Todo app 만들기

1. ~~[x] 프로젝트 생성 및 필요한 라이브러리 설치~~
   1. ~~[x] `yarn add node-sass classnames react-icons`~~
   2. ~~[x] Prettier 설정~~
   3. ~~[x] index.css 수정. 프로젝트의 글로벌 스타일을 수정한다. 모두 지우고 배경색은 `#e9ecef`~~
2. [] `TodoTemplate` 컴포넌트,scss 작성하기
   1. ~~[x] 화면 가운데 정렬~~
   2. ~~[x] 타이틀 보이기~~
   3. ~~[x] children으로 내부 JSX 렌더링~~
3. ~~[x] `TodoInsert` 컴포넌트,scss 작성하기~~
4. [] `TodoListItem` 컴포넌트,scss 작성하기
   1. ~~[x] 컴포넌트 초안 작성~~
   2. ~~[x] scss 작성~~
   3. ~~[x] checked 값에 따른 조건부 UI 보이기.~~
5. [] `TodoList` 컴포넌트,scss 작성하기
   1. ~~[x] 컴포넌트 초안 작성~~
   2. ~~[x] scss 작성~~
   3. ~~[x] todos 객체 받아서 map으로 렌더링 하기.~~
6. [] 기능 구현하기
   1. ~~[x] App에서 useState를 사용하여 todos라는 상태 정의~~
   2. [] 항목 추가 기능 구현하기.
      1. [] TodoInsert value 상태 관리하기
      2. [] todos 배열에 새 객체 추가하기
      3. [] useRef를 사용한 id 관리
      4. [] TodoInsert에서 onSubmit 이벤트 설정하기
   3. [] 지우기 기능 구현하기
      1. [] filter를 이용해 todos 배열에서 id로 항목 지우기.
      2. [] TodoListItem에서 삭제 함수 호출하기.
   4. [] 수정 기능
      1. [] onToggle 구현하기
      2. [] TodoListItem에서 토글 함수 호출하기.
