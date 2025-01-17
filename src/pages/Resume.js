import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Awards from '../components/Resume/Awards';
import Languages from '../components/Resume/Languages';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import awards from '../data/resume/awards';
import languages from '../data/resume/languages';

const sections = [
  'Education',
  'Experience',
  'Awards',
  'Skills',
  'Courses',
  'Languages',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Vivek Yanamadula's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Awards data={awards} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <Languages data={languages} />
      <References />

    </article>
  </Main>
);

export default Resume;
