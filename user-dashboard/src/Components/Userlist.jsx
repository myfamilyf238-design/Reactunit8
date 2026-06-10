import Usercard from './Usercard';

function Userlist({ users }) {
  if (users.length === 0) {
    return <p className="no-results">No users found</p>;
  }

  return (
    <div className="users-grid">
      {users.map(user => (
        <Usercard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Userlist;