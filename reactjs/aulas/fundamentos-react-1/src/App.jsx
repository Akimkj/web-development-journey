import { useState } from 'react';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name:"Mika Marques",
        formation: "Software Developer",
        avatar_url: "https://avatars.githubusercontent.com/u/156031298?v=4"
      },
      content: [
        {type: 'paragraph', content: 'Hoje bebi 2 litros de coca com minha grande amiga yasmin enquanto termino a parte 1 deste trabalho meu dia foi feito tlgd'},
        {type: 'link', content: '#OdeioC'} 
      ],
      timesrcreatedAt: new Date("2022-04-05 14:30:00")
    },
    {
      id: 2,
      author: {
        name:"Adilla Gomes",
        formation: "Dev FullStack",
        avatar_url: "https://avatars.githubusercontent.com/u/182099510?v=4"
      },
      content: [
        {type: 'paragraph', content: 'To reaprendendo React dnv tlgd, oh biblioteca que muda toda hora...'},
        {type: 'link', content: '#amoReact'} 
      ],
      timesrcreatedAt: new Date("2025-04-05 14:30:00")
    }
  ])
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main className={styles.feedContainer}>
          {posts.map((post) => (
            <Post
            key={post.id} 
            author={post.author}
            content={post.content}
            timesrcreatedAt={post.timesrcreatedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
