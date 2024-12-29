import React from 'react'
import PropTypes from 'prop-types'

const UserList = ({ users, loading, error }) => {
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (!users || users.length === 0) {
        return <div>No users found.</div>
    }
    return (
        <div className=''>
            <h1 className='text-white'>User List</h1>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <img src={user.avatar} width="50" />
                            <p>
                                <strong>{user.first_name}</strong>
                            </p>
                            <p>{user.email}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const users = PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    first_name: PropTypes.string,
    email: PropTypes.string
})

UserList.propTypes = {
    users: PropTypes.arrayOf(users),
    loading: PropTypes.bool,
    error: PropTypes.object
}

export default UserList