import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=50&w=500"
        alt=""
        className={styles.cover}
      />

      <div className={styles.profile}>
        <strong>Yuri Ruas</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}