import { readmeItem } from "../../_types/readme";
import WeatherIntro from "@/img/readme_img/Weather/WeatehrIntro.png";
import WeatherDashboard from "@/img/readme_img/Weather/WeatehrDashboard.png";
import WeatherChart from "@/img/readme_img/Weather/WeatehrChart.png";
import WeatherTest1 from "@/img/readme_img/Weather/WeatherTest1.png";
import WeatherTest2 from "@/img/readme_img/Weather/WeatherTest2.png";

export const WeatherProject: readmeItem = {
    readmeIntro: {
        introImg: WeatherIntro,
        introContent: [
            '기상청 단기예보 API를 활용하여 위치 기반 날씨 데이터를 시각화하는 개인 프로젝트입니다.',
            '사용자가 지도에서 위치를 선택하거나 GPS로 현재 위치를 조회하면 위경도를 기상청 격자 좌표(nx, ny)로 변환하고, 단기예보 데이터를 Chart.js 기반 대시보드로 표현합니다.',
            'Gemini와 MCP(Model Context Protocol)를 프로젝트에 연동하여 Vibe 코딩을 진행했고, 이를 통해 시안(mockup.png) 대비 컴포넌트 문제점을 분석하고 개선한 결과를 improvements.txt로 정리했습니다.'
        ],
        introfunction: [
            'HTML5 Geolocation을 활용한 현재 위치 기반 기상청 격자 좌표 자동 변환',
            '관심 지역(서울 강남구, 부산 해운대구, 제주 제주시) 카드 선택 시 지도·현황·차트 데이터 실시간 갱신',
            '현재 기온, 강수확률, 습도, 풍속을 보여주는 2x2 현황 카드',
            'Chart.js 기반 시간대별 기온·강수확률 라인 차트와 풍속 바 차트 시각화',
            'Playwright를 활용한 E2E 테스트',
            'Storybook을 활용한 컴포넌트 문서화'
        ]
    },
    reademeWhatIdo: [
        {
            id: 0,
            whatIdoImg: [
                WeatherDashboard,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '1. 지도 좌표 기반 날씨 대시보드 개발',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '위치 선택 및 격자 좌표 변환',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: 'GPS 버튼 클릭 시 브라우저 HTML5 Geolocation 위경도를 기상청 격자 좌표(nx, ny)로 자동 변환하는 기능을 구현했습니다.',
                                },
                            ]
                        },
                        {
                            id: 1,
                            subTitle: '관심 지역 카드 연동',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '서울 강남구, 부산 해운대구, 제주 제주시 관심 지역 카드를 클릭하면 Recoil 전역 상태(contentState)가 갱신되어 지도 프리뷰와 날씨 현황, 차트 데이터가 함께 실시간으로 바뀌도록 연결했습니다.',
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            whatIdoImg: [
                WeatherChart,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '2. Chart.js 기반 데이터 시각화',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: '시간대별 예보 차트',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '기온과 강수확률을 하나의 라인 차트로, 풍속을 바 차트로 구성해 가로 2열 그리드로 배치했습니다.',
                                },
                                {
                                    id: 1,
                                    ssubTitle: 'Chart.js 커스텀 플러그인을 작성하여 풍속 바 차트 상단에 수치(m/s)를 직접 표시해 가독성을 높였습니다.',
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
                WeatherTest1,
                WeatherTest2,
            ],
            whatIdoContent: [
                {
                    id: 0,
                    title: '3. 테스트 및 AI 협업 도구 연동',
                    idoSub: [
                        {
                            id: 0,
                            subTitle: 'Playwright E2E 테스트',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: '다크 테마 초기 렌더링, 비동기 기상 데이터 로드 후 차트 표시, 지역 검색 시 API 리렌더링, 비주얼 회귀 테스트까지 4가지 시나리오를 Playwright E2E 테스트로 작성해 4개 모두 통과시켰습니다.',
                                },
                            ]
                        },
                        {
                            id: 1,
                            subTitle: 'Gemini + MCP 연동을 통한 Vibe 코딩',
                            ssubIdo: [
                                {
                                    id: 0,
                                    ssubTitle: 'Gemini와 MCP(Model Context Protocol)를 프로젝트에 연동하여, 시안 대비 컴포넌트 문제점을 분석하고 개선하는 Vibe 코딩 워크플로우를 적용했습니다.',
                                },
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
            title: '관심 지역 카드 클릭 시 전역 상태 미연동',
            troubleList: [
                {
                    id: 0,
                    content: '하단 관심 지역 카드(서울 강남구, 부산 해운대구, 제주 제주시)를 클릭해도 콘솔 로그만 출력될 뿐, 실제 전역 상태(contentState)가 갱신되지 않아 지도와 차트 데이터가 바뀌지 않는 문제가 있었습니다.',
                }
            ],
            solutionList: [
                {
                    id: 0,
                    content: '카드 클릭 이벤트에서 Recoil의 contentState(location, nx, ny)를 직접 갱신하도록 연결하여, 선택한 지역에 맞춰 지도 프리뷰·현황 카드·차트가 실시간으로 함께 바뀌도록 수정했습니다.',
                },
            ]
        },
        {
            id: 1,
            title: '시간대별 차트 레이아웃 및 가독성 부족',
            troubleList: [
                {
                    id: 0,
                    content: '기온·강수확률 라인 차트와 풍속 바 차트가 시안과 달리 단일 컬럼으로 세로 나열되어 있었고, 풍속 바 차트는 막대 위에 수치가 표시되지 않아 값을 한눈에 파악하기 어려웠습니다.',
                }
            ],
            solutionList: [
                {
                    id: 0,
                    content: '두 차트를 가로 2열 그리드로 재배치하고, Chart.js 커스텀 플러그인을 작성해 풍속 바 차트 각 막대 위에 수치를 직접 표시하도록 개선했습니다.',
                },
            ]
        }
    ]
}
