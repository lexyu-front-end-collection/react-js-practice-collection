import React, { useState } from 'react'
import { shuffle } from './utils.js'
import Search from './Search'

const allUsers = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Isaac",
    "Jack"
];

export default function BeforeCallback() {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = (searchTerm) => {
        console.log(users[0]);

        const filteredUsers = allUsers
            .filter(user => user.includes(searchTerm));
        setUsers(filteredUsers);
    };

    return (
        <div>
            <h1>BeforeCallback</h1>
            <div className='align-center mb-2 flex'>
                <button className='mr-2' onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    )
}