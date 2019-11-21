import React from 'react';
import Art from './items/Art';

const Arts = () => (
  <div className="container">
    <Art
      artist="Albert Bierstadt"
      title="Storm in the Mountains"
      image="/images/art/stormInMountains.jpg"
    />
    <Art
      artist="Ivan Shishkin"
      title="A Pine Forest. Mast-Timber forest in Viatka Province"
      image="/images/art/pineForest.jpg"
    />
  </div>
);
export default Arts;
