import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';


export default function OrderHistoryPage({ user, setUser, order }) {

    ordersAPI.getCart();

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <center>
        <OrderList order={order} user={user}/>
        <OrderDetail />
      </center>

    </main>
  );
}