import './OrderListItem.css';

export default function OrderListItem({orderItem, history}) {
  return (
    <div className="OrderList">
    <div className="OrderListItem">
      <div>
        <div>
          Order Id: <span className="smaller">{orderItem.orderId}</span>
          <div className="smaller">{new Date(orderItem.updatedAt).toLocaleDateString()}</div>
        </div>
        </div>
        <div className="align-rt">
          <div>{orderItem.totalQty}</div>
          <div className="smaller">${(orderItem.orderTotal).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}