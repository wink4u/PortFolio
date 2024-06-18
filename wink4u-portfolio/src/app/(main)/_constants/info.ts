import { IconType } from "react-icons";
import { FaPhone, FaLocationDot, FaCalendar, FaUserGraduate  } from "react-icons/fa6";
import { IoMdPerson, IoMdMail  } from "react-icons/io";


export interface InfoItem {
    id: number;
    icon: IconType;
    title: string;
    content: string;
}

const INFO_LIST: InfoItem[] = [
    {
        id: 0,
        icon: IoMdPerson,
        title: '이름',
        content: '김승현'
    },
    {
        id: 1,
        icon: FaCalendar,
        title: '생년월일',
        content: '98.02.21'
    },
    {
        id: 2,
        icon: FaLocationDot,
        title: '주소',
        content: '경기도 수원시 권선구'
    },
    {
        id: 3,
        icon: FaPhone,
        title: '연락처',
        content: '010-4601-0577'
    },
    {
        id: 4,
        icon: IoMdMail,
        title: '이메일',
        content: 'kim0221_@naver.com'
    },
    {
        id: 5,
        icon: FaUserGraduate,
        title: '학력',
        content: '한국공학대학교 전자공학부'
    },
]

export default INFO_LIST