import React from 'react';
import './card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Our Program!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=2000%2C1500&ssl=1'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Math'
              path='/program'
            />
            <CardItem
              src='https://img.freepik.com/vecteurs-libre/concept-equipement-sport_1284-13034.jpg?w=2000'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='sport'
              path='/program'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.coventry.ac.uk/globalassets/media/global/08-new-research-section/fcs/fcs_openday2022_767x460.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Physics'
              path='/program'
            />
            <CardItem
              src='https://img.freepik.com/vecteurs-libre/fond-education-scientifique-dessine-main_23-2148499325.jpg?w=2000'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Science'
              path='/program'
            />
            <CardItem
              src='https://www.sciencenews.org/wp-content/uploads/2023/03/032723_ec_language-brain-differences_feat.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Language'
              path='/program'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;