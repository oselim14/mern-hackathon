import './OrderListItem.css';

export default function OrderListItem({orderItem, history}) {
  return (
    <div className="OrderListItem">
      
        <div>{orderItem.updatedAt}</div>

    </div>
  );
}