function Users({socket,users}) {
    return (
        
        <div>
            {users.map(user => (
                <div>
                    <div>{user.name}</div>
                </div>
            ))}
        </div>
    );
}

export default Users;