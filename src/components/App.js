import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
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
      <h1>Загружается...</h1>
    </div>
  )
};

  return (
    <div className="container">
      <Users/>
      <Route exact path="/:id?">
        <Todos/>
      </Route>
    </div>
  );
}

export default App;
