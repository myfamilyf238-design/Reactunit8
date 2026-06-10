import { useState, useEffect, useMemo } from 'react';
import { fetchUsers } from './api/api';
import Userlist from './Components/Userlist';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <div className="app">
      <header className="header">
        <h1>User Dashboard</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <main className="main">
        {loading && (
          <div className="loading">
            <p>Loading users...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>Error: {error}</p>
            <p>Test: Change API to https://jsonplaceholder.typicode.com/userssss</p>
          </div>
        )}

        {!loading && !error && <Userlist users={filteredUsers} />}
      </main>
    </div>
  );
}

export default App;