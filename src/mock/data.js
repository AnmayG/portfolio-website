import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm ",
  name: 'Anmay Gupta.',
  subtitle: 'High School Student',
  cta: "Let's go on an adventure together",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'primer.PNG',
    title: "Preceptor's Primer for Bayesian Data Science",
    info: 'I worked with a former Harvard professor to teach high school and college students how to use R for Bayesian data science analysis. This allowed me to gain experience in a professional environment as well as improve my skills in using the R language to work with data and data science.',
    info2:
      'Through this experience, I gained skills in R, Markdown, Git, and Bayesian Data Science',
    url: 'https://ppbds.github.io/primer/index.html',
    repo: 'https://github.com/AnmayG/primer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3d-print.PNG',
    title: '3D Print Analysis',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/AnmayG/3D_Print_Analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mircore.PNG',
    title: 'miRCore Data Camp',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/AnmayG/UMich-R-Camp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'geocache.jpg',
    title: 'Geocaching App',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/AnmayG/GeocachingProject',
  },
  {
    id: nanoid(),
    img: 'priceme.png',
    title: 'PriceMe',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/AnmayG/PriceMe',
  },
  {
    id: nanoid(),
    img: 'robotics.PNG',
    title: 'Modern Robotics',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me?',
  btn: "Let's get started",
  email: 'anmaygupta01@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackexchange.com/users/23901107/anmayg',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/anmay-gupta',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AnmayG',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
