import React from 'react';
import '../styles/table.css';

interface Order {
  id: number;
  customer: string;
  orderNo: string;
  amount: string;
  status: string;
  userImage: string;
}

const OrdersTable: React.FC = () => {
  const orders: Order[] = [
    { 
      id: 1, 
      customer: 'Wade Warren', 
      orderNo: '154478256', 
      amount: '$124.00', 
      status: 'Delivered',
      userImage: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    { 
      id: 2, 
      customer: 'Jane Cooper', 
      orderNo: '48967856', 
      amount: '$365.02', 
      status: 'Delivered',
      userImage: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    { 
      id: 3, 
      customer: 'Guy Hawkins', 
      orderNo: '78095215', 
      amount: '$45.88', 
      status: 'Cancelled',
      userImage: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
  ];

  const getStatusClass = (status: string): string => {
    switch (status) {
      case 'Delivered':
        return 'status-delivered';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return 'status-pending';
    }
  };

  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Order No.</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>
              <div className="user-info">
                <img src={order.userImage} alt={order.customer} className="user-image" />
                <span className="customer-name">&nbsp;&nbsp;{order.customer}</span>
              </div>
              </td>
            <td>{order.orderNo}</td>
            <td>{order.amount}</td>
            <td className={`status-pill ${getStatusClass(order.status)}`}><span className='span-status-pill'>{order.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
