function Pizza(props) {
    const { pizza } = props

    return (
        <li className='pizza'>
            <img src={pizza.photoName} alt='{pizza.name}' />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.price}</span>
            </div>
        </li>
    )
}

export default Pizza
