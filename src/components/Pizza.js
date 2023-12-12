function Pizza(props) {
    const { pizza } = props

    return (
        <div>
            <img src={pizza.photoName} alt='{pizza.name}' />
            <h1>{pizza.name}</h1>
            <p>{pizza.ingredients}</p>
        </div>
    )
}

export default Pizza
