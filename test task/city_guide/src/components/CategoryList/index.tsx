import React, { useState, useEffect } from 'react';
import { categories } from '../../constants/categories';
import {
  SList, SLi, SAvatar, SBlock
} from "./styled";
import { useAppDispatch } from '../../hooks/redux';
import { setSelectedCategories } from '../../store/reducers/geoObjects';

const CategoryList = () => {

  const [filterCategories, setFilterCategories] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
      setFilterCategories(categories);
  }, [categories]);

  const handleClick = (index: number) => {
    setFilterCategories(
        filterCategories.map((el, i) =>
            i === index ? { ...el, isSelected: !el.isSelected } : el
        )
    );
  };

  useEffect(() => {
    dispatch(setSelectedCategories(filterCategories.filter(el => el.isSelected)));
  }, [filterCategories])

  return (
    <SBlock>
      <SList>
        {filterCategories.map((category, index) => (
          <SLi isSelected={category.isSelected} onClick={() => handleClick(index)}>
            <SAvatar src={category.icon}/> {category.text}    
          </SLi>
        ))}
      </SList>
    </SBlock>
  );
};

export default CategoryList;