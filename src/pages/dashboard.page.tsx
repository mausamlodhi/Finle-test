// pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import StatsCard from '../components/statesCard';
import ActivityChart from '../components/chart';
import OrdersTable from '../components/orderTable';

const Dashboard:React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', background: '#1f1f2e', color: 'white' }}>
        <Header />
        <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
          <StatsCard title="Total Orders" value="75" color="green" />
          <StatsCard title="Total Delivered" value="70" color="blue" />
          <StatsCard title="Total Cancelled" value="5" color="red" />
        </div>
        <ActivityChart />
        <OrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;
