import { readmeItem, showReadme } from "../../_types/readme";
import PortFolioIntro from "@/img/readme_img/PortFolio/PortfolioIntro.png";
import PortFolioIdoRouting1 from "@/img/readme_img/PortFolio/Routing1.png"
import PortFolioIdoRouting2 from "@/img/readme_img/PortFolio/Routing2.png"
import PortFolioIdoRouting3 from "@/img/readme_img/PortFolio/Routing3.png"
import PortFolioAtomic1 from "@/img/readme_img/PortFolio/Atomic1.png"
import PortFolioAtomic2 from "@/img/readme_img/PortFolio/Atomic2.png"
import PortFolioSSH1 from "@/img/readme_img/PortFolio/SshTrouble1.png"
import PortFolioSSH2 from "@/img/readme_img/PortFolio/SshSolution1.png"
import PortFolioSSH3 from "@/img/readme_img/PortFolio/SshSolution2.png"

export const PortFolio: readmeItem = {
    readmeIntro: {
        introImg: PortFolioIntro,
        introContent: [
            'Next.js 13의 App Router를 적용한 개인 포트폴리오 웹사이트입니다. 이전 프로젝트에서 사용했던 Page Router와의 구현방식의 차이에 흥미가 생겨 시작한 프로젝트입니다',
            '개인적으로 학습하여 새롭게 추가된 병렬 라우팅, 인터셉팅 라우팅을 적용하여 프로젝트를 구성해봤습니다',
            'SSAFY(삼성 청년 소프트아카데미)에서 같이 작업했던 팀원분들께 피드백을 받으면서 틈틈히 부족한 부분들을 채워나가고 있습니다'            
        ]
    },
    reademeWhatIdo: [
        {
            id: 0,
            whatIdoImg: [
                PortFolioIdoRouting1,
                PortFolioIdoRouting2,
                PortFolioIdoRouting3,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '1. 병렬라우팅, 인터셉링 라우팅을 활용한 모달 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '인터셉링 라우터를 통한 모달 장점을 파악할 수 있었습니다.',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '페이지를 새로고침 될 때 모달종료가 아닌 컨텍스트 유지할 수가 있습니다',
                                }, {
                                    id: 1,
                                    ssubTitle: '모달을 종료 하기 위해 이전 라우트로 이동하는 것이 아닌 뒤로 네비게이션하여 종료할 수 있습니다, 또한 앞으로 네비게이션 하여 모달을 다시 열 수 있습니다.'
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 1,
            whatIdoImg: [
                PortFolioAtomic1,
                PortFolioAtomic2,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '2. Atomic Design을 활용한 컴포넌트 구성',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '폴더를 명확히 구분하여 개발 편의성을 높였습니다.',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: 'atoms, molecules, organisms, template, page로 나누어 정리하여 기능의 만족도를 높였습니다'
                                }
                            ]
                        }, {
                            id: 1,
                            subTitle: '컴포넌트의 재활용성을 높일 수 있었습니다.',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '대부분의 컴포넌트 코드 길이를 70줄 이내로 작성하여 해석을 쉽게 할 수 있습니다'
                                }, {
                                    id: 1,
                                    ssubTitle: 'Error가 난 위치를 쉽게 파악할 수 있습니다.'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    readmeTrouble: [
        {
            id: 0,
            title: '서버 배포중 ssh문제',
            troubleList: [
                {
                    id: 0,
                    Img: [PortFolioSSH1],
                    content: '서버 배포과정에서 SSH 클라이언트를 통해 인스턴스 연결 하는데에 있어서 "호스트를 찾는 중" 계속 되다가 "네트워크 오류 : 연결 시간이 초과되었습니다" 라는 에러가 발생하였고 저의 네트워크 문제가 어디서 발생했는지를 찾아보았습니다',
                }
            ],
            solutionList: [
                {
                    id: 0,
                    Img: [PortFolioSSH2],
                    content: '네트워크 문제이기에 첫번째로 AWS 인스턴스 네트워크의 포트를 확인해봤고, 알맞게 적용되어있는걸 확인한 후에 집의 공유기를 확인하는 절차를 밟아봤습니다.',
                },
                {
                    id: 1,
                    Img: [PortFolioSSH3],
                    content: '인터넷 검색을 통해 공유기 정보를 확인해봤고 SK 브로드밴드의 공유기는 SSH 포트를 자체적으로 막아놔 사용이 불가능 했기에 발생한 에러인거로 확인했습니다. 작업을 이행하기위해서 핫스팟으로 진행하였지만, 포트 포워딩작업을 통해 22번 포트를 활성화 시킬수 있다는 블로그 글을 보고 프로젝트의 완성도가 높아진다면 포트포워딩 작업을 해볼 예정입니다.'
                }
            ]
        }
    ]
}