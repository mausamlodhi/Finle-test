import React from 'react';
import '../styles/widgets.css';

interface StatsWidgetProps {
  title: string;
  value: string;
  percentage: string;
  icon: string;
}

const StatsWidget: React.FC<StatsWidgetProps> = ({ title, value, percentage, icon }) => {
  return (
    <div className="widget">
      <span className="icon">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{value} <span>{percentage}</span></p>
      </div>
    </div>
  );
};

export default StatsWidget;
