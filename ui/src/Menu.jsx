import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import store from './store.js';
import Dish from './Dish.jsx';

function Menu() {
  const dishes = store.menuData;
  const steamedDishes = dishes.filter(dish => dish.category === 'steamed');
  const bakedDishes = dishes.filter(dish => dish.category === 'baked');
  const friedDishes = dishes.filter(dish => dish.category === 'fried');
  const panFriedDishes = dishes.filter(dish => dish.category === 'pan-fried');
  const riceRollCongeeDishes = dishes.filter(dish => dish.category === 'rice roll-congee');
  const dessertsDishes = dishes.filter(dish => dish.category === 'desserts');

  const steamedCards = steamedDishes.map(dish => (
    <div key={dish.dishId} className="col-sm-6 col-md-4 col-lg-2 d-flex align-self-stretch">
      <Dish dish={dish} />
    </div>
  ));
  const bakedCards = bakedDishes.map(dish => (
    <div key={dish.dishId} className="col-sm-6 col-md-4 col-lg-2 d-flex align-self-stretch">
      <Dish dish={dish} />
    </div>
  ));
  const friedCards = friedDishes.map(dish => (
    <div key={dish.dishId} className="col-sm-6 col-md-4 col-lg-2 d-flex align-self-stretch">
      <Dish dish={dish} />
    </div>
  ));
  const panFriedCards = panFriedDishes.map(dish => (
    <div key={dish.dishId} className="col-sm-6 col-md-4 col-lg-2 d-flex align-self-stretch">
      <Dish dish={dish} />
    </div>
  ));
  const riceRollCongeeCards = riceRollCongeeDishes.map(dish => (
    <div key={dish.dishId} className="col-sm-6 col-md-4 col-lg-2 d-flex align-self-stretch">
      <Dish dish={dish} />
    </div>
  ));
  const dessertsCards = dessertsDishes.map(dish => (
    <div key={dish.dishId} className="col-sm-6 col-md-4 col-lg-2 d-flex align-self-stretch">
      <Dish dish={dish} />
    </div>
  ));

  return (
    <div className="container">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            STEAMED 蒸
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="row">
                {steamedCards}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            BAKED 焗
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="row">
                {bakedCards}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            FRIED 酥炸
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="row">
                {friedCards}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            PAN-FRIED 香煎
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div className="row">
                {panFriedCards}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            RICE ROLL-CONGEE 肠粉粥
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <div className="row">
                {riceRollCongeeCards}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            DESSERTS 甜品
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <div className="row">
                {dessertsCards}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Menu;
