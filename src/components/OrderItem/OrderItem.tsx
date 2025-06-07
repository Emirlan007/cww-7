import type {OrderItemProps} from "../../types";

const OrderItem = (props: OrderItemProps) => {
    const {name, count, price, onRemove} = props

    return (
        <div className="items-list">
            <p className="item-name">{name}</p>
            <p className="item-count">x {count}</p>
            <p className="itemPrice">{price * count} KGS</p>
            <button className="remove-btn" onClick={onRemove}>Remove</button>
        </div>
    )

}

export default OrderItem