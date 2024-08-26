import { StaticImageData } from "next/image";
import Play1 from "@/img/project_img/playplace1.png"
import Play2 from "@/img/project_img/playplace2.png"
import Play3 from "@/img/project_img/playplace3.png"
import Play4 from "@/img/project_img/playplace4.png"
import Play5 from "@/img/project_img/playplace5.png"
import Foody1 from "@/img/project_img/Foody1.png"
import Foody2 from "@/img/project_img/Foody2.png"
import Foody3 from "@/img/project_img/Foody3.png"
import Foody5 from "@/img/project_img/Foody5.png"
import Foody6 from "@/img/project_img/Foody6.png"
import Refill1 from "@/img/project_img/Refill1.png"
import Refill2 from "@/img/project_img/Refill2.png"
import Refill3 from "@/img/project_img/Refill3.png"
import Refill4 from "@/img/project_img/Refill4.png"
import Refill5 from "@/img/project_img/Refill5.png"
import WPortFolio1 from "@/img/project_img/PortFolio1.png";
import WPortFolio2 from "@/img/project_img/PortFolio2.png";
import WPortFolio3 from "@/img/project_img/PortFolio3.png";
import WPortFolio4 from "@/img/project_img/PortFolio4.png";
import { projectItem, showProject } from "../_types/project";

const PortFolio: projectItem = {
    name: "wink4u's PortFolio",
    date: '2023.06 ~ 2023.08 (9주)',
    member: '1인 개인프로젝트',
    describe:'프론트엔드 개발자 김승현의 Next 포트폴리오',
    skill: {
        Frontend: 'TypeScript, Next.js, SCSS',
        DevOps: 'AWS EC2, NGINX',
    },
    whatIdid: [
        {
            id: 0,
            main: 'Frontend 개발',
            sub: [
                {
                    id : 0,
                    sub: 'Next.js App Router',
                    ssub: [
                        'React가 아닌 Next.js로 웹 페이지 구성',
                        'Next.js 13 에서 새로운 App Router로 제작'
                    ]
                }, 
                {
                    id : 1,
                    sub: 'Interceping Router',
                    ssub: [
                        'Modal을 Intercepting Router로 제작',
                        '기존 Modal과 달리 페이지 전환식으로 표현'
                    ]
                },
                {
                    id: 2,
                    sub: 'SCSS',
                    ssub: [
                        'variable.scss, mix.scss로 전체 css를 조율'
                    ]
                }
            ]
        },
    ],
    imgs : [
        WPortFolio1,
        WPortFolio2,
        WPortFolio3,
        WPortFolio4,
    ]
}

const PlayPlace: projectItem = {
    name: 'PlayPlace',
    date: '2023.10 ~ 2023.11 (6주)',
    member: '6인 팀 프로젝트 - 기여도 20%',
    describe:'함께 만드는 위치 기반 공유 플레이리스트 서비스',
    skill: {
        Frontend: 'TypeScript, Next.js, Recoil, Styled-Component, Android Studio, WebSocket',
        Backend: 'Spring Boot, JPA, Redis, MySQL, Spring Scheduler, WebSocket',
        DevOps: 'AWS EC2, NGINX, Amazon S3, Docker',
    },
    whatIdid: [
        {
            id: 0,
            main: 'Frontend 개발',
            sub: [
                {
                    id : 0,
                    sub: '메인 페이지 및 마이 페이지 개발',
                    ssub: [
                        '위치, 날씨, 시간 데이터를 활용하여 사용자에게 맞춤형 음반 정보 제공'
                    ]
                }, 
                {
                    id : 1,
                    sub: 'Google Map 활용 페이지 개발',
                    ssub: [
                        '디바운스 패턴을 활용하여 클러스터 렌더링 최적화',
                        '50ms마다 안드로이드와 통신하여 사용자의 위치 변화 감지'
                    ]
                },
                {
                    id: 2,
                    sub: 'Bottom Sheet 레이아웃 구현',
                }
            ]
        },
        {
            id: 1,
            main: 'Android 개발',
            sub: [
                {
                    id: 0,
                    sub: 'Android와 Webview 간의 통신',
                    ssub : [
                        'Window 전역 함수를 활용한 JS 통신 구현'
                    ]
                },
                {
                    id: 1,
                    sub: 'Native 기능 권한 요청 및 센서 활용',
                    ssub: [
                        'GPS 및 카메라 권한 요청 기능 구현',
                        '가속도 센서를 이용한 흔들기 이벤트 적용(플플이 AI)'
                    ]
                }
            ]
        },
    ],
    imgs : [
        Play1,
        Play2,
        Play3,
        Play4,
        Play5,
    ]
}

const Foody: projectItem = {
    name: 'FOODY',
    date: '2023.08 ~ 2023.10 (7주)',
    member: '6인 팀 프로젝트 - 기여도 25%',
    describe:'일일 권장 영양소와 보유 식재료를 고려한 식단 및 레시피 추천 서비스',
    skill: {
        Frontend: 'TypeScript, React.js, Recoil, SCSS, PWA',
        Backend: 'Spring Boot, JPA, Redis, MySQL, Rest Docs, Python, FastAPI',
        DevOps: 'AWS EC2, NGINX, Amazon S3, Docker',
    },
    whatIdid: [
        {
            id: 0,
            main: '기획',
            sub: [
                {
                    id : 0,
                    sub: 'YOLO를 활용한 식단 인식',
                }, 
                {
                    id : 1,
                    sub: '네이버 OCR API를 활용한 영수증 인식을 통한 사용자 냉장고 등록'
                }
            ]
        },
        {
            id: 1,
            main: 'Frontend 개발',
            sub: [
                {
                    id: 0,
                    sub: '로그인/회원가입 페이지',
                    ssub: [
                        '소셜(Google) 로그인 기능 구현',
                        '사용자 정보 입력을 통한 필요 영양소 측정',
                    ]
                },
                {
                    id: 1,
                    sub: '식단 페이지',
                    ssub: [
                        'Calendar, Graph 커스텀을 통한 사용자 UX 향상',
                        '영양소 데이터 및 식단시간 Recoil 상태 관리를 통한 API 호출 최소화',
                        '식단 등록을 통한 채워지는 영양소양을 미리 볼 수 있도록 구현하여 UX향상'
                    ]
                },
                {
                    id: 2,
                    sub: '공통 Componenet',
                    ssub: [
                        'Atomic 디자인을 활용하여 Component 재활용성 증가'
                    ]
                }
            ]
        },
    ],
    imgs : [
        Foody1,
        Foody2,
        Foody3,
        Foody5,
        Foody6,
    ]
}

const Refill: projectItem = {
    name: 'RE:Fill',
    date: '2023.07 ~ 2023.08 (7주)',
    member: '6인 팀 프로젝트 - 기여도 25%',
    describe:'탈모 고민을 하고 있는 사용자를 위한 비대면 상담 플랫폼 서비스',
    skill: {
        Frontend: 'TypeScript, React.js, Redux, Styled-Component',
        Backend: 'Spring Boot, JPA, Redis, QueryDSL, Rest Docs, MariaDB, Flask,Teachable Machine', 
        DevOps: 'AWS EC2, NGINX, Amazon S3, Docker, Jenkins',
    },
    whatIdid: [
        {
            id: 0,
            main: 'Frontend 개발',
            sub: [
                {
                    id: 0,
                    sub: '로그인/회원가입 페이지',
                    ssub: [
                        '회원가입에 필요한 이메일 인증로직 처리',
                        'Profile와 같은 Image Form Data 처리',
                        '아이디, 비밀번호 찾기 구현'
                    ]
                },
                {
                    id: 1,
                    sub: '병원 마이페이지',
                    ssub: [
                        '병원, 의사, 리뷰 데이터 일괄처리',
                        '리뷰 평점 / 추천 / 의사 별도로 볼 수 있게 로직 구현'
                    ]
                },
                {
                    id: 2,
                    sub: '회원 마이페이지',
                    ssub: [
                        '회원 AI 자가진단 데이터 및 일반 데이터 사용자가 보기쉽게 UI 구현',
                        '회원 정보 수정 기능 구현'
                    ]
                }
            ]
        },
    ],
    imgs : [
        Refill1,
        Refill2,
        Refill3,
        Refill4,
        Refill5,
    ]
}

const Project: showProject[] = [
    {
        id: 0,
        project: PortFolio
    },
    {
        id: 1,
        project: PlayPlace,
    }, 
    {
        id: 2,
        project: Foody,
    },
    {
        id: 3,
        project: Refill,
    }
]

export default Project
