export interface Ingredient {
    name: string;
    price: number;
    image: string;
}

export interface SelectedIngredient {
    name: string;
    count: number;
    price: number;
}

interface IngredientButtonProps {
    ingredients: Ingredient[];
    onAdd: (name: string) => void;
}

interface OrderItemProps {
    name: string;
    count: number;
    price: number;
    onRemove: () => void;
}

interface OrderDetailsProps {
    ingredients: SelectedIngredient[];
    deleteIngredient: (name: string) => void;
    total: number;
}