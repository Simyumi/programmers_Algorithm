// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
// 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

//매치? -> 정규표현식으로 끝나는 글자나 시작하는 글자를 찾음
//indecOf -> 위치를 찾음
// include -> 유무 체크

//반복문을 사용하여 갯수 체크 하기

function solution(babbling) {
  var answer = 0;
  let can = ["aya", "ye", "woo", "ma"];
  for (let i in babbling) {
    let init = babbling[i];
    for (let j in can) {
      if (babbling[i].includes(can[j])) {
        init = init.replace(can[j], "X"); // X로 치환
      }
    }
    init = init.replace(/X/gi, " "); // X를 공백으로 치환하고 공백이 되면 answer에 추가
    if (init.length === 0) {
      answer += 1;
    }
  }
  return answer;
}

//replace(A,B) -> 문자열중에 A를 B로 치환한다.
//replaceAll
