import { StaticImageData } from "next/image";

export interface projectSkill {
    Frontend: string;
    Backend: string;
    DevOps: string;
}

export interface projectSub {
    id: number;
    sub: string;
    ssub?: string[];
}

export interface projectWhat {
    id: number;
    main: string;
    sub: projectSub[];
}

export interface projectItem {
    name: string;
    member?: string;
    date: string;
    describe: string;
    skill: projectSkill;
    whatIdid: projectWhat[];
    imgs: StaticImageData[]
}

export interface showProject {
    id: number;
    project: projectItem;
}