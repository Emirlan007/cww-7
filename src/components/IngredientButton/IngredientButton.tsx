import type {IngredientButtonProps} from "../../types";

const IngredientButton = ({ ingredients, onAdd }: IngredientButtonProps) => {
    return (
        <>
            {ingredients.map(INGRED => (
                <button
                    key={INGRED.name}
                    className="menu-button"
                    onClick={() => onAdd(INGRED.name)}
                >
                    <img src={INGRED.image} alt={INGRED.name} className="item-image"/>
                    <div className="itemNamePrice">
                        <p className="item-price">{INGRED.name}</p>
                        <p className="item-price">{INGRED.price} KGS</p>
                    </div>
                </button>
            ))}
        </>
    )
}

export default IngredientButton;