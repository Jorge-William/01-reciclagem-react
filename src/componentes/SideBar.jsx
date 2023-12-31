import styles from './SideBar.module.css';
import { Pencil } from '@phosphor-icons/react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src='https://avatars.githubusercontent.com/u/19416864?v=4'
          alt='foto de perfil'
        />
        <strong>Jorge William</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href='#'>
          <Pencil size={20} />
          Editar seu perfil
        </a>{' '}
      </footer>
    </aside>
  );
}
