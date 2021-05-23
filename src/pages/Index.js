import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Vivek Yanamadula's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <p>
            Hi, my name is Vivek Yanamadula, welcome to my website!
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        and <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
