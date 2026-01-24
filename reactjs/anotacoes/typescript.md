# TypeScript

## O que é?

1. É um Superset do JavaScript: JS + Tipagem estática opcional.
2. Código TS compila para JS.
3. Ajuda a evitar bugs, dá autocompletar melhor e previne erros comuns.

Ex: Pense como “JavaScript com verificação de tipo em tempo de desenvolvimento”.

### extensão

TypeScript puro: .ts  

TypeScript com react: .tsx

## Declaração de tipos primitivos

```ts
let nome: string = 1;
let idade: number = 20;
let ativo: boolean = true;
```

Felizmente, TS tem a mecânica de tipagem inferida, ou seja, TS deduz o tipo:

```ts
let x = 10;  // number
```

## Funções tipadas

```ts
function soma(a: number, b: number): number {
  return a + b;
}
```

No TS, os parâmetros agora são tipados, e o podemos definir o tipo de retorno (Opcional, já que o TS infere quando possível)


## Union Types

Permite um valor ter um tipo OU outro:

```ts
let id: number | string;
```

## Type Aliases

Cria “apelidos” para tipos → parecido com typedef em C, mas mais poderoso.

```ts
type User = {
  nome: string;
  idade: number;
};
```

## Interfaces

Parecida com type, mas focada em “formas de objetos”, define o modelo que certo tipo de dado deve assumir.

```ts
interface User {
  nome: string;
  idade: number;
}
```

## Any, Unknown, Never (os “esquisitos”)

1. any

aparece quando: Ignora o sistema de tipos, assim o TS aceita tudo, logo perde segurança. Também aparece quando o TS não sabe o tipo.

2. unknown

Serve como um tipo seguro para “valor desconhecido”, mais seguro que any. Tipo “qualquer coisa”, mas controlado. Contudo, precisa validar antes de usar, caso contrário gera erro. É frequentemente usado em funções genéricas.

3. never

Aparece em arrays vazios sem tipo, funções que nunca retornam,situações onde o TS deduz que um valor nunca vai existir.

```tsx
const arr = [];

function erro(): never {
  throw new Error("ops");
}

function test(x: never) {}
```


## "non-null assertion operator (!)" e "Optional Chaining (?.)"

O ! depois de uma variável/expressão no TypeScript (especialmente coisa de DOM) é o non-null assertion operator. Significa: “confia em mim, isso NÃO é null nem undefined.”

Quando você faz:

```tsx
const input = document.getElementById("meu-input");
```

O TypeScript infere:

```tsx
HTMLElement | null
```

Ou seja: o TS não tem como garantir que o elemento realmente existe no DOM.

Então, se você fizer:

```tsx
input.value
```

Ele reclama: “input pode ser null!”

Então a partir do momento que você coloca "!" no final da variável:
```tsx
const input = document.getElementById("meu-input")!;
```

VOCÊ (programador) está garantindo para o TypeScript que esse elemento de fato existe, então o TS começa a enxergar o elemento apenas como HTMLElement, e não como NULL. Mas se, por acaso o elemento de fato for NULL, vai gerar erro na hora de execução.


### Quando NÃO usar?

1. Em apps React (quase nunca precisa usar lá)
2. Quando o elemento pode não existir
3. Quando usar ? faz mais sentido:

```tsx
input?.value = "123"; // seguro
```

o símbolo "?." permite que o TS apenas acesse o valor de input SE input != null or undefined, e o TS retorna "undefined". Outro exemplo: 

```tsx
user.address.city // Erro se address for null

user.address?.city // Só tenta acessar city se address existir
```

Nesse caso, só acessa o valor de city em adress SE adress != null ou undefined, caso seja igual, então user.adress retorna undefined - não gera erro.


## Tipagem de props

### Como tipar props em React

Base: 

```tsx
interface Props {
  title: string;
  age: number;
  isActive: boolean;
  deleteComment: (comment: string) => void;
};

function UserCard(props: Props) {
  return <h1>{props.title}</h1>;
}

//usando desestruturação: 
function UserCard({ title, age, isActive, deleteComment }: Props) {
  return <h1>{title}</h1>;
}
```

### Props opcionais

Quando queremos que uma propriedade não seja obrigatória para um componente, usamos "?":

```tsx
type Props = {
  title: string;
  subtitle?: string; // opcional
};

function Header({ title, subtitle }: Props) {
  return <div>{subtitle ?? "Sem subtítulo"}</div>;
}
```

### Props com valores padrões

```tsx
function Header({ title, subtitle = "Padrão" }: Props) {}
```

### Union Types (quando a prop só pode ser X ou Y)

```tsx
type Props = {
  variant: "primary" | "secondary";
};
```

### Rest Props

Definição: É um padrão do React para permitir que o usuário passe qualquer prop extra para o elemento final. 

```tsx
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    hasBorder?: boolean;
}

export function Button({hasBorder, ...props}: ButtonProps) {
    return (
      <button className={hasBorder ? styles.avatarHasBorder : styles.avatar} {...props}>
        Clique
      </button>

    );
}
```

Agora o componente Button aceita todas as propriedades nativas de um <button> (como onClick, disabled, type, etc.), porque ele estende ButtonHTMLAttributes<HTMLButtonElement>. E não é necessário alterar manualmente as props no código e na tag.

### Children tipado

```tsx
//O react já tem o tipo nativo

type Props = {
  children: React.ReactNode;
};

// Uso

function Card({ children }: Props) {
  return <div className="card">{children}</div>;
}
```

## Como funciona o event no TypeScript

Em JavaScript, o event é solto e pode ser qualquer coisa.
No TypeScript, React fornece tipos específicos para cada evento:  

* ChangeEvent

* FormEvent

* FocusEvent

etc.

Cada um exige um tipo de elemento HTML específico, como:   

* HTMLInputElement

* HTMLButtonElement

* HTMLFormElement

* HTMLDivElement

…

exemplos:

```tsx
function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
}

function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
}
```

===========

Lembrar de anotar depois:  
4. Anotar sobre extensão de interfaces + Rest Props

===========


## O que são Generics

Generics permitem criar tipos que recebem outros tipos como parâmetro. Eles trazem segurança de tipos sem perder flexibilidade.

Sem Generics → any  

Com Generics → O tipo que o dev definiu  ou "não sei que tipo é, mas QUANDO eu souber, quero segurança"

```tsx

//Nesta função, com o uso do T, o TS infere qual será o tipo da função na hora da execução
function wrap<T>(value: T) {
  return { value };
}

const a = wrap(10);   // T = number
const b = wrap("oi"); // T = string

// Neste caso, estamos usando Generics para tipar o estado "items". É importante sempre realizar essa tipagem manual.
const [items, setItems] = useState<string[]>([]);
// esse exemplo também é bom para ressaltar que toda vez que iremos inicializar um array vazio, precisamos usar Generics.

// Estado com união de tipos
const [value, setValue] = useState<string | number>("");

setValue(10);
setValue("hello");


// IMPORTANTE: Estado de objetos

type User = {
  name: string;
  age: number;
};
const [user, setUser] = useState<User | null>(null);

//quando um estado de objetos pode começar vazio, precisamos usar "| null" para garantir que o typescript não gere erro.
```

## Extensão de interfaces

### Definição
Extender uma interface significa criar uma interface nova que herda todas as propriedades de outra.

Útil para:

* componentes que aceitam props extras  
* reaproveitar modelos de dados  
* criar variações de um mesmo componente  

### Sintaxe: extends

```tsx
interface Base {
  id: number;
  name: string;
}

interface User extends Base {
  email: string;
}
//Agora User tem: id, name e email
```

### Extensão múltipla
```tsx
interface Admin extends User, Permissions {
  role: "admin";
}
```

### Extensão de props de elementos HTML

React fornece interfaces que representam todas as props nativas de elementos HTML.  

Por exemplo: 

* ButtonHTMLAttributes<HTMLButtonElement>
* InputHTMLAttributes<HTMLInputElement>
* ImgHTMLAttributes<HTMLImageElement>

Para criar componentes que aceitam TODAS as props nativas + suas props próprias:

```tsx
import type { ImgHTMLAttributes } from 'react'; // precisamos importar os atributos de uma tag especifica do HTML

// AvatarProps agora tem hasBorder e todos os atributos da tag img
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

//todos os atributos da extensão são opcionais, então uso apenas aqueles que quero
export function Avatar({hasBorder = true, src, alt}: AvatarProps) {
    return (<img 
    className={hasBorder ? styles.avatarHasBorder : styles.avatar} 
    src={src} 
    alt={alt}
    />);
}

// Com Rest props
export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    return (<img 
    className={hasBorder ? styles.avatarHasBorder : styles.avatar} {...props} />);
}

```
