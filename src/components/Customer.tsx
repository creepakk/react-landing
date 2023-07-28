import { ICustomer } from "../models"

interface CustomerProps {
    data: ICustomer
}

export function Customer({ data }: CustomerProps) {
    return (
        <div className="review_block rev_first flex">
            <img src={data.image} alt="" />
            <h6>{data.name}</h6>
            <p>{data.text}</p>
        </div>
    )
}