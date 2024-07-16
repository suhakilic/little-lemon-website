import img_1 from "../assets/restauranfood.jpg"
import { Link } from 'react-router-dom'


function Main_1() {
    return (
        <div className='main_1'>
            <div className='main_1_1'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused
                    on traditional recipes served with a modern twist.</p>
                <Link to="/reservation"><button>Reserve a table</button></Link>
            </div>
            <div className='main_1_2'>
                <img src={img_1} alt="restaurant_image" />
            </div>
        </div>
    )
}

export default Main_1;