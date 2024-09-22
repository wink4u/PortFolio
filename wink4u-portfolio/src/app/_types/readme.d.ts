import { StaticImageData } from "next/image";

export interface readmeIntroData {
    introImg: StaticImageData;
    introContent: string[];
    introfunction?: string[];
}

export interface reademeWhatIdoData {
    id: number;
    whatIdoImg: StaticImageData[];
    whatIdoContent: WhatIdoContent[];
}

interface WhatIdoContent {
    id: number;
    title: string;
    idoSub: WhatIdoSub[];
}

interface WhatIdoSub {
    id: number;
    subTitle: string;
    ssubIdo?: WhatIdoSsub[];
}

interface WhatIdoSsub {
    id: number;
    ssubTitle: string;
}

interface TroubleItem {
    id: number;
    Img?: StaticImageData[];
    content: string;
}

export interface readmeTroubleData {
    id: number;
    title: string;
    troubleList: TroubleItem[];
    solutionList: TroubleItem[];
}


export interface readmeItem {
    readmeIntro: readmeIntroData;
    reademeWhatIdo: reademeWhatIdoData[];
    readmeTrouble: readmeTroubleData[];
}

export interface showReadme {
    project: readmeItem;
}