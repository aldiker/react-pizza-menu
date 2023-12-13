import pizzaData from '../data/data'
import Pizza from './Pizza'

function Menu() {
    // const pizza = pizzaData[0]

    return (
        <main className='menu'>
            <h2>Our menu</h2>
            {/* <Pizza pizza={pizza} /> */}
            {pizzaData.map((pizza) => (
                <Pizza pizza={pizza} />
            ))}
        </main>
    )
}

export default Menu
