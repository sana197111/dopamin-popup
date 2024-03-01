import React from 'react';
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import "./style.css";
import { useNavigate } from 'react-router-dom';

function Page4() {
    // const { state } = useLocation();
    // const sortedScores = state?.sortedScores;
    // const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleShowPopup = () => {
        // setShowPopup(true); // 팝업창을 표시
        navigate('/page4result');
    };

    // const handleClosePopup = () => {
    //     setShowPopup(false); // 팝업창을 숨김
    // };

    return (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-4">
                        
                        <h1 className="mt-24 mb-4 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            바인딩<br/>
                        </h1>
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            [ Binding ]
                        </p>
                        <p className="text-center mb-6" style={{color: "#ffffff"}}>
                            <span style={{color: "#A3CC40"}}>지금, 당장, 셀프 바인딩</span>
                            알면서도 당하는 독파민! <br/>
                            도대체 어떻게 벗어날 수 있을까요?<br/><br/>
                            팝업 스토어를 직접 찾아주신 <br/>
                            귀한 독자분들을 위해 <br/>
                            독파민을 <span style={{color: "#A3CC40"}}>원천봉쇄</span>할 수 있는<br/>
                            셀프 바인딩을 제공해 드립니다.<br/><br/>
                            
                            <span style={{color: "#A3CC40"}}>검사 결과</span>를 공유해 주시면<br/>
                            나의 성향에 맞는 <span style={{color: "#A3CC40"}}>독파민 해독 솔루션</span>을<br/>
                            명확하게 제시해 드립니다.<br/>
                        </p>
                        <button onClick={handleShowPopup} className="px-6 py-2 mb-2 border rounded font-DNFBitBitv2 hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                                style={{ color: "#d2d6d5", borderColor: "#d2d6d5", display: "block"}}
                        > 
                            독파민 전문가에게 보여주세요!
                        </button>
                    </div>        
            )}

export { Page4 };

// {showPopup && (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-auto">
//         <div className="privacy-popup bg-white rounded p-4 max-w-lg mx-auto my-16">
//             <button className="close-button" onClick={handleClosePopup}>닫기</button>
//             <h3 className="mb-4" style={{ color: "#A3CC40" }}><strong>저의 독파민 상태를 리셋해주세요</strong></h3>
//             <div className="text-lab-digital" style={{ color: "white" }}> {/* 텍스트 색상을 검은색으로 변경 */}
//                 {sortedScores && sortedScores.map(([typeNumber, score]) => (
//                     <p key={typeNumber} className="text-lab-digital text-lg mb-2"> {/* 폰트와 마진 조정 */}
//                         <span style={{ color: "#A3CC40" }}>{typeNumber}번</span> ({score}점)
//                     </p>
//                 ))}
//             </div>
//         </div>
//     </div>
// )}