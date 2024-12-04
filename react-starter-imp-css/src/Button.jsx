// 2.
// import styles from './Button.module.css';

function Button() {
    // 3.
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "wheat",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer"
    }

    return (

        // <button className="button">Click Here</button>

        // 3.
        <button style={styles}>Click Here</button>

        // 2.
        // <button className={styles.button}>Click Here</button>
    )
}


export default Button