import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSort } from './../../Redux/Slices/GeneralSlice.js';
import './Sort.css';

const sortCategories = ['Всё', 'Верх', 'Низ', 'Юбки', 'Обувь'];

const Sort = () => {
  const sortNumber = useSelector((state) => state.general.sort);

  const dispatch = useDispatch();

  return (
    <nav className="Sort">
      <ul className="SortCatalog">
        {sortCategories.map((el, index) => (
          <li
            key={index}
            className={sortNumber.value == index ? 'active' : ''}
            onClick={() => {
              dispatch(changeSort({ value: index }));
            }}
          >
            {el}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sort;
