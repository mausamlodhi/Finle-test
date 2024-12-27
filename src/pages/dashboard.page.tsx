// pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import ActivityChart from '../components/chart';
import OrdersTable from '../components/orderTable';
import StatsWidget from '../components/statesCard';

interface ChartDataInterface {
  year: string,
  value: number
}
const Dashboard: React.FC = () => {
  const ChartData: ChartDataInterface[] = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', background: '#1f1f2e', color: 'white' }}>
        <Header />
        <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
          <StatsWidget title="Total Orders" value="75" percentage="3%" icon="🛒" />
          <StatsWidget title="Total Delivered" value="70" percentage="3%" icon="📦" />
          <StatsWidget title="Total Cancelled" value="5" percentage="3%" icon="❌" />
          <StatsWidget title="Total Revenue" value="$12k" percentage="3%" icon="💰" />
        </div>
        <ActivityChart
          data={ChartData}
        />
        <OrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;
