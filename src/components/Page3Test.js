import React, { useState, useEffect } from "react";
import questions from "./PersonalTest";
import "./style.css";
import { useNavigate } from 'react-router-dom';

function Page3Test() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [scores, setScores] = useState(Array(54).fill(null));
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedQuestions(shuffleArray(questions).slice(0, 54));
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

    const handleSubmit = async () => {
        if (scores.some(score => score === null)) {
            alert("모든 질문에 답해주세요.");
        } else {
            let scoreSums = selectedQuestions.reduce((acc, question, index) => {
                const score = scores[index];
                if (score !== null) {
                    if (!acc[question.number]) acc[question.number] = 0;
                    acc[question.number] += score;
                }
                return acc;
            }, {});

            let maxScore = 0;
            let maxIndex = 1; // 가정
            Object.entries(scoreSums).forEach(([number, sum]) => {
                if (sum > maxScore) {
                    maxScore = sum;
                    maxIndex = number;
                }
            });

            // name 변수를 적절한 값으로 설정해야 합니다. 예를 들어, 사용자 입력을 받거나 다른 상태에서 가져와야 합니다.
            console.log("User data prepared for submission."); // 제출 준비 완료 로그
            console.log("Redirecting to result page."); // 결과 페이지로 리디렉션 로그
            console.log(scoreSums)
            navigate(`/page3result/${maxIndex}`, { state: { scoreSums: scoreSums } });
        }
    };


    return (
        <div className="p-10 md:p-12 font-lab-digital min-h-screen overflow-y-auto flex flex-col items-center bg-black background-3">
            <div className="w-80 m-auto">
                <h1 className="text-4xl mb-6 mt-44 font-DNFBitBitv2" style={{
                    background: "linear-gradient(#75BF42, #A3CC40)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    성향 테스트
                </h1>
                <div className="overflow-y-auto" style={{ maxHeight: "370px" }}> {/* 여기서 maxHeight 값을 조절하여 스크롤 영역의 크기를 조정할 수 있습니다. */}
                    {selectedQuestions.map((question, index) => (
                            <div key={index} className="mb-8">
                                <p className="mb-4 text-lg" style={{ color: "#ffffff" }}>{index + 1}번. {question.text}</p>
                                <div className="flex justify-around">
                                    {[1, 2, 3, 4, 5].map((score) => (
                                        <button 
                                            key={score} 
                                            className={`px-4 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 transition duration-300 ease-in-out ${scores[index] === score ? 'bg-[#A3CC40]' : 'bg-black'}`} // 선택된 점수에 따라 배경색 변경
                   c                          onClick={() => handleScoreChange(index, score)}
                                            style={{ color: scores[index] === score ? "#ffffff" : "#ffffff" }} // 선택된 상태에서 텍스트 색상 유지
                                        >{score}</button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    <button 
                        onClick={handleSubmit} 
                        className="px-6 py-2 mt-8 mb-20 border rounded font-DNFBitBitv2 hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                        style={{ color: "#d2d6d5", borderColor: "#d2d6d5", display: "block", margin: "auto" }} // 버튼을 블록 요소로 설정하고 자동 마진으로 중앙 정렬
                    >
                        제출하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export { Page3Test };