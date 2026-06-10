import React from 'react';

function Usercard({ user }) {
  return (
    <div className="user-card">
      <div className="user-avatar">{user.name.charAt(0)}</div>
      <h3>{user.name}</h3>
      <p className="username">@{user.username}</p>
      
      <div className="user-info">
        <p>Email: {user.email}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
}

export default React.memo(Usercard);