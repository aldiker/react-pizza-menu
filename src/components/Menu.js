import pizzaData from '../data/data'
import Pizza from './Pizza'

function Menu() {
    return (
        <main className='menu'>
            <h2>Our menu</h2>
            <ul className='pizzas'>
                {pizzaData.map((pizza, index) => (
                    <Pizza pizza={pizza} key={index} />
                ))}
            </ul>
        </main>
    )
}

export default Menu
