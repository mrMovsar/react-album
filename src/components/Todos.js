
import { useSelector } from "react-redux"
import Todo from "./Todo"

function Todos() {
    const todos = useSelector(state => state.todos)
    return (
        <div className="todos">
            <ul>
                {todos.map(todo =>{
                    return <Todo todo={todo} key={todo.id}/>
                })}
            </ul>    
        </div>
    )
}
export default Todos