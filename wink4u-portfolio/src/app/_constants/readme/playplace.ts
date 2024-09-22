import { readmeItem, showReadme } from "../../_types/readme";
import PlayPlaceIntro from "@/img/readme_img/PlayPlace/PlayPlace.png";
import PlayMain from "@/img/readme_img/PlayPlace/Mainpage.png";
import PlayMypage1 from "@/img/readme_img/PlayPlace/Mypage1.png";
import PlayMypage2 from "@/img/readme_img/PlayPlace/Mypage2.png";
import PlayMapMove from "@/img/readme_img/PlayPlace/PlayMap_Move.png";
import PlayMap1 from "@/img/readme_img/PlayPlace/PlayMap1.png";
import PlayMap2 from "@/img/readme_img/PlayPlace/PlayMap2.png";
import PlayMap3 from "@/img/readme_img/PlayPlace/PlayMap3.png";
import PlayMap4 from "@/img/readme_img/PlayPlace/PlayMap4.png";
import PlayMap5 from "@/img/readme_img/PlayPlace/PlayMap5.png";
import PlayMap6 from "@/img/readme_img/PlayPlace/PlayMap6.png";
import Debounce from "@/img/readme_img/PlayPlace/Debounce.png";
import AndroidLocation from "@/img/readme_img/PlayPlace/Android_location1.png"
import AndroidCamera from "@/img/readme_img/PlayPlace/Android_camera1.png"
import AndroidShake from "@/img/readme_img/PlayPlace/Android_shake1.png"
import Native1 from "@/img/readme_img/PlayPlace/Native1.png";
import Native3 from "@/img/readme_img/PlayPlace/Native3.png";

export const PlayPlaceProejct: readmeItem = {
    readmeIntro: {
        introImg: PlayPlaceIntro,
        introContent: [
            'SSAFY(삼성 청년 소프트아카데미)에서 진행한 함께 만드는 위치 공유 플레이리스트 앱 서비스 PlayPlace입니다.',
            '노래는 어디서든 접근하기 쉬우며, 공감을 이끌 수 있는 매개체라고 생각했습니다. 누구나 떠올릴 수 있는 노래 그리고 새로운 방식으로 음악을 찾는 방법이라는 두 가지 키워드로 팀원들과 노래를 장소에 대입시키는것은 어떨까? 라는 생각에 시작했습니다.',       
        ],
        introfunction: [
            '음악 검색, 재생목록 내 곡 추가, 삭제가 가능한 스트리밍 서비스',
            '내 위치에 가장 많이 들은곡, 현재 날씨 / 시간대에 가장 많이 들은 곡 플레이리스트 제공',
            '공유 재생 목록에 곡 추가 및 내 재생목록에 공유 재생목록이 추가 가능한 랜드마크 플레이리스트',
            '100m 반경의 사용자가 듣고 있는 곡 정보를 알 수 있는 내 주변 사용자 탐색 기능',
            '사진의 분위기 분석을 바탕으로 곡을 추천해주는 챗봇 노래 추천 서비스',
        ]
    },
    reademeWhatIdo: [
        {
            id: 0,
            whatIdoImg: [
                PlayMain,
                PlayMypage1,
                PlayMypage2,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '1. 메인 페이지 및 마이 페이지 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '메인 페이지',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '사용자의 위치에 따라 행정동 단위로 표시되고, 그 아래로 순서대로 각 기준에 맞는 음악 데이터들을 보여줍니다.',
                                }, {
                                    id: 1,
                                    ssubTitle: '이번주에 가장 많이 재생된 노래 및 날씨와 시간대에 따라 일주일 동안의 데이터를 집계해서 사용자에게 보여주고, 플레이버튼을 눌러 들어볼 수 있습니다.'
                                }
                            ]
                        },
                        {
                            id: 0,
                            subTitle: '마이 페이지',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '사용자의 이모지와 닉네임을 수정하여 다른 사용자에게 보여줄 수 있습니다.',
                                }, {
                                    id: 1,
                                    ssubTitle: '좋아요를 누른 노래를 볼 수 있으며, 흔들기 이벤트를 on / off를 통해 챗봇인 플로디 설정을 할 수 있습니다.'
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
                PlayMapMove,
                PlayMap1,
                PlayMap4,
                PlayMap2,
                PlayMap3,
                PlayMap6,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '2. Google Map을 활용한 PlayMap 페이지 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '사용자의 편의성을 높일 수 있는 버튼 기능을 추가 및 UI를 접목시켰습니다.',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '100m안의 랜드마크 접근 유무를 원을 추가하여 사용자 경험을 올릴 수 있습니다'
                                },
                                {
                                    id: 1,
                                    ssubTitle: '확대, 축소를 통해 주변의 랜드마크 위치를 파악할 수 있으며, 자신의 위치로 돌아 올 수 있는 기능을 추가하여 편의성을 극대화 하였습니다.'
                                }
                            ]
                        }, {
                            id: 1,
                            subTitle: '랜드마크의 곡을 추가할 수 있는 기능을 구현했습니다.',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '곡 검색을 랜드마크안에서 할 수 있으며 사용자가 원하는 곡을 랜드마크에 추가할 수 있습니다.'
                                }, {
                                    id: 1,
                                    ssubTitle: 'Error가 난 위치를 쉽게 파악할 수 있습니다.'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            whatIdoImg: [
                AndroidLocation,
                AndroidCamera,
                AndroidShake,
                Native1,
                Native3,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '3. Android와 Native기능 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: 'Android와 Next(Webview)통신을 통해 기능 권한 및 기능 실행을 구현했습니다.',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: 'Google Play store에 배포를 하기 위해서는 위치에 대한 정책을 준수해야했습니다. 사용자에게 대략적인 위치 권한과 정확한 위치 권한을 요청 후, 대략적인 위치 권한 허용 유저만 정확한 위치 권한을 한번 더 요청하는 방법으로 진행했습니다.'
                                },
                                {
                                    id: 1,
                                    ssubTitle: '카메라 기능도 마찬가지로 권한을 요청후에 기능을 사용할 수 있게 구현을 했으며, 플로디(챗봇)에 사진을 찍고 이미지를 인코딩하여 API로 바로 전송할 수 있게 하였습니다.'
                                }
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
            title: '랜드마크의 수에 따른 클러스터링 문제',
            troubleList: [
                {
                    id: 0,
                    Img: [PlayMap5],
                    content: 'Map의 이동, Map의 확대 / 축소 기능이 실행될 때 구글맵이 로딩되어 클러스터들이 깜빡거리는 현상과 Map이 리렌더링 이루어지는 것을 확인했고, 사용자의 입장에서 불편하겠다는 생각이 들었습니다.',
                }
            ],
            solutionList: [
                {
                    id: 0,
                    Img: [Debounce],
                    content: '클러스터링을 디바운스 패턴을 적용하여 5초 이내에 발생한 구글 맵을 호출을 무시하고 마지막 호출을 실행하여 맵의 성능을 향상 시킬 수 있었습니다. 마찬가지로, 클러스터링도 마지막 이동 후에만 적용되어 깜빡거리는 현상을 없앨 수 있었습니다.',
                },
            ]
        },
    ]
}