/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Frontend Web Developer',
    position: 'Jr',
    url: 'https://portfolio-lucaspiritini.vercel.app/',
    startDate: '2022-08-01',
    summary: 'As a frontend web developer, I specialize in building web applications using the React JavaScript library. React is a popular open-source frontend library developed by Facebook that allows the creation of dynamic, interactive user interfaces for web applications.',
    highlights: [
      'Develop and maintain user interfaces using JavaScript and ReactJS.',
      'Collaborate with cross-functional teams to translate project requirements into technical solutions.',
      'Implement scalable front-end architecture and infrastructure.',
      'Integrate with back-end APIs and services.',
      'Optimize application performance and ensure robustness and security.',
      'Troubleshoot and debug complex issues to identify and resolve root causes.',
      'Understanding of asynchronous programming and RESTful API design principles.',
      'Stay up-to-date with emerging technologies and trends relevant to front-end development.',
    ],
  },
  {
    name: 'Fullstack Web Developer',
    position: 'Trainee',
    url: '/',
    startDate: '2022-01-01',
    summary: 'As a full-stack web developer, I have the skills and expertise to work on both the frontend and backend of web applications. I am capable of handling the entire web development process, from designing the user interface to managing server-side logic and databases.',
    highlights: [
      'Relational database software development experience.',
      'Experience with data architecture, data modeling, database design and data warehousing.',
      'Experience across the whole Software Development Life Cycle.',
      'Familiar with development tools such as Git, Trello, Vercel, AWS.',
      'Emerging knowledge of software applications and technical processes within a technical discipline (e.g., cloud, machine learning, mobile).',
    ],
  },
  {
    name: 'Centro Sotelo',
    position: 'Ssr',
    url: '/',
    startDate: '2019-01-01',
    summary: 'General manager at medical office',
    highlights: [
      'Reception and main point of contact for patients and visitors.',
      'Responsible for emails, schedules, and phone calls.',
      'Handling agreements and billing for health insurance companies and prepaid medical companies.',
      'Processing payments to employed healthcare professionals.',
      'Invoicing and managing financial accounts.',
      'Selection of healthcare professionals for recruitment.',
    ],
  },
  {
    name: 'Tesis S.R.L.',
    position: 'Ssr',
    url: 'https://tesislp.com.ar/',
    startDate: '2013-01-01',
    endDate: '2016-12-31',
    summary: 'Sales representative for On-X and CrioLyfe in Argentina',
    highlights: [
      'Cardiac and neurological vascular prosthetic importation, promotion and sale.',
      'Participation in public and private bids.',
      'Delivery notes preparation.',
      'Dispatch, delivery and control of surgical material in high-complexity health centers.',
      'Coordination of logistics for national congress exhibitions.',
      'Stock control.',
    ],
  },
];

export default work;
