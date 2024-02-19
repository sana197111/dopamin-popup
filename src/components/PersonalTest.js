const questions = [
    // 1번 그룹
    { number: 1, text: "나는 모든 일을 개선하기 위해 깊이 생각해서 행동한다.", score: 0 },
    { number: 1, text: "나는 다른 사람들보다 근면하며 책임감이 강하다.", score: 0 },
    // { number: 1, text: "나는 정직하고 자제력이 있는 사람이다.", score: 0 },
    // { number: 1, text: "나의 행동은 원칙에 기초를 둔다.", score: 0 },
    { number: 1, text: "나는 완벽을 위해 끝까지 참고 노력한다.", score: 0 },
    // { number: 1, text: "나는 규칙을 잘 지키며 엄격하다.", score: 0 },

    // 2번 그룹
    { number: 2, text: "나는 다른 사람들과 함께 일하기를 더 좋아한다.", score: 0 },
    // { number: 2, text: "나는 사람들에게 칭찬을 잘 한다.", score: 0 },
    { number: 2, text: "내 생각보다는 남의 생각에 공감할 때가 많다.", score: 0 },
    // { number: 2, text: "나는 친구들이 나에게 의지할 때 기분이 좋다.", score: 0 },
    { number: 2, text: "나의 관심사는 다른 사람들을 도와주는 것이다.", score: 0 },
    // { number: 2, text: "나는 사람들을 관심 있게 대하고 보살피려 한다.", score: 0 },

    // 3번 그룹
    { number: 3, text: "나는 능력을 발휘하는데 많은 시간을 투자한다.", score: 0 },
    { number: 3, text: "나는 과정보다는 결과를 중시한다.", score: 0 },
    // { number: 3, text: "나는 적응력이 뛰어나 상황에 적절히 대응한다.", score: 0 },
    { number: 3, text: "나는 인간 중심적이기보다는 오히려 목표 중심적이다.", score: 0 },
    // { number: 3, text: "나는 사람들에게 지나친 경쟁을 강요한다.", score: 0 },
    // { number: 3, text: "나는 성공만이 애정을 획득할 수 있다고 믿는다.", score: 0 },

    // 4번 그룹
    { number: 4, text: "나는 감성적이어서 혼자 있을 때가 많다.", score: 0 },
    // { number: 4, text: "나는 혼자서 자신만의 고상한 취미를 즐긴다.", score: 0 },
    { number: 4, text: "나는 낭만적이고 예술가적인 기질이 있다.", score: 0 },
    // { number: 4, text: "나는 이방인처럼 느낄 때가 많다.", score: 0 },
    // { number: 4, text: "나는 다른 사람들과는 다른 독특한 감정을 가지고 있다.", score: 0 },
    { number: 4, text: "나는 분위기에 약하고 자기 생각에 골몰하는 편이다.", score: 0 },

    // 5번 그룹
    { number: 5, text: "나는 무엇인가에 집중하며 통찰한다.", score: 0 },
    { number: 5, text: "나는 문제가 있으면 풀릴 때까지 그것만 골똘히 생각한다.", score: 0 },
    // { number: 5, text: "나는 공적인 것보다는 개인생활에 대한 관심이 많다.", score: 0 },
    { number: 5, text: "나는 감정보다는 이성을 추구한다.", score: 0 },
    // { number: 5, text: "나는 시간이나 돈을 아끼는 경향이 있다.", score: 0 },
    // { number: 5, text: "나의 관심사는 나를 둘러싼 세계를 이해하는 것이다.", score: 0 },

    // 6번 그룹
    // { number: 6, text: "나는 명확한 지침이 있을 때 일의 능률이 오른다.", score: 0 },
    { number: 6, text: "나는 사랑하는 사람을 가끔 의심하는 경향이 있다.", score: 0 },
    // { number: 6, text: "나는 성공에 대해서도 가끔 평가 절하하는 경향이 있다.", score: 0 },
    // { number: 6, text: "나는 잘 훈련되어 있어 조직이나 집단에 헌신할 수 있다.", score: 0 },
    { number: 6, text: "사람들은 내게 때로 용기가 필요하다고 말한다.", score: 0 },
    { number: 6, text: "나는 결과에 대한 두려움 때문에 일을 질질 끄는 경우가 있다.", score: 0 },

    // 7번 그룹
    { number: 7, text: "나는 자발적으로 재미있는 일을 즐긴다.", score: 0 },
    { number: 7, text: "나는 모험적이며 위험을 감수한다.", score: 0 },
    // { number: 7, text: "나는 끊임없이 변화하는 생활을 좋아한다.", score: 0 },
    // { number: 7, text: "나는 자극과 흥분을 유발하는 활동을 좋아한다.", score: 0 },
    // { number: 7, text: "나는 어린아이처럼 명량하고 순진하다.", score: 0 },
    { number: 7, text: "나는 미래에 대해 항상 열정을 가지고 있다.", score: 0 },

    // 8번 그룹
    { number: 8, text: "나에게는 지도자로서의 기질이 있다.", score: 0 },
    // { number: 8, text: "나는 의사 결정을 할 때 적절한 지도력을 발휘한다.", score: 0 },
    { number: 8, text: "나는 늘 강해야 한다고 생각한다.", score: 0 },
    // { number: 8, text: "나는 사람들에게 영향력 있는 사람이다.", score: 0 },
    { number: 8, text: "나는 다른 사람들이 말하기 어려워하는 것을 이야기 한다.", score: 0 },
    // { number: 8, text: "나는 공격적이고 자기 주장이 강하다.", score: 0 },

    // 9번 그룹
    // { number: 9, text: "나는 자기만족적이며 태평한 편이다.", score: 0 },
    { number: 9, text: "나는 감정의 동요가 많지 않은 원만한 사람이다.", score: 0 },
    { number: 9, text: "나는 안전한 해결책을 원하고 되도록 갈등을 피한다.", score: 0 },
    { number: 9, text: "나는 친구들과 긴장을 풀고 마음 편하게 지낸다.", score: 0 },
    // { number: 9, text: "나는 사람들을 유쾌하고 편하게 대한다.", score: 0 },
    // { number: 9, text: "사람들은 나를 그냥 좋아한다.", score: 0 }
];

export default questions;
