import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Yuri Ruas"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta consequuntur architecto provident alias eius exercitationem hic tenetur, culpa sit, odit doloremque sequi sapiente cum adipisci ratione explicabo commodi esse? Obcaecati."
          />

          <Post
            author="Weslley Ruas"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
