import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, loadUsers } from "../redux/actions";
import Todos from "./Todos";
import Users from "./Users";


function App() {
const dispatch = useDispatch();

const loadingUsers = useSelector(state => state.loadingUsers);
const loadingTodos = useSelector(state => state.loadingTodos);

useEffect(() => {
  dispatch(loadUsers());
  dispatch(loadTodos());
}, []);

if(loadingTodos || loadingUsers ) {
  return(
    <div>
      loadings...
    </div>
  )
}

  return (
    <div className="container">
      <Users/>
      <Todos/>
    </div>
  );
}

export default App;
