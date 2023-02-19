# Dream Coding 유튜브 클론코딩

![image](https://user-images.githubusercontent.com/65377787/219960460-ea385b16-4410-4434-b50c-efba111bb9b9.png)


<br>

## 💻 사용 기술 스택

- **React.js**
- **React-query**
- **React-router-dom**
- **TypeScript**
- **Tailwind CSS**

<br>

## ✨ 배운점
이전까지는 `Context API`, `React-Router-Dom` 등을 사용할 때, 아무 생각 없이 가장 상위 파일인 index.js 에서 `App` 컴포넌트를 감싸주었다. 하지만 이번 강의를 통해서 `Context Provder`를 필요한 곳의 가장 상위에만 감싸주는 **우산** 개념에 대해 이해할 수 있었다. 앞으로는 이러한 기능 구현에 앞서 어느 범위까지가 해당 기능을 사용할 지 고려할 수 있게 되었다.

`React-query`의 기본적인 동작 방식을 이해할 수 있었다. 필요한 네트워크 요청에 대해서 유니크한 키로 `useQuery()`를 호출하고 이에 대한 네트워크 요청 상태와 필요한 정보를 얻을 수 있는점 또한 획득한 정보를 캐싱하기 위해 옵션으로 `staleTime`을 설정하는 점 등 `React-query`에서 지원하는 유용한 기능들을 알 수 있었다. 아직 익숙하진 않지만 계속 사용해나가면서 자유롭게 쓸 수 있도록 연습해야겠다.

`TypeScript`로 React의 컴포넌트들을 구현하고 이를 위한 Props 선언 방법 및 전달 방법을 연습해 볼 수 있었다. 또한 YoutubeClient와 FakeYoutubeClient 2개의 클래스에 대한 공통 `interface`를 작성해서 이 클래스들을 사용하는 다른 로직에 필요에 따라 교체하여 사용할 수 있도록 구현했다.

이번 프로젝트를 통해 기존에 사용하지 않았던 `React-Router-Dom`의 `<Outlet />`, `TailwindCSS`, `TypeScript` 등을 간단하게 경험해 볼 수 있었다. 프론트엔드 개발에서 자주 쓰일 기술들인 만큼 좀 더 연습이 필요하다고 느꼈다.
