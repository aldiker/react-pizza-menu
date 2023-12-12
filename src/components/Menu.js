import pizzaData from '../data/data'
import Pizza from './Pizza'

function Menu() {
    const pizza = pizzaData[0]

    return (
        <div>
            <h2>Our menu</h2>
            <Pizza pizza={pizza} />
            <Pizza pizza={pizza} />
            <Pizza pizza={pizza} />
            <Pizza pizza={pizza} />
        </div>
    )
}

export default Menu
