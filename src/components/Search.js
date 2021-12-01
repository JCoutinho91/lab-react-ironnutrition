import { useState } from "react";
import { Divider, Input } from "antd";

function Search({ filterFoodList }) {
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSearch = (event) => {
    setFirstLetter(event.target.value);

    filterFoodList(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={firstLetter} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
