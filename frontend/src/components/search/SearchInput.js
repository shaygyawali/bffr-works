import { useEffect, useState } from "react";

const SearchInput = ({handleSearch}) => {

    function onChange(e){
        handleSearch(e.target.value)
    }

  return (
    <div>
        <label>Search</label>
        <input> type-"text" onChange={onChange} </input>
    </div>
  );
};

export default SearchInput;
