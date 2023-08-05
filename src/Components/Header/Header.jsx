import React from 'react';
import Search from './../Search/Search.jsx';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../../Redux/Slices/GeneralSlice.js';
import './Header.css';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  return (
    <header>
      <div className="HeaderTitle">
        <NavLink to="/">
          <h1>Your Catalog</h1>
        </NavLink>
      </div>
      <Search />
      <div className="HeaderForm">
        {isAuth ? (
          <>
            <NavLink to="/create">
              <button type="button" id="create">
                Создать пост
              </button>
            </NavLink>
            <button onClick={onClickLogout} type="button" id="logout">
              Выйти
            </button>
          </>
        ) : (
          <NavLink to="/login">
            <button type="button">Войти</button>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
