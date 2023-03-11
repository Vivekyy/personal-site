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
            To My Personal Website!
          </p>
        </div>
      </header>
      <p> Please feel free to <Link to="/about">read more about me</Link>,
        check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        and <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
      <p style={{ fontSize: 14 }}>
        Last updated: 3/11/2023
      </p>
    </article>
  </Main>
);

export default Index;
