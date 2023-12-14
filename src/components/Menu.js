import pizzaData from '../data/data'
import Pizza from './Pizza'

function Menu() {
    const pizzas = pizzaData
    const numPizzas = pizzas.length

    return (
        <main className='menu'>
            <h2>Our menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzaData.map((pizza, index) => (
                            <Pizza pizza={pizza} key={index} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We're still working on our menu. Please come back later ...
                </p>
            )}
        </main>
    )
}

export default Menu
