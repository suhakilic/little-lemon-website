import img_restaurant from "../assets/restaurant.jpg"

function Main4(){
    return(
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
                    <img src={img_restaurant} alt='restaurant_hero_image' />
                </div>
            </div>
    )
}

export default Main4