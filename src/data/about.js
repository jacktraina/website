import { faBooks, faTvRetro, faWhale, faVolleyballBall, faBasketballHoop} from '@fortawesome/pro-regular-svg-icons'

export const aboutIntro = "Hello! I'm Jack. I'm a student at Harvard studying Computer Science with a secondary in Mind, Brain, and Behavior. I'm passionate about technology and understanding how new innovations can create positive social change. In my free time I love to workout, binge movies, and explore new places. Check out some of my interests below!"

const aboutData = [
    {
        title: "What I'm Reading",
        icon: faBooks,
        bullets: [
            {
                title: "A Hitchhicker's Guide to the Galaxy",
                author: 'Douglas Adams',
            },
            {
                title: 'The Power of Now: A Guide to Spiritual Enlightenment',
                author: 'Eckhart Tolle',
            },
            {
                title: 'Astrophysics for People in a Hurry',
                author: 'Neil deGrasse Tyson',
            },
            {
                title: 'Dune',
                author: 'Frank Herbert',
            },
        ],
    },
    {
        title: "What I like to watch",
        icon: faTvRetro,
        bullets: [
            {
                title: "Game of Thrones",
            },
            {
                title: 'Rick and Morty',
            },
            {
                title: 'Star Wars',
            },
            {
                title: 'The Departed',
            },
            {
                title: 'Parasite',
            },
            {
                title: 'The Lord of the Rings',
            },
            {
                title: 'Soul',
            },
        ],
    },
    {
        title: "What I like to do",
        icon: faTvRetro,
        bullets: [
            {
                title: 'Scuba Diving',
                icon: faWhale,
            },
            {
                title: 'Spikeball',
                icon: faVolleyballBall,

            },
            {
                title: 'Basketball',
                icon: faBasketballHoop,
            },
        ],
    },
]

export default aboutData;