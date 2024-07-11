# MBTI-blind-date (MBTI가 어떻게되세요? What is your MBTI)
sns형 소개팅 웹페이지

기존 소개팅 앱에서 아쉽다고 생각하는 부분들을 sns와 결합함으로써 해결하려고 했습니다.
(이성을 만날 수 있는 기회가 제한적, 추가로 원할때 과금 필요)
기본적으로 프로세스는 일반 소개팅앱과 비슷합니다. (회원가입, 유저정보 세팅, 이후에 이성에게 표현)
다만 sns형이다보니 다양한 사람들을 보고 좋아요 표시할 수 있습니다.


## 프로젝트 소개
### sns형 소개팅 앱
- 회원가입 / 로그인
- 사용자 정보 업데이트
- 회원가입 + 사용자정보 업데이트 한 사람만 메인 페이지에 접속할 수 있습니다.


### 프로젝트의 핵심인 MBTI
단순히 소개팅앱을 만드는건 다른 어플들과의 차이점이 없다고 생각했습니다.
사용자들에게 이 어플을 사용하게 혹은 흥미를 끌게 하기 위해서는 어떤 포인트가 필요하다고 생각했는데
저는 이것을 MBTI로 정했습니다.
예전 보다는 유행이 줄어든 느낌이 있지만 MBTI는 이제 어느 자리에서도 기본적인 정보가 되어버린 것 처럼
생각되기에 이를 이요하면 만드는 나도 재미있고 유저들도 흥미를 느끼지 않을까 했습니다.


### 유사 앱들과의 차이점
물론 MBTI를 키워드로한 앱들이 있었습니다.
그래서 아쉬웠고 다른 방향으로 가야하나 싶었는데, 직접 사용해보고 이걸로 가야겠다는 확신이 섰습니다.
왜냐하면 제가 생각한 MBTI소개팅 앱의 핵심 기능은
원하는 mbti에 따라 리스트를 볼 수 있는 것이었습니다.
다른 앱들은 mbti로 심리테스트를 하거나, 관계에 대한 내용을 핵심적으로 다뤘지만 제가 생각한 리스트를 분리하는 기능은 없었습니다.
그래서 나와 mbti 성향이 잘맞는, 혹은 i만 따로 e만 따로 유저들을 볼 수 있도록 했습니다.


### 구현된 기능
- 회원가입 / 로그인
- 유저정보 세팅
- 유저 리스트
- 유저 리스트를 원하는 mbti에 맞게 리스트 보여주기
- 추천 유저 보기 / 좋아요, 좋아요 취소 기능
- 유저 상세 화면 / 좋아요, 좋아요 취소 기능
- 좋아요 유저(팔로워)를 한눈에 볼수있는 좋아요 페이지 / 좋아요, 좋아요 취소 기능
- 서로 좋아요 한 사람과 채팅하기
- 채팅 리스트에서 채팅 선택 가능
- 프로필 페이지


## 적용된 기술
프론트
- Next
- Shadcn/Ui

백엔드 (https://github.com/dydcodydco/zzim-back)
- Express (node)
- MySql
- AWS (EC2, S3)


## 실행
```bash
npm install
npm run dev
```

## 프로세스
- 회원가입
- 회원가입과 유저정보 업데이트를 따로 둔 이유는 소개팅앱들을 조사했을 때 가입과 유저정보 업데이트를 따로 두는 것을 참고했습니다.
- 유저 정보 세팅
- 메인화면 이동
- 좋아요를 표시
- 채팅으로 관계 발전


## 추가 구현 할 기능
- 유저 정보를 세팅 후 다시 변경할 수 있도록
- 보여지는 리스트의 옵션 선택 ( 나이, 지역, 키 등등 을 기준으로 리스트 볼 수 있도록 )
- 로딩화면 추가
- mbti를 모르거나 좀 더 확실한 정보를 위해 mbti 테스트 추가
- 유저 정보를 확실하게 하기위해 회원가입때 휴대폰 확인 추가 
- 람다로 이미지 리사이징
- 인증 시간 지났을때에 대한 로직 짜기
- 검색 기능

# 화면 이미지
## 웹 화면
![1](https://github.com/user-attachments/assets/2707fee3-e5b4-40f0-8fd7-1c908ff5afb9)

## 모바일 화면 + 프로세스
<img src="https://github.com/user-attachments/assets/95dcf1d3-d533-4546-8736-ef99e0d37351" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/679ac17f-7f92-4200-bf8e-9afb383d73bb" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/57a56c82-bf8e-412c-bdb7-be8c4632e7ad" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/549739bf-6a1b-4a85-af61-46686d57a53e" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/4e20e82c-0be9-430a-bd02-1d77d07db3ff" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/2d315d87-2e1e-49b8-94c5-69db3b5b7fe9" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/2f82d1d1-c33c-47da-818d-70055b278d6d" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/1555dba6-cc9f-4334-b2a1-efa96868baed" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/155a0d41-5972-4a89-9c6f-5f76a647f14a" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/6a198b9b-6265-4f97-a57c-e55af32b2b6d" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/dcb0cb63-0f8a-416d-a8f3-86ab2a8abbb1" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/2eb229f5-0d04-41be-b2b7-803a63e8d1d8" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/555e4a22-b0e7-4283-b794-23e88a0f46b9" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/8fc7e5ba-e8f0-4e36-8b9b-598ded9cc0da" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/8be6772c-b288-4505-b7ae-15aa024c1ce2" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/c11b9147-308f-44f3-9b28-b1ea8cfd7a19" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/9633abdb-5c1c-4967-bf93-6511ca1431ee" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/2b7a9251-5674-4db8-a5c0-380d928c5e17" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/1d181646-4abd-4212-a80b-a73f427230af" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/2ad18c61-e076-455c-84c6-a8efd42832b0" width="33%" height="500" />
<img src="https://github.com/user-attachments/assets/ba689bf9-887c-41f6-8640-adde1da60460" width="33%" height="500" />

