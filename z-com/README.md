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