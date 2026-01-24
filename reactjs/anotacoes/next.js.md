# Next.js

## 1. Definição:

É um Framework React opinado para produção. Resolve problemas comuns: SSR, SSG, performance, SEO, caching, roteamento;

## 2. Arquitetura do next.js

O next.js possui duas arquiteturas principais:

### App Router vs Pages Router

O App Router usa o diretorio /app e a sua arquitetura é baseada em PASTAS. É usada nas versões mais recentes do Next.js

O Page Router usa o diretorio /pages e sua arquitetura é baseada em ARQUIVOS. Também é usada mas usando as versões mais antigas do Next.js

## 3. File-System Routing (App Router)

### Regra fundamental: Pastas definem rotas

No App Router (Next.js 13+), pastas (diretórios) são o que define os segmentos do URL, e não os arquivos como era no Pages Router.

* Segmentos: Cada pasta dentro de app/ ou src/app/ se torna um segmento no caminho do URL.

Exemplo: app/clientes/detalhes/ é mapeado para /clientes/detalhes.

* Hierarquia: A estrutura de pastas reflete a hierarquia de URLs.


### Arquivos de UI e Convenções

Apesar das pastas definirem as rotas, o conteúdo e a funcionalidade são definidos por arquivos com nomes específicos (Convenções):

| Arquivo (Convenção) |                Função               |  Obrigatório? |
|:-------------------:|:-----------------------------------:|:-------------:|
|      page.tsx       |Define a UI da rota. É o conteúdo que será exibido para o usuário em um determinado URL. | Sim (para que uma pasta seja uma rota visitável).|
|layout.tsx| Define a UI compartilhada para uma pasta e suas sub-rotas.| Sim (no nível raiz, como app/layout.tsx). |
|loading.tsx |Define um estado de carregamento que é exibido enquanto o conteúdo do segmento está sendo buscado e renderizado. | Não. |
| error.tsx |Define uma fronteira de erro para a rota e suas sub-rotas. | Não. |


### Rotas Dinâmicas (Parâmetros de URL)

Para criar rotas onde parte do URL é um parâmetro (variável), você usa colchetes [ ] no nome da pasta:

* Sintaxe: Crie uma pasta com o nome entre colchetes, como [productId].

* Uso: A pasta app/produtos/[productId]/page.tsx cria a rota /produtos/qualquer-coisa.

* Acesso ao Parâmetro: O componente page.tsx dentro da pasta dinâmica recebe o valor do URL através do objeto params:

```tsx
// app/produtos/[productId]/page.tsx
interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // params.productId terá o valor do URL
  return <h1>Produto: {params.productId}</h1>;
}
```

### Grupos de Rotas (Organização sem Alterar a URL)
Para organizar seus arquivos em subpastas lógicas sem que isso afete a URL, use parênteses ( ) no nome da pasta:

* Sintaxe: Crie uma pasta como (admin).

* Uso: A rota app/(admin)/dashboard/page.tsx é acessada simplesmente como /dashboard. O (admin) é ignorado pelo sistema de roteamento.


### Navegação entre páginas

No next.js, para realizarmos a navegação entre as páginas, usamos o componente <code><Link></code>, substituindo a tag <a> do HTML. 

#### Como usar

* Importar: <code>import { Link } from 'next/link';</code>
 
* Usar: Envolver o conteúdo clicável (texto ou elemento) com <code><Link href="/caminho-da-pagina"></code>

#### Principais propriedades

* href: A rota para onde o link aponta (obrigatório).

* replace: Booleano, se true, substitui o histórico atual em vez de adicionar uma nova entrada.

* scroll: Booleano, controla se a rolagem deve ir para o topo da página.

* prefetch: Booleano, habilita o pré-carregamento da página linkada (padrão: true no App Router).

### Page not found

Para usar o "Page Not Found" (Erro 404) no Next.js, podemos criar um arquivo not-found.tsx dentro da pasta app/. Dentro do arquivo, vamos criar um componente React que será exibido caso uma rota não seja encontrada.

## 4. Metadatos (SEO)

### O que são?
São detalhes adicionais sobre uma página web. Não são visíveis para o visitante. Mas servem para a otimização para os mecanismos de busca (SEO) de páginas web. Ademais, metadados como o Open Graph melhoras a aparência de links compartilhados em mídias sociais.

### Como adicionar metadados

Metadados podem ser adicionados no layout.tsx para servir como metados globais, ou então na page.tsx de uma rota específica.

* Importação: <code>import { Metadata } from "next"</code>

* Uso:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  }, //Referência ao metadata <title> do HTML
  description: 'The official Next.js Learn Dashboard built with App Router.', //Referência ao metadata description do HTML
  keywords: 'html, css, tsx', //metadados de palavras-chave para otimizar buscas
  OpenGraph: {
    title: 'learning next',
    description: 'Learning next.js with next.org',
    images: ['url/caminho da img'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
};
```

OBS: o %s texto no modelo  será substituído pelo título específico da página.

## 5. Server X Client Components

### Ambiente
Local onde o código do seu aplicativo pode ser executado: o servidor e o cliente.

* <b>O cliente</b> se refere ao navegador no dispositivo do usuário que envia uma solicitação a um servidor para obter o código do seu aplicativo. Em seguida, ele transforma a resposta recebida do servidor em uma interface com a qual o usuário pode interagir. 

* <b>O servidor</b> se refere ao computador em um centro de dados que armazena o código do seu aplicativo, recebe solicitações de um cliente, realiza alguns cálculos e envia uma resposta apropriada. 

Cada ambiente possui seu próprio conjunto de capacidades e limitações. Por exemplo, ao mover a renderização e a busca de dados para o servidor, você pode reduzir a quantidade de código enviado ao cliente, o que pode melhorar o desempenho da sua aplicação. Mas, como você aprendeu anteriormente, para tornar sua interface de usuário interativa, é necessário atualizar o DOM no cliente.

Portanto, o código que você escreve para o servidor e para o cliente nem sempre é o mesmo. Certas operações (como buscar dados ou gerenciar o estado do usuário) são mais adequadas para um ambiente do que para o outro.


### Limite de rede
O limite da rede é uma linha conceitual que separa os diferentes ambientes. 

Em React, você escolhe onde posicionar o limite da rede na sua árvore de componentes. Por exemplo, você pode buscar dados e renderizar as postagens de um usuário no servidor (usando Componentes de Servidor) e, em seguida, renderizar o conteúdo interativo LikeButtonde cada postagem no cliente (usando Componentes de Cliente). 


### Como usar

Next.js usa componentes de servidor por padrão, melhorando a otimização da aplicação. No entanto, se quisermos renderizar uma página interativa (usando Estados, eventos etc.), não podemos realizar isso em um componente Server. Portanto, podemos usar o componente interativo Button para um componente Client.

Para usar componentes Client, usamos a diretiva 'use client';

```tsx
'use client';
 
import { useState } from 'react';
 
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button onClick={handleClick}>Like ({likes})</button>;
}
```

Aí podemos importar o botão para a page.tsx

```tsx
import LikeButton from './like-button';
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
```


## 6. Server Actions

As ações do servidor são funções assíncronas executadas no servidor. Elas podem ser usadas em componentes de servidor e cliente para lidar com o envio de formulários e alterações de dados em aplicações Next.js.

Para marcar uma função como ação do servidor, usamos a diretiva 'use server', geralmente no ínicio de uma async function ou no início de um arquivo para marcar todas as exportações como server actions. 

As ações do servidor podem ser invocadas usando o actionatributo em um <form> elemento: 

```tsx
export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'
 
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }
 
    // mutate data
    // revalidate cache
  }
 
  return <form action={createInvoice}>...</form>
}
```


## 7. Loading UI

O arquivo especial loading.tsx ajuda você a criar interfaces de carregamento significativas com React Suspense. Com essa convenção, você pode exibir um estado de carregamento instantâneo do servidor enquanto o conteúdo de um segmento de rota é transmitido. O novo conteúdo é inserido automaticamente assim que estiver completo.

### Streaming com Suspense

Além do layout.tsx, o App router oferece suporte ao streaming com suspensão, o que significa criar limites de suspensão para os próprios componentes, fora do loading.tsx.

* <Suspense>: Funciona envolvendo um componente que executa uma ação assíncrona (por exemplo, buscar dados), exibindo uma interface de usuário alternativa (por exemplo, um esqueleto ou um indicador de carregamento) enquanto a ação está em andamento e, em seguida, trocando-o pelo seu componente assim que a ação for concluída.

```tsx
import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}
```


## Caching e Revalidating


