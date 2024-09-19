import { format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, content, publishedAt}) {

    const [comments, setComments] = useState([
        "Post fera demais! Só produto de 1kg!!!"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = 
        format(
            publishedAt, 
            "dd 'de' 'LLLL' 'as' HH:mm'h'",
            {locale: ptBr}
        )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true})

    function handleCreateNewComment() {
        event.preventDefault()

        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleCreateNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutTheDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutTheDeletedOne)
    }

    function handleNewInvalidComment() {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        className={styles.avatar} 
                        src={author.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'link') {
                        return (<p key={line.content}><a href=''>{line.content}</a></p>)
                    } 
                    else {
                        return (<p key={line.content}>{line.content}</p>) 
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={handleCreateNewCommentChange}
                    value={newCommentText}
                    name='comment'
                    placeholder="Deixe um comentário"
                    onInvalid={handleNewInvalidComment}
                    required
                />
                <footer>
                    <button 
                        disabled={isNewCommentEmpty}
                        type="submit">Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>            
        </article>
    )
}