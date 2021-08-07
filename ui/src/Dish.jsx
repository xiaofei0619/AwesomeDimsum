import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Dish({ dish }) {
  const marginStyle = {
    marginBottom: '7px',
  };
  return (
    <Card className="text-center" style={marginStyle}>
      <Card.Img width="100%" src={dish.image} alt={dish.name} />
      <Card.Body>
        <Card.Subtitle>{dish.name}</Card.Subtitle>
        <Card.Text>{`$${dish.price}`}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <LinkContainer exact to={`/order/${dish.dishId}`}>
          <Button size="sm" variant="light">ADD TO CART</Button>
        </LinkContainer>
      </Card.Footer>
    </Card>
  );
}
