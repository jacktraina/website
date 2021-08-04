import ablogo from '../../assets/logos/ab_logo.png';
import hazellogo from '../../assets/logos/hazel-color.png';
import gfmlogo from '../../assets/logos/gfm_logo.png';

export interface ExperienceData {
    company: string,
    positions: string[],
    link?: string,
    color?: string,
    dateRanges: string[],
    bullets: string[][],
    imageURL?: any,
}

const experienceData : ExperienceData[] = [
    {
        company: 'Hazel Health, Inc.',
        positions: ['Chief of Staff to the CTO', 'Product Management Intern'],
        link: 'https://hazel.co',
        color: '#5FC3EB',
        dateRanges: ['March 2021 - Present', 'September 2020 - December 2020'],
        bullets: [
            [
            'Worked with the CTO to lead the ideation, user research, design, and technical development of the Hazel Mental Health platform, resulting in a pilot launch with 400,000 students.',
            'Reinvented internal workflows for engineering prioritization, requiring cross-functional communication with all internal teams.',
            ],
            [
                'Led the strategic vision, technical implementation, and content development of a Learning Management System that trains over 1000 school staff members and 80 internal employees.',
            ],
        ],
        imageURL: hazellogo,
    },
    {
        company: 'Anheuser-Busch InBev',
        positions: ['Junior Software Engineer', 'Global Management Trainee Intern - Finance'],
        link: 'https://anheuser-busch.com',
        color: '#CC3234',
        dateRanges: ['January 2021 - March 2021', 'June 2020 - August 2020'],
        bullets: [
            ['Designed and developed an inventory forecasting platform using Figma, Typescript, React, and GraphQL.'],
            [
                'Automated backend processes for financial models using R, improving the efficiency of the monthly financial data update by 50%.',
                'Modeled financial reports using PowerBI to present to the CEO and CFO.',
            ],
        ],
        imageURL: ablogo,
    },
    {
        company: 'GoFundMe',
        positions: ['Term-time Business Data Analyst', 'Business Operations & Software Developoment Intern'],
        link: 'https://gofundme.com',
        color: '#00B964',
        dateRanges: ['August 2019 - June 2020', 'June 2019 - June 2019'],
        bullets: [
            ['Analyzed user data from thousands of GoFundMe donors to help strategize the GoFundMe.org Small Business Relief Fund, an initiative that has raised $2.8 million for businesses impacted by COVID-19.'],
            ['Developed a web crawler and graphical interface in Python to improve the user onboarding experience.'],
        ],
        imageURL: gfmlogo
    },
]

export default experienceData;