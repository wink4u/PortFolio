import { StaticImageData } from "next/image";

import GITHUBIMG from "@/img/sns_img/githubImg.png"
import INSTAGRAMIMG from "@/img/sns_img/instagramImg.webp"
import FACEBOOKIMG from "@/img/sns_img/facebookImg.png"

export interface snsItem {
    id: number;
    img: StaticImageData;
    link: string;
}

export const SNS_LIST: snsItem[] = [
    {
        id: 0,
        img: GITHUBIMG,
        link: "https://www.github.com/wink4u",
    },
    {
        id: 1,
        img: INSTAGRAMIMG,
        link: "https://www.instagram.com/seung__hyunee____",
    },
    {
        id: 2,
        img: FACEBOOKIMG,
        link: "https://www.facebook.com/profile.php?id=100003982487252",
    }
]