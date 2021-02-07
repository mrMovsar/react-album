import { useDispatch, useSelector } from "react-redux"
import Todo from "./Todo"
import { setFilterText } from "../redux/actions";

function Todos() {
    const todos = useSelector(state => state.todos);
    const selectedUserId = useSelector(state => state.selectedUserId);

    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    const filteredTodos = todos
        .filter(todo => todo.userId === selectedUserId)
        .filter(todo => todo.title.indexOf(filter) > -1)
        

    const hadleChangeFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }

    if(selectedUserId === null) {
        return (
            <div className="no-selected-user">
                Пожалуйста выберите пользователя
            </div>
        )
    }
    return (
        <div className="todos">
            <div className="filter">
                <input type="text" 
                placeholder="text-filter" 
                value={filter} 
                onChange={hadleChangeFilter}/>
            </div>
            <ul>
                {filteredTodos.map(todo =>{
                    return <Todo todo={todo} key={todo.id}/>
                })}
            </ul>    
        </div>
    )
}
export default Todos