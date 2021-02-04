
function User(props) {
    
    return (
        <li>
            <div className="user-name">
            {props.user.name}
            </div>
            <div className="user-email">
            {props.user.email}
            </div>
        </li>
    )
}

export default User