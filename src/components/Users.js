import { useSelector } from "react-redux"
import User from "./User"

function Users() {
    const users = useSelector(state => state.users)
        return (
            <div className="users">
                <ul>
                    {users.map(user => {
                        return <User user={user} key={user.id}/>
                    })}
                </ul>
            </div>
        )
    }
    
export default Users