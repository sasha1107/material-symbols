# material-symbols

## 목적 & 목표

- 필요한 variant에 따라 아이콘을 선택적으로 생성하여 사용하기 위하여 code gen 방식을 취함.
- 생성된 아이콘 트리셰이킹되도록 export 하여 번들 사이즈를 최소화한다.

## Icon 생성 방법

### Material Symbols Icon 생성

![generate icon](https://github.com/user-attachments/assets/f94af42e-ea99-4165-9983-1c8b57f189a3)


#### Step 1. Material Symbols Icon 이름을 입력하세요.

- [Material Symbols and Icons](https://fonts.google.com/icons)에 정의되어 있는 Icon 이름을 복사하여 입력하세요.


#### Step 2. Icon 의 Style을 선택하세요.

Material Symbols(`sharp`, `outlined`, `rounded`)의 Style 중 추가할 Style을 다중 선택할 수 있습니다.
(spacebar로 선택 가능합니다.)


#### Step 3. Icon 의 Weight를 선택하세요.

Material Symbols(`100`, `200`, `300`, `400`, `500`, `600`, `700`)의 Weight 중 추가할 Weight을 다중 선택할 수 있습니다.
(spacebar 로 선택 가능합니다.)


#### Step 4. 생성된 경로를 입력하여 barrel file에 추가


<img src='https://github.com/user-attachments/assets/b515893f-2f27-4976-9bec-59a09e4cb9ab' alt='inject barrel' width='480px' />


`added: 아이콘 생성된 경로`를 그대로 복사 & 붙여넣기하면 패키지의 아이콘들을 전부 export 하는 배럴 파일(`packages/icons/src/index.ts`)에 방금 생성한 아이콘이 추가됩니다. 


## Icon 사용 방법

```tsx
import { Menu } from "material-symbols";

<Menu />;
```

### 참고한 자료
- [Hygen을 이용하여 템플릿 코드와 CLI 구현](https://253eosam.oopy.io/post/hygen-template-code-generator)
- [블로그🤘](https://velog.io/@sasha1107/%EC%BD%94%EB%93%9C-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%EC%85%98%EC%9C%BC%EB%A1%9C-%EC%9D%B8%ED%84%B0%EB%9E%99%ED%8B%B0%EB%B8%8C%ED%95%98%EA%B2%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0)


