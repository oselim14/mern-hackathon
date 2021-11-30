import './OrderList.css';
import LineItem from '../LineItem/LineItem';
import OrderListItem from '../OrderListItem/OrderListItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderList({ orders, addHistory, user }) {

    const items = orders.map(item =>
        <OrderListItem
          key={item._id}
          orderItem={item}
          addHistory={addHistory}
        />
        );
    return (
        <div>
            {items}
        </div>
    )
}