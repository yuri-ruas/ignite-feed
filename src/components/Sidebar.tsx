import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=50&w=500"
        alt=""
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/yuri-ruas.png" alt="" />

        <strong>Yuri Ruas</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}