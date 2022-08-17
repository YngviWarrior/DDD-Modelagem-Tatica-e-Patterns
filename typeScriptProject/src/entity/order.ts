import Address from "./address";
import OrderItem from "./order_item";

export default class Order {

    _id: string;
    _custumerId: string; // Apenas a referência.
    _items: OrderItem[];

    constructor(id: string, custumerId: string, items: OrderItem[]) {
        this._id = id;
        this._custumerId = custumerId;
        this._items = items;
    }

    validate() {
        if(this._custumerId.length === 0){
            throw new Error("CustumerId is Required");            
        }
        if(this._id.length === 0){
            throw new Error("Id is Required");            
        }
    }
}