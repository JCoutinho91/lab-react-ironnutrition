import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [allFood, setAllFood] = useState(foods);
  const [viewForm, setViewFrom] = useState(true);
  const [emptyFood, setEmptyFood] = useState(false);

  const addNewFood = (foodObj) => {
    const updatedAllFood = [foodObj, ...allFood];

    const updatedFoodList = [foodObj, ...foodList];
    setFoodList(updatedFoodList);
    setAllFood(updatedAllFood);
  };

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    setFoodList(foodList.filter((food) => food.name !== name));
  };

  const filterFoodList = (char) => {
    let filteredFood;
    if (char === "All") {
      filteredFood = allFood;
    } else {
      filteredFood = allFood.filter((food) => {
        return food.name[0].toLowerCase() === char.toLowerCase();
      });
    }

    setFoodList(filteredFood);
  };

  const isVisible = () => {
    setViewFrom(!viewForm);
  };

  const showMessage = () => {
    if (foodList === []) {
      return setEmptyFood(true);
    } else {
      setEmptyFood(false);
    }
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <Search filterFoodList={filterFoodList} />
      <AddFoodForm
        addNewFood={addNewFood}
        isVisible={isVisible}
        viewForm={viewForm}
      />
      {foodList === []}
      {foodList.map((food) => {
        return (
          <div>
            <FoodBox
              food={food}
              handleRemoveItem={handleRemoveItem}
              foodList={foodList}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
