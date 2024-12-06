

function Profile() {
    const imgUrl = "./src/assets/gopher.jpg"
    const handleClick = (e) => {
        // console.log("clicked!!")
        e.target.style.display = "none"
    }
    return (
        <img onClick={(e) => handleClick(e)} src={imgUrl} width={50} />
    );
}


export default Profile


/*
function Profile() {
    const imgUrl = "./src/assets/gopher.jpg"
    const handleClick = (e) => {
        console.log("clicked!!")
    }
    return (
        <img onClick={(e) => handleClick(e)} src={imgUrl} width={50} />
    );
}

*/