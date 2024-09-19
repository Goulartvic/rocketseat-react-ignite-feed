import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css'

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://i.ytimg.com/vi/hdE2ti4thU4/hqdefault.jpg',
        name: 'Tadalafellas',
        role: 'Nóia Profissional',
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa!'},
        {type: 'paragraph', content: 'Lojinha do Tadalafellas já esta no ar, garanta agora sua camiseta Tadalajutsu'},
        {type: 'paragraph', content: ' '},
        {type: 'link', content: 'tadalafellas/lojinha'},
      ],
      publishedAt: new Date('2024-09-17 17:20:50'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://i1.sndcdn.com/artworks-xC14z3ThSvB2PdrD-lYy8ww-t1080x1080.jpg',
        name: 'Jorlan Vieira',
        role: 'Bodybuilder',
      },
      content: [
        {type: 'paragraph', content: 'Agooooora voce demonstrou a essencia!!!!'},
        {type: 'paragraph', content: 'Compre já Whey sabor Arroz com Frango do AllDay'},
        {type: 'paragraph', content: ' '},
        {type: 'link', content: 'jorlanallday/essencia'},
      ],
      publishedAt: new Date('2024-09-17 12:13:50'),
    }
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    
    </div>
  )
}
