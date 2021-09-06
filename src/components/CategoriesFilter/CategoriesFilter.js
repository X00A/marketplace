import { Card, Checkbox, Divider } from "semantic-ui-react";

function CategoriesFilter({ categories }) {
  return (
    <Card
      color='blue'
      style={{
        position: "absolute",
        top: "15px",
        left: "-300px",
        maxWidth: "280px",
      }}>
      <Card.Content>
        <Card.Header>Filtru categorii</Card.Header>
      </Card.Content>
      <Card.Content>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <Checkbox label={category.name} key={index} />;
              <Divider hidden />
            </div>
          );
        })}
      </Card.Content>
    </Card>
  );
}

export default CategoriesFilter;
