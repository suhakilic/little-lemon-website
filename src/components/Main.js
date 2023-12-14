import React from 'react'
import img_1 from "../assets/restauranfood.jpg"
import img_greeksalad from "../assets/greek salad.jpg"
import img_bruchetta from "../assets/bruchetta.svg"
import img_lemondessert from "../assets/lemon dessert.jpg"
import img_restaurant from "../assets/restaurant.jpg"

function Main() {
    return (
        <main>
            <div className='main_1'>
                <div className='main_1_1'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.</p>
                    <button type='button'>Reserve a Table</button>
                </div>
                <div className='main_1_2'>
                    <img src={img_1} alt="restaurant_image" />
                </div>
            </div>
            <div className='specials'>
                <h1>This week specials!</h1>
                <button type='button'>Online Menu</button>
                <div className='cards'>
                    <div>
                        <img src={img_greeksalad} alt='greek_salad'></img>
                        <h4>Greek Salad</h4>
                        <h5>$12.99</h5>
                        <p>Made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, pepper, Greek oregano, and olive oil.</p>
                        <h4 className='delivery'><a href='#'>Order a delivery </a><i class="fa-solid fa-bicycle"></i></h4>
                    </div>
                    <div>
                        <img src={img_bruchetta} alt='greek_salad'></img>
                        <h4>Bruschetta</h4>
                        <h5>$11.99</h5>
                        <p>Bruschetta is an antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.</p>
                        <h4 className='delivery'><a href='#'>Order a delivery </a><i class="fa-solid fa-bicycle"></i></h4>
                    </div>
                    <div>
                        <img src={img_lemondessert} alt='greek_salad'></img>
                        <h4>Lemon Dessert</h4>
                        <h5>$10.99</h5>
                        <p>This unique dessert is a treat for the senses with flecks of lemon zest and fresh rosemary. Just wait till you taste it!</p>
                        <h4 className='delivery'><a href='#'>Order a delivery </a><i class="fa-solid fa-bicycle"></i></h4>
                    </div>
                </div>
            </div>
            <div>
                <h1 id='testimonials_h1'>Testimonials!</h1>
                <div className='testimonials'>

                    <div>
                        <h5>Stephen</h5>
                        <p>Delicious I had the pleasure of dining at Little Lemon recently and I can honestly say it was one of the best meals I've ever had! The food was absolutely delicious - every bite was packed with flavor. I would highly recommend Little Lemon to anyone looking for a great meal.</p>
                    </div>
                    <div>
                        <h5>Francisco</h5>
                        <p>Friendly staff I recently visited Little Lemon and had a great experience. The Greek salad was delicious and the staff were incredibly friendly. I would highly recommend Little Lemon to anyone looking for a great meal and excellent service.</p>
                    </div>
                    <div>
                        <h5>Alex </h5>
                        <p>Little Lemon has made a huge difference!</p>
                    </div>
                    <div>
                        <h5>Kylie</h5>
                        <p>I have tried a lot of similar restaurants and Little Lemon is the best!</p>
                    </div>
                </div>
            </div>
            <div className='about-us'>
                <div className='hero-text'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                        and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                        continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                </div>
                <div className='heroimage'>
                    <img src={img_restaurant} alt='restaurant_hero_image'/>
                </div>
            </div>
        </main>
    )
}

export default Main