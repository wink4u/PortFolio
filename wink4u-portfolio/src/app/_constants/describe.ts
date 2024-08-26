export interface describeSkill {
    id: number;
    stack: skillStack;
}

export interface skillStack {
    title: string;
    skills: string[];
    contents: string[];
}

const STACKS: describeSkill[] = [
    {
        id: 0,
        stack: {
            title: 'Front-End',
            skills: [
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'React',
                'Next',
                'SCSS',
                'Styled-Component',
                'Recoil',
                'Redux'
            ],
            contents: [
                'HTML의 시맨틱 태그를 활용하여 웹 접근성을 고려할 수 있습니다',
                'CSS를 참고 자료 없이 활용할 수 있습니다',
                'JavaScript를 TypeScript로 마이그레이션 할 수 있습니다',
                'React를 활용하여 자료를 참고하지 않고 Hook을 사용할 수 있습니다',
                'Next의 라우팅 방식을 자료를 참고하여 사용할 수 있습니다',
                '상태관리를 Redux와 Recoil을 활용할 수 있습니다'
            ]
        }
    },
    {
        id: 1,
        stack: {
            title: 'Back-End & Android',
            skills: [
                'Django',
                'Python',
                'MySQL',
                'Android'
            ],
            contents: [
                'Django를 활용하여 기본적인 CRUD API를 구현할 수 있습니다',
                'SQL문을 읽고 이해할 수 있습니다',
                'Android Studio를 자료를 참고하여 사용할 수 있습니다'
            ]
        }
    },
    {
        id: 2,
        stack:{
            title: 'Tools',
            skills: [
                'Git',
                'Github',
                'Figma',
                'Jira'
            ],
            contents: [
                'Git, Github를 활용하여 버전을 관리할 수 있습니다',
                'Git Flow 브랜치 전략을 활용하여 브랜치를 관리 할 수 있습니다',
                '프로젝트에서 컨벤션을 활용하여 Commit을 작성할 수 있습니다',
                'Figma를 활용하여 프로토타입을 만들 수 있습니다',
                'Jira를 활용하여 협업을 할 수 있습니다'
            ]
        }
    }
]

export default STACKS;