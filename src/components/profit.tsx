import React from 'react';
import { Flex, Progress } from 'antd';

const Profit: React.FC = () => {
    return <>
        <div className="category">
            <ul>
                <li className="category-item">
                    <div className="category-user">
                        <span className='profit-font' >$6579.41</span>
                    </div>
                    <div className='icons-category'>
                        <Flex vertical gap="middle">
                            <Flex gap="small" wrap>
                                <Progress
                                    showInfo={true}
                                    size={60}
                                    type="circle"
                                    percent={75}
                                    strokeColor="#1890ff"
                                    trailColor="#ddd"
                                    format={(percent) => (
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>{percent}%</span>
                                    )}
                                />
                            </Flex>
                        </Flex>
                    </div>
                </li>
                <li className="profit-item">
                    <div className="category-user">
                        <p><span className='profit'>3%</span></p>
                    </div>
                    <div className='profit-endy'>
                        <span>The profit has been</span>
                    </div>
                </li>
                <br />
            </ul>
        </div>
    </>
}

export default Profit;