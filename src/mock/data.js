import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anmay Gupta | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm ",
  name: 'Anmay Gupta.',
  subtitle: 'Student',
  cta: "Let's go on an adventure together",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: `this
  is a multiline thing`,
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// SKILLS DATA
export const languageData = [
    {
      "name": "HTML5",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      "name": "CSS3",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      "name": "Javascript",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      "name": "Python",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      "name": "R",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
    {
      "name": "Swift",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
      "name": "Ruby",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    },
    {
      "name": "C",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      "name": "C++",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      "name": "Java",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    }
]

// Frameworks
export const frameworkData = [
  {
    "name": "Node.JS",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    "name": "React",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    "name": "Django",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
  },
  {
    "name": "Rails",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
  },
  {
    "name": "Android Studio",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    "name": "Tensorflow",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
]

// Technologies
export const techData = [
  {
    "name": "Linux",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    "name": "Git",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    "name": "Figma",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    "name": "Docker",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  }
]

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
    info: 'I used Bayesian Data Science principles to create an analysis of the ',
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
  btn: "Let's continue the adventure",
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
      name: 'medium',
      url: 'https://medium.com/@anmaygupta1',
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
