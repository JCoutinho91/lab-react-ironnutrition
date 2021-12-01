import { Divider, Input } from "antd";
import { useState } from "react";

function AddFoodForm({ addNewFood, isVisible, viewForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    // Prevent the page reload (default behavior of the browser)
    event.preventDefault();

    // Get the data from the state/inputs
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    console.log(newFood);

    //Here I add new food
    addNewFood(newFood);

    //Clear INPUT
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return viewForm ? (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="image" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
      <button onClick={isVisible} type="button">
        Hide Form
      </button>
    </form>
  ) : (
    <button onClick={isVisible} type="submit">
      Show Form
    </button>
  );
}

export default AddFoodForm;
