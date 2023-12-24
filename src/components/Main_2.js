import img_greeksalad from "../assets/greek salad.jpg"
import img_bruchetta from "../assets/bruchetta.svg"
import img_lemondessert from "../assets/lemon dessert.jpg"
import Promo from './Promo'
import { Link } from 'react-router-dom'

function Main_2() {
    return (
        <div className='specials'>
            <h1>This week specials!</h1>
            <Link to="/orderonline"><button>Online Menu</button></Link>
            <div className='cards'>
                <div>
                    <img src={img_greeksalad} alt='greek_salad'></img>
                    <h4>Greek Salad</h4>
                    <h5>$12.99<Promo price="$11.99" /></h5>
                    <p>Made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, pepper, Greek oregano, and olive oil.</p>
                    <h4 className='delivery'><Link to="/orderonline">Order a delivery </Link><i class="fa-solid fa-bicycle"></i></h4>
                </div>
                <div>
                    <img src={img_bruchetta} alt='greek_salad'></img>
                    <h4>Bruschetta</h4>
                    <h5>$11.99<Promo price="$10.99" /></h5>
                    <p>Bruschetta is an antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.</p>
                    <h4 className='delivery'><Link to="/orderonline">Order a delivery </Link><i class="fa-solid fa-bicycle"></i></h4>
                </div>
                <div>
                    <img src={img_lemondessert} alt='greek_salad'></img>
                    <h4>Lemon Dessert</h4>
                    <h5>$10.99<Promo price="$9.99" /></h5>
                    <p>This unique dessert is a treat for the senses with flecks of lemon zest and fresh rosemary. Just wait till you taste it!</p>
                    <h4 className='delivery'><Link to="/orderonline">Order a delivery </Link><i class="fa-solid fa-bicycle"></i></h4>
                </div>
            </div>
        </div>

    )
}

export default Main_2