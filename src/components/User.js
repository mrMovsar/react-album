import { Link } from "react-router-dom";

function User(props) {
    
    return (
        <li>
            <Link to={`${props.user.id}`}>
                <div className="user-name">
                    {props.user.name}
                </div>
                <div className="user-email">
                    {props.user.email}
                </div>
            </Link>
        </li>
    )
}

export default User