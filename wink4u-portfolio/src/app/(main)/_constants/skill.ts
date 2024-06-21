import HTMLCSSJS from '../../../img/HTMLCSSJS.webp'
import TS from '@/img/TS.webp';
import REACT from '@/img/REACT.webp';
import REDUX from '@/img/REDUX.webp';
import RECOIL from '@/img/RECOIL.webp';
import NEXT from '@/img/NEXT.webp';
import VUE from '@/img/VUE.webp';
import STYLEDCOMPONENT from '@/img/STYLEDCOMPONENT.webp';
import SASS from '@/img/SASS.webp';
import TAILWINDCSS from '@/img/TAILWINDCSS.webp';
import BOOTSTRAP from '@/img/BOOTSTRAP.webp';

import PYTHON from '@/img/PYTHON.webp';
import DJANGO from '@/img/DJAGNO.webp';
import MYSQL from '@/img/MYSQL.webp';

import ANDROID from '@/img/ANDROIDSTUDIO.webp';

import GIT from '@/img/GIT.webp';
import GITHUB from '@/img/GITHUB.webp';

import JIRA from '@/img/JIRA.webp';
import FIGMA from '@/img/FIGMA.webp';

import { StaticImageData } from 'next/image';
export interface skillItem {
    id: number;
    img: StaticImageData;
}

export const FRONTEND_LIST: skillItem[] = [
    {
        id: 0,
        img: HTMLCSSJS,
    },
    {
        id: 1,
        img: TS,
    },
    {
        id: 2,
        img: REACT,
    },
    {
        id: 3,
        img: REDUX,
    },
    {
        id: 4,
        img: RECOIL,
    },
    {
        id: 5,
        img: NEXT,
    },
    {
        id: 6,
        img: VUE,
    },
    {
        id: 7,
        img: STYLEDCOMPONENT,
    },
    {
        id: 8,
        img: SASS,
    },
    {
        id: 9,
        img: TAILWINDCSS,
    },
    {
        id: 10,
        img: BOOTSTRAP,
    },
]

export const BACKEND_LIST: skillItem[] = [
    {
        id: 0,
        img: PYTHON,
    },
    {
        id: 1,
        img: DJANGO,
    },
    {
        id: 2,
        img: MYSQL,
    },
]

export const MOBILE_LIST: skillItem[] = [
    {
        id: 0,
        img: ANDROID,
    }
]

export const VERSION_LIST: skillItem[] = [
    {
        id: 0,
        img: GIT,
    },
    {
        id: 1,
        img: GITHUB,
    },
]

export const COMMUNICATION_LIST: skillItem[] = [
    {
        id: 0,
        img: JIRA,
    },
    {
        id: 1,
        img: FIGMA,
    },
]

const Skill = {
    FRONTEND_LIST,
    BACKEND_LIST,
    MOBILE_LIST,
    VERSION_LIST,
    COMMUNICATION_LIST,
};

export default Skill;