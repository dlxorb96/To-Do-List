const quotes =[
    {
        quote: '긍정의 기대대로 행동하게 된다',
        author: "로버트 로젠탈 & 레노어 제이콥슨",
    },
    {
        quote: '사람은 고통을 선택할 수 있다.',
        author: "빅토르 프랑클",
    },
    {
        quote: '1.5배씩 성장하면 언젠가 하늘에 닿는다.',
        author: "이태규",
    },
    {
        quote: '언제나 현재에 집중할수 있다면 행복할것이다.',
        author: "파울로 코엘료",
    },
    {
        quote: '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
        author: "L론허바드",
    },
    {
        quote: '한번의 실패와 영원한 실패를 혼동하지 마라',
        author: "F.스콧 핏제랄드",
    },
    {
        quote: '자신감 있는 표정을 지으면 자신감이 생긴다',
        author: "찰스다윈",
    },
    {
        quote: '사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.',
        author: "괴테",
    },
    {
        quote: '이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.',
        author: "탈무드",
    },
    {
        quote: '영원한것은 우리의 무지뿐이다.',
        author: "이태원",
    }
]


const quotes_quote = document.querySelector('#quote span:first-child')
const quotes_author = document.querySelector('#quote span:last-child')



quotes_quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote
quotes_author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author