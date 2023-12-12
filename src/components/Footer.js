function Footer() {
    const hour = new Date().getHours()
    console.log(hour)

    const openHour = 8
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen)

    return (
        <footer>{new Date().toLocaleTimeString}. We're currentlt open</footer>
    )
}

export default Footer
