import website from '../assets/projects/website.png'
import charity from '../assets/projects/charity.png'
import humans from '../assets/projects/humans.gif'

export const projectsData = [
    {
        title: 'React Portfolio',
        image: website,
        date: new Date('8/1/2021'),
        description: 'Designed in Figma and built using modern Typescript, this website is a cumulative demonstration of my experience with frontend web development.',
    },
    {
        title: 'The Giving Tree',
        image: charity,
        date: new Date('5/10/2020'),
        description: "Built as the final project for our Product Management course, The Giving Tree is a mobile application to integrate charitable giving into users' every day lives.",
    },
    {
        title: 'Stop Motion Film',
        image: humans,
        date: new Date('12/10/2018'),
        description: 'As a more creative project, this animated film was created to demonstrate human evolution through stop motion animation.',
        link: 'https://www.youtube.com/watch?v=RdBhgXDCt7w',
    },
]

export default projectsData;