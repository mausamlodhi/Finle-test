import React from 'react';
import '../styles/category.css';
import { ArrowIcon } from './icons';

interface CategoryItem {
    id: number;
    icon: JSX.Element;
  }
interface CategoryInterface {
    category:Array<CategoryItem>,
}
const Category: React.FC<CategoryInterface> = (props) => {
    
    return (
        <div className="category">
            <ul>
                {props.category.map(category => (
                    <>
                        <li key={category.id} className="category-item">
                            <div  className="category-user">
                                {category.icon}
                            </div>
                            <div key={category.id} className='icons-category'><ArrowIcon /></div>
                        </li>
                        <br /></>
                ))}
            </ul>
        </div>
    );
};

export default Category;
