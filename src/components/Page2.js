import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import errorImage from "../assets/error.png";
import "./style.css";

function Page2() {
    const [errorImages, setErrorImages] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(1);

    useEffect(() => {
        if (errorImages.length < 10) { // 최대 10개의 이미지만 추가
            const timer = setTimeout(() => {
                setErrorImages(prevImages => [
                    ...prevImages,
                    {
                        id: prevImages.length,
                        style: {
                            top: `calc(5% + ${prevImages.length * 5}px)`, // 위쪽에서 아래로 10px씩 떨어져서 쌓임
                            right: `calc(20% + ${5 * prevImages.length}px)`,
                            transform: 'translateX(-50%)', // 중앙에서 시작하도록 조정
                            zIndex: zIndexCounter // zIndex 값을 증가
                        }
                    }
                ]);
                setZIndexCounter(zIndexCounter + 1);
            }, 1000); // 1초마다 실행
    
            return () => clearTimeout(timer); // 컴포넌트 unmount 시 타이머 제거
        }
    }, [errorImages, zIndexCounter]);

    return (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-2">
                        <div className="red-flash-animation fixed top-0 left-0 right-0 bottom-0 z-10" />

                        <h1 className="mt-32 mb-4 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            에러<br/>
                        </h1>
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            [ Error ]
                        </p>
                        {errorImages.map(image => (
                            <img
                                key={image.id}
                                src={errorImage}
                                alt={`Error ${image.id}`}
                                className="error-animation"
                                style={{
                                    position: 'absolute',
                                    width: '250px',
                                    height: 'auto',
                                    ...image.style
                                }}
                            />
                        ))}
                        <p className="text-center mb-6" style={{color: "#ffffff"}}>
                            독파민은 <span style={{color: "#A3CC40"}}>(독서 : 읽기)</span>뿐만 아니라<br/>
                            나의 <span style={{color: "#A3CC40"}}>관계 / 교육 / 행동 / 성장</span>을<br/>
                            방해하고 있습니다.<br/><br/>
                            다음 <span style={{color: "#A3CC40"}}>문해력 테스트</span>를 통해 <br/>
                            <span style={{color: "#A3CC40"}}>나의 뇌에는 에러</span>가 없는디 <br/>
                            확인해 보세요.
                        </p>
                        <Link to="/page2test">
                            <button className="font-DNFBitBitv2 button-active mt-2 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out"
                                style={{ zIndex: 20 }}> {/* 여기에 z-index 값을 추가 */}
                                문해력 테스트
                            </button>
                        </Link>
                    </div>        
            )}

export { Page2 };