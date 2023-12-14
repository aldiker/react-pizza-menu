function Footer() {
    const hour = new Date().getHours()
    console.log(hour)

    const openHour = 8
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen)

    const realTime = new Date().toLocaleTimeString('uk-UA')
    console.log(realTime)

    return <footer className='footer'>{realTime}. We're currentlt open</footer>
}

export default Footer
