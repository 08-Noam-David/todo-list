import React, { Component } from 'react';

import shrew from '../assets/75155_web.jpg';

export class About extends Component {
  render() {
    return (
      <div className="text-center">
        <figure className="figure">
          <img
            src={shrew}
            alt="A brown pygmy shrew sitting on a blanket."
            className="figure-img img-fluid"
          />
          <figcaption className="figure-caption">
            I don't have a picture of myself so here's a pygmy shrew instead.
          </figcaption>
          <br />
          <p>
            I honestly still can't believe I've actually finished it in time,
            let alone style it with such accuracy to the picture.
          </p>
        </figure>
      </div>
    );
  }
}

export default About;
