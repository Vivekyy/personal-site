// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Qiskit',
    competency: 4,
    category: ['Quantum Computing', 'Python & Libraries'],
  },
  {
    title: 'PennyLane',
    competency: 3,
    category: ['Quantum Computing', 'Python & Libraries', 'Currently Learning'],
  },
  {
    title: 'TorchQuantum',
    competency: 4,
    category: ['Quantum Computing', 'Python & Libraries'],
  },
  {
    title: 'Javascript/Typescript',
    competency: 3,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Coding Tools'],
  },
  {
    title: 'SQL',
    competency: 1,
    category: ['Web Development', 'Programming Languages', 'Currently Learning'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Coding Tools'],
  },
  {
    title: 'Vim',
    competency: 5,
    category: ['Coding Tools'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Python & Libraries'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Machine Learning', 'Python & Libraries'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages', 'Python & Libraries'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Programming Languages', 'Currently Learning'],
  },
  {
    title: 'C',
    competency: 5,
    category: ['Programming Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science', 'Python & Libraries'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Science', 'Python & Libraries'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Machine Learning', 'Python & Libraries'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'SPSS',
    competency: 2,
    category: ['Data Science', 'Programming Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  // '#515dd4',
  // '#40494e',
  '#e47272',
  '#37b1f5',
  // '#6968b3',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
