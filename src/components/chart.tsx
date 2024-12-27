import React from 'react';
import { Column, ColumnConfig } from '@ant-design/charts';
import { Select } from 'antd';

const { Option } = Select;
interface ChartDataInterface {
  year:string,
  value:number
}
interface ChartInterface {
  data:Array<ChartDataInterface>
}
const BarChart: React.FC<ChartInterface> = (props) => {
  const config: ColumnConfig = {
    data:props.data,
    xField: 'year',
    yField: 'value',
    columnWidthRatio: 0.8,
    label: {
      position: 'middle',
      style: {
        fill: '#ffffff',
        opacity: 0.6,
      },
    },
  };

  const handleDropdownChange = (value: string) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <div style={{ padding: '20px', background: '#2b2c3f', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Activity</h2>
        <Select
          defaultValue="Yearly"
          style={{ width: 150 }}
          onChange={handleDropdownChange}
        >
          <Option value="option1">Monthly</Option>
          <Option value="option2">Weekly</Option>
          <Option value="option3">Yearly</Option>
        </Select>
      </div>
      <Column {...config} />
    </div>
  );
};

export default BarChart;
