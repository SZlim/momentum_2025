const quotes = [
  {
    quote: "가장 어두운 밤에도 해는 뜨고, 가장 힘든 겨울에도 봄은 온다.",
    author: "빅터 위고",
  },
  {
    quote: "어제로부터 배우고, 오늘을 살며, 내일을 희망하라.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 계속하려는 용기다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "네가 할 수 있다고 믿든 할수 없다고 믿든, 네 믿는 대로 될 것이다.",
    author: "헨리포드",
  },
  {
    quote:
      "인생은 자전거를 타는 것과 같다. 균형을 유지하려면 계속 움직여야 한다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "가장 큰 영광은 결코 넘어지지 않는데 있는 것이 아니라 넘어질 때마다 일어서는 데 있다.",
    author: "공자",
  },
  {
    quote: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다.",
    author: "아브라함 링컨",
  },
  {
    quote:
      "시간은 가장 소중한 선물이다. 다른 사람의 삶을 살면서 시간을 낭비하지 마라.",
    author: "스티브 잡스",
  },
  {
    quote:
      "성공한 사람이 되려고 노력하기보다 가치 있는 사람이 되려고 노력하라.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "자신을 빋어라. 그러면 어떻게 살아야 할지 알게 될 것이다.",
    author: "요한 볼프강 폰 괴테",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
