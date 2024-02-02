import React, { useState, useEffect } from "react";
import questions from "./PersonalTest";
import "./style.css";
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page3Test() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [scores, setScores] = useState(Array(27).fill(null));
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        setSelectedQuestions(shuffleArray(questions).slice(0, 27));
    }, []);

    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleScoreChange = (index, score) => {
        let newScores = [...scores];
        newScores[index] = newScores[index] === score ? null : score;
        setScores(newScores);
    };

    const handleSubmit = () => {
        if (scores.some(score => score === null)) {
            alert("모든 질문에 답해주세요.");
        } else {
            // 예시로, 결과를 '1'로 설정
            const resultType = 1; // 결과 값 계산 로직에 따라 결정됩니다.
            navigate(`/page3result/${resultType}`); // 결과 페이지 경로를 동적으로 생성
        }
    };

    return (
        <div className="p-10 md:p-12 font-lab-digital min-h-screen overflow-y-auto max-h-screen flex flex-col items-center bg-black background-3">
            <div className="w-96 m-auto">
                <h1 className="text-4xl mb-6 mt-44 font-DNFBitBitv2" style={{
                    background: "linear-gradient(#75BF42, #A3CC40)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    성향 테스트
                </h1>
                <div className="overflow-y-auto" style={{ maxHeight: "500px" }}> {/* 여기서 maxHeight 값을 조절하여 스크롤 영역의 크기를 조정할 수 있습니다. */}
                    {selectedQuestions.map((question, index) => (
                        <div key={index} className="mb-8">
                            <p className="mb-4 text-lg" style={{ color: "#ffffff" }}>{index + 1}번. {question.text}</p>
                            <div className="flex justify-around">
                                {[1, 2, 3, 4, 5].map((score) => (
                                    <button 
                                        key={score} 
                                        className={`px-4 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out ${scores[index] === score ? 'bg-customYellow text-white' : 'text-customGreen'}`}
                                        onClick={() => handleScoreChange(index, score)}
                                    >{score}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button 
                    onClick={handleSubmit} 
                    className="px-6 py-2 mt-8 mb-20 border rounded font-DNFBitBitv2 hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                    style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
                >
                    제출하기
                </button>
            </div>
        </div>
    );
}

export { Page3Test };
