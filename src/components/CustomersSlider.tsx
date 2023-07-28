import { useState } from "react"
import { customersData as data } from "../data"
import { Customer } from "./Customer"

export function CustomersSlider() {
    const [customers, setCustomers] = useState(data.slice(0, 3))

    const arrowLeftHandler = () => {
        data.unshift(data[data.length - 1])
        data.pop()
        setCustomers(data.slice(0, 3))
    }
    const arrowRightHandler = () => {
        data.push(data[0])
        data.shift()
        setCustomers(data.slice(0, 3))
    }

    return (
        <>
            <button className="reviews_button_arrow arrow_left"
                onClick={arrowLeftHandler}></button>
            <button className="reviews_button_arrow arrow_right"
                onClick={arrowRightHandler}></button>
            {customers.map(c => <Customer data={c} key={c.name} />)}
        </>
    )
}