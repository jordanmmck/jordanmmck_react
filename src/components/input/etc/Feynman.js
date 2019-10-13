import React from 'react';

const Feynman = () => (
  <div className="feynman">
    <div className="feynman__portrait">
      <img className="feynman__portrait--1" src="/images/people/feynman-young.jpg" alt="" />
      <img className="feynman__portrait--2" src="/images/people/feynman-lecture-3.jpg" alt="" />
      <img className="feynman__portrait--3" src="/images/people/feynman-lecture-2.jpg" alt="" />
    </div>
    <div className="feynman__body">
      <h2 className="feynman__title">Richard Feynman</h2>
      <p className="feynman__text">
        Man is something that should be overcome. What have you done to overcome him? All creatures
        hitherto have created something beyond themselves: and do you want to be the ebb of this
        great tide, and return to the animals rather than overcome man? Man is something that should
        be overcome. What have you done to overcome him? All creatures hitherto have created
        something beyond themselves: and do you want to be the ebb of this great tide, and return to
        the animals rather than overcome man?
      </p>
    </div>
  </div>
);

export default Feynman;
