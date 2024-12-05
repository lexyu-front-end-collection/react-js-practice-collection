import PropTypes from 'prop-types'

function UserGreeting(props) {
    const welcome = <h2 className="welcome"> Welcome {props.username}</h2>
    const login = <h2 className="login-prompt">Please log in to continue</h2>

    return props.isLoggedIn ? welcome : login
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting