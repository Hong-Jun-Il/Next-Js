# 트위터 클론코딩

## 1. layout.tsx와 template.tsx의 차이
> * 페이지를 이동할 때마다 layout이 리렌더링 되게 하고 싶다면 template.tsx, 페이지만 리렌더링되게 하고 싶다면 layout.tsx

## 2. useRouter의 push와 replace의 차이
> * push : 히스토리 스택에 push가 됨
> * replace : 교체가 되므로 히스토리 스택에 이전의 redirect된 url이 쌓이지 않음 
> * 뒤로 가기 시 차이가 남

## 3. flex
> * flex 1은 부모 요소의 크기에서 1:n의 비율로 나눠짐(flex-grow: 1, flew-shrink: 1, flex-basis: 0)
> * flex-grow가 1이고 flex-basis를 auto로 준다면 일단 자식의 크기를 auto로 계산한 후 부모 요소의 남는 크기를 나누어 자식에게 분배

## 4. useSelectedLayoutSegment, usePathname
> * URL의 정보를 가져오는 훅 : csr에서만 가능하다
> * useSelectedLayoutSegment는 현재 라우트의 경로를 가져옴("home")
> * usePathname은 전체 URL 경로를 가져옴("/home/home2")

## 5. ssr에서 csr을 사용하는 법
> * csr로 만들 컴포넌트를 따로 빼서 ssr 컴포넌트를 children props로 받은 후 ssr에서 csr을 import
> * csr에서 ssr을 import 할 시 ssr이 csr로 변경됨 << 주의!