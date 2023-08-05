import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from './../../Redux/Slices/GeneralSlice.js';
import './Filter.css';

const filterCategories = [
  { name: 'популярности (DESC)', property: 'rating' },
  { name: 'популярности (ASC)', property: '-rating' },
  { name: 'названию (DESC)', property: 'title' },
  { name: 'названию (ASC)', property: '-title' },
  { name: 'дате (DESC)', property: 'date' },
  { name: 'дате (ASC)', property: '-date' },
];

const Filter = () => {
  const dispatch = useDispatch();

  const filterData = useSelector((state) => state.general.filter);

  const [isModal, setIsModal] = React.useState(false);

  return (
    <div className="Filter">
      <div className="FilterMenu">
        <p onClick={() => setIsModal(!isModal)}>
          Фильтрация товаров по <span>{filterData.name}</span>
        </p>
      </div>
      {isModal ? (
        <nav className="FilterModal">
          <ul className="FilterModalCatalog">
            {filterCategories.map((el, index) => (
              <li
                className={el.name == filterData.name ? "active" : ""}
                onClick={() => {
                  dispatch(changeFilter({
                    name: filterCategories[index].name,
                    property: filterCategories[index].property
                  }));
                  setIsModal(!isModal)
                }}
                key={index}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        ''
      )}
    </div>
  );
};

export default Filter;
