import styles from './Comment.module.css'
import { Trash, ThumbsUp, Dot } from 'lucide-react'
import {Avatar } from './Avatar.js'
import {useState} from 'react'

interface CommentsProps {
    content: string;
    deleteComment: (commentToDelete: string) => void;
}

export function Comment({content, deleteComment}: CommentsProps) {

    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment() {
        deleteComment(content);
    }

    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentMain}>
                <Avatar src="https://avatars.githubusercontent.com/u/146046328?v=4" hasBorder={false}/>

                <div className={styles.commentArea}>
                    <header className={styles.commentheader}>
                            <div className={styles.AuthorCommentInfos}>
                                <strong>Savio da silva</strong>
                                <p>23:00</p>
                            </div>
                        <button onClick={handleDeleteComment} className={styles.buttonTrashComment}>
                            <Trash className={styles.iconTrashComment}/>
                        </button>
                    </header>
                    <section className={styles.commentContent}>
                        <div dangerouslySetInnerHTML={{__html: content}}/>
                    </section>
                </div>

                
                
            </div>

            <div className={styles.commentActions}>
                    <button 
                    onClick={() => setLikeCount((state) => {return state + 1} )} 
                    className={styles.likeComment}> 
                        <ThumbsUp className={styles.likeIconComment}/> 
                        curtir
                    </button> 
                    <Dot/> 
                    <p className={styles.numberLikeComment}>
                        {likeCount}
                    </p> 
            </div>
        </div>
    )
}