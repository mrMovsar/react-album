function Todo(props) {
    return (
       <li>
           <div className="title">
                {props.todo.title}
            </div>
       </li>
    )
}

export default Todo