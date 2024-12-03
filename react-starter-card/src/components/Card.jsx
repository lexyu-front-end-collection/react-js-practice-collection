import gopher from '../assets/gopher.jpg'

function Card() {
    return (
        <div className="card">
            <img className="car-image" src={gopher} alt="go" width={150} />
            <h2 className="card-title">Card Title</h2>
            <p className='card-text'>Card Paragraph</p>
        </div>
    )
}

export default Card