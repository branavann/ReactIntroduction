{/* Importing pre-requiste packages */}

import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const showBackground = true;

const background = (
  <img className='background' alt='ocean' src='/images/ocean.jpg' />
);

{/* Creating an array of animal images from animals.js */}

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact} />
  )
}

{/* Displays information to the user */}

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {showBackground && background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
)

ReactDOM.render(animalFacts, document.getElementById('root'));

{/* Selecting a random fact based on the user's selection */}

function displayFact(e) {
  const fact = animals[e.target.alt].facts;
  const randNum = Math.floor(Math.random() * fact.length);
  const funFact = fact[randNum];
  return document.getElementById('fact').innerHTML = funFact;
}
