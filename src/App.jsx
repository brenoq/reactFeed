import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post name='Breno Quirino' info='Programador'/>
          <Post name='Jefferson Barbosa' info='Web Designer'/>
        </main>
      </div>
    </div>

  )
}
