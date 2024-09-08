import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO LIST</h1>
      <div className={styles.menu}>
        <form>
          <input type="text" placeholder="Search note..." />
        </form>
        <button>All</button>
        <button>Dark</button>
      </div>
    </header>
  )
}

export default Header