export interface SkillsType {
    title: string,
    competency: number,
    category: string[],
}

export const skillsData = [
    {
        title: 'JavaScript',
        competency: 5,
        category: ['Web Development', 'JavaScript', 'Languages'],
    },
    {
        title: 'TypeScript',
        competency: 5,
        category: ['Web Development', 'JavaScript', 'Languages'],
    },
    {
        title: 'TailwindCSS',
        competency: 4,
        category: ['Web Development', 'UI/UX', 'Languages']
    },
    {
        title: 'Apollo',
        competency: 4,
        category: ['Web Development', 'Databases'],
    },
    {
        title: 'GraphQL',
        competency: 4,
        category: ['Web Development', 'Databases'],
    },
    {
        title: 'Python',
        competency: 4,
        category: ['Languages'],
    },
    {
        title: 'C++',
        competency: 3,
        category: ['Languages'],
    },
    {
        title: 'OCaml',
        competency: 3,
        category: ['Languages'],
    },
    {
        title: 'Figma',
        competency: 5,
        category: ['UI/UX'],
    },
    {
        title: 'R',
        competency: 3,
        category: ['Languages']
    },
    {
        title: 'PostgreSQL/SQL',
        competency: 3,
        category: ['Databases']
    },
    {
        title: 'Heroku',
        competency: 2,
        category: ['Web Development']
    },
    {
        title: 'React.JS',
        competency: 5,
        category: ['Web Development', 'JavaScript'],
    },
    {
        title: 'Swift',
        competency: 2,
        category: ['Languages'],
    },
    {
        title: 'Node.JS',
        competency: 3,
        category: ['Web Development', 'JavaScript'],
    },
    {
        title: 'Adobe Illustrator',
        competency: 4,
        category: ['UI/UX'],
    },
    {
        title: 'Git',
        competency: 4,
        category: ['Languages'],
    },
    {
        title: 'HTML + SASS/SCSS/CSS',
        competency: 4,
        category: ['UI/UX', 'Languages', 'Web Development'],
    },
    {
        title: 'Pandas',
        competency: 2,
        category: ['Databases', 'Python'],
    },
]

export interface CategoryType {
    name: string,
    color: string,
}

export const categories = [
    {
        name: 'Web Development',
        color: '#097fd3',
    },
    {
        name: 'Python',
        color: '#74abd3',
    },
    {
        name: 'JavaScript',
        color: '#a3bbcc',
    },
    {
        name: 'Databases',
        color: '#065c99',
    },
    {
        name: 'UI/UX',
        color: '#032c49',
    },
    {
        name: 'Languages',
        color: '#030e27',
    },
];
