import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import quotesAndQuestions from './quotesAndQuestions';

// import { useLocation, useNavigate } from 'react-router-dom';

function Page3Question() {
    const { typeNumber } = useParams(); 
    const navigate = useNavigate();
    const { state } = useLocation();
    const validTypeNumber = parseInt(typeNumber);
    const content = quotesAndQuestions[validTypeNumber];
    const [isAnimating, setIsAnimating] = useState(false);

    if (isNaN(validTypeNumber) || validTypeNumber < 1 || validTypeNumber > 9) {
        // Handle error, e.g., redirect to a 404 page or show an error message
    }
    
    const scoreSums = state?.scoreSums;

    const handleNavigate = () => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
            navigate(`/page3Result/${validTypeNumber}`, { state: { scoreSums: scoreSums } });
        }, 2000); // 3초 후에 페이지 이동
    };

    return (
        <div className="p-10 md:p-12 font-lab-digital min-h-screen overflow-y-auto flex flex-col items-center bg-black background-3 position-relative"> {/* position-relative 추가 */}
            {isAnimating && <div className="scan-line"></div>} {/* 애니메이션 요소 추가 */}
            <div className="dataItem">
                <img
                    className="mt-44 ml-24"
                    src={content.imageUrl}
                    alt={`Question ${validTypeNumber}`}
                    style={{ width: '40%' }}
                />
                <div className="text-white mb-8 text-center">
                    <p className="mt-4 quote">{content.quote}</p>
                    <p className="mt-8 font-DNFBitBitv2 mb-4 question">{content.question}</p>
                </div>
                <button onClick={handleNavigate} className="px-6 py-2 mt-8 mb-20 border rounded font-DNFBitBitv2 hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                        style={{ color: "#d2d6d5", borderColor: "#d2d6d5", display: "block", margin: "auto" }}
                > 
                    페이지4 이동하기
                </button>
            </div>
        </div>
    );
}

export { Page3Question };
