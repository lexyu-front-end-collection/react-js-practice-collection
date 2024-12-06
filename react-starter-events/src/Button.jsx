

function Button(props) {

    // const handler = () => {
    //     console.log("Ouch !!")
    // }

    // const handler2 = (name) => {
    //     console.log(`hi ${name}, how i can help you`);
    // }

    // let count = 0
    // const counter = (name) => {
    //     if (count < 3) {
    //         count++
    //         console.log(`${name}, click ${count} time/s`);
    //     } else {
    //         console.log(`too many clicks`);
    //     }
    // }

    // const clicker = (e) => console.log(e);
    /**
     * @param {MouseEvent} e
     */
    const clicker = (e) => {     
        e.target.textContent = "Ouch!!";
    }


    // return <button onClick={handler}>Click</button>;
    return <button onClick={(e) => clicker(e)}>Click</button>;

}

export default Button