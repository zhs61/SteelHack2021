import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Wonderful Skiing Resorts in Pittsburgh</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='No.1 Blue Knob All Season Resort'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='No.2 Seven Springs Mountain Resort'
              label='Beatiful Snow View'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='No.3 Mystic Mountain'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='No.4 Hidden Valley'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='No.5 Laurel Mountain'
              label='Family Time'
              path='/http://www.laurelmountainski.com'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
