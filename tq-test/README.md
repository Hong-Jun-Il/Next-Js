# 유튜브 무한 스크롤 with 스켈레톤 ui 구현 계획서

1. 밑에 스켈레톤 ui 6개를 미리 박아둔다
2. 로딩 스피너도 미리 박아둔다 << 이 때 애니메이션은 안넣음
3. 스켈레톤 ui가 보이는 순간 클래스 결합으로 애니메이션 active 줘서 로딩 스피너 돌림

padding top으로 aspect ratio 효과를 냄
img는 그냥 w 100 h 100 object fit cover를 줌
