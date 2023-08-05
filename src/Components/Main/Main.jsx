import React from 'react';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../Redux/Slices/GeneralSlice';
import Skeleton from './../Skeleton/Skeleton';
import './Main.css';
import Pagination from '../Pagination/Pagination';
import Sort from '../Sort/Sort.jsx';
import { searchContext } from '../../App';
import qs from 'qs';

const Main = () => {
  const dispatch = useDispatch();

  const { searchValue, setSearchValue } = React.useContext(searchContext);

  const fetched = useSelector((state) => state.general.posts);

  const [currentPage, setCurrentPage] = React.useState('');

  const [countPages, setCountPages] = React.useState('');

  const isPostsLoading = fetched.status === 'loading';
  const posts = fetched.items;

  const [isEmpty, setIsEmpty] = React.useState(false)

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [currentPage, searchValue]);

  React.useEffect(() => {
    if (posts.length == 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [posts]);

  return (
    <div className="Main">
      <div className="MainSettings">
        <Sort />
      </div>
      <ul className="MainDesk">
        {isPostsLoading ? (
          [...Array(6)].map((el, index) => (
            <li key={index}>
              <Skeleton />
            </li>
          ))
        ) : isEmpty ? (
          <div className="nonePosts">
            <p id="didnt">ПОСТОВ НЕ НАШЛОСЬ</p>
            <p id="create">СОЗДАЙТЕ ПОСТ</p>
          </div>
        ) : (
          posts.map((el, index) => (
            <li key={index}>
              <Post {...el} />
            </li>
          ))
        )}
      </ul>
      <div className="MainPagination">
        <Pagination
          count={countPages}
          setCurrentPage={(el) => setCurrentPage(el)}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Main;
