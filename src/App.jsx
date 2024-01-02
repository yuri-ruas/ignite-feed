import { Post } from "./Post"
import { Header } from "./components/Header"
import './styles.css'

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Yuri Ruas"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta consequuntur architecto provident alias eius exercitationem hic tenetur, culpa sit, odit doloremque sequi sapiente cum adipisci ratione explicabo commodi esse? Obcaecati."
      />

      <Post
        author="Weslley Ruas"
        content="Um novo post muito legal"
      />
    </div>
  )
}
