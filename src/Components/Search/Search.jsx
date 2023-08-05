import React from 'react';
import {searchContext} from "./../../App";

const Search = () => {

  const {searchValue, setSearchValue} = React.useContext(searchContext)

  const searchInput = React.useRef();

  return (
    <div className="HeaderSearch">
      <img width="24px" src="https://i.ibb.co/gdQ2YfM/icons8-search-30.png" />
      <input value={searchValue} onChange={(el) => setSearchValue(el.target.value)} ref={searchInput} placeholder="Ищите по товарам..." />
    </div>
  );
};

export default Search;