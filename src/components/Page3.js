import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Page3() {
    return (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-3">
                        
                        <h1 className="mt-32 mb-4 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            스캔<br/>
                        </h1>
                        <p className="text-center" style={{color: "#A3CC40"}}>
                            [ Scan ]
                        </p>
                        <p className="text-center mb-6" style={{color: "#ffffff"}}>
                        <span style={{color: "#A3CC40"}}>문해력 테스트</span>는 잘 마치셨나요? <br/>
                        <span style={{color: "#A3CC40"}}></span>답을 맞히는 것도 중요하지만 <br/><br/>
                        <span style={{color: "#A3CC40"}}>복잡</span>하고 <span style={{color: "#A3CC40"}}>긴 글</span>을 보는 것만으로도 <br/>
                        <span style={{color: "#A3CC40"}}>고통</span>스럽고 그저 <span style={{color: "#A3CC40"}}>빠르게 답</span>을 내리고 싶은 <br/>
                        마음이었다면 <span style={{color: "#A3CC40"}}>뇌구조 스캔</span>이 필요합니다. <br/><br/>
                        더 이상 독파민에 휘둘리지 않기 위해 <br/>
                        <span style={{color: "#A3CC40"}}>독파민 독파를 위한 나만의 해! 독서</span>통해 <br/>
                        나의 성향에 맞는 해! 독서를 찾고 <br/>
                        독파민 해독에 도전하세요.<br/>
                        </p>
                        <Link to="/page3test">
                            <button className="font-DNFBitBitv2 button-active mt-2 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out"> {/* 여기에 z-index 값을 추가 */}
                                테스트 하러가기
                            </button>
                        </Link>
                    </div>        
            )}

export { Page3 };