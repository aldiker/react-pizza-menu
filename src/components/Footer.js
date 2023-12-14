import { useState } from 'react'
import Order from './Order'

function Footer() {
    const [realTime, setRealTime] = useState(
        new Date().toLocaleTimeString('uk-UA')
    )

    setInterval(() => {
        setRealTime(new Date().toLocaleTimeString('uk-UA'))
    }, 1000)

    const hour = new Date().getHours()
    console.log(hour)

    const openHour = 8
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

    console.log(isOpen)
    console.log(realTime)

    return (
        <footer className='footer'>
            <div>{realTime}</div>
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                <div className='order'>
                    <p>
                        We're happy to welcome you between {openHour}:00 and{' '}
                        {closeHour}:00.
                    </p>
                </div>
            )}
        </footer>
    )
}

export default Footer
