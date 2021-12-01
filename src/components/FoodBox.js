import { Card, Col, Divider, Button } from "antd";

function FoodBox({ food, handleRemoveItem, showMessage }) {
  // const totalCalories = food.calories * food.servings;

  return (
    <>
      <Col>
        <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={food.image} height={60} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {} </b> kcal
          </p>
          <Button name={food.name} onClick={handleRemoveItem} type="primary">
            {" "}
            Delete{" "}
          </Button>
        </Card>
      </Col>
      )
    </>
  );
}

export default FoodBox;
