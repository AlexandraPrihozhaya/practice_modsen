import React, { useState } from 'react';
import { categories } from '../../constants/categories';

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className='cat'>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={index === selectedCategory ? 'selected' : ''}
            onClick={() => handleCategoryChange(index)}
            style={{ cursor : 'pointer' }}
          >
          <>
            <img src={category.icon} alt={category.text} />
            {category.text}
          </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;