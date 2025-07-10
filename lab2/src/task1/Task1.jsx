import React, { useState } from 'react';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

const usersData = [
  {
    id: 1,
    name: "Mostafa Omar",
    email: "Mostafa@gmail.com",
    phone: "011111111111",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 2,
    name: "Mostafa Omar",
    email: "Mostafa@gmail.com",
    phone: "011111111111",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 3,
    name: "Mostafa Omar",
    email: "Mostafa@gmail.com",
    phone: "011111111111",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 4,
    name: "Mostafa Omar",
    email: "Mostafa@gmail.com",
    phone: "011111111111",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 5,
    name: "Mostafa Omar",
    email: "Mostafa@gmail.com",
    phone: "011111111111",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 6,
    name: "Mostafa Omar",
    email: "Mostafa@gmail.com",
    phone: "011111111111",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 7,
    name: "Mostafa Omar",
    email: "Mostafa@gmail.com",
    phone: "011111111111",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
];

function Task1() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");

  const handleSearch = (email) => {
    setSearch(email);
    const filtered = usersData.filter(user =>
      user.email.toLowerCase().includes(email.toLowerCase())
    );
    setUsers(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setUsers(usersData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <SearchBar search={search} onSearch={handleSearch} onReset={handleReset} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Task1;
