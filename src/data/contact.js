import { faTwitter, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons'

export const contactData = [
    {
        link: 'mailto:jacktraina@college.harvard.edu',
        label: 'Email',
        icon: faEnvelope,
        description: "to reach me",
        background: "#097fd3",
        color: "white",
    },
    {
        link: 'https://linkedin.com/in/jacktraina',
        label: 'LinkedIn',
        icon: faLinkedinIn,
        description: "to hire me",
        background: "#007BB5",
        color: "white",
    },
    {
        link: 'https://twitter.com/jacktraina16',
        label: 'Twitter',
        icon: faTwitter,
        description: "to laugh with me",
        background: "#1DA1F2",
        color: "white",
    },
    {
        link: 'https://www.facebook.com/jacktraina',
        label: 'Facebook',
        icon: faFacebookF,
        description: "to send me happy birthday wishes",
        background: "#4267B2",
        color: "white",
    },
    {
        link: 'https://github.com/jacktraina',
        label: 'Github',
        icon: faGithub,
        description: "to copy this website!",
        background: "black",
        color: "white",
    },
]

export default contactData;