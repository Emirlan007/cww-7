import OrderItem from "../OrderItem/OrderItem.tsx";
import type {OrderDetailsProps} from "../../types";

const OrderDetails = (props: OrderDetailsProps) => {
    const {ingredients, deleteIngredient, total} = props

    const selectedIngredients = ingredients.filter(ing => ing.count > 0);

    return (
        <div className="order-details">
            <h3>Order Details</h3>
            {selectedIngredients.length === 0 ? (
                    <p className="empty-cart">Order is empty! <br/> Please add some items!</p>
                ) :
                selectedIngredients.map(ingred => (
                    <OrderItem
                        key={ingred.name}
                        name={ingred.name}
                        count={ingred.count}
                        price={ingred.price}
                        onRemove={() => deleteIngredient(ingred.name)}/>
                ))
            }
            {total > 0 ? <p className="total-price"><b>Total price:</b> {total}</p> : null}
        </div>
    )
}

export default OrderDetails;