import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./style.css";

function Page4() {
    const { state } = useLocation();
    const sortedScores = state?.sortedScores;
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true); // 팝업창을 표시
    };

    const handleClosePopup = () => {
        setShowPopup(false); // 팝업창을 숨김
    };

    return (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-4">
                        
                        <h1 className="mt-24 mb-4 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            리셋<br/>
                        </h1>
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            [ Reset ]
                        </p>
                        <p className="text-center mb-6" style={{color: "#ffffff"}}>
                        독파민으로 인해 손상된 뇌구조는 <br/>
                        <span style={{color: "#A3CC40"}}>자기구속 : Self-Binding 을 통해 </span><br/>
                        뇌구조를 리셋시켜 회복 할 수 있습니다. <br/><br/>
                        묵묵한 페이지에서 제공하는 <br/>
                        <span style={{color: "#A3CC40"}}>독파 System</span>을 통해<br/>
                        독파민의 <span style={{color: "#A3CC40"}}>쾌락의 늪</span>에서 즉시 벗어나세요<br/><br/>
                        [ 독파 System 1. Self-Binding 코칭제공 ] <br/>
                        [ 독파 System 2. 클라시쿠스 세미나 제공 ]
                        </p>
                        <button onClick={handleShowPopup} className="px-6 py-2 mb-2 border rounded font-DNFBitBitv2 hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                                style={{ color: "#d2d6d5", borderColor: "#d2d6d5", display: "block"}}
                        > 
                            독파민 전문가에게 보여주세요!
                        </button>
                        <p className="text-sm text-gray-500">사전신청자만 해당됩니다</p>
                        {showPopup && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-auto">
                                <div className="privacy-popup bg-white rounded p-4 max-w-lg mx-auto my-16">
                                    <button className="close-button" onClick={handleClosePopup}>닫기</button>
                                    <h3 className="mb-4" style={{ color: "#A3CC40" }}><strong>저의 독파민 상태를 리셋해주세요</strong></h3>
                                    <div className="text-lab-digital" style={{ color: "white" }}> {/* 텍스트 색상을 검은색으로 변경 */}
                                        {sortedScores && sortedScores.map(([typeNumber, score]) => (
                                            <p key={typeNumber} className="text-lab-digital text-lg mb-2"> {/* 폰트와 마진 조정 */}
                                                <span style={{ color: "#A3CC40" }}>{typeNumber}번</span> ({score}점)
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>        
            )}

export { Page4 };