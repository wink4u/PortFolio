import { readmeItem, showReadme } from "../../_types/readme";
import FoodyIntro from "@/img/readme_img/Foody/FoodyIntro.png";
import Signup from "@/img/readme_img/Foody/Signup.png";
import Fbti1 from "@/img/readme_img/Foody/FBTI1.png";
import Fbti2 from "@/img/readme_img/Foody/FBTI2.png";
import Fbti3 from "@/img/readme_img/Foody/FBTI3.png";
import Meal1 from "@/img/readme_img/Foody/Meal1.png";
import Meal2 from "@/img/readme_img/Foody/Meal2.png";
import Meal3 from "@/img/readme_img/Foody/Meal3.png";
import Meal4 from "@/img/readme_img/Foody/Meal4.png";
import Meal5 from "@/img/readme_img/Foody/Meal5.png";
import Tapbar1 from "@/img/readme_img/Foody/Tapbar1.png";
import Tapbar2 from "@/img/readme_img/Foody/Tapbar2.png";
import Trouble1 from "@/img/readme_img/Foody/Trouble1.png";
import Trouble2 from "@/img/readme_img/Foody/Trouble2.png";
import Solution1 from "@/img/readme_img/Foody/Solution1.png";
import Solution2 from "@/img/readme_img/Foody/Solution2.png";
import Solution3 from "@/img/readme_img/Foody/Solution3.png";


export const FoodyProject: readmeItem = {
    readmeIntro: {
        introImg: FoodyIntro,
        introContent: [
            'SSAFY(삼성 청년 소프트아카데미)에서 진행한 빅데이터 추천 PWA 서비스 플랫폼 Foody입니다.',
            '갈수록 증가하는 1인가구의 증가율과 배달음식, 편의점 식품, 가정 간편식에 대한 의존도가 높아짐에 대해 팀원들과 생각해보았고, 건강에 대한 서비스 플랫폼에 대해 떠올렸습니다.',
            '기존에 있는 서비스 플랫폼인 mealligram, SPRINT의 경우 사용자 식단을 기반으로 섭취 영양소 정보를 제공하지만 일일 권장 영양소를 채우기 위한 식단 구성이 힘들다는 단점을 해결할 수 없기에 식단과 영양소 두마리 토끼를 잡을 수 있는 추천 서비스 플랫폼을 기획했습니다.'            
        ],
        introfunction: [
            '사용자의 식사를 AI 기술을 활용하여 사진으로 음식과 영양소를 분석',
            '일일 섭취 권장 영양소 대비 부족한 영양소에 대한 정보 제공',
            '사용자 취향과 부족 영양소에 대한 지표를 기준으로 식사 추천',
            '소유하고 있는 냉장고 재료와 부족 영양소에 기반한 추천',
            '유사한 다른 유저, 선호도를 종합한 추천하기 위한 다양한 알고리즘',
            'OCR 기술을 통해 구매한 음식 재료에 대해 냉장고 현황 현실화'
        ]
    },
    reademeWhatIdo: [
        {
            id: 0,
            whatIdoImg: [
                Signup,
                Fbti1,
                Fbti2,
                Fbti3,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '1. 소셜 로그인(Google), FBTI 페이지 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '소셜 로그인(Google)',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: 'PWA 앱 서비스에 맞추어 사용자들이 회원가입이 간편하게 하기 위해 소셜로그인(Google)을 도입했습니다.',
                                }, 
                            ]
                        },
                        {
                            id: 1,
                            subTitle: 'FBTI 페이지',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '사용자의 성별, 나이, 몸무게, 키 4가지 요소를 통해 권장 영양소 수치를 알 수 있습니다. 따라서, 직관적인 UI 페이지를 통해 입력이 가능하도록 페이지를 구성했습니다',
                                }, 
                                {
                                    id: 1,
                                    ssubTitle: '빅 데이터 추천 서비스로 사용자의 음식의 선호도를 파악하기 위해서 상 중 하 개념을 도입하여 점수를 Back-end에서 계산하여 유저의 취향을 집계했습니다. 또한, 사용자들의 집계 데이터들을 분포하여 평균 사용자들의 음식 선호도를 파악할 수 있습니다',
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
                Meal1,
                Meal2,
                Meal3,
                Meal4,
                Meal5,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '2. 식단 페이지 및 등록 기능',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '식단 페이지',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: 'PWA 어플로 사용자에게 보여주는 데이터 수치가 직관적으로 표시가 되어야한다고 생각이 들었습니다. 막대 그래프의 경우 현재량과 등록이 되면 추가되는 영양소량을 보여주어 UX를 향상시켰습니다.'
                                },
                                {
                                    id: 1,
                                    ssubTitle: '달력의 경우 date-fns 라이브러리를 활용하여 한줄로 보여지게 하였으며, 등록된 날에는 노란색으로 표시하여 사용자 경험을 상승시킬 수 있었습니다.'
                                },
                            ]
                        }, {
                            id: 1,
                            subTitle: '식단 등록 페이지',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '카메라르 연동하여 식단을 촬영하여 YOLO 서버로 전송하여 검출된 식단을 등록할 수 있습니다.'
                                }, 
                                {
                                    id: 1,
                                    ssubTitle: '등록된 식단을 기반으로 영양소 데이터 및 식단시간을 Recoil 상태 관리를 통해 API 호출을 최소화 했습니다.'
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
                Tapbar1,
                Tapbar2,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '2. 커스터 훔 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: 'useToggle 기능 개발',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '간단한 데이터 추가로, 10분 이상 소요되던 작업을 5초로 단축하여 개발 효율을 향상시켰습니다.'
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
            title: 'RECIPE API 호출 응답시간에 따른 제약',
            troubleList: [
                {
                    id: 0,
                    Img: [Trouble1, Trouble2],
                    content: '약 12만개의 레시피 데이터를 추천 알고리즘에 따라 사용자에게 3개의 테마로 나누어 API 응답을 해주는 추천 레시피 페이지에서 응답 시간이 페이지 렌더링 시간보다 길어서 중간중간 표시되지않는 테마의 사진들이 보여짐에 따라 사용자들이 사용할 때 불편할 것 같다고 생각이 들었고, 이를 어떤방식으로 해결해야할지 고민을 가졌습니다.',
                }
            ],
            solutionList: [
                {
                    id: 0,
                    Img: [Solution1, Solution2, Solution3],
                    content: 'Youtube의 동영상 썸네일이 로딩되지 않는 경우 스켈레톤이 대신하는 것을 알게 되었고, 이를 코드를 통해 레시피 데이터가 로딩의 유무에 따라 스켈레톤 이미지를 대체하여 사용자에게 먼저 보여지고 이후에 완료가 되면 데이터 이미지를 보여줌으로써 사용자의 UX를 향상시킬 수 있었습니다.',
                },
            ]
        }
    ]
}