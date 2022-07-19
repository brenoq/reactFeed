import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/brenoq.png" />
          <div className={styles.authorInfo}>
            <strong>Breno Quirino</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='17 de Julho às 08:30' dateTime='2022-07-17 08:30:25'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href='#'>breno.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#react</a>{' '}
          <a href='#'>#feed</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <button type='submit'>Comentar</button>  
      </form>
    </article>
  );
}