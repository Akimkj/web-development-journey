import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';
import { Comment } from './Comment.js';
import {Avatar} from './Avatar.js'
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from 'react';




interface PostProps {
  author: {
    name: string;
    formation: string;
    avatar_url: string;
  };
  timesrcreatedAt: Date;
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[];
}

export function Post({author, timesrcreatedAt, content}: PostProps) {
    

    const timesrcreatedAtFormatted = format(timesrcreatedAt, "de 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR,
    });
    const timesrcreatedAtRelativeToNow = formatDistanceToNow(timesrcreatedAt, {
      locale: ptBR,
      addSuffix: true,
    })



    const [comments,setComments] = useState<string[]>([]);
    const [newCommentText, setNewCommentText] = useState<string>('');

    function handleCreateNewComment(event: FormEvent) {
      event.preventDefault();
      
      setComments([...comments,newCommentText]);
      setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('')
      setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('Este campo é obrigatório')
    }




    function deleteComment(commentToDelete: string) {
      const CommentsWithoutDeletedOne = comments.filter((comment) => {
          return comment !== commentToDelete;
      });

      setComments(CommentsWithoutDeletedOne);
    }


    return(
        <div className={styles.postContainer}>
            <header className={styles.infoUserPost}>
                <div className={styles.profileUserPost}>
                  <Avatar src={author.avatar_url}/>
                  <div className={styles.authorInfo}>
                      <strong className={styles.nameUser}>{author.name}</strong>
                      <p className={styles.formationUser}>{author.formation}</p>
                  </div>
                </div>

                <span className={styles.postTime}>
                    <time title={timesrcreatedAtFormatted} dateTime={timesrcreatedAt.toISOString()} className={styles.postTextTime}>{timesrcreatedAtRelativeToNow}</time>
                </span>
            </header>

            <div className={styles.bodyTextPost}>
                {content.map((line) => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if (line.type == 'link') {
                      return <p key={line.content}> <a href="#">{line.content}</a> </p>
                    }
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.newCommentSection}>
              <strong>Deixe seu Feedback</strong>

              <div className={styles.feedbackInputContainer}>
                <textarea
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                name="feedbackInput" 
                id="ifeebackInput"
                value={newCommentText}
                placeholder="Escreva um comentário..." 
                //rows="5" cols="20" 
                required
                className={styles.commentTextArea}/>
              </div>

              <button type="submit" className={styles.publishButton} disabled={newCommentText.length === 0}>
                Publicar
              </button>

            </form>

            <div className={styles.commentesSection}>
              {comments.map((comment) => {return <Comment 
                content = {comment}
                key={comment}
                deleteComment = {deleteComment} 
                />
              }
              )
              }
            </div>
        </div>
    )
}