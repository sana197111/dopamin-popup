let resultData = {
    "nickname": "",
    "name": "",
    "scoreSums": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0
    }
  }
  
  // resultData를 업데이트하는 함수 추가
  const updateResultData = (nickname, name) => {
    resultData.nickname = nickname;
    resultData.name = name;
  }
  
  export { resultData, updateResultData };