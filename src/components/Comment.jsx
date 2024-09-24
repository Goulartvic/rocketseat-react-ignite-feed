import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

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
                        <button 
                            title='Deletar comentário'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}