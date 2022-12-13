import { useEffect, useState } from "react";
import "./Search.css";

const SearchInput = ({ handleSearch }) => {
  function onChange(e) {
    handleSearch(e.target.value);
  }

  return (
    <div>
      <h2 class="subtitle" style={{ marginTop: 200, alignContent: "center" }}>
        Search for Friends
      </h2>
      <input class="searchbar" type="text" onChange={onChange} />
    </div>
  );
};

export default SearchInput;
