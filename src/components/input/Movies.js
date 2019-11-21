import React from 'react';
import Movie from './items/Movie';
import spaceOdyssey from '../../../documents/movies/spaceOdyssey.json';
import barryLyndon from '../../../documents/movies/barryLyndon.json';
import boogieNights from '../../../documents/movies/boogieNights.json';
import clockwork from '../../../documents/movies/clockwork.json';
import lolita from '../../../documents/movies/lolita.json';
import enterTheVoid from '../../../documents/movies/enterTheVoid.json';
import intoTheWild from '../../../documents/movies/intoTheWild.json';
import killBill2 from '../../../documents/movies/killBill2.json';
import mononoke from '../../../documents/movies/mononoke.json';
import primer from '../../../documents/movies/primer.json';
import pulpFiction from '../../../documents/movies/pulpFiction.json';
import reservoirDogs from '../../../documents/movies/reservoirDogs.json';
import placeBeyondPines from '../../../documents/movies/placeBeyondPines.json';
import spirited from '../../../documents/movies/spirited.json';
import thereWillBeBlood from '../../../documents/movies/thereWillBeBlood.json';
import theWall from '../../../documents/movies/theWall.json';

const Movies = () => (
  <div className="container">
    <Movie source={spaceOdyssey} />
    <Movie source={mononoke} />
    <Movie source={clockwork} />
    <Movie source={spirited} />
    <Movie source={intoTheWild} />
    <Movie source={barryLyndon} />
    <Movie source={boogieNights} />
    <Movie source={lolita} />
    <Movie source={enterTheVoid} />
    <Movie source={reservoirDogs} />
    <Movie source={thereWillBeBlood} />
    <Movie source={pulpFiction} />
    <Movie source={primer} />
    <Movie source={killBill2} />
    <Movie source={placeBeyondPines} />
    {/* <Movie source={theWall} /> */}
  </div>
);

export default Movies;
