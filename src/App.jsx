import { Post } from "./Post"

export function App() {
  return (
    <div>
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
