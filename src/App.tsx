import React from 'react';
import './styles/dashboard.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import StatsWidget from './components/statesCard';
import ActivityChart from './components/chart';
import OrdersTable from './components/orderTable';
import Feedback from './components/feedback';
import Category from './components/category';
import Profit from './components/profit';
import { DishesIcon, DishMenueIcon, UserGoalIcon } from './components/icons';

interface CategoryItem {
  id: number;
  icon: JSX.Element;
}
interface ChartDataInterface {
  year:string,
  value:number
}
const App: React.FC = () => {
  const ChartData:ChartDataInterface[] = [
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
  const category:CategoryItem[] = [
    { id: 1, icon: <UserGoalIcon /> },
    { id: 2, icon: <DishesIcon /> },
    { id: 3, icon: <DishMenueIcon /> }
];
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <Header />
        <div className='title'>
          <span>Dashboard</span>
        </div>
        <div className="row">
          <div className="column sixty">
            <div className="widgets-row">
              <StatsWidget title="Total Orders" value="75" percentage="3%" icon="🛒" />
              <StatsWidget title="Total Delivered" value="70" percentage="3%" icon="📦" />
              <StatsWidget title="Total Cancelled" value="5" percentage="3%" icon="❌" />
              <StatsWidget title="Total Revenue" value="$12k" percentage="3%" icon="💰" />
            </div>
            <ActivityChart 
              data={ChartData}
            />
            <span>Recent orders</span>
            <OrdersTable />
          </div>
          <div className="column forty">
            <Profit/>
            <br/>
            <Category 
              category={category}
            />
            <br/>
            <div className="bottom-section">
              <Feedback />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
