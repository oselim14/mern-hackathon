import './OrderListItem.css';

export default function OrderListItem({order, user}) {
  return (
    <div className="OrderListItem">
      
        <div>{order}</div>

    </div>
  );
}