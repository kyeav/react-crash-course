import './Todo.css'

function Todo({ title, paragraph, onToDoDelete }) {
    // (props.title)

    return (
        <div className="todo">
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <button onClick={onToDoDelete}>Delete</button>
        </div>
    )
}

export default Todo