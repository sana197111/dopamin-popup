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
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            [ Scan ]
                        </p>
                        <p className="text-center mb-6" style={{color: "#ffffff"}}>
                        나의 뇌에 독파민이<br/>
                        <span style={{color: "#A3CC40"}}>침입한 경로</span>는 어느 곳이었을까요?<br/><br/>
                        
                        다시는 해킹을 당해 에러가 나지 않도록<br/>
                        <span style={{color: "#A3CC40"}}>독파민 유형 테스트</span>를 진행해 보세요.<br/><br/>
                        
                        나의 <span style={{color: "#A3CC40"}}>성향</span>을 <span style={{color: "#A3CC40"}}>스캔</span>해서<br/>
                        <span style={{color: "#A3CC40"}}>분석</span>한 데이터를 바탕으로<br/>
                        <span style={{color: "#A3CC40"}}>독파 질문</span>과 <span style={{color: "#A3CC40"}}>유형별 해독서</span>를 추천드립니다!<br/>
                        </p>
                        <Link to="/page3test">
                            <button className="font-DNFBitBitv2 button-active mt-2 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out"> {/* 여기에 z-index 값을 추가 */}
                                테스트 하러가기
                            </button>
                        </Link>
                    </div>        
            )}

export { Page3 };