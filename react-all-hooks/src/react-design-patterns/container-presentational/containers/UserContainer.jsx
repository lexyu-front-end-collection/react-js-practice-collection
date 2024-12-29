import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList';


const UserContainer = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, isError] = useState(null);

    const getUsers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://reqres.in/api/users');
            const json = await response.json();
            setUsers(json.data);
            console.log(json.data);
        } catch (error) {
            isError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            {/* <h1 className='text-white'>User Container</h1> */}
            <UserList users={users} loading={isLoading} error={error}></UserList>
        </div>
    )
}

export default UserContainer