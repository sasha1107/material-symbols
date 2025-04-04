# material-symbols

## 목적

## Icon 생성 방법

### Material Symbols Icon 생성

#### Step 1. Material Symbols Icon 이름을 입력하세요.

- [Material Symbols and Icons](https://fonts.google.com/icons)에 정의되어 있는 Icon 이름을 복사하여 입력하세요.

![인터랙티브 아이콘 패키지](https://github.com/user-attachments/assets/bc09738c-e656-45fe-9470-f44ac8b8e76c)


#### Step 2. Icon 의 Style을 선택하세요.

Material Symbols(`sharp`, `outlined`, `rounded`)의 Style 중 추가할 Style을 다중 선택할 수 있습니다.
(spacebar 로 선택 가능합니다.)

> ADS 1.0(2025/02) 기준 `sharp` 스타일만 사용하기로 정의되어 불필요한 svg의 import를 줄이기 위해 옵션을 `sharp`만 남겨두고 주석처리 해두었습니다.
>
> `outlined`, `rounded` 스타일이 필요한 경우 [`_templates/gen/material-icon/prompt.js`](#TODO) 파일을 수정하여 사용할 수 있습니다.

#### Step 3. Icon 의 Weight를 선택하세요.

Material Symbols(`100`, `200`, `300`, `400`, `500`, `600`, `700`)의 Weight 중 추가할 Weight을 다중 선택할 수 있습니다.
(spacebar 로 선택 가능합니다.)

> ADS 1.0(2025/02) 기준 `500` 버전만 사용하기로 정의되어 옵션을 `500`만 남겨두고 주석처리 해두었습니다.
>
> `100`, `200`, `300`, `400`, `600`, `700` 버전이 필요한 경우 [`_templates/gen/material-icon/prompt.js`](#TODO) 파일을 수정하여 사용할 수 있습니다.

#### Step 4. 생성된 경로를 입력하여 barrel file에 추가

![inject](https://github.com/user-attachments/assets/c0beda33-42bf-42ce-b5de-129b61f10f7e)

`added: 아이콘 생성된 경로`를 그대로 복사 & 붙여넣기하면 패키지의 아이콘들을 전부 export 하는 배럴 파일(`packages/icons/src/index.ts`)에 방금 생성한 아이콘이 추가됩니다. 


### Custom Icon 생성

## Icon 사용 방법

```tsx
import { Menu } from "material-symbols";

<Menu />;
```

### 참고한 자료
- [Hygen을 이용하여 템플릿 코드와 CLI 구현](https://253eosam.oopy.io/post/hygen-template-code-generator)
- [블로그🤘](https://velog.io/@sasha1107/%EC%BD%94%EB%93%9C-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%EC%85%98%EC%9C%BC%EB%A1%9C-%EC%9D%B8%ED%84%B0%EB%9E%99%ED%8B%B0%EB%B8%8C%ED%95%98%EA%B2%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0)


