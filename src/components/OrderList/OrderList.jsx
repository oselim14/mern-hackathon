import './OrderList.css';
import LineItem from '../LineItem/LineItem';
import OrderListItem from '../OrderListItem/OrderListItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderList({ order, handleChangeQty, handleCheckout }) {
    return (
        <OrderListItem />
    )
}