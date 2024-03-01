import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

// import { useLocation, useNavigate } from 'react-router-dom';
import type1 from '../type/type1.png';
import type2 from '../type/type2.png';
import type3 from '../type/type3.png';
import type4 from '../type/type4.png';
import type5 from '../type/type5.png';
import type6 from '../type/type6.png';
import type7 from '../type/type7.png';
import type8 from '../type/type8.png';
import type9 from '../type/type9.png';

const typeImages = {
    1: type1,
    2: type2,
    3: type3,
    4: type4,
    5: type5,
    6: type6,
    7: type7,
    8: type8,
    9: type9
  };

function Page3Result() {
    const { typeNumber } = useParams(); 
    const navigate = useNavigate();
    const { state } = useLocation();
    const validTypeNumber = parseInt(typeNumber);

    if (isNaN(validTypeNumber) || validTypeNumber < 1 || validTypeNumber > 9) {
        // Handle error, e.g., redirect to a 404 page or show an error message
    }
    
    const scoreSums = state?.scoreSums;

    if (!scoreSums) {
        return <div>점수 정보가 없습니다.</div>;
    }

    // 총점을 기반으로 내림차순 정렬
    const sortedScores = Object.entries(scoreSums).sort((a, b) => b[1] - a[1]);

    const handleNavigate = () => {
        navigate('/page4', { state: { sortedScores } });
    };

    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center bg-black" style={{backgroundColor: "#514d4c"}}>
            <img className="mb-4 w-80 object-contain" src={typeImages[validTypeNumber]} alt={`Type ${validTypeNumber}`} />
            {/* <div className="my-2 mb-8 w-full text-center">
                {sortedScores.map(([typeNumber, score]) => (
                    <span key={typeNumber} className="inline-block font-DNFBitBitv2 border border-white bg-transparent px-6 py-2 m-1 text-white transition duration-300 ease-in-out">
                        {typeNumber}번 ({score}점)
                    </span>
                ))}
            </div> */}
            <button onClick={handleNavigate} className="px-6 py-2 mt-12 mb-20 border rounded font-DNFBitBitv2 hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                    style={{ color: "#d2d6d5", borderColor: "#d2d6d5", display: "block", margin: "auto" }}
            > 
                페이지4 이동하기
            </button>
        </div>
    );
}

export { Page3Result };
