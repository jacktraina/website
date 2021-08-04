import starWarsBg from '../assets/themes/starwarsBg.jpg';
import starWarsBgHover from '../assets/themes/starwarsBgHover.gif';
import defaultBg from '../assets/themes/defaultBg.png';
import defaultBgHover from '../assets/themes/defaultBgHover.gif';

export const themeData = [
    {
        name: 'Default',
        color: '#097fd3',
        bg: defaultBg,
        hoverBg: defaultBgHover,
    },
    {
        name: 'Star Wars',
        color: 'yellow',
        bg: starWarsBg,
        hoverBg: starWarsBgHover,
    }
]

export default themeData;