# closures no React

No react, há uma convenção de que, quando o novo estado depende do estado anterior, usamos uma arrow function dentro da setState, como abaixo: 

```jsx

setLikeCount(
    (state) => {return state + 1}
)

```