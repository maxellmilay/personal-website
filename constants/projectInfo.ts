import concordImage from '../images/project/concord.png';
import medataImage from '../images/project/medata.png';
import datememeImage from '../images/project/datememe.png';
import tmiImage from '../images/project/tmi.png';

const projectList = [
  {
    name: 'Concord',
    description:
      'Concord is a social media platform, where users can post questions on their profile for the public to answer. Public comments are then made anonymous to provide the users a unique experience.',
    photoURL: concordImage,
    link: 'https://concord.ph',
  },
  {
    name: 'Medata',
    description:
      'Medata is a media progress tracking platform, where users can track the progress of the media they are currently consuming (e.g. TV Series, Books, Anime). Users can add and track the media title, total content to consume (e.g. book pages, chapters, episodes), current content consumed, and others.',
    photoURL: medataImage,
    link: 'https://medata-frontend.vercel.app',
  },
  {
    name: 'Datememe',
    description:
      'Datememe is a dating platform where users can match with each other based on their meme preferences.',
    photoURL: datememeImage,
    link: 'https://datememe.org/',
  },
  {
    name: 'TMI Fellowship',
    description:
      'TMI Fellowship is a blog website that showcases the activities and missions of a church.',
    photoURL: tmiImage,
    link: 'https://www.tmifellowship.org/',
  },
];

export default projectList;
