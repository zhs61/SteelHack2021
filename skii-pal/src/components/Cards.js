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
              path="https://blueknob.com/"
            />
            <CardItem
              src='images/img-2.jpg'
              text='No.2 Seven Springs Mountain Resort'
              label='Beatiful Snow View'
              path="https://www.7springs.com/?utm_source=ODMG&utm_medium=Search&utm_campaign=Branded"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='No.3 Mystic Mountain'
              label='Mystery'
              path="https://www.nemacolin.com/experiences/mystic-mountain/"
            />
            <CardItem
              src='images/img-4.jpg'
              text='No.4 Hidden Valley'
              label='Adventure'
              path="https://www.hiddenvalleyski.com/?ef_id=CjwKCAiAg8OBBhA8EiwAlKw3kuw6vKDcDxrdxlFUx88Jrfu30WLGXzH41EBUmvuwyAyp_Ho1rNJzXRoCzRcQAvD_BwE:G:s&s_kwcid=AL!11600!3!498746840055!e!!g!!hidden%20valley%20resort%20missouri!11504710487!110939217303&CMPID=PPC&gclid=CjwKCAiAg8OBBhA8EiwAlKw3kuw6vKDcDxrdxlFUx88Jrfu30WLGXzH41EBUmvuwyAyp_Ho1rNJzXRoCzRcQAvD_BwE"
            />
            <CardItem
              src='images/img-5.jpg'
              text='No.5 Laurel Mountain'
              label='Family Time'
              path="http://www.laurelmountainski.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
