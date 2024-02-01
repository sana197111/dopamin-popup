import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import "./style.css";
import testImage from '../assets/testImage.png'; // 720x2440 크기의 이미지 경로를 적절히 수정하세요.

function Page2Test() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        alert(`You selected option ${selectedOption}. Checking...`);
        // 체점 로직 추가
    };

    return (
        <div className="min-h-screen overflow-y-auto max-h-screen p-4 flex flex-col items-center justify-center bg-black background-1">
            <div className="image-container">
                <img src={testImage} alt="Test" style={{ width: '100%' }} />
            </div>
            <div className="question-box">
                <p>1. 다음은 근로기준법 규정 중 일부입니다...</p>
                <div onClick={() => handleOptionSelect('A')} className={`option ${selectedOption === 'A' ? 'selected' : ''}`}>① 10</div>
                <div onClick={() => handleOptionSelect('B')} className={`option ${selectedOption === 'B' ? 'selected' : ''}`}>② 11</div>
                <div onClick={() => handleOptionSelect('C')} className={`option ${selectedOption === 'C' ? 'selected' : ''}`}>③ 12</div>
                <div onClick={() => handleOptionSelect('D')} className={`option ${selectedOption === 'D' ? 'selected' : ''}`}>④ 13</div>
            </div>
            <div className="question-box">
                <p>2. 다음은 근로기준법 규정 중 일부입니다...</p>
                <div onClick={() => handleOptionSelect('E')} className={`option ${selectedOption === 'E' ? 'selected' : ''}`}>① 70만</div>
                <div onClick={() => handleOptionSelect('F')} className={`option ${selectedOption === 'F' ? 'selected' : ''}`}>② 90만</div>
                <div onClick={() => handleOptionSelect('G')} className={`option ${selectedOption === 'G' ? 'selected' : ''}`}>③ 100만</div>
                <div onClick={() => handleOptionSelect('H')} className={`option ${selectedOption === 'H' ? 'selected' : ''}`}>④ 105만</div>
            </div>
            <button onClick={handleSubmit} className="button-check">체점하기</button>
        </div>
    );
}

export { Page2Test };
