# Validacao forms

```jsx
<button 
    type="submit" 
    className={styles.publishButton} 
    disabled={newCommentText.length === 0}>
    Publicar
</button>
```



### 2. validação manual (controlada pelo estado)

Você usa o useState para armazenar os valores dos campos e faz verificações antes de enviar.

```jsx
    const [comments,setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event) {
      event.preventDefault(); // Impede o comportamento padrão de um elemento (ex: link navegar, formulário enviar).
      
      setComments([...comments,newCommentText]);
      setNewCommentText('');
    }

    function handleNewCommentChange(event) {
      event.target.setCustomValidity('') // Limpa mensagens de validação personalizada do campo.
      setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event) {
      event.target.setCustomValidity('Este campo é obrigatório') // Define mensagem de erro personalizada para validação.
    }

    <textarea
        onChange={handleNewCommentChange} // Executa função quando o valor do campo muda.
        onInvalid={handleNewCommentInvalid} // Executa função quando o campo é inválido (submissão com erro).
    />
```
### 3. Usando bibliotecas: 

para formulários maiores, é comum usar libs que facilitam:

1. Formik

2. React Hook Form

3. Yup (para regras de validação)
