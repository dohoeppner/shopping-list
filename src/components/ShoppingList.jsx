import { ShoppingListHeader } from "./ShoppingListHeader";
import { ShoppingItemList } from './ShoppingItemList';


export function ShoppingList() {
    return (<>
    <div><ShoppingListHeader/></div>
    <div><ShoppingItemList/></div>
    </>);

}