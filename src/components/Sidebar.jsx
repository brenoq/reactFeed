import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() { 
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1414509613498-f53000d3d2c1?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=480&h=80&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/brenoq.png"/>

        <strong>Breno Quirino</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}