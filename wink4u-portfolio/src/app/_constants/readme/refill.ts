import { readmeItem } from "../../_types/readme";
import RefillIntro from "@/img/readme_img/Refill/RefillIntro.png";
import PatientLogin from "@/img/readme_img/Refill/PatientLogin.png";
import PatientSignup from "@/img/readme_img/Refill/PatientSignup.png";
import DoctorLogin from "@/img/readme_img/Refill/DoctorLogin.png";
import DoctorSignup from "@/img/readme_img/Refill/DoctorSignup.png";
import PatientPage from "@/img/readme_img/Refill/PatientPage.png";
import PatientPage2 from "@/img/readme_img/Refill/PatientPage2.png";
import DoctorPage from "@/img/readme_img/Refill/DoctorPage.png";
import DoctorPage2 from "@/img/readme_img/Refill/DoctorPage2.png";
import Redux1 from "@/img/readme_img/Refill/Redux1.png";
import Redux2 from "@/img/readme_img/Refill/Redux2.png";
import Trouble1 from "@/img/readme_img/Refill/Trouble1.png";
import Solution1 from "@/img/readme_img/Refill/Solution1.png";
import Solution2 from "@/img/readme_img/Refill/Solution2.png";


export const RefillProject: readmeItem = {
    readmeIntro: {
        introImg: RefillIntro,
        introContent: [
            'SSAFY(삼성 청년 소프트아카데미)에서 진행한 탈모환자를 위한 비대면 상담 웹 서비스 플랫폼 입니다.',
            '코로나를 겪은 이후 병원 상담이 비대면으로 진행됬으면 좋겠다는 생각을 팀원끼리 공유했고 이 아이디어를 탈모환자의 입장에서 생각해본 서비스 입니다',
            '탈모 전문 병원은 수도권에 많이 분포되있으며 지방에 계신 탈모로 고민이 많은 사용자를 위해 기획하게 되었습니다.'
        ],
        introfunction: [
            'Web RTC를 활용한 상담으로 AI자가진단 내역, 상담 기록, SC-FEGAN을 활용한 상담 기능',
            'AI 자가 진단 - 진단을 원하는 사진이 탈모 진행도를 측정하기에 정확한 사진인지 판별 후 진행도를 판단',
            '개인 회원의 이전 상담 기록, 예약 기록, AI자가 진단 내역을 확인할 수 있는 마이페이지',
            '현재위치 기준으로 거리 순 병원 검색, 키워드를 활용한 병원 검색',
            '병원 상세 페이지에서 병원 내 의사 예약 기능',
        ]
    },
    reademeWhatIdo: [
        {
            id: 0,
            whatIdoImg: [
                PatientLogin,
                PatientSignup,
                DoctorLogin,
                DoctorSignup,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '1. 고객 / 병원 로그인, 회원가입 페이지 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '탭바를 이용한 전환기능',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '고객 / 병원 크게 두 종류의 사용자가 접근을 할 수 있습니다. 직관적인 탭바를 통해 쉽게 스위칭을 할 수 있도록 하여 UX를 향상시킬 수 있었습니다.',
                                }, 
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 1,
            whatIdoImg: [
                PatientPage,
                PatientPage2,
                DoctorPage,
                DoctorPage2,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '2. 고객 / 병원 마이 페이지 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '고객 마이페이지',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: 'AI 자가진단 데이터 및 일반 데이터를 사용자 입장에서 한 눈에 보기쉽게 UI를 구현했습니다.'
                                },
                            ]
                        }, {
                            id: 1,
                            subTitle: '병원 마이페이지',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '리뷰 데이터를 평점 / 추천 / 의사 3가지 기준으로 볼 수 있는 JS 로직을 구현했습니다.'
                                }, 
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            whatIdoImg: [
                Redux1,
                Redux2,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '3. Redux',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '고객 / 병원 접근을 Redux 처리',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '고객 / 병원 로그인에 따라 페이지의 Component요소가 다르게 구성되도록 개발했습니다. 이를 로그인 시 Redux로 상태처리하여 어떤 사용자가 이용하고 있는지를 판단하였습니다.'
                                },
                            ]
                        }, 
                    ]
                }
            ]
        }
    ],
    readmeTrouble: [
        {
            id: 0,
            title: '회원가입시 이미지 데이터 처리',
            troubleList: [
                {
                    id: 0,
                    Img: [Trouble1],
                    content: 'Image 데이터를 back-end 팀원이 multipart/form-data 형식으로 api를 만들어 전송해주면 된다라는 말을 들었지만 텍스트 형식의 inputData만 처리해본 저로써 어떻게 보내야 하는지를 몰랐고 고민이 많았습니다.',
                }
            ],
            solutionList: [
                {
                    id: 0,
                    Img: [Solution1, Solution2],
                    content: 'JSON데이터를 그대로 보내는 것만으로는 이미지 파일의 데이터를 같이 전송할 수 없으므로 multipart/form-data로 쓰인다는 개념을 알 수 있었으며, Blob의 경우 텍스트 데이터를 파일처럼 처리하여 전송한다는 것을 알 수 있었습니다. 이를 통해 Front-end 개발자로써 더욱 성장할 수 있게 되었습니다',
                },
            ]
        }
    ]
}