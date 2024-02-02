// Submit.js
import axios from 'axios';

// 사용자 이름(아이디)과 성향 테스트 결과를 저장하는 객체
const userData = {
    name: "",
    scores: [0, 0, 0, 0, 0, 0, 0, 0, 0]
};

// 사용자 이름(아이디)과 성향 테스트 결과 점수를 설정하는 함수
export const setUserData = (name, scores) => {
    userData.name = name;
    userData.scores = scores; // 각 질문에 대한 점수 배열을 저장
};

export const submitToGoogleSheet = async () => {
    console.log("Submitting to Google Sheet...");

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxM17ta6i9Me4qu-K4hofSLT7FM-8sEBXBh4JtCOQa-cJPVA7xe4VRcFQsOH25cx3xS/exec';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(scriptUrl, userData, { headers });
        console.log(response.data); // 성공 시 응답 로그
    } catch (error) {
        console.error('Error submitting to Google Sheet:', error);
    }
};