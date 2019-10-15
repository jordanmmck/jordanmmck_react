import React from 'react';
import Movie from './Movie';
import spaceOdyssey from '../../../documents/movies/spaceOdyssey.json';
import alphaGo from '../../../documents/movies/alphaGo.json';
import barryLyndon from '../../../documents/movies/barryLyndon.json';
import boogieNights from '../../../documents/movies/boogieNights.json';
import clockwork from '../../../documents/movies/clockwork.json';
import lolita from '../../../documents/movies/lolita.json';
import enterTheVoid from '../../../documents/movies/enterTheVoid.json';
import freeSolo from '../../../documents/movies/freeSolo.json';
import intoTheWild from '../../../documents/movies/intoTheWild.json';
import jiro from '../../../documents/movies/jiro.json';
import killBill1 from '../../../documents/movies/killBill1.json';
import killBill2 from '../../../documents/movies/killBill2.json';
import mononoke from '../../../documents/movies/mononoke.json';
import primer from '../../../documents/movies/primer.json';
import pulpFiction from '../../../documents/movies/pulpFiction.json';
import reservoirDogs from '../../../documents/movies/reservoirDogs.json';
import senna from '../../../documents/movies/senna.json';
import spirited from '../../../documents/movies/spirited.json';
import thereWillBeBlood from '../../../documents/movies/thereWillBeBlood.json';

const Movies = () => (
  <div className="container">
    <Movie source={spaceOdyssey} />
    <Movie source={spirited} />
    <Movie source={clockwork} />
    <Movie source={mononoke} />
    <Movie source={intoTheWild} />
    <Movie source={barryLyndon} />
    <Movie source={boogieNights} />
    <Movie source={lolita} />
    <Movie source={enterTheVoid} />
    <Movie source={reservoirDogs} />
    <Movie source={thereWillBeBlood} />
    <Movie source={pulpFiction} />
    <Movie source={primer} />
    {/* <Movie source={killBill1} /> */}
    <Movie source={killBill2} />
    <Movie source={alphaGo} />
    <Movie source={freeSolo} />
    <Movie source={jiro} />
    <Movie source={senna} />
  </div>
);

export default Movies;
