# Eventos React

O REACT, por meio dos eventos (como onClick, onSubmit etc.), esperam uma função como valor.

IMPORTANTE: passar uma função como parametro é diferente de passar a chamada da sua função, ou seja {handleDelete} !== {handleDelete()}.

Quando fazemos a chamada de uma função dentro de um evento, entramos em loop infinito, pois toda vez que atualizamos o estado, essa função é executada, atualizando o estado novamente, e executando essa função novamente..., e assim continuando esse loop infinito.

Se quisermos passar um setState "diretamente" como valor para um evento, podemos usar uma arrow function: 

```jsx
    <button 
        onClick={() => setCountLike(likes + 1)}>
    clique
    </button>
```