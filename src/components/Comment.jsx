import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgN92ocEin_abypno3cwU093us_aTzI7rY7ZdDRKWc6wQnuvH1'
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Renato Cariani</strong>
                            <time 
                                title='12 de Maio de 2024' 
                                dateTime='2024-05-12 10:20:50' 
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        Fera demais Tadala, fera demais!
                    </p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}