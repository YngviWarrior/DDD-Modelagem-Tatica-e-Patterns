import Custumer from "./entity/customer";
import Address from "./entity/address";
import OrderItem from "./entity/order_item";
import Order from "./entity/order";

let custumer = new Custumer("123", "Igor Silva")
const address =  new Address("Rua dois", 2, "12345-678", "Minas Gerais")

custumer.Address = address;
custumer.activate();

const item1 = new OrderItem("1", "Item 1", 10)
const item2 = new OrderItem("2", "Item 2", 15)

//Cliente vai ID e itens vai objeto.
const order = new Order("1", custumer.id, [item1, item2])