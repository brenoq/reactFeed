import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/brenoq.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Breno Quirino</strong>
              <time title='17 de Julho às 08:30' dateTime='2022-07-17 08:30:25'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar Comeentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}