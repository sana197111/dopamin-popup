import React, { useEffect, useState } from 'react';
import "./style.css";

function Consultant() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        const fetchData = async () => {
            try {
                // const response = await fetch('https://2smb3nmaxb.execute-api.us-east-2.amazonaws.com/default/dockpamin-backend');
                const response = await fetch('/api/default/dockpamin-backend');
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error during fetch operation: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-gif">
            <h3 className="mt-8 mb-4 text-center text-2xl" style={{color: "#ffffff"}}>
                대상자한테는 보여주지 마세요!
            </h3>
            <h1 className="mb-8 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
            }}>
                상담사 페이지
            </h1>
            <div className="overflow-y-auto" style={{ maxHeight: "400px" }}> 
                {[...data].reverse().map((item, index) => {
                    // 점수 필드와 값을 배열로 변환
                    const scores = Object.entries(item)
                        .filter(([key, value]) => key.startsWith('score '))
                        .map(([key, value]) => ({
                            scoreName: key.replace('score ', ''),
                            scoreValue: value
                        }));

                    // 점수 값에 따라 배열 정렬
                    scores.sort((a, b) => b.scoreValue - a.scoreValue);

                    return (
                        <div key={index} className="font-DNFBitBitv2 dataItem p-4 m-4 bg-gray-800 text-white rounded-lg shadow-md">
                            <h2 className="text-2xl mb-2" style={{color: "#A3CC40"}}>{item.Name}</h2>
                            <p className="mb-2 text-center text-l" style={{color: "#ffffff"}}>닉네임: {item["Nick Name"]}</p>
                            <p className="mb-2 text-center text-m" style={{color: "#ffffff"}}>애니어점수 순서:</p>
                            {scores.map((score, scoreIndex) => (
                                <span key={scoreIndex} className="inline-block bg-gray-700 px-2 py-1 m-1 rounded-full">{score.scoreName}번({score.scoreValue}점)</span>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export { Consultant };
